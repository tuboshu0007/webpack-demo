<template>
  <div class="container">
    <section class="head">
      <img
        class="normal-top-back"
        src="http://css99tel.cdndm5.com/v202008141414/dm5/images/mobile/normal-top-back.png"
        alt="后退"
      />
      <span>学园孤岛</span>
    </section>
    <section class="neck">
      <img
        src="http://mhfm1tel.cdndm5.com/10/9500/20180612112815_180x240_23.jpg"
        class="bg-img"
        alt
      />
      <img src="http://mhfm1tel.cdndm5.com/10/9500/20180612112815_180x240_23.jpg" class="thumb-img" />
      <div class="detail-info">
        <p class="detail-info-title">学园孤岛</p>
        <p class="detail-info-star">★★★★★</p>
        <p class="detail-info-author">
          作者：
          <a
            href="/search?title=%e5%8d%83%e5%8f%b6%e3%82%b5%e3%83%89%e3%83%ab&amp;language=1&amp;f=2"
          >千叶サドル</a>
        </p>
        <p class="detail-info-class">
          <span href="/manhua-xuanyi/">
            <a>悬疑</a>
          </span>
        </p>
      </div>
    </section>
    <p class="detail-desc">
      谁也模仿不了只属于我们的学园生活—————
      PS:开始这么萌，后面肯定是僵尸围城猎奇系发展
    </p>
    <div id="body">
      <div class="detail-selector">
        <div>连载</div>|
        <div>番外</div>|
        <div class="comment">
          评论
          <router-link tag="span" to="/comment">
            <em>999+</em>
          </router-link>
        </div>
      </div>
      <div class="detail-list-title">
        <span class="detail-list-title-1">已完结</span>
        <span>后续公告</span>
        <span class="detail-list-title-3">06月24号</span>
        <span>倒序</span>
      </div>
      <transition>
        <ul class="chapter-list">
          <li>
            <a href="/m935257/" title="明天见" class="item">第78话</a>
          </li>
          <li>
            <a href="/m933834/" title="在这里" class="item">第77话</a>
          </li>
          <li>
            <a href="/m933198/" title="即使燃烧殆尽" class="item">第76话</a>
          </li>
          <li>
            <a href="/m932370/" title="我出发了" class="item">第75话</a>
          </li>
          <li>
            <a href="/m876587/" title="觉悟" class="item">第74话</a>
          </li>
          <li>
            <a href="/m876568/" title="过去" class="item">第73话</a>
          </li>
          <li>
            <a href="/m822808/" title="忍受" class="item">第72话</a>
          </li>
          <li>
            <a href="/m822807/" title="已然离去" class="item">第71话</a>
          </li>
          <li>
            <a href="/m822806/" title="再会" class="item">第70话</a>
          </li>
          <li>
            <a href="/m822805/" title="晚安" class="item">第69话</a>
          </li>
          <li>
            <a href="/m822804/" title="一起" class="item">第68话</a>
          </li>
          <li>
            <a href="/m710925/" title="真实" class="item">第67话</a>
          </li>
          <li>
            <a href="/m691251/" title="ERROR" class="item">第66话</a>
          </li>
          <li>
            <a href="/m683157/" title="千钧一发" class="item">第65话</a>
          </li>
          <li>
            <a href="/m628849/" title="逃脱" class="item">第64话</a>
          </li>
          <li v-show="isShow">
            <a href="/m621598/" title="感觉不错" class="item">第63话</a>
          </li>
          <li v-show="isShow">
            <a href="/m615615/" title="每个人" class="item">第62话</a>
          </li>
          <li v-show="isShow">
            <a href="/m589618/" title="希望" class="item">第61话</a>
          </li>
          <li v-show="isShow">
            <a href="/m577772/" title="谎言" class="item">第60话</a>
          </li>
          <li v-show="isShow">
            <a href="/m565568/" title="试看" class="item">第59话</a>
          </li>
          <li v-show="isShow">
            <a href="/m504758/" title="证明" class="item">第58话</a>
          </li>
          <li v-show="isShow">
            <a href="/m491164/" title="屋顶" class="item">第57话</a>
          </li>
          <li v-show="isShow">
            <a href="/m480704/" title="试看版" class="item">第56话</a>
          </li>
          <li v-show="isShow">
            <a href="/m475197/" title="侦察" class="item">第55话</a>
          </li>
          <li v-show="isShow">
            <a href="/m456714/" title="生命" class="item">第54话</a>
          </li>
          <li v-show="isShow">
            <a href="/m436815/" title="挣扎" class="item">第53话</a>
          </li>
          <li v-show="isShow">
            <a href="/m431088/" title="直到最后" class="item">第52话</a>
          </li>
          <li v-show="isShow">
            <a href="/m426106/" title="责任" class="item">第51话</a>
          </li>
          <li v-show="isShow">
            <a href="/m410435/" title="传达" class="item">第50话</a>
          </li>
          <li v-show="isShow">
            <a href="/m405150/" title="选择" class="item">第49话</a>
          </li>
          <li v-show="isShow">
            <a href="/m401979/" title="试看" class="item">第48话</a>
          </li>
          <li v-show="isShow">
            <a href="/m255360/" title="方针" class="item">第47话</a>
          </li>
          <li v-show="isShow">
            <a href="/m250028/" title="试看版" class="item">第46话</a>
          </li>
          <li v-show="isShow">
            <a href="/m245914/" title="试看" class="item">第45话</a>
          </li>
          <li v-show="isShow">
            <a href="/m245913/" title="试看" class="item">第44话</a>
          </li>
          <li v-show="isShow">
            <a href="/m234908/" title class="item">第43话</a>
          </li>
          <li v-show="isShow">
            <a href="/m232536/" title class="item">第42话</a>
          </li>
          <li v-show="isShow">
            <a href="/m226224/" title="运动" class="item">第41话</a>
          </li>
          <li v-show="isShow">
            <a href="/m222611/" title class="item">第40话</a>
          </li>
          <li v-show="isShow">
            <a href="/m220087/" title="书" class="item">第39话</a>
          </li>
          <li v-show="isShow">
            <a href="/m216475/" title class="item">第38话</a>
          </li>
          <li v-show="isShow">
            <a href="/m208794/" title="入学" class="item">第37话</a>
          </li>
          <li v-show="isShow">
            <a href="/m204142/" title="初次见面" class="item">第36话</a>
          </li>
          <li v-show="isShow">
            <a href="/m200769/" title="声音" class="item">第35话</a>
          </li>
          <li v-show="isShow">
            <a href="/m198247/" title="妹妹" class="item">第34话</a>
          </li>
          <li v-show="isShow">
            <a href="/m192388/" title="秘密" class="item">第33话</a>
          </li>
          <li v-show="isShow">
            <a href="/m189209/" title class="item">第32话</a>
          </li>
          <li v-show="isShow">
            <a href="/m182953/" title="启程" class="item">第31话</a>
          </li>
          <li v-show="isShow">
            <a href="/m179507/" title="毕业" class="item">第30话</a>
          </li>
          <li v-show="isShow">
            <a href="/m177205/" title="离别" class="item">第29话</a>
          </li>
          <li v-show="isShow">
            <a href="/m176182/" title class="item">第28话</a>
          </li>
          <li v-show="isShow">
            <a href="/m176181/" title="非难" class="item">第27话</a>
          </li>
          <li v-show="isShow">
            <a href="/m176180/" title="从上面" class="item">第26话</a>
          </li>
          <li v-show="isShow">
            <a href="/m176179/" title class="item">第25话</a>
          </li>
          <li v-show="isShow">
            <a href="/m176178/" title="从今往后" class="item">第24话</a>
          </li>
          <li v-show="isShow">
            <a href="/m176177/" title="未来" class="item">第23话</a>
          </li>
          <li v-show="isShow">
            <a href="/m176176/" title="总有一天" class="item">第22话</a>
          </li>
          <li v-show="isShow">
            <a href="/m176002/" title="Good morning" class="item">第21话</a>
          </li>
          <li v-show="isShow">
            <a href="/m158314/" title="老师" class="item">第20话</a>
          </li>
          <li v-show="isShow">
            <a href="/m148912/" title="伤痕" class="item">第19话</a>
          </li>
          <li v-show="isShow">
            <a href="/m146211/" title="再次" class="item">第18话</a>
          </li>
          <li v-show="isShow">
            <a href="/m144388/" title="小狗" class="item">第17话</a>
          </li>
          <li v-show="isShow">
            <a href="/m142726/" title="思念" class="item">第16话</a>
          </li>
          <li v-show="isShow">
            <a href="/m141961/" title="质问" class="item">第15话</a>
          </li>
          <li v-show="isShow">
            <a href="/m134424/" title="运动大会" class="item">第14话</a>
          </li>
          <li v-show="isShow">
            <a href="/m132546/" title="欢迎" class="item">第13话</a>
          </li>
          <li v-show="isShow">
            <a href="/m130471/" title="归来" class="item">第12话</a>
          </li>
          <li v-show="isShow">
            <a href="/m127427/" title="邂逅" class="item">第11话</a>
          </li>
          <li v-show="isShow">
            <a href="/m126840/" title="购物" class="item">第10话</a>
          </li>
          <li v-show="isShow">
            <a href="/m119876/" title="绕道" class="item">第9话</a>
          </li>
          <li v-show="isShow">
            <a href="/m117977/" title="郊游" class="item">第8话</a>
          </li>
          <li v-show="isShow">
            <a href="/m116280/" title="每天" class="item">第7话</a>
          </li>
          <li v-show="isShow">
            <a href="/m113908/" title="书信" class="item">第6话</a>
          </li>
          <li v-show="isShow">
            <a href="/m113907/" title="幻觉" class="item">第5话</a>
          </li>
          <li v-show="isShow">
            <a href="/m112224/" title="老师" class="item">第4话</a>
          </li>
          <li v-show="isShow">
            <a href="/m109163/" title="明年" class="item">第3话</a>
          </li>
          <li v-show="isShow">
            <a href="/m107368/" title="回忆" class="item">第2话</a>
          </li>
          <li v-show="isShow">
            <a href="/m105422/" title="开始" class="item">第1话</a>
          </li>
        </ul>
      </transition>

      <div class="chapter-more" @click="toggleShow">{{ toggleStatus }}</div>
    </div>
  </div>
</template>
<script>
import comment from "../subcomponent/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      isShow: false,
      toggleStatus: "展开全部章节",
    };
  },
  created() {
    console.log(this.$route);
    console.log(this);
  },
  methods: {
    showALLChapter() {
      console.log(this.isShow);
    },
    toggleShow() {
      this.isShow = !this.isShow;
      this.toggleStatus = this.isShow ? "收起" : "展开全部章节";
    },
  },
  components: {
    "comment-box": comment,
  },
};
</script>
<style   scoped>
.container {
  padding: 0;
}
.head {
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
}
.head img {
  height: 12px;
  margin: 5px;
}
.neck {
  position: relative;
  overflow: hidden;
  height: 175px;
  text-shadow: rgb(59, 59, 59) 0px 3px 3px;
}
.bg-img {
  width: 100vw;
  position: absolute;
  filter: blur(15px);
}

.thumb-img {
  position: absolute;
  width: 100px;
  height: 133px;
  border: 2px solid #fff;
  bottom: 0;
  left: 20px;
}
.detail-info {
  position: absolute;
  left: 140px;
  top: 50px;
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
  height: 60px;
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
.detail-selector div {
  color: #666;
  flex-grow: 1;
}
.comment {
  position: relative;
}
.comment em {
  height: 20px;
  position: absolute;
  font-size: 6px;
  top: -10px;
  padding: 0;
}
.detail-list-title {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
}
.detail-list-title span {
  margin: 0 10px;
}
.detail-list-title span:nth-child(4) {
  margin-right: 20px;
  float: right;
}
.detail-list-title-3 {
  color: red;
}
.chapter-list {
  width: 100vw;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.chapter-list li {
  flex-grow: 1;
  width: 33.33vw;
  height: 40px;
  background: #f6f6f6;
  text-align: center;
  line-height: 40px;
  border: 2px solid #fff;
  font-size: 14px;
}
.chapter-list .item {
  color: #252525;
}
.chapter-more {
  height: 40px;
  background: #f5f5f5;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease-out;
}
</style>