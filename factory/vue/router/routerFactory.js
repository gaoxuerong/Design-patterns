import SuperAdmin from '../components/SuperAdmin.vue'
import Admin from '../components/Adminvue.'
import User from '../components/User.vue'
import NotFound404 from '../components/NotFound404.vue'
let allRoute = [
    {
        path: '/super-admin',
        name: 'SuperAdmin',
        component: SuperAdmin
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: 'user',
        name: 'User',
        component: User
    },
    {
        path: '*',
        name: 'NotFound404',
        component: NotFound404
    },
]

export default routeFactory = (role)=>{
    switch(role){
        case 'superadmin':
            return {
                name:'SuperAdmin',
                route: allRoute
            }
            break;
        case 'admin':
            return {
                name: 'Admin',
                route: allRoute.splice(1)
            }
            break;
        case 'user':
            return {
                name: 'User',
                route: allRoute.splice(2)
            }
            break;
        default:
            throw new Error('参数错误')
    }
}