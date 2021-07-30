<template>
  <div class="mytree">
    <el-row>
      <el-col :span="20" class="left">
        <i class="el-icon-office-building" v-if="item.isRoot === true"></i>
        <i class="el-icon-s-promotion" v-else-if="item.pid === ''"></i>
        <i class="el-icon-star-on" v-else></i>

        {{ item.name }}</el-col
      >
      <el-col :span="4" class="right">
        <span>负责人</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            操作<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <template>
              <el-dropdown-item>添加子部门</el-dropdown-item>
              <el-dropdown-item v-if="!item.isRoot">查看部门</el-dropdown-item>
              <el-dropdown-item v-if="!item.isRoot">删除部门</el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.mytree {
  width: 100% !important;
}

.left {
  .el-icon-office-building {
    padding-left: 5px;
    margin-right: 5px;
  }
  font-size: 14px;
  font-weight: 700;
}

::v-deep .right {
  display: flex;
  text-align: right;
  justify-content: space-around;
  font-size: 14px;
  font-weight: normal;
  color: #000;
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
}
</style>
