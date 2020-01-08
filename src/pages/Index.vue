<template>
  <div>
    <!-- 轮播图 -->
    <div class="index">
      <div class="container">
        <el-row>
          <el-col :span="14">
            <div class="carousel">
              <el-carousel trigger="click" height="360px">
                <el-carousel-item v-for="(item,index) in the_images" :key="index">
                  <img class="lunbo_img big-img" :src="item.src" alt="轮播图">
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="right-img">
              <div class="top_area">
                <img class="top_img big-img" src="../assets/images/work.jpg" alt="top_img">
              </div>
              <div class="down_area">
                <div class="down_area1"><img class="down_img big-img" src="../assets/images/car.jpg" alt="down_img"></div>
                <div class="down_area2"><img class="down_img big-img" src="../assets/images/children.jpg" alt="down_img"></div>
              </div>
            </div>
          </el-col>

          <div></div>
          <div></div>
        </el-row>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="context">
      <div class="container">
        <div class="content">
          <!-- 文章区域 -->
          <div class="article-area">
            <div v-for="item in [1,2,3,4,5,6,7,8,9,0]" :key="item.id">
              <div class="article">
                <div class="art-pic">
                  <img class="big-img" width="363px" height="181px" src="../assets/images/article1.jpg" alt="article">
                </div>
                <div class="art-info">
                  <div class="art-title">
                    月亮湾:离乡游子挡风遮雨的港湾
                  </div>
                  <div class="art-time">
                    <el-row>
                      <el-col :span="20">小天 发表于 2020-1-2</el-col>
                      <el-col :span="4" style="text-align:right">评论 3</el-col>
                    </el-row>
                  </div>
                </div>
                <div class="art-discription">
                  离乡的游子啊,你尽管去拼,这里就是你的家,你有背井离乡的压力,这里有你创造未来的动力...
                </div>
              </div>
            </div>
          </div>
          <!-- 海报区域 -->
          <div class="widget-area">
            <!-- 海报 -->
            <div class="poster">
              <div class="notice">2020年一月份缴费单已经出来了,麻烦各位户主下载了解一下。</div>
              <div class="download">
                <el-button>下载文档</el-button>
              </div>
              <div class="notice_pic">
                <img width="290px" height="218px" src="../assets/images/screenshot.png" alt="通知文档的截图">
              </div>
            </div>
            <!-- 搜索 -->
            <div class="search">
              <el-input v-model="search" placeholder="请输入内容">
                <el-button @click="searchUser" slot="append" icon="fa fa-search"></el-button>
              </el-input>
            </div>
            <!-- 热门 -->
            <div class="hot">
              <div class="type">热门资讯</div>
              <div class="hot-news">
              <ul>
                <li style="display:flex">
                  <div class="hot-img">
                    <img width="100px" height="75px" src="../assets/images/hot1.jpg" alt="资讯小图">
                  </div>
                  <div class="hot-info">
                    <div class="hot-title">工作疲惫之余，美食是一方良药。</div>
                    <div class="hot-time">13 赞 | 2020年1月4日 发表</div>
                  </div>
                </li>
                <li style="display:flex">
                  <div class="hot-img">
                    <img width="100px" height="75px" src="../assets/images/hot2.jpg" alt="资讯小图">
                  </div>
                  <div class="hot-info">
                    <div class="hot-title">工作疲惫之余，美食是一方良药。</div>
                    <div class="hot-time">13 赞 | 2020年1月4日 发表</div>
                  </div>
                </li>
                <li style="display:flex">
                  <div class="hot-img">
                    <img width="100px" height="75px" src="../assets/images/hot3.jpg" alt="资讯小图">
                  </div>
                  <div class="hot-info">
                    <div class="hot-title">工作疲惫之余，美食是一方良药。</div>
                    <div class="hot-time">13 赞 | 2020年1月4日 发表</div>
                  </div>
                </li>
                <li style="display:flex">
                  <div class="hot-img">
                    <img width="100px" height="75px" src="../assets/images/hot4.jpg" alt="资讯小图">
                  </div>
                  <div class="hot-info">
                    <div class="hot-title">工作疲惫之余，美食是一方良药。</div>
                    <div class="hot-time">13 赞 | 2020年1月4日 发表</div>
                  </div>
                </li>
                <li style="display:flex">
                  <div class="hot-img">
                    <img width="100px" height="75px" src="../assets/images/hot5.jpg" alt="资讯小图">
                  </div>
                  <div class="hot-info">
                    <div class="hot-title">工作疲惫之余，美食是一方良药。</div>
                    <div class="hot-time">13 赞 | 2020年1月4日 发表</div>
                  </div>
                </li>
              </ul>
              </div>
            </div>
            <!-- 最新资讯 -->
            <div class="recent-article">
              <div class="type">最新资讯</div>
                <div v-for="item in [1,2,3,4,5]" :key="item.id">
                  <div class="line">努力工作，对自己负责，加油！</div>
                </div>
            </div>
            <!-- 最新评论 -->
            <div class="recent-comment">
              <div class="type">最新评论</div>
                <div v-for="item in [1,2,3,4,5]" :key="item.id">
                  <div class="line">刘洵: 别让能力，配不上自己的野心！</div>
                </div>
            </div>
            <div class="tags"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to index",
      search: '',
      the_images:[
        { src: require('../assets/images/building.jpg')},
        { src: require('../assets/images/hand.jpg')},
        { src: require('../assets/images/cheers.jpg')},
        { src: require('../assets/images/food.jpg')}
        ]
    }
  },
  methods:{
    searchUser(){
      this.axios
            .get('/front/users')
            .then(function(res) {
              console.log(res.data)
      })
    }
  }
};
</script>

<style scoped>
.index {
  padding: 30px 0;
  background: #19232d;
}

.container{
  max-width: 1180px;
  margin: 0 auto;
}

.carousel{
  padding-right: 20px;
}
.right-img{
  margin-left: 30px;
}
/* 轮播图单双页面调试 */
/* .el-carousel__item:nth-child(2n) {
  background-color: yellow;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.top_area{
  padding-bottom: 26px;
  overflow: hidden;
}
.lunbo_img{
  width: 100%;
  height: 360px;
}
.down_area{
  display: flex;
  justify-content: space-between;
}
.down_area1, .down_area2{
  width: 215px;
  height: 160px;
  overflow: hidden;
}
.top_img{
  width: 461px;
  height: 170px;
}
.down_img{
  width: 215px;
  height: 160px;
}
/* 下半部分css */
.context{
  padding: 30px 0;
}
.content {
  display: flex;
}
.article-area{
  width: 69.1%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.article{
  width: 363px;
  height: 349px;
  padding-right: 30px;
}
.art-pic{
 overflow: hidden;
 height: 51.3%;
 border: black solid 1px;
}
.art-title{
  padding:8px 0;
  font-size: 19.2px;
}
.art-time{
  font-size: 14px;
}
.art-discription{
  padding:5px 0;
  font-size: 14.4px;
}
.widget-area{
  width: 30.8%;
}
.poster{
  margin-bottom: 45px;
  display: flex;
  padding: 12% 10% 0;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  background-color: #F1F1F1;
}
.notice{
  margin: auto;
  font-size: 20px;
  width: 70%;
  margin-bottom: 20px;
}
.download{
  margin-bottom: 20px;
}
.search{
  padding-bottom: 45px;
}
.hot-news{
  display: flex;
}
.hot-img{
  margin-right:15px;
}
.hot-title{
  font-size: 14.4px;
}
.hot-time{
  padding: 4px 0;
  font-size: 12.8px;
}
.big-img:hover{
  transform:scale(1.14);
}
img{
  transition: 1s;
}
.type{
  padding: 10px 15px 9px;
  margin: 0 0 20px;
  border-left: 5px solid lightskyblue;
  background-color: #F1F1F1;
  font-size: 14px;
}
ul{
  margin: 0 0 16px;
  padding: 0;
}
li{
  margin: 0 0 15px;
  padding: 0 0 15px;
  list-style: none;
  width: 100%;
  border-bottom: 1px dotted gray;
}
li:last-child{
  margin: 0 0 15px;
  padding: 0 0 15px;
  list-style: none;
  width: 100%;
  border-bottom: 0;
}
.line{
  margin: 0 0 15px;
  padding: 0 0 15px;
  list-style: none;
  width: 100%;
  border-bottom: 1px dotted gray;
}
</style>
