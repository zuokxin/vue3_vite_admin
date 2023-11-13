<template>
  <el-button :plain="true" @click="open2">成功</el-button>
  <el-button :plain="true" @click="open3">失败</el-button>
  <el-button :plain="true" @click="open1">信息</el-button>
  <el-button :plain="true" @click="open4">错误</el-button>

  <el-calendar>
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
  </el-calendar>
</template>

<script lang="ts" setup>
const open1 = () => {
  ElMessage('this is a message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}
</script>
