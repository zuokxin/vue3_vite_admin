<template>
  <div>
    <el-config-provider :locale="zhCn">
      <examp></examp>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import examp from './pages/examp.vue'
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
console.log('import.meta', import.meta.env)
</script>

<style scoped></style>
