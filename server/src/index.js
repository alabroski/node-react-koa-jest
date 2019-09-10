// index.js

'use strict'

const Koa = require('koa')
const KoaRouter = require('koa-router')
const MainController = require('./controllers/MainController')

const router = new KoaRouter()

router.get('/', MainController.mainRoute)
const app = new Koa()
app.use(router.routes()).use(router.allowedMethods())

app.listen(1234, () => console.log('Listening on port 1234'))
