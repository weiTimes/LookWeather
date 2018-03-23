# 使用nodeJs创建天气应用
## 安装依赖
`yarn` or `npm install`
## 使用到的服务
* [天气服务 Openweathermap](https://openweathermap.org/current)
## 使用到的库
* http请求 => request
* 定义命令行变量 => yargs
* 格式化请求参数 => body-parser
* 模板引擎 => ejs
## 1. 使用16行nodeJs代码创建一个简单的天气应用
### 运行
`node index.js -c cityname`

## 2. 使用 NodeJs + Express在30分钟内创建天气应用
> 后台使用express，前台使用ejs模板引擎
### 运行
`node server.js`
*会在控制台看到输出的地址，然后在浏览器打开就可以访问页面了*