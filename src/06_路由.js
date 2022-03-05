const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
    if (ctx.url == '/') {
        ctx.body = '这是主页内容'
    }else if (ctx.url == '/users') {
        if (ctx.method == 'GET') {
            ctx.body = '获取用户信息'
        }else if (ctx.request.method == 'POST') {
            ctx.body = '创建新用户'
        }else {
            ctx.status = 405
        }
    }else {
        //ctx.status = 404
    }
})

app.listen(3000, () => {
    console.log('server is running at http://localhost/3000')
})