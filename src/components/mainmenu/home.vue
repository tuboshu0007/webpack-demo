<template>
  <div class="homeContainer">
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeList" :key="item.data.imgurl">
        <img v-lazy="item.data.imgurl" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 主体部分 -->
    <div class="mainBox">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li
          class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
          v-for="item in gridList"
          :key="item.name"
        >
          <router-link to="/home/artlist">
            <img :src="item.iconImgUrl" class="imgIcon" />
            <div class="mui-media-body">{{ item.name }}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      swipeList: [],
      gridList: [],
    };
  },
  created() {
    this.getSwipeList();
    this.getGridList();
  },
  methods: {
    getSwipeList() {
      this.$http
        .get("http://127.0.0.1:3000/api/ACG?type=json&size=mw690", {})
        .then((res) => {
          this.swipeList = res.data;
        });
    },
    getGridList() {
      this.$axios
        .get("http://127.0.0.1:3000/api/gridList")
        .then((res) => {
          this.gridList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style  scoped>
.homeContainer {
  position: relative;
}
img[lazy="loading"] {
  width: 100vw;
  height: 100px;
}
.mint-swipe {
  height: 120px;
}
.mint-swipe img {
  width: 100vw;
}
.mint-swipe-item:nth-child(1) {
  background-color: tomato;
}
.mint-swipe-item:nth-child(2) {
  background-color: cadetblue;
}
.mint-swipe-item:nth-child(3) {
  background-color: hotpink;
}
.mui-grid-view.mui-grid-9 {
  background: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.imgIcon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: tomato;
}
</style>