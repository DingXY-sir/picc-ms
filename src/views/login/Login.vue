<template>
  <div class="">
    <el-form :model="ruleForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
         <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      ruleForm:{
        name:'',
        password:''
      },
      rules:{
        name:[
          { required: true, message: '请输入用户名', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度为 3 到 10 字符', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度为 6 到 18 字符', trigger: 'blur' }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    submitForm() {
      this.$refs.loginForm.validate( async(valid) => {
          if (valid) {
            alert('submit!');
            // const data = {
            //   email:this.ruleForm.name,
            //   password:this.ruleForm.password
            // }
            //const res = await flyCarInsurance(data)
            
            this.$router.push('/home')
          } else {
            console.log('error submit!!');
            return false;
          }
      })
    },
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>