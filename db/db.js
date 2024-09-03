// 初始化数据库
const sequelize = require('./dbConnect'); // 数据库连接实例
const userModel = require('../models/UserModel');// 用户模型

const md5 = require("md5");


(async function () {
    // 同步模型和数据表(一次性同步所有模型)
    await sequelize.sync({
        alter: true
    })
    console.log('数据库初始化完成')
})()
