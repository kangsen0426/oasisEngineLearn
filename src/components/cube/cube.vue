<template>
  <div>
    <canvas id="canvas" style="width: 100vw; height: 100vh" />
  </div>
</template>

<script>
import {
  WebGLEngine, //webGL 引擎
  Camera,     //相机
  MeshRenderer, //网格渲染器，使用网格对象（这个例子中就是立方体）作为几何体轮廓的数据源
  PrimitiveMesh, //基础几何体，提供了创建立方体、球体等网格对象的便捷方法。
  BlinnPhongMaterial, //材质定义了如何渲染这个立方体，BlinnPhong 材质是经典的材质之一
  DirectLight,  //直接光，是光照的一种，光照使场景更有层次感，使用光照，能建立更真实的三维场景
  Script,     //脚本，是衔接引擎能力和游戏逻辑的纽带，可以通过它来扩展引擎的功能，也可以脚本组件提供的生命周期钩子函数中编写自己的游戏逻辑代码。
  Vector3,
  Vector4,
  Color,
} from "oasis-engine";

export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>