<template>
  <div>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <nuxt-link to="/home">首页</nuxt-link>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content bg-purple">
              <nuxt-link to="/about">关于</nuxt-link>
            </div></el-col
          >
          <el-col :span="6" v-if="!isLogin"
            ><div class="grid-content bg-purple">
              <nuxt-link to="/login">登录</nuxt-link>
            </div></el-col
          >
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-header>
      <el-main> <nuxt /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  cursor: pointer;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #409eff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 50px;
  line-height: 50px;
  text-align: center;
  color: #f9fafc;
}
.grid-content a {
  color: rgb(71, 63, 63);
}
.grid-content .nuxt-link-active {
  color: rgb(230, 213, 213);
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>