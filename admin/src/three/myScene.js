export function myScene(){
    /**
    * 创建场景对象Scene
    */
    var scene = new THREE.Scene();
    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    var axisHelper = new THREE.AxesHelper(250);
    scene.add(axisHelper);

    /**
     * 导入外围场景.glb模型
     */
    const dracoLoader1 = new THREE.DRACOLoader().setDecoderPath( `${process.env.BASE_URL}static/draco/`);

    const loader1 = new THREE.GLTFLoader().setDRACOLoader(dracoLoader1).setPath( `${process.env.BASE_URL}static/model/`);
    loader1.load('island.glb', function (gltf) {
      gltf.scene.traverse(function (child) {
        gltf.scene.name = "island";
        if ( child instanceof THREE.Mesh ) {
          child.material.side = THREE.DoubleSide;
          //carbarn = gltf.scene;
          if(child.material.map){
            child.material.opacity = 1;
            child.material.transparent = true;
          }
        }
      });
      gltf.scene.scale.set(0.08, 0.08, 0.08);
      gltf.scene.position.set(800, 0, 500);
      gltf.scene.rotation.set(0, 0.15, 0);
      scene.add(gltf.scene);
    });

    /**
     * 光源设置
     */
    //点光源
    var point = new THREE.PointLight(0xffffff);
    point.position.set(400, 500, 1700); //点光源位置

    var point1 = new THREE.PointLight(0xffffff);
    point1.position.set(-400, 500, -1000); //点光源位置
    scene.add(point); //点光源添加到场景中
    scene.add(point1);
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
     camera.position.set(1200, 800, -2000); //设置相机位置
     camera.rotation.set(-0.2, -0.05, -0.01)
     camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
    * 创建渲染器对象
    */
    var renderer = new THREE.WebGLRenderer({
      // logarithmicDepthBuffer: true,
      //增加下面两个属性，可以抗锯齿
      antialias:true,
      alpha:true
    });
    renderer.setSize(width, height);//设置渲染区域尺寸
    renderer.setClearColor(0x030c1c, 1); //设置背景颜色
    
    document.getElementById("canvas-frame").appendChild(renderer.domElement); //body元素中插入canvas对象
    //执行渲染操作   指定场景、相机作为参数
    renderer.render(scene, camera);
    function render() {
        renderer.render(scene,camera);//执行渲染操作
        //mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
        requestAnimationFrame(render);//请求再次执行渲染函数render
    }
    render();
    var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
    //最大仰视角和俯视角
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2.1;
    //最大最小相机移动距离(景深相机)
    // controls.minDistance = 0;
    // controls.maxDistance = 2500;
    //对相机进行重置
    window.addEventListener("resize",function () {
      var body = (document.compatMode && document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;
      renderer.setSize(body.clientWidth,window.innerHeight);
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix ();
    })
}