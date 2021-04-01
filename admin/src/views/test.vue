<template>
  <div>
    <div id="canvas-frame"></div>
  </div>
</template>
<script>
import {myScene} from "@/three/myScene.js"
// import {obj} from "@/three/obj.js"
export default {
    methods:{
      myScene
      // obj
    },
    mounted(){
      //三维部分(测试)
      this.myScene();
      // this.obj();
    },
}
</script>
<style>

</style>