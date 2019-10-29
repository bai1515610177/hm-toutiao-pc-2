<template>
  <!-- 全局容器 -->
  <div class="container">
    <el-card>
      <img src="../../assets/logo_index.png" alt />
      <el-form ref="LoginForm" :model="LoginForm" :rules="LoginRules" status-icon>
        <el-form-item prop="moblie">
          <el-input v-model="LoginForm.moblie" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="LoginForm.code"
            style="width:67%;margin-right:5px"
            placeholder="请输入验证码"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const checkMoblie = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }
    return {
      LoginForm: {
        moblie: '',
        code: ''
      },
      LoginRules: {
        moblie: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMoblie, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码错误', trigge: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs['LoginForm'].validate(valid => {
        if (valid) {
          this.$http
            .post('authorizations', this.LoginForm)
            .then(res => {
              this.$router.push('/')
            })
            .catch(() => {
              this.$message.error('手机号或密码有误')
            })
        } else {
          console.log('登录无效，请重新登录')
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ccc;
  background: url("../../assets/login_bg.jpg") no-repeat center / cover;
  .el-card {
    width: 400px;
    height: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 0 auto 15px;
    }
  }
}
</style>
