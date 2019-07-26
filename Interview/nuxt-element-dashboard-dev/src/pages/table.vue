<template>
    <div>
      <el-data-table v-bind="$data" :extraButtons="extraButtons">
      </el-data-table>
    </div>
</template>

<script>
  import dateFormat from '../const/format-date'
  export default {
    name: "tables",
    data() {
      return {
        firstPage: 0,
        url: 'https://www.easy-mock.com/mock/5d39a0168313f25541291fda/example/userList',
        columns: [
          {type: 'selection'},
          {prop: 'name', label: '用户名'},
          {prop: 'sort', label: '分类'},
          {prop: 'edition',  label: '版本'},
          {prop: 'language',  label: '语言'},
          {prop: 'createTime', label: '创建时间',
            formatter: this.formatDate
           },
          {
            prop: 'status',
            label: '状态',
            formatter: row => (row.status === 'active' ? '上架' : '下架')
          }
        ],
        searchForm: [
          {
            type: 'input',
            id: 'name',
            label: '组件名称',
            el: {placeholder: '请填写'}
          },
          {
            type: 'select',
            id: 'sort',
            label: '分类',
            el: {placeholder: '请选择'},
            val: [1, 2, 3]
          },
          {
            type: 'select',
            id: 'state',
            label: '状态',
            el: {placeholder: '请选择'},
            val: [1, 2, 3]
          },
        ],
        extraButtons: [
          {type: 'primary', text: '重置'},
          {type: 'primary', text: '上架'},
          {type: 'primary', text: '下架'}
        ]
      }
    },
    methods: {
      formatDate(row) {
        let date = new Date(row.createTime);
        return dateFormat.formatDate(date, "yyyy-MM-dd");
      }
    }
  }
</script>
