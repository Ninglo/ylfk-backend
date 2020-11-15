const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const body = require('koa-body')
const cors = require('koa2-cors')

const userApi = require('./routes/users')
const actionApi = require('./routes/actions')
const courseApi = require('./routes/courses')

app.use(body({ Multipart: true }))
app.use(cors())
app.use(serve('./assets'))
app.use(userApi.routes())
app.use(courseApi.routes())
app.use(actionApi.routes())

module.exports = app
