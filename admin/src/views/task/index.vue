<template>
  <div>
    <el-table
      :data="tasks"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="content"
        label="详细描述"
        width="250px">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="200px">
      </el-table-column>
      <el-table-column
        label="状态"
        width="160px">
        <template slot-scope="scope">
          <p v-text="scope.row.type == 0 ? '未维修' : '已维修'"></p>
        </template>
      </el-table-column>
      <el-table-column
        label="维修人员"
        width="160px">
        <template slot-scope="scope">
          <p v-if="scope.row.maintainer">{{scope.row.maintainer.username}}</p>
          <p v-else>未指派</p>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="assigned(scope.row._id)">指派维修师傅</el-button>
          <el-button type="warning">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="指派维修师傅"
      :visible.sync="dialogVisible"
      width="50%">
      <el-table :data="maintainers">
        <el-table-column
          prop="username"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号码">
        </el-table-column>
        <el-table-column
          label="选择">
          <template slot-scope="scope">
            <el-button type="primary" @click="handleSure(scope.row._id)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [],
        dialogVisible: false,
        maintainers: [],
        taskId: ''
      }
    },
    methods: {
      getData() {
        this.$axios.get('/repairs').then(res => {
          this.tasks = res.data
        })
      },
      assigned(id) {
        this.taskId = id;
        this.dialogVisible = true;
        this.$axios.get('/maintainer').then(res => {
          this.maintainers = res.data
        })
      },
      handleSure(maintainer) {
        this.$axios.post(`/repairs/${this.taskId}`, {maintainer}).then(res => {
          if(res.code == 200) {
            this.$message.success('指派成功');
            this.dialogVisible = false;
            this.getData()
          }
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
