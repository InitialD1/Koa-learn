# 一Koa起步

# 1.项目初始化

执行yarn init,生成package.json

```
yarn init
```

# 2.安装Koa

```
yarn add Koa
```

## 编写服务程序

编写`src/01_quickstart.js`

1. 导入koa包
2. 实例化app对象
3. 编写中间件
4. 启动服务, 监听3000端口

```
// 一. 导入koa
const Koa = require('koa')
// 二. 实例化对象
const app = new Koa()
// 三. 编写中间件
app.use((ctx) => {
  ctx.body = 'hello Koa2'
})
// 四. 启动服务
app.listen(3000, () => {
  console.log('server is running on http://localhost:3000')
})
```

> 注意

如果没有`ctx.body`返回给客户端，最终会得到Not Found

## 4. 使用nodemon

安装nodemon, 使用nodemon启动服务

```
sudo yarn global add nodemon
nodemon src/index.js
```

