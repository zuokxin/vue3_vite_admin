// 商品分类全局组件小仓库
import { defineSore } from 'pinia';
import { reqC1, reqC2, reqC3 } from '@/api/product/attr';
import type { CategoryResponseData } from '@/api/product/attr/type';
import type { CategoryState } from './types/type';
const useCategoryStore = defineSore('Category', {
  state: (): CategoryState => {
    return {
      // 存储一级分类的数据
      c1Arr: [],
      // 存储一级分类的id
      c1Id: '',
      // 存储对应一级分类下耳机架分类的数据
      c2Arr: [],
      // 收集二级分类的id
      c2Id: '',
      // 存储三级分类的数据
      c3Arr: [],
      // 存储三级分类的id
      c3Id: ''
    }
  },
  action: {
    // 获取一级分类方法
    async getC1() {
      // 发送请求获取一级分类数据
      const result: CategoryResponseData = await reqC1()
      if(result.code === 200) {
        this.c1Arr = result.data
      }
    },
    // 获取二级分类方法
    async getC2() {
      // 发送请求获取二级分类数据
      const result: CategoryResponseData = await reqC2(this.c1Id)
      if(result.code === 200) {
        this.c2Arr = result.data
      }
    },
    // 获取三级分类方法
    async getC3() {
      // 发送请求获取三级分类数据
      const result: CategoryResponseData = await reqC3(this.c2Id)
      if(result.code === 200) {
        this.c3Arr = result.data
      }
    }
  },
  getters: {}
})

export default useCategoryStore