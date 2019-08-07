class User {
  constructor(options) {
    this.name = options.name
    this.viewPage = options.viewPage
  }
  static getInstance(role) {
    switch (role) {
      case 'superAdmin':
        return new User({
          name: '超级管理员',
          viewPage: ['首页', '通讯录', '核心数据', '权限管理']
        });
        break;
      case 'Admin':
        return new User({
          name: '管理员',
          viewPage: ['首页', '通讯录', '核心数据']
        });
        break;
      case 'user':
        return new User({
          name: '用户zhangucan',
          viewPage: ['首页', '通讯录']
        });
        break;
      default:
        throw new Error('参数错误, 可选参数:superAdmin、admin、user')
    }
  }
}
let superAdmin = User.getInstance('superAdmin')
let Admin = User.getInstance('Admin')
let user = User.getInstance('user')
console.log(superAdmin)
console.log(Admin)
console.log(user)
