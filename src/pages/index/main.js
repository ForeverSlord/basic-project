import Vue from 'vue';
import Antd from 'ant-design-vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { http_post, http_post_refund, http_get_login } from './http';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Antd);

// Vue.prototype.$confirm = Vue.$confirm;
// Vue.prototype.$notification = Antd.notification;
Vue.prototype.openNotificationWithIcon = function (type, title, msg) {
  switch (type) {
    case 'success':
      Vue.$notification.success({
        message: title,
        description: msg
      });
      break;
    case 'error':
      Vue.$notification.error({
        message: title,
        description: msg
      });
      break;
    case 'warning':
      Vue.$notification.warning({
        message: title,
        description: msg
      });
      break;
  }
};

Vue.prototype.http_post = http_post;
Vue.prototype.http_post_refund = http_post_refund;
Vue.prototype.http_get = http_get_login;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
