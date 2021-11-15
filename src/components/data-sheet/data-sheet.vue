<template>
  <div class="data-sheet-container">
    <!-- 表结构 -->
    <el-table :data="column" border>                
      <el-table-column :label="val" v-for="(val,i) in row" :key="i" >                  				
       <template slot-scope="scope">{{column[scope.$index][i]}}</template>                
      </el-table-column>              
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    column:{
      type:Array
    },
    row:{
      type:Array
    }
  },
  data() {
    return {

    };
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    
  },
  created() {
    
  },
  mounted() {
    
  }
};
</script>
<style lang="scss" scoped>
.data-sheet-container{
  border: 1px solid #ccc;
}
.el-table thead{
  color: #000;
}


</style>