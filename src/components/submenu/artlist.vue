<template>
  <div>
    <ul>
      <li v-for="(item, index) in artlist" :key="index">
        <router-link :to="'/home/artlist/artinfo/'+item.slice(0,-4)">
          <img :src="'/public/images/'+item" alt />
          <h4>{{ item.slice(0,-4) }}</h4>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      artlist: [],
    };
  },
  created() {
    this.getArtList();
  },
  methods: {
    getArtList() {
      this.$http
        .get("http://127.0.0.1:3000/getartlist")
        .then((res) => {
          this.artlist = res.data.split(",");
        })
        .catch((err) => {
          console.log("出现错误了: " + err);
          Toast("找不到资源啦");
        });
    },
  },
};
</script>
<style  scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
}
ul {
  overflow-x: hidden;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: center;
}
li {
  width: 33.33%;
  padding: 4px;
}
h4 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 4px 0;
  overflow: hidden;
  height: 20px;
  font-size: 3vw !important;
}
img {
  width: 100%;
}
</style>