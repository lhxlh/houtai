<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <common-form
        :formLabel="operateformLabel"
        :form="operateform"
        :inline="true"
        ref="form"
      >
      </common-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="quxiao">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+新增</el-button>
      <common-form
        :formLabel="formLabel"
        :form="searchform"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getList">搜索</el-button>
      </common-form>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="出生日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.birth }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="性别" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 5px">{{ scope.row.sex }}</span>
          </template>
        </el-table-column>
        <el-table-column label="年龄" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 5px">{{ scope.row.age }}</span>
          </template>
        </el-table-column>
        <el-table-column label="地址" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.addr }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import CommonForm from '../../src/components/CommonForm.vue'
export default {
  name: 'User',
  data() {
    return {
      dor: {},
      enum: 1,
      tableData: [{
        birth: '2016-05-02',
        name: '王小虎',
        sex: '男',
        age: '18',
        addr: '重庆'
      }, {
        birth: '2016-05-04',
        name: '王小虎',
        sex: '男',
        age: '18',
        addr: '重庆'
      }, {
        birth: '2016-05-01',
        name: '王小虎',
        sex: '男',
        age: '18',
        addr: '重庆'
      }, {
        birth: '2016-05-03',
        name: '王小虎',
        sex: '男',
        age: '18',
        addr: '重庆'
      }],
      operateType: 'add',
      isShow: false,
      operateformLabel: [
        {
          model: 'name',
          label: '姓名',
          type: 'input'
        },
        {
          model: 'age',
          label: '年龄',
          type: 'input'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: '男'
            },
            {
              label: '女',
              value: '女'
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'data'
        },
        {
          model: 'addr',
          label: '地址',
          type: 'input'
        },
      ],
      operateform: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
          type: 'input'
        }
      ],
      searchform: {
        keyword: ''
      }
    }
  },
  components: {
    CommonForm
  },
  methods: {
    handleEdit(index, row) {
      this.enum = index
      this.operateform = row
      this.operateType = 'exit'
      this.isShow = true
    },
    quxiao() {
      this.isShow = false
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    addUser() {
      this.isShow = true
      this.operateType = 'add'
      this.operateform = {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      }
    },
    confirm() {
      let haskong = false
      for (let key in this.operateform) {
        if (this.operateform[key] === '') {
          haskong = true
          break
        }
      }
      if (haskong) {
        this.$alert('请输入完整信息', '提示', {
          confirmButtonText: '确定',
        })
      } else {
        if (this.operateType === 'add') {
          this.tableData.push(this.operateform)
          this.isShow = false
        } else {
          this.tableData[this.enum] = this.operateform
          this.operateType = 'add'
          this.operateform = {
            name: '',
            addr: '',
            age: '',
            birth: '',
            sex: ''
          }
          this.isShow = false
        }
      }
    },
    getList() {

    }
  },
}
</script>

<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
</style>