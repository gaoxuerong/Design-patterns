<template>
    <div>---login---</div>
</template>

<script>
import routeFactory from '../router/routerFactory.js'
export default {
    data(){
        return{

        }
    },
    methods: {
        userLogin(){},
        getRoute(role){
            let routeObj = routeFactory(role)
            // 给 vue-route添加对应权限的路由页面
            this.$router.addRoutes(routerObj.route);
            // 跳转到相应页面
            this.$router.push({name: routerObj.name})
        }
    }
}
</script>

<style>

</style>

