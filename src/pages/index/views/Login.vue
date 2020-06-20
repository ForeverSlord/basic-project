<template>
  <div class="login">
    <div id="login_container"></div>
  </div>
</template>
<script>
import { http_login } from '../http';

export default {
  data() {
    return {
      baseURL: http_login.defaults.baseURL
    };
  },
  mounted() {
    this.doLoginin();
  },
  methods: {
    doLoginin() {
      // let appid = process.env.VUE_APP_BMW_LOGIN_APPID;
      const appid = VUE_APP_BMW_LOGIN_APPID;
      const redirect_uri = `${this.baseURL}/qrCodeLogin`;
      const goto = encodeURIComponent(
        `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${appid}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${redirect_uri}`
      );
      window.DDLogin({
        id: 'login_container',
        goto,
        style: 'border:1px solid #f1f1f1;background-color:#FFFFFF;',
        width: '365',
        height: '400'
      });
      const _this = this;
      const handleMessage = function (event) {
        const { origin } = event;
        if (origin === 'https://login.dingtalk.com') {
          // 判断是否来自ddLogin扫码事件。
          const loginTmpCode = event.data; // 拿到loginTmpCode后就可以在这里构造跳转链接进行跳转了
          _this
            .http_get(`/qrCodeRedirect?appid=${appid}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${redirect_uri}&loginTmpCode=${loginTmpCode}`)
            .then((resLogin) => {
              const code = resLogin.data;
              _this.http_get(`/qrCodeLogin?code=${code}`).then((res) => {
                if (res.success) {
                  _this.$store.commit('changeUser', {
                    id: res.data.id,
                    name: res.data.name,
                    token: res.data.token,
                    pages: res.data.pages || []
                  });
                  _this.$router.push({ path: '/' });
                } else {
                  _this.openNotificationWithIcon('error', '失败', res.retInfo);
                  _this.doLoginin();
                }
              });
            });
        }
      };
      if (typeof window.addEventListener !== 'undefined') {
        window.addEventListener('message', handleMessage, false);
      } else if (typeof window.attachEvent !== 'undefined') {
        window.attachEvent('onmessage', handleMessage);
      }
    }
  }
};
</script>
>
<style lang="stylus">
.login {
  height: 100vh;
  width: 100%;
  background: url("../../../assets/havaii.png") center/cover no-repeat;
  z-index: 1;
  position: relative;
  #login_container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
}
</style>
