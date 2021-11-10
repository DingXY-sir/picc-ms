<template>
  <div class="data-sheet-container">
    <!-- 表结构 -->
    <el-table :data="table_content" border>                
      <el-table-column :label="val" v-for="(val, i) in table_head" :key="i">                  				
      <template slot-scope="scope">{{table_content[scope.$index][i]}}</template>                
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
      // 表头数据
      table_head:["护士", "护理员组长", "护理员", "输单员"],
      // 表格内容数据
      table_content:[
          ["24", "20", "18", "3"], 
          ["22", "20", "18", "2"],
          ["22", "20", "18", "2"],
          ["51", "21", "20", "6"],
          ["21", "20", "18", "2"],
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.data-sheet-container{
  border: 1px solid #ccc;
}


</style>