<template>
  <div>
      <!-- 顶部信息条 -->
      <div class="top-bar">
        <div class="container">
          <el-row>
            <el-col :span="12">
              <div class="time">
                <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                <span>{{time}}</span>
              </div>
            </el-col>
            <el-col :span="12" style="text-align:right">
              <div class="login">
                <span>我的</span>
                <span>注册</span>
                <span>登录</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 头部 -->
      <div class="header">
        <div class="container">
          <el-row>
            <el-col :span="8" >
              <div class="logo">
                <div class="title">岳麓</div>
                <span class="tag">于山水之间，享天伦之乐</span>
              </div>
            </el-col>
            <el-col :span="16">
              <div class="advertise">
                <img class="adv-img" src="../assets/images/adv.png" alt="adv">
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 导航条 -->
      <div class="nav-bar">
        <div class="container">
          <el-menu
          :router="true"
          default-active="/index"
          mode="horizontal"
          popper-append-to-body="false"
          text-color="black"
          active-text-color="black"
          class="nav"
        >
          <el-menu-item index="/index">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <span class="menu-font">小区介绍</span>
            </template>
            <el-menu-item index="/user">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">新闻资讯</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">用户地盘</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">租房找房</template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">活动中心</template>
            <el-menu-item index="6-1">选项1</el-menu-item>
            <el-menu-item index="6-2">选项2</el-menu-item>
            <el-menu-item index="6-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
        </div>
      </div>
      <!-- 主体部分 -->
      <div class="main">
        <router-view />
      </div>
      <!-- 脚部 -->
      <el-footer>
        <div class="msg">
          永远相信，美好的事情即将发生。
        </div>
      </el-footer>
  </div>
</template>

<script>
import { getCurrentFormatDate } from "../utils/util";
export default {
  name: "Main",
  data() {
    return {
      time: "",
      msg: "Welcome to main"
    };
  },
  created() {
    this.time =
      getCurrentFormatDate("yyyy-MM-dd") + " " + getCurrentFormatDate("week");
  },
  methods: {}
};
</script>

<style scoped>
.container{
  max-width: 1180px;
  margin: 0 auto;
}

.top-bar {
  height: 34px;
  background-color: #19232d;
  font: 12.8px sans-serif;
  color: #f3f3f3;
  line-height: 34px;
}

.logo{
  margin-top: 9px;
}

.title {
  font-size: 50px;
  font-family: cursive;
}

.tag {
  font-size: 18px;
  color: rgb(173, 169, 169);
}

.advertise {
  text-align: right;
}
.adv-img {
  width: 92%;
  height: 100%;
}

.header {
  background-color: #fff;
  padding: 32px 0;
}

.nav {
  border-bottom: #19232d solid 2px;
}

.menu-font {
  font-size: 14px;
}

.main {
  padding: 30px 0;
}

.el-footer {
  background-color: lightgrey;
  padding: 10px 0;
}
.msg{
  text-align: center;
  margin-top: 10px;
}
</style>
