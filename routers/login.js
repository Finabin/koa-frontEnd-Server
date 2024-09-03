const UserModel = require('../models/UserModel')
const Router = require('koa-router');
const router = new Router();
const jwt = require('../utils/jwt');



router.post('/userlogin', async (ctx, next) => {
    const { username, password } = ctx.request.body;
    const result = await UserModel.findOne({
        where: {
            userName: username
        }
    });

    if (result.dataValues.password === password) {
        const token = jwt.sign({
            id: result.id,
        })
        ctx.body = {
            status: 200,
            msg: '登录成功',
            data: result,
            satoken: token
        }
    }
    else {
        ctx.body = {
            status: 400,
            msg: '登录失败'
        }
    }
})

router.post('/userlogout', async (ctx, next) => {
    let satoken = ctx.request.body.satoken;
    const vali = jwt.verify(satoken);
    if (vali.status == 1) {
        ctx.body = {
            status: 200,
            msg: '退出成功',
        }
    }
    else {
        ctx.body = {
            status: 400,
            msg: '退出失败'
        }
    }
})

module.exports = router;
