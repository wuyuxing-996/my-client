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
                  <img class="lunbo_img" :src="item.src" alt="轮播图">
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="right-img">
              <div class="top_area">
                <img class="top_img" src="../assets/images/work.jpg" alt="top_img">
              </div>
              <div class="down_area">
                <div class="down_area1"><img class="down_img" src="../assets/images/car.jpg" alt="down_img"></div>
                <div class="down_area2"><img class="down_img" src="../assets/images/children.jpg" alt="down_img"></div>
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
          <div class="article-area">
            <div class="article">
              <div class="art-pic">
                <img width="363px" height="181px" src="../assets/images/article1.jpg" alt="article">
              </div>
              <div class="art-info">
                <div class="art-title">
                  月亮湾:离乡游子挡风遮雨的港湾
                </div>
                <div class="art-time">
                  <el-row>
                    <el-col :span="20">小天 发表于2020-1-2</el-col>
                    <el-col :span="4" style="text-align:right">评论 3</el-col>
                  </el-row>
                </div>
              </div>
              <div class="art-discription">

              </div>
            </div>
            <div class="article">

            </div>
            <div class="article">

            </div>
            <div class="article">

            </div>
          </div>
          <div class="widget-area">
            dadadad
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
      the_images:[
        { src: require('../assets/images/building.jpg')},
        { src: require('../assets/images/hand.jpg')},
        { src: require('../assets/images/cheers.jpg')},
        { src: require('../assets/images/food.jpg')}
        ]
    };
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
  background: lightsteelblue;
  display: flex;
}
.article-area{
  width: 69.1%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.article{
  border: red solid 1px;
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
.widget-area{
  width: 30.8%;
}
img:hover{
  transform:scale(1.14);
}
img{
  transition: 1s;
}
</style>
