<template>
  <div class="login-container">
    <el-form
      :label-position="labelPosition"
      :label-width="width"
      :model="formLabelAlign"
    >
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  middleware: "login",
  data() {
    return {
      labelPosition: "top",
      width: "80px",
      formLabelAlign: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      console.log(this.formLabelAlign);
      const { username, password } = this.formLabelAlign;
      const res = await this.$axios.post("/login", { username, password });
      this.$message.success(res.msg);
      console.log(res);
      this.$store.commit("setUserMsg", res.name);
      this.$store.commit("setLogin", true);
      const url = this.$route.query.url || "/home";
      this.$router.push(url);
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 300px;
  height: 80vh;
  margin: 1px auto;
}
</style>