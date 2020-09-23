<template>
  <div>
    <section class="newCommentBox">
      <textarea cols="15" rows="3" class="msg" v-model="newComment.message"></textarea>
      <input type="button" class="submit" value="发表" @click="submitNewComment" />
    </section>
    <ul v-for="comment in commentList" :key="comment.data">
      <li>
        <p>{{ comment.message }}</p>
        <div class="info">
          <span>{{ comment.author }}</span>
          <span>{{ comment.date | dateFormat("YYYY-MM-DD") }}</span>
        </div>
      </li>
    </ul>
    <section class="getMore" @click="getMore">获取更多</section>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      commentList: [],
      page: 3,
      newComment: {
        author: "土拨鼠",
        message: "",
      },
    };
  },
  created() {
    this.page = 3;
    this.getComments(this.page);
  },
  methods: {
    getComments(page) {
      this.$http
        .get("http://127.0.0.1:3000/comments?limit=" + page)
        .then((res) => {
          for (k in res.data) {
            this.commentList.push(res.data[k]);
          }
        });
    },
    getMore() {
      this.page = this.page + 3;
      this.getComments(this.page);
    },
    submitNewComment() {
      if (this.newComment.message.trim() == "") {
        Toast("不能为空");
      } else {
        this.$http
          .post("http://127.0.0.1:3000/submitNewComment", this.newComment, {
            "Content-Type": "application/json",
          })
          .then((rst) => {
            Toast("发表成功");
            this.newComment.message = "";
            console.log(rst.data);
          })
          .catch((err) => {
            Toast("服务器未知错误");
          });
      }
    },
  },
};
</script>
<style  scoped>
* {
  padding: 0;
  margin: 0;
}
li {
  position: relative;
  list-style: none;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border-bottom: 1px solid #eee;
  font-family: "手书体";
}
li p {
  color: black;
}

.info {
  position: absolute;
  font-size: 6px;
  right: 2%;
  top: 8px;
}
.info span {
  padding: 0 3px;
  font-size: 6px;
}
.getMore {
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  background: #f5f5f5;
}
.getMore:active {
  background: slategrey;
}
.newCommentBox .msg {
  font-size: 10px;
  padding: 5px 10px;
  height: 60px;
}
.newCommentBox .submit {
  width: 100vw;
  background: #26a2ff;
}
</style>