<template>
  <div class="login">
    <div class="top">
      <div class="wrapper">
        <div class="title">
          <img src="../../assets/common/login-logo.png" alt="">
        </div>

        <el-form ref="gform" :model="formdate" :rules="rules">
          <el-form-item prop="username">
            <el-input
              v-model="formdate.username"
              prefix-icon="el-icon-user-solid"
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="formdate.password"
              show-password
              prefix-icon="el-icon-lock"
            />
          </el-form-item>

          <el-form-item>
            <el-button @click="loginIn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { logiAPI } from '@/api/user'
export default {
  data() {
    return {
      // 获取数据 发起请求
      formdate: {
        username: '13800000002',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              const reg = new RegExp(
                /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
              )
              const bool = reg.test(value)
              if (!bool) {
                callback(new Error('手机号格式不正确'))
              } else {
                callback()
              }
            }
          }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 登录
    loginIn() {
      // 表单校验
      this.$refs.gform.validate(result => {
        if (result) {
          // 发起请求
          logiAPI({
            mobile: this.formdate.username,
            password: this.formdate.password
          })
            .then(res => {
              this.$message.success('登陆成功')
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          this.$message.error('验证不通过')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url('../../assets/common/bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .top {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    .wrapper {
      width: 30%;
      margin-left: 150px;
      img {
        width: 100%;
        margin-bottom: 30px;
      }
      .el-form-item {
        width: 100%;
        ::v-deep .el-input__inner {
          padding-top: 20px;
          padding-bottom: 20px;
          background: rgba(0, 0, 0, 0.3);
          color: #000;
        }
      }
      .el-button {
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
        color: #000;
        font-size: 20px;
      }
    }
  }
}
</style>
