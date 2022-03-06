const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const app = new Koa()
const router = new Router()
const userRoute = require('../router/user.route')

app.use(koaBody())
app.use(userRoute.routes()).use(userRoute.allowedMethods())

app.on('error', (err, ctx) => {
    console.error(err);
    ctx.body = {
        code: err.status || 500,
        message: err.message,
        result: 
    }
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
    
})