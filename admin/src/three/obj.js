
  // <!--引入three.js三维引擎-->
  // <script src="js/three.js"></script>
  // <!--引入轨道控件OrbitControls.js-->
  // <script src="js/OrbitControls.js"></script>
  // <script src="js/OBJLoader.js"></script>
  // <script src="js/MTLLoader.js"></script>
export function obj(){

    /**
     * 创建场景对象Scene
     */
    var scene = new THREE.Scene();
    // // 创建一个纹理图片加载器加载图片
    // var textureLoader = new THREE.TextureLoader();
    // // 加载背景图片
    // var texture = textureLoader.load('model/island/bg.jpg');
    // // 纹理对象Texture赋值给场景对象的背景属性.background
    // scene.background = texture
    //////////////////////////////////////////////////////////////////////////////////////////
    /**
     * OBJ和材质文件mtl加载
     */
    var OBJLoader = new THREE.OBJLoader();//obj加载器
    var MTLLoader = new THREE.MTLLoader();//材质文件加载器
    MTLLoader.setPath( `${process.env.BASE_URL}` )
            .load('island.mtl', function(materials) {
              // 返回一个包含材质的对象MaterialCreator
              //console.log(materials);
              //materials.preload();
              //obj的模型会和MaterialCreator包含的材质对应起来
              OBJLoader.setMaterials(materials).
                        setPath(`${process.env.BASE_URL}`).
                        load('island.obj', function(obj) {
                          //console.log(obj);
                          obj.traverse( function ( child ) {
                            if ( child instanceof THREE.Mesh ) {
                              child.material.side = THREE.DoubleSide;

                              //材质是黑色的原因不是丢贴图,也不是颜色错了,而是发光通道的问题
                              //默认用的材质 MeshPhongMaterial 
                              //把发光颜色 强度 贴图 都换掉
                              //console.log(child);
                              if(child.material.map){
                                child.material.opacity = 1;
                                child.material.transparent = true;
                                child.material.emissive=new THREE.Color(1,1,1);
                                child.material.emissiveIntensity=1;
                                child.material.emissiveMap=child.material.map;
                              }
                            }
                          } );
                          console.log(obj);
                          obj.scale.set(0.01, 0.01, 0.01); //放大obj组对象
                          scene.add(obj);//返回的组对象插入场景中
                        })
              })
    //////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 光源设置
     */
    //点光源
    var point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //点光源
    var point1 = new THREE.PointLight(0xffffff);
    point1.position.set(0, 100, -200); //点光源位置
    scene.add(point1); //点光源添加到场景中
    //环境光
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    /**
     * 相机设置
     */
    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    //创建相机对象
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(200, 300, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    var renderer = new THREE.WebGLRenderer({
      antialias:true,
      alpha:true
    });
    renderer.setSize(width, height);//设置渲染区域尺寸
    renderer.setClearColor(0x83b6ff, 1); //设置背景颜色
    document.getElementById("canvas-frame").appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
    function render() {
        renderer.render(scene,camera);//执行渲染操作
        requestAnimationFrame(render);//请求再次执行渲染函数render
    }
    render();
    var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
    controls.enableDamping = true;
    controls.dampingFactor = 0.5;
    // 视角最小距离
    //controls.minDistance = 100;
    // 视角最远距离
    //controls.maxDistance = 1000;
    // 最大角度
    //controls.maxPolarAngle = Math.PI / 2;





    var axisHelper = new THREE.AxesHelper(250);// 辅助坐标系
    scene.add(axisHelper);

  }