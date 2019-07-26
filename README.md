# evolution
一个不断改进的vue项目

### Project setup

如果终端没用翻墙，建议使用cnpm，因为依赖中的chromium需要访问google下载
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### 构建特征检测工具,需要全局安装 modernizr (npm i modernizr -g)

会根据 modernizr.config.json配置文件，构建检测工具到 src/utils/modernizr.js
```
npm run modernizr
```

### 将png, jpg图片实时转换webp

启动一个node实时监控../src/assets中的图片，转换成webp图片。
```
npm run img2webp
```

### analysis tool for performance testing 需要全局安装 hiper (npm i Hiper -g)
```
npm run analyse
```

### 打印当前的webpack配置到根目录

wewbpack.dev.js是开发环境下的配置
wewbpack.prod.js是生产环境下的配置
配置是只读的，不会被当前webpack解析

```
npm run webpack
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
