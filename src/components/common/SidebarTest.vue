<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutess"
      :collapse="collapse"
      background-color="#20222A"
      text-color="rgba(255,255,255,.7)"
      active-text-color="#fff"
      unique-opened
      router
    >
      <template v-for="item in itemaas">
        <template>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
// import bus from "../common/bus";
// import {getSysmenu} from '../../api/api'
export default {
  data() {
    return {
      collapse: false,
      menuItems: [],
      itemaas: [
        {
          icon: "el-icon-lx-home",
          index: "dashboard",
          title: "系统首页改++++++"
        },
        {
          icon: "el-icon-lx-copy",
          index: "tabs",
          title: "tab选项卡"
        },
        {
          icon: "el-icon-lx-emoji",
          index: "icon",
          title: "自定义图标"
        },
        {
          icon: "el-icon-lx-favor",
          index: "charts",
          title: "schart图表"
        },
      ]
    };
  },
  methods: {
   
  },
  computed: {
    onRoutess() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
