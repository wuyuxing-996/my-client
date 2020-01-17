<template>
  <div class="container">
    <h1>社区管理人员介绍</h1>
    <p>社区里，管理人员都是你的家人，他们没有那么多啰啰嗦嗦，没有那么多勾心斗角，没有那么多儿女情长，对你来说，是忠实的服务者，希望大家可以和平相处，互相配合，共同努力，建设一个美好社区。</p>
    <div>
      <el-row>
        <div v-for="item in [1,2,3]" :key="item.id">
          <el-col :span="8">
          <div style="text-align: center;padding:0 10px;">
            <a href="javascript:void(0)">
              <img class="head-img" src="../assets/images/children.jpg">
            </a>
            <h2><a href="javascript:void(0)" class="h2-a">疾风剑豪</a></h2>
            <h3><a href="javascript:void(0)" class="h3-a">小区保安</a></h3>
            <span>他是一个热心的人，不畏权贵，坚持维护社区治安，管理好各地工作，对小区安全问题十分上心，坚决禁止外来车辆入内，进出必须登记。</span>
            <br/>
            <el-button circle class="btn">
              <i class="fa fa-envelope"></i>
            </el-button>
          </div>
        </el-col>
        </div>

        <!-- <el-col :span="8">
          <div style="text-align: center">
            <a href="javascript:void(0)">
              <img class="head-img" src="../assets/images/children.jpg">
            </a>
            <h2><a href="javascript:void(0)" class="h2-a">Hans Desjarlais</a></h2>
            <h3><a href="javascript:void(0)" class="h3-a">35 posts</a></h3>
            <span>Donec bibendum aliquam nulla sit amet suscipit. Vestibulum in sagittis erat. Luctu justo elit, sit amet sodales purus vulputate non. Nullam lorem eros, posuere nec sodales at, aliquet gravida dui.</span>
            <br/>
            <el-button circle class="btn">
              <i class="fa fa-envelope"></i>
            </el-button>
          </div>
        </el-col>
        <el-col :span="8">
          <div style="text-align: center">
            <a href="javascript:void(0)">
              <img class="head-img" src="../assets/images/children.jpg">
            </a>
            <h2><a href="javascript:void(0)" class="h2-a">Hans Desjarlais</a></h2>
            <h3><a href="javascript:void(0)" class="h3-a">35 posts</a></h3>
            <span>Donec bibendum aliquam nulla sit amet suscipit. Vestibulum in sagittis erat. Luctu justo elit, sit amet sodales purus vulputate non. Nullam lorem eros, posuere nec sodales at, aliquet gravida dui.</span>
            <br/>
            <el-button circle class="btn">
              <i class="fa fa-envelope"></i>
            </el-button>
          </div>
        </el-col> -->
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.head-img {
  text-align: center;
  border-radius: 50%;
  width: 256px;
  height: 256px;
}
.head-img:hover {
  opacity: 0.85;
}
.btn {
  color: #fff;
  background-color: #19232d;
}
.btn:hover {
  background-color: #e54e53;
}
</style>
<style>
.h2-a {
  color: #19232d;
  text-decoration: none;
  background-color: transparent;
}
.h2-a:focus {
  color: #3498db !important;
}
.h2-a:hover {
  color: #3498db !important;
}
.h3-a {
  color: #97a7b5;
  text-decoration: none;
  background-color: transparent;
}
</style>
