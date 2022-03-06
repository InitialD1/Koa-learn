const Router = require('koa-router')
const router = new Router({prefix: '/users'})
const db = [
    {id: 1, name: 'xiaoming', age:18},
    {id: 2, name: 'xiaohuang', age:19},
    {id: 3, name: 'xiaoxiao', age:20}
]
router.get('/', (ctx) => {
    const {start = 0, end = 0} = ctx.query
    if (start < end) ctx.throw(422)
    const res = db.filter((item) => item.age >= start && item.age <= end)
    res.length == 0 ? ctx.throw(404) : ctx.body = res
})

router.get('/:id', (ctx) => {
    const id = ctx.params.id
    const res = db.filter((item) => item.id == id)
    if (!res[0]) ctx.throw(404)
    ctx.body = res[0]
})

router.get('/:id/ariticle/:aid', (ctx) => {

    if (false) {
        ctx.body = {id: 1, name: 'ding'}
    }else {
        ctx.app.emit('error', {code: 404, message:'资源没有找到'},ctx)
    }
})

router.post('/', (ctx) => {
    console.log(ctx.request.body)
    ctx.body = '创建新用户'
})

module.exports = router
