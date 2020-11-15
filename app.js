const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const body = require('koa-body')
// const { connect } = require('./models/connect')
// const dbClient = require('./models/db.js')
// app.context.db = dbClient.db('testDB');

//const usersApi = require('./routes/usersTable')
const userApi = require('./routes/user')
const coursesApi = require('./routes/course')
const actionsApi = require('./routes/actionsTable')

app.use(body({Multipart: true}))
app.use(serve('./assets'))
app.use(userApi.routes())
app.use(coursesApi.routes())
app.use(actionsApi.routes())

module.exports = app
