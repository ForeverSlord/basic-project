<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <a-layout id="components-layout-demo-custom-trigger" v-if="$store.state.token !== null">
        <!-- <a-layout id="components-layout-demo-custom-trigger" > -->
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
          <div class="logo">
            <!-- <img v-if="!collapsed" src="@/assets/logo.png" alt />
            <img v-if="collapsed" src="@/assets/logo2.png" alt /> -->
            <img src="~@/assets/logo2.png" alt />
          </div>

          <a-menu :selectedKeys="$store.state.selectedKeys" :default-open-keys="['2']" mode="inline" theme="dark" :inline-collapsed="collapsed">
            <template v-for="item in list">
              <a-menu-item v-if="!item.children" :key="item.key" @click="skip(item.key, item.path)">
                <a-icon :type="item.icon" />
                <span>{{ item.title }}</span>
              </a-menu-item>
              <sub-menu v-else :key="item.key" :menu-info="item" />
            </template>
          </a-menu>
        </a-layout-sider>
        <!-- <a-layout id="layout-right" :style="{marginLeft:layout_right_margin_left,}"> -->
        <a-layout id="layout-right">
          <a-layout-header style="background: #fff; padding: 0;">
            <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
            <div class="login-info">
              <span style="margin-right: 20px;"> 欢迎！{{ $store.state.userName }} </span>
              <a-button @click="doLogout">登出</a-button>
            </div>
          </a-layout-header>
          <a-layout-content
            :style="{
              margin: '24px 16px',
              padding: '24px',
              background: '#fff',
              minHeight: '88.5vh',
              textAlign: 'left'
            }"
          >
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
      <router-view v-else />
    </div>
  </a-config-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import SubMenu from 'component/SubMenu';
import { getMenus } from 'utils/router-helper';
import { routes } from './router/index';

moment.locale('zh-cn');

export default {
  components: { SubMenu },
  data() {
    return {
      locale: zh_CN,
      collapsed: false,
      layout_right_margin_left: '200px',
      list: getMenus(routes)
    };
  },
  methods: {
    skip(key, path) {
      // if (this.$store.state.selectedKeys[0] === key) {

      if (this.$route.name !== key) {
        this.$store.commit('changeSelectedKeys', [key]);
        this.$router.push({ path });
      }
    },
    doLogout() {
      const _this = this;
      this.$confirm({
        title: '退出登陆',
        content: '确认要退出登录吗？',
        onOk() {
          _this.$store.commit('changeUser', {
            id: '',
            token: null,
            name: ''
          });
          _this.$router.push({ path: '/login' });
        }
      });
    }
  },
  watch: {
    collapsed(newVal) {
      if (newVal) {
        this.layout_right_margin_left = '80px';
      } else {
        this.layout_right_margin_left = '200px';
      }
    },
    $route(newPath) {
      const { key } = newPath.meta;
      if (key !== undefined) {
        this.$store.state.selectedKeys = [key.toString()];
      }
    }
  },
  mounted() {}
};
</script>

<style lang="stylus">
#app
  color #2c3e50
  text-align center
  font-family Avenir,Helvetica,Arial,sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

#components-layout-demo-custom-trigger .trigger
  padding 0 24px
  font-size 18px
  line-height 64px
  cursor pointer
  transition color .3s

#components-layout-demo-custom-trigger .trigger:hover
  color #1890ff

#components-layout-demo-custom-trigger .logo
  margin 16px
  height 52px

  img
    height 100%

.ant-layout.ant-layout-has-sider
  overflow hidden

.ant-layout-sider
  position fixed
  top 0
  left 0
  overflow-y auto

.ant-layout-sider-children
  height 100vh

.ant-menu.ant-menu-inline.ant-menu-root.ant-menu-dark
  text-align left

.ant-layout-header
  text-align left

.ant-layout-content
  min-width 1080px
  min-height 89vh

#layout-right
  overflow-x auto
  transition all ease-in-out 150ms

.login-info
  float right
  margin-right 20px

*::-webkit-scrollbar
  width 8px
  height 8px
  // background-color: #d9d9d9;
  border-radius 4px
  -webkit-box-shadow inset 0 0 6px rgba(0,0,0,.3)

*::-webkit-scrollbar-thumb
  border-radius 7px
  background-color #ccc
  -webkit-box-shadow inset 0 0 6px rgba(0,0,0,.3)
</style>
