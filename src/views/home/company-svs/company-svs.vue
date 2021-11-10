<template>
  <div class="company-svs-container"> 
    <!-- 顶部 -->
    <div class="company-svs-top">
      
      <div>
        <el-date-picker
          v-model="time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
      <div class="company-svs-btn">
        <el-button type="primary" @click="companyRead">查询</el-button>
      </div>

    </div>
    <!-- 数据表 -->
    <dataSheet :row="row" :column="column" class="company-svs-data"></dataSheet>
  </div>
</template>

<script>
import dataSheet from '../../../components/data-sheet/data-sheet'
import {companySvsRead, comExport} from '../../../api/index'
export default {
  components: {
    dataSheet
  },
  props: {},
  data() {
    return {
       time: '',
       row:[],
       column:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    async companyRead() {
      const data = {
        stime:this.time[0],
        etime:this.time[1]
      }
      // 导出excel
      const res = await companySvsRead(data)
      const {row, column} = res.data
      this.column = [...column]
      this.row = [...row]
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.company-svs-container{
  width: 100%;
  height: 100%;
  .company-svs-top{
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 10px 5px;
    text-align: left;
    line-height: normal;
  }
  .company-svs-btn{
    margin-right: 50px;
  }
  .company-svs-data{
    width: 100%;
    height: calc(100% - 60px);
  }
}
</style>