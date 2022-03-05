const Koa = require('koa')
const app = new Koa()

app.use(async (ctx,next) => {
    ctx.message = 'aa'
    await next()
    ctx.body = ctx.message
})

app.use(async (ctx, next) => {
    ctx.message += 'bb'
    await next()
})

app.use(async (ctx) => {
    const temp = await Promise.resolve('cc');
    console.log(temp)
    ctx.message += temp
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})