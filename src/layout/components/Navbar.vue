<template>
  <div class="navBar">
    <div class="left">
      <i v-if="sidebar.opened" class="el-icon-s-fold" @click="setStatus" />
      <i v-else class="el-icon-s-unfold" @click="setStatus" />
      <div>江苏传智播客教育科技股份有限公司</div>
      <span>体验版</span>
    </div>

    <div class="right">
      <div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <img v-errorImg="img" :src="userinfo.staffPhoto || img" alt="" />
            {{ userinfo.username || '管理员'
            }}<i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item command="1">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import img from '../../assets/common/bigUserHeader.png'
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      img: img
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'userinfo'])
  },
  methods: {
    ...mapActions(['app/toggleSideBar', 'user/logout']),
    setStatus () {
      this['app/toggleSideBar']()
    },
    handleCommand (command) {
      if (command === '1') {
        this['user/logout']()
        this.$message.success('退出登录成功')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background: #497afb;
  .left,
  .right {
    align-items: center;
    display: flex;
  }
  .left {
    padding-left: 20px;
    i {
      margin-right: 20px;
    }
    div {
      margin-right: 20px;
    }
    span {
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 8px;
      background: #ccc;
    }
  }
  .right {
    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }
    padding-right: 20px;
    .el-dropdown-link {
      color: #fff;
      cursor: pointer;
    }
    .el-icon--right {
      color: #fff;
    }
  }
}
</style>
