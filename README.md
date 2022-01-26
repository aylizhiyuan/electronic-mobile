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

4. 新增husky & lint-staged 
```

"husky": "^4.3.8", (husky版本目前有些问题，暂时搞到4.3.8)
"lint-staged": "^12.3.1",


在package.json中添加钩子
"lint-staged": {
    "src/**/*.{ts,tsx}": [
      "prettier --write",
      "eslint",
      "git add"
    ],
    "src/**/*.{scss,css}": [
      "prettier --write",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
  
然后新增几个命令

"start": "cross-env BUILD_ENV=local yarn build --watch",
"build": "cross-env NODE_ENV=production taro build --type weapp",
"ut": "jest --config ./jest.config.js --no-cache --coverage",
"lint": "eslint --ext .ts,.tsx src --fix",
"format": "prettier --write \"src/**/*.ts\" \"src/**/*.tsx\" \"src/**/*.scss\"",  
```


5. 调整项目的打包配置

```


```







