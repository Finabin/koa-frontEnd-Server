# myKoa

koa 项目后台

## 项目介绍

本项目是一个基于 koa 框架的后台项目，用于处理前端请求并返回相应的数据。项目包含以下功能：

## 技术栈

- 后端：koa 框架
- 数据库：MySql

## 项目结构

项目包含以下目录和文件：

- app.js：项目的入口文件，用于启动服务器和配置中间件。
- config.js：项目的配置文件，包含数据库连接信息和阿里云 OSS 配置信息。
- controllers：控制器目录，包含处理用户、文章和评论请求的控制器。
- models：模型目录，包含用户、文章和评论的模型定义。
- routes：路由目录，包含用户、文章和评论的路由定义。
- utils：工具目录，包含处理图片上传的函数。

## 使用说明

1. 克隆项目到本地：

```
git clone https://github.com/Finabin/koa-frontEnd-Server.git
```

2. 安装依赖：

```
cd myKoa
npm install
```

3. 配置数据库连接信息：
   在 db/dbConnect.js 文件中，将数据库连接信息修改为你的数据库信息。

4. 启动项目：

```
npm run dev
```

## 注意事项

- 请确保你的数据库已经创建，并且已经导入数据。

## 关于数据库

- 等待数据库建好后提供相应文件
