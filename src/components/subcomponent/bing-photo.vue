<template>
  <section>
    <div class="mui-content-padded">
      <li v-for="(item,index) in PBingList" :key="index" @click.prevent="turnto(index)">
        <!-- 上面:to 属性 传递了两种参数 一种是item.startdate 一种是name=bingPhoto -->
        <p class="imgBox">
          <img v-lazy=" 'http://bing.com/'+ item.url " data-preview-src data-preview-group="1" />
          <span>{{ index+1 }}</span>
        </p>
        <p>{{ item.copyright }}</p>
      </li>
      <button type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="getMore">GET MORE</button>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是从bing-photo组件传过来的消息",
    };
  },
  created() {},
  methods: {
    getMore(param) {
      this.$emit("getMoreFromP", this.msg);
    },
    turnto(index) {
      this.$router.push({
        name: "photoInfo",
        params: this.PBingList[index],
        query: {
          age: 12,
        },
      });
    },
  },
  props: ["PBingList", "pmsg"],
};
</script>
<style scoped>
.mui-btn-block {
  height: 30px;
  line-height: 30px;
  padding: 0;
  font-size: 14px;
  letter-spacing: 12px;
}
.imgBox {
  position: relative;
}
.imgBox span {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
}
img[lazy="loading"] {
  width: 80vw;
  height: 200px;
  margin: auto;
}

.imgBox img {
  transition: 0.3s all ease-out;
}
.imgBox img:hover {
  transform: scaleX(1.01);
  box-shadow: 0px 0px 6px 1px #aaa;
}
</style>