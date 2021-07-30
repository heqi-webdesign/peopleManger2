<template>
  <div class="departments">
    <el-card class="card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="组织结构" name="first">
          <div class="content">
            <treeTool :item="topTree"></treeTool>
            <hr />
            <el-tree :data="treelist" :props="defaultProps" default-expand-all>
              <template slot-scope="{ data }">
                <treeTool :item="data"></treeTool>
              </template>
            </el-tree>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import treeTool from './components/treetool.vue'
import { getDepartmentsApi } from '../../api/departments'
export default {
  components: {
    treeTool
  },
  created () {
    getDepartmentsApi().then(res => {
      this.rowList = res.depts
      console.log(this.rowList)
      this.treelist = this.hhh('')
    })
  },
  data () {
    return {
      activeName: 'first',
      topTree: {
        name: '江苏传智播客教育科技股份有限公司',
        isRoot: true
      },
      rowList: [],
      treelist: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  methods: {
    hhh (str) {
      const arr = []
      this.rowList.forEach(item => {
        if (item.pid == str) {
          const children = this.hhh(item.id)
          item.children = children
          arr.push(item)
        }
      })
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.departments {
  padding: 20px;
  .card {
    padding: 30px 20px 50px 50px;
    .content {
      padding: 20px 100px 0 120px;
    }
  }
}
</style>
