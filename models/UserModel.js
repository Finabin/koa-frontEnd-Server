const sequelize = require('../db/dbConnect')
const { DataTypes, Model } = require('sequelize');

class User extends Model { }

module.exports = User.init(
    {
        userId: {
            type: DataTypes.INET, field: 'user_id', autoIncrement: true,
            primaryKey: true
        },
        userName: { type: DataTypes.STRING(255), field: 'username' },
        password: { type: DataTypes.STRING(255), field: 'password' },
    }, {
    modelName: 'User',
    timestamps: true,
    tableName: 'user',
    sequelize,
    freezeTableName: true, // 禁止默认的自动复数化
    createdAt: false, // 创建表的时间，关闭默认字段
    // 或者也可以自定义名称 createdAt: "create_time"
    updatedAt: false, // 修改表的时间，关闭默认字段
    // tableNameL "administrators", // 手动定义表名
    // paranoid: true, // 该表的数据不会真正删除，而是增加一列deletedAt记录删除时间(逻辑删除时间)
},
)