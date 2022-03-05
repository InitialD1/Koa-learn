//导入koa包
const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
    ctx.body = 'hello world'   
})
app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
})