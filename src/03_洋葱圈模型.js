//导入koa包
const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
    console.log('1');
    next()
    console.log('2');
})
app.use((ctx, next) => {
    console.log('3')
    next()
    console.log('4');
    
})
app.use((ctx, next) => {
    console.log('5')
    ctx.body = 'Hello Koa'   
})
app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
})