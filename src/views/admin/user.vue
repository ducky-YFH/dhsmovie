<template>
  <div class="user-container">
    <el-table :data="tableList" style="width: 100%;" border :cell-style="cellCenter" :row-style='rowColor' height="700">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column align="center" prop="date" label="头像">
        <template slot-scope="scope">
          <span style="margin-left: 10px"><img class="avatar" :src="scope.row.avatarUrl" alt=""></span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="date" label="日期">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date | dateFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="username" label="姓名" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleFreeze(scope.$index, scope.row)">{{ str = scope.row.isFreeze === true ? '已' : '未' }}冻结</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination :page-size='pageSize' @current-change="changePage" background layout="prev, pager, next" :total="userList.length">
      </el-pagination>  
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userList: [],
        tableList: [],
        pageSize: 10,
        currentPage: 1,
      }
    },
    filters:{
      dateFilter: (dateStr) => {
        let date = new Date(dateStr)
        const y = (date.getFullYear()).toString().padStart(2, 0)
        const m = (date.getMonth() + 1).toString().padStart(2, 0)
        const d = (date.getDate()).toString().padStart(2, 0)
        const H = (date.getHours()).toString().padStart(2, 0)
        const M = (date.getMinutes()).toString().padStart(2, 0)
        const S = (date.getSeconds()).toString().padStart(2, 0)
        return `${y}-${m}-${d} ${H}:${M}:${S}`
      }
    },
    methods: {
      // 获取后台数据
      getUserList(){
        this.$axios.get('/api2/admin/getUserList').then(( res ) => {
          if(res.data.status === 0){
            this.userList = res.data.data
            this.tableList = this.userList.filter((item,index)=>{
              return index < this.pageSize
            })
          }
        })
      },
      // 处理分页事件
      changePage(index){
        // 获取开始点
        let page_start = this.pageSize * (index - 1)
        // 获取结束点
        let page_end = this.pageSize * index
        let table = []
        for(let i = page_start; i < page_end; i++){
          if(this.userList[i]){
            table.push(this.userList[i])
          }
        }
        this.currentPage = index
        this.tableList = table
      },
      // 处理冻结事件
      handleFreeze(index, row) {
        // eslint-disable-next-line no-console
        // console.log(index, row);
        let email = row.email;
        let isFreeze = ! row.isFreeze;
        this.tableList[index].isFreeze = isFreeze;
        this.$axios.post("/api2/admin/changeFreeze",{
          email,
          isFreeze
        // eslint-disable-next-line no-unused-vars
        }).then(res => {
          this.$message({
            message: `${row.username}转换成功`,
            type: 'success'
          });
        })
      },
      // 处理删除事件
      handleDelete(index, row) {
        // eslint-disable-next-line no-console
        let email = row.email
        this.$axios.post('/api2/admin/deleteUser',{
          email
        }).then((res) => {
          if(res.data.status === 0){
            this.tableList.splice(index,1)
            this.$message({
              message: `删除${row.username}成功`,
              type: 'success'
            });
            // 处理后续的一个bug，就是删除完当前页不会跳转到上一页
            this.tableList.splice(index,1)
            this.userList.forEach((item,i)=>{
              if(item.email === email){
                this.userList.splice(i,1)
              }
            })
            if(this.tableList.length == 0 && this.currentPage > 1){
              this.changePage(this.currentPage - 1)
            }
          }else{
            this.$message.error('删除失败')
          }
        })
      },
      // 设置element-ui的表格样式
      cellCenter(){
        return 'text-align:center'
      },
      rowColor(userListItem){
        if(userListItem.row.isFreeze){
          return 'background-color: rgba(245,108,108,0.2)'
        }
      }
    },
    created(){
      this.getUserList()
    }
  }
</script>

<style lang="scss" scoped>
.user-container {
  .avatar{
    height: 50px;
  }
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
  .pagination{
    width: 100%;
    margin-top: 40px;
    text-align: center;
  }
}
</style>