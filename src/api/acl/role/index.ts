// 角色管理模块的接口
import request from '@/utils/request'
import type { RoleResponseData, RoleData, MenuResponseData } from './type'
// 枚举类型
enum API {
  // 获取全部的职位接口
  ALLROLE_URL = '/admin/acl/role',
  // 新增岗位的接口地址
  ADDROLE_URL = '/admin/acl/role/save',
  // 更新已有职位
  UPDATEROLE_URL = '/admin/acl/role/update',
  // 获取全部的菜单与按钮的数据
  ALLPERMISSION = '/admin/acl/permission/toAssign/',
  // 给相应的职位分配权限
  SETPERMISSION_URL = '/admin/acl/permission/doAssign/?',
  // 删除已有的职位
  REMOVE_URL = '/admin/acl/role/remove/',
}

// 获取全部的角色
