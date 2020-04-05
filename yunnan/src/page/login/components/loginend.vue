<template>
  <div>
    <form class="submit">
      <input type="text" v-model="phoneData" placeholder="请输入手机号" />
      <input type="password" v-model="passwordData" placeholder="请输入密码" />
      <input
        type="button"
        :disabled="!isregister"
        :class="{'regid_activeOne':sendGrides,regid_activeTwo:finishi}"
        v-bind="loginIng"
        value="登录"
        @click="loGin"
      />
    </form>
  </div>
</template>
<script>
import { login } from "../../../api/api";
import cookie from '../../../axios/cookie'
export default {
  name: "Loginend",
  data() {
    return {
      phoneData: "",
      passwordData: "",
      isregister: false,
      sendGrides: true,
      finishi: false,
      iphones: ""
    };
  },
  computed: {
    // 计算属性实时监听data里的数据变化, 监听属性默认会执行一次
    //以后一直监听data里的变量是否变化并且是否在下面的计算属性函数里如果是就执行该变量在的函数（计算属性里的），否则不执行
    loginIng() {
      if (this.phoneData && this.passwordData) {
        this.isregister = true;
        this.finishi = true;
      } else {
        this.isregister = false;
        this.finishi = false;
      }
    }
  },
  methods: {
    // 弹窗组件
    showToast() {
      this.$popus(this.iphones);
    },
    // 登录
    loGin() {
      var that = this;
      login({
        username: that.phoneData,
        password: that.passwordData
      })
        .then(res => {
          console.log(res);
          cookie.setCookie("name", that.phoneData, 7);
          cookie.setCookie("token", res.data.token, 7);
          //更新数据仓库列数据
          that.$store.dispatch("users");
          // 跳到首页 跳转路由this.$router.push({ name: "home" }); 都可以
          this.$router.push("/");
        })
        .catch(err => {
          // console.log(err.non_field_errors[0])
          if (err.non_field_errors[0]) {
            that.iphones = "手机号或密码错误";
            that.showToast(that.iphones);
          }
        });
    }
  }
};
</script>
<style scoped>
.submit {
  padding: 0 0.8rem;
}
input {
  width: 100%;
  padding: 0.2rem 0;
  margin: 0.2rem 0;
}
input[type="button"] {
  font-size: 0.27rem;
  color: #fff;
  border-radius: 0.5rem;
  margin-top: 0.6rem;
}
input:not([type="button"]) {
  border: 1px solid#5858FA;
}
input:nth-child(1) {
  margin-top: 1rem;
}
input:nth-child(1):hover {
  border: 1px solid#FE642E;
}
input:nth-child(2):hover {
  border: 1px solid#82FA58;
}
.regid_activeOne {
  background: #b45837;
}
.regid_activeTwo {
  background: #f5602a;
}
</style>