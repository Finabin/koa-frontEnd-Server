require('./db/db');
const koa = require('koa');
const bodyParser = require('koa-bodyparser');  
const cors = require('@koa/cors');
// const cargoInit = require('./cargo')
const Router = require('koa-router');
const loginRoter = require('./routers/login');

const router = new Router();
//分级路由应用
router.use('/login', loginRoter.routes());

const app = new koa();

//koa 跨域设置
app.use(cors({
  origin: "*",
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
// app.use(cargoInit);
//koa body 解析
app.use(bodyParser()); 

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8088, () => {
  console.log('Server is running on port 8088');
})