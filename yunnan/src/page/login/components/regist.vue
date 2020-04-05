<template>
  <div>
    <form class="regist">
      <input type="text" v-model="iphone" placeholder="请输入手机号" />
      <div class="vertififyction">
        <input type="text" v-model="code" placeholder="请输入验证码" />
        <input
          v-show="!empty"
          type="button"
          :class="{chanColor:ischange}"
          :disabled="!send"
          :value="codetext"
          @click="sendCode()"
          v-bind="hasPhone"
        />
        <!-- 前端验证手机号吗的错误提示 -->
        <input v-show="empty" type="button" value="发送验证码" @click="emptyCode" />
      </div>
      <input type="password" v-model="password" placeholder="请设置密码" />
      <div class="logined">
        <input
          type="button"
          :disabled="!isregister"
          :class="{'regid_activeOne':sendGrides,regid_activeTwo:finishi}"
          v-bind="minitor"
          value="注册"
          @click="stertRegits"
        />
      </div>
    </form>
  </div>
</template>
<script>
import { getcode, register } from "../../../api/api";
import cookie from "../../../axios/cookie";
export default {
  name: "Regist",
  data() {
    return {
      iphone: "",
      code: "",
      password: "",
      isregister: false,
      sendGrides: true,
      finishi: false,
      codetext: "发送验证码",
      send: false,
      // 点击改变验证码背景颜色
      ischange: true,
      empty: true,
      iphones: ""
    };
  },
  methods: {
    // 点击发送验证码
    sendCode() {
      var that = this;
      that.send = false;
      that.ischange = true;
      var countdown = 60;
      codetime();
      function codetime() {
        if (countdown == 0) {
          that.codetext = "发送验证码";
          countdown = 60;
          that.send = true;
          that.ischange = false;
          return;
        } else {
          countdown--;
          that.codetext = countdown + "s后可重发";
        }
        setTimeout(() => {
          codetime();
        }, 1000);
      }
      //发送验证码
      getcode({
        mobile: that.iphone
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          // 手机号码已经存在
          that.iphones = err.mobile[0];
          that.showToast();
        });
    },
    // 手机号码不正确的提示
    emptyCode() {
      this.iphones = "手机号码不正确";
      this.showToast();
    },
    // 错误提示
    showToast() {
      this.$popus(this.iphones);
    },
    // 注册
    stertRegits() {
      register({
        username: this.iphone,
        code: this.code,
        password: this.password
      })
        .then(res => {
          // 注册成功
          cookie.setCookie("name", res.data.username, 7);
          cookie.setCookie("token", res.data.token, 7);
          console.log(res);
          //更新数据仓库列数据
          this.$store.dispatch("users");
          // 跳到首页 跳转路由
          this.$router.push({name:'home'})
        })
        .catch(err =>{
          console.log(err);
          // 验证码错误或者过期
          this.iphones = err.code[0];
          this.showToast();
        });
    }
  },
  computed: {
    //计算属性监听每个输入框是否都有值
    minitor() {
      if (this.password && this.iphone && this.code) {
        this.isregister = true;
        this.finishi = true;
      } else {
        this.isregister = false;
        this.finishi = false;
      }
    }, //验证手机号码是否正确
    hasPhone() {
      if (/^1(3|4|5|7|8)[0-9]{9}$/g.test(this.iphone)) {
        this.send = true;
        this.ischange = false;
        this.empty = false;
      } else {
        this.send = false;
        this.ischange = true;
        this.empty = true;
      }
    }
  }
};
</script>
<style lang="" scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #909090;
  padding: 0.2rem 0;
  border-radius: 3px;
}
.regist {
  margin: 0.5rem 0.5rem;
}
.vertififyction {
  display: flex;
  margin: 0.3rem 0;
}
.vertififyction input[type="text"] {
  flex: 2;
  border-right: 0;
}
.vertififyction input[type="button"] {
  flex: 1;
  border-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #fff;
  background: cornflowerblue;
}
.logined {
  margin-top: 0.8rem;
}
.logined input {
  border-radius: 0.5rem;
  color: #fff;
  font-size: 0.3rem;
  border: none;
}
.regid_activeOne {
  background: #b45837;
}
.regid_activeTwo {
  background: #f5602a;
}
.chanColor {
  background: rgb(161, 172, 192) !important;
}
</style>