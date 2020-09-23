<template>
  <div class="container">
    <section class="thumbBox">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </section>

    <section class="neck">
      <img :src="imgsrc" class="bg-img" alt />
      <img :src="imgsrc" class="thumb-img" alt />
      <div class="detail-info">
        <p class="detail-info-title">{{ imagename }}</p>
        <p class="detail-info-star">★★★★★</p>
        <p class="detail-info-author">
          地点：
          <a>{{ placename }}</a>
        </p>
        <p class="detail-info-class">
          <span href="/manhua-xuanyi/">
            <a>1920*1080</a>
          </span>
        </p>
      </div>
    </section>
    <p class="detail-desc">
      {{ imageinfo.copyright }}
      <br />
      <br />谁也模仿不了只属于我们的学园生活—————
      PS:开始这么萌，后面肯定是僵尸围城猎奇系发展
    </p>
    <comment></comment>
  </div>
</template>
<script>
import comment from "./comment.vue";
export default {
  data() {
    return {
      imageinfo: "",
      imagename: "",
      placename: "",
      imgsrc: "",
      imglist: [],
      slide1: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400,
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900,
        },
      ],
    };
  },
  created() {
    this.imageinfo = this.$route.params;
    let url = this.imageinfo.url;
    this.imagename = url.slice(11, url.indexOf("_"));
    let info = this.imageinfo.copyright;
    this.placename = info.slice(info.indexOf("，") + 1, info.indexOf("("));
    this.imgsrc = "https://cn.bing.com/" + this.imageinfo.url;
    console.log(this.imgsrc);
    this.getImgList();
  },
  methods: {
    getImageInfoByID() {},
    handleClose() {
      console.log("close event");
    },
    getImgList() {
      this.$axios
        .get("http://127.0.0.1:3000/api/gridList")
        .then((res) => {
          this.imglist = res.data;
          console.log(this.imglist);
          for (k in this.imglist) {
            this.slide1.push({
              src: this.imglist[k].iconImgUrl,
              msrc: this.imglist[k].iconImgUrl,
              alt: "picture" + k,
              title: this.imglist[k].name,
              w: 600,
              h: 400,
            });
          }
          console.log(this.slide1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    comment,
  },
};
</script>
<style scoped>
.container {
  padding: 0;
  background: lightblue;
  width: 100vw;
}

.thumbBox {
  display: flex;
}
figure {
  width: 100px !important;
}
.thumbBox figure img {
  width: 100px;
}
.neck {
  position: relative;
  overflow: hidden;
  height: 175px;
  text-shadow: rgb(59, 59, 59) 0px 3px 3px;
  text-align: center;
}
.bg-img {
  width: 100vw;
  filter: blur(15px);
}

.thumb-img {
  position: absolute;
  width: 200px;
  border: 2px solid #fff;
  bottom: 0px;
  left: 0px;
}
.detail-info {
  position: absolute;
  left: 160px;
  top: 20px;
}
.detail-info-title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2px;
}
.detail-info-star {
  text-shadow: none;
  color: #febf1a;
  margin-bottom: 2px;
}
.detail-info-author {
  color: #fff;
  margin-bottom: 2px;
  font-size: 10px;
}
.detail-info-class {
  font-size: 8px;
}
.detail-desc {
  padding: 10px 20px 10px 10px;
  font-weight: 400;
  color: #333;
  font-family: "Muyao-Softbrush";
}
.detail-selector {
  position: relative;
  color: #ccc;
  display: flex;
  text-align: center;
  line-height: 50px;
  height: 50px;
  background: #f5fcfc;
}
</style>