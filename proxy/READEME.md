应用场景
-----------
>
1.事件委托
>
2.图片懒加载
>
3.代理跨域
>
4.代理缓存
> 代理缓存可以给开销大的计算结果提供暂时的存储
5.es6-proxy
>
6.webpack代理:
> webpack利用Proxy做代理，很好的解决了前端本地调试跨域问题，同时可以指定host，在webpack-dev-server中配置proxy
`proxy: {
  "/api": "http://localhost:3000"
}`
>
7.nginx反向代理
>