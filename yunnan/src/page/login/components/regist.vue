<template>
  <div>
    <form class="regist">
      <input type="text" placeholder="请输入手机号" />
      <div class="vertififyction">
        <input type="text" placeholder="请输入验证码" />
        <input type="button" value="发送验证码" />
      </div>
      <input type="password" placeholder="请设置密码" />
      <div class="logined">
        <input type="button" value="注册" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Regist"
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
  background: #fe642e;
}
.logined {
  margin-top: 0.8rem;
}
.logined input {
  border-radius: 0.5rem;
  color: #fff;
  font-size: 0.3rem;
  border: none;
  background: #fa5858;
}
</style>