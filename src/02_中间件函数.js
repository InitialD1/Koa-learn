//1.导入Koa
const Koa = require('koa')
//2.创建app对象
const app = new Koa()
//3.创建中间件
app.use((ctx,next) => {
    console.log('我是头部')
    next()
})
app.use((ctx,next) => {
    console.log('我是身体') 
    next()
})
app.use((ctx,next) => {
    console.log('我是尾部')
    ctx.body = '组装完成'
    next()
});
//4.开启监听
app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})