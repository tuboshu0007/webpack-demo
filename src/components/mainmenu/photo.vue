<template>
  <div>
    <div class="mui-content">
      <div class="my-slider">
        <ul>
          <li>
            <a @click.prevent="componentName='psn'">私人收藏</a>
          </li>
          <a @click.prevent="componentName='by'">必应美图</a>
        </ul>
      </div>
      <transition>
        //属性传递(:PBingList) 以及方法传递(v-on:func)
        <component :is="componentName" :PBingList="bingList" @getMoreFromP="getMoreBing"></component>
      </transition>
    </div>
  </div>
</template>
<script>
import by from "../subcomponent/bing-photo.vue";

let psn = {
  template: `<div class="mui-content-padded">
        <p>这是图片放大预览示例，点击如下图片体验全屏预览功能</p>
        <p>
          <img src="/public/photos/muwu.jpg" data-preview-src data-preview-group="1" />
        </p>
        <p>图片全屏后，双击或双指缩放均可对图片进行放大、缩小操作，左右滑动可查看同组(data-preview-group相同的图片为一组)其它图片，点击会关闭预览</p>
        <p>
          <img src="/public/photos/shuijiao.jpg" data-preview-src data-preview-group="1" />
        </p>
        <p>第三张图片，纯粹为了占位：</p>
        <p>
          <img src="/public/photos/yuantiao.jpg" data-preview-src data-preview-group="1" />
        </p>
      </div>`,
};

import { Toast } from "mint-ui";
export default {
  data() {
    return {
      componentName: "psn",
      bingList: [],
      msg: "你哈大饭店啊",
      imgNumber: 5,
    };
  },
  created() {
    this.imgNumber = 5;
    this.getBingList();
  },
  methods: {
    getBingList() {
      this.$http
        .get("http://127.0.0.1:3000/getBiyingImage?n=" + this.imgNumber)
        .then((rst) => {
          this.bingList = rst.data.images;
        })
        .catch((err) => {
          Toast("获取图片失败");
        });
    },
    getMoreBing(param) {
      console.log("调用伏击成功");
      console.log("子组件过来一个参数: " + param);
      this.imgNumber += 3;
      this.getBingList();
    },
  },
  components: {
    psn: psn,
    by: by,
  },
};
</script>
<style  >
.v-enter {
  position: absolute;
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s linear;
}
.mui-content {
  width: 100vw;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

.my-slider ul {
  display: flex;
  justify-content: space-evenly;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #333;
  border-bottom: 1px solid #ccc;
}

.mui-preview-image.mui-fullscreen {
  position: fixed;
  z-index: 20;
  background-color: #000;
}
.mui-preview-header,
.mui-preview-footer {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 10;
}
.mui-preview-header {
  height: 44px;
  top: 0;
}
.mui-preview-footer {
  height: 50px;
  bottom: 0px;
}
.mui-preview-header .mui-preview-indicator {
  display: block;
  line-height: 25px;
  color: #fff;
  text-align: center;
  margin: 15px auto 4;
  width: 70px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  font-size: 16px;
}
.mui-preview-image {
  display: none;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.mui-preview-image.mui-preview-in {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
.mui-preview-image.mui-preview-out {
  background: none;
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
.mui-preview-image.mui-preview-out .mui-preview-header,
.mui-preview-image.mui-preview-out .mui-preview-footer {
  display: none;
}
.mui-zoom-scroller {
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  -webkit-backface-visibility: hidden;
}
.mui-zoom {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.mui-slider .mui-slider-group .mui-slider-item img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.mui-android-4-1 .mui-slider .mui-slider-group .mui-slider-item img {
  width: 100%;
}
.mui-android-4-1
  .mui-slider.mui-preview-image
  .mui-slider-group
  .mui-slider-item {
  display: inline-table;
}
.mui-android-4-1 .mui-slider.mui-preview-image .mui-zoom-scroller img {
  display: table-cell;
  vertical-align: middle;
}
.mui-preview-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
}
.mui-preview-loading.mui-active {
  display: block;
}
.mui-preview-loading .mui-spinner-white {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -25px;
  height: 50px;
  width: 50px;
}
.mui-preview-image img.mui-transitioning {
  -webkit-transition: -webkit-transform 0.5s ease, opacity 0.5s ease;
  transition: transform 0.5s ease, opacity 0.5s ease;
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
p img {
  max-width: 100%;
  height: auto;
}
</style>