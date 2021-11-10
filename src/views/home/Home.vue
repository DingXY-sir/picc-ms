<template>
     <div class="container">
        <el-container>
          <el-header class="header">
            <!-- title -->
            <div class="title">PICC云系统</div>
            <div>退出</div>
          </el-header>
          <el-container>
            <!-- 导航 start -->
            <el-aside width="200px" class="nav">
              <el-menu router>
                <el-menu-item index="/home">首页</el-menu-item>
                <el-submenu index="">
                  <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
                  <el-menu-item-group >
                    <el-menu-item index="/companySvs">公司服务（省）</el-menu-item>
                    <el-menu-item index="/threeLoability">三责险（省）</el-menu-item>
                    <el-menu-item index="/wrongCar">非车险（省）</el-menu-item>
                    <el-menu-item index="/salesMethod">销售方法（省）</el-menu-item>
                    <el-menu-item index="/salesProcess">销售流程（省）</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-aside>
            <!-- 导航 end -->
            <el-container >
              <!-- 内容 start -->
              <el-main style="background-color: #fff;">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
                 
                </el-breadcrumb>
                <router-view class="routerView" />
              </el-main>
              <!-- 内容 end -->
              <el-footer class="footerView">Footer</el-footer>
            </el-container>
          </el-container>
        </el-container>
     </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
   
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
.container,.el-container{
  height: 100%;
}
.container{
  .header{
    background-color:	#0075C3;
    display: flex;
    color: #fff;
    justify-content: space-between;
    .title{
      font-weight: 500;
      font-size: 20px;
    }
  }
  .nav{
    // background-color: #626c74;
    background-color: #fff;
    border-right: solid 1px #e6e6e6;
    ul{
      border-right: none;
    }
  }
  .routerView{
    margin-top:10px
  }
  .footerView{
    border-top: 1px solid #ccc;
    height: 30px !important;
    line-height: 30px;
    background-color:#fff ;
  }
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
  
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
  
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

  

</style>