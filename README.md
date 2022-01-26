## 小程序构建过程


1. 安装脚手架

```
npm install -g @tarojs/cli

taro init electron 选择模板（可以选择taro-ui）
```

2. 配置prettier 

```
npm install prettier --save-dev
npm install eslint-config-prettier --save-dev
npm install eslint-plugin-prettier --save-dev

在.eslintrc.js中新增preitter的规则,并解决冲突

这里注意下,eslint-plugin-prettier的版本，如果是脚手架生成的，eslint-plugin-prettier的版本
应该在
"eslint-plugin-prettier": "^3.4.1",
```

3. 添加.prettierrc的文件

```
{
  "semi": false,
  "singleQuote": true,
  "arrowParens": "always",
  "trailingComma": "es5",
  "printWidth": 120,
  "tabWidth": 2
}
```







