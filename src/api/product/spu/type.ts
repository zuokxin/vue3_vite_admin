
// 服务器全部接口返回的数据类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// spu数据的ts类型：需要修改
export interface SpuData {
  category3Id: string | number
  id?: number
  spuName: string
  tmId: number | string
  description: string
  spuImageList: null | SpuImg[]
  spuSaleAttrList: null | SaleAttr[]
}

// 数组：元素都是已有的spu的数据类型
export type Records = SpuData[]
// 定义获取已有的spu接口返回的数据ts类型
export interface HasSpuResponseData extends ResponseData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    searchCount: boolean
    pages: number
  }
}

// 品牌数据的ts类型
export interface Trademark {
  id: number
  tmName: string
  logoUrl: string
}

// 品牌接口返回的数据ts类型
export interface AllTradeMark extends ResponseData {
  data: Trademark[]
}

// 商品图片的ts类型
export interface SpuImg {
  id?: number
  imgName?: string
  createTime?: string
  updateTime?: string
  spuId?: number
  name?: string
  url?: string
}

// 已有的spu的照片墙数据的类型
export interface SpuHasImg extends ResponseData {
  data: SpuImg[]
}

// 已有的销售属性值对象ts类型
export interface SaleAttrValue {
  id?: number
  createTime?: null
  updateTime?: null
  spuId?: number
  baseSaleAttrId: number | string
  saleAttrValueName?: string
  saleAttrName?: string
  isChecked?: null
}

// 存储已有的销售属性值数组类型
export type SPuSaleAttrValueList = SaleAttrValue[]

// 销售属性对象ts类型
export interface SaleAttr {
  id?: number
  creteTime?: null
  updateTime?: null
  spuId?: number
  baseSaleAttrId: number | string
  saleAttrName: string
  spuSaleAttrValueList: SPuSaleAttrValueList
  flag?: boolean
  salaAttrValue?: string
}

// SPU已有的销售属性接口返回数据ts类型
export interface SaleAttrResponseData extends ResponseData {
  data: SaleAttr[]
}

//已有的全部spu的返回数据ts类型
export interface HasSaleAttr {
  id: number
  name: string
}

export interface HasSaleAttrResponseData extends ResponseData {
  data: HasSaleAttr[]
}

export interface Attr {
  attrId: number | string //平台属性的ID
  valueId: number | string //属性值的ID
}

export interface saleArr {
  saleAttrId: number | string //属性ID
  saleAttrValueId: number | string // 属性值的id
}

export interface SkuData {
  category3Id: string | number // 三级分类的id
  spuId: string | number // 已有的spu的id
  tmId: string | number // spu品牌的id
  skuName: string // sku名字
  price: string | number // sku价格
  weight: string | number // sku重量
  skuDesc: string //sku描述
  skuAttrvalueList?: Attr[]
  skuSaleAttrValueList?: saleArr[]
  skuDefaultImg: string // sku图片地址
}

// 获取sku数据接口的ts类型
export interface SkuInfoData extends ResponseData {
  data: SkuData[]
}