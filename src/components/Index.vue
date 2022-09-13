<template>
  <el-container>
    <el-header>
      <header-bar></header-bar>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="160px">
        <el-menu
          active-text-color="black"
          router
          :default-active="defaultActive"
        >
          <el-menu-item index="/discover">
            <i class="iconfont icon-yinle"></i>
            <span slot="title">发现音乐</span>
          </el-menu-item>
          <el-menu-item index="/video">
            <i class="iconfont icon-shipin"></i>
            <span slot="title">视频</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 主体内容 -->
      <el-main>
        <!-- 给router-view添加key有可能对性能有一定的损耗，
        但是可以解决push同一个地址不同参数时不会重新渲染router-view的问题 -->
        <router-view class="routerView" :key="$route.fullPath"></router-view>
        <!-- 用于下载的a标签 -->
        <a
          :href="downloadMusicInfo.url"
          :download="downloadMusicInfo.name"
          target="_blank"
          id="downloadCurrentMusic"
        ></a>
      </el-main>
    </el-container>
    <bottom-control></bottom-control>
    <music-detail-card class="musicDetailCard"></music-detail-card>
  </el-container>
</template>

<script>
import BottomControl from "components/bottomControl/BottomControl";
import HeaderBar from "components/headerBar/HeaderBar.vue";
import MusicDetailCard from "views/musicDetailCard/MusicDetailCard.vue";
export default {
  components: {
    BottomControl,
    HeaderBar,
    MusicDetailCard,
  },
  data() {
    return {
      defaultActive: "",
      // 下载的音乐的信息
      downloadMusicInfo: {
        name: "",
        url: "",
      },
    };
  },
  created() {
    if (this.$route.path.search("/musiclistdetail") == -1) {
      this.defaultActive = "/" + this.$route.path.split("/")[1];
    } else {
      this.defaultActive = this.$route.path;
    }
  },
};
</script>

<style scoped>
.is-active {
  background-color: #f6f6f7;
  font-size: 14px;
  font-weight: 600;
}

.iconfont {
  font-size: 14px;
  margin: 5px !important;
}

.routerView {
  padding: 0 15px;
  margin: 0;
  width: 100%;
  height: calc(80vh - 105px);
}

.el-header {
  background-color: #ec4141;
  height: 50px !important;
  padding: 0;
  margin: 0;
  z-index: 100;
}

.el-aside {
  border-right: 1px solid #ccc;
  height: calc(80vh - 105px);
}

.el-menu {
  border: none;
}

.el-menu-item:hover {
  background-color: #f5f5f6 !important;
}

.el-menu-item {
  font-size: 12px;
  padding: 0 0 0 10px !important;
  margin: 5px 0 !important;
  height: 30px;
  line-height: 30px;
}

.el-menu-item-group {
  margin-top: 10px;
}

.el-main {
  padding: 0;
}
</style>