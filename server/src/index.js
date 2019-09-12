// index.js

'use strict'

const Koa = require('koa')
const KoaRouter = require('koa-router')
const MainController = require('./controllers/MainController')
const cors = require('@koa/cors')

const router = new KoaRouter()

router.get('/hello', MainController.mainRoute)
const app = new Koa()
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  await next()
})
app.use(router.routes()).use(router.allowedMethods())
app.use(cors())

app.listen(1234, () => console.log('Listening on port 1234'))
