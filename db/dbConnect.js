const { Sequelize } = require("sequelize");
// 创建数据库连接
const sequelize = new Sequelize('mytest', 'root', '510524xzw', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // 生成的sql语句不在控制台打印 默认值 logging: console.log
})
// 以对象的形式暴露
module.exports = sequelize;
