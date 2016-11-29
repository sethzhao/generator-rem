# 简介
这是一个yeoman generator。生成使用rem方式适配移动终端的web工程。

# 使用方法

## 安装包
```
npm install -g yo
npm install -g generator-rem
```

## 创建项目
```
yo rem projectname
```

### 参数说明
remUnit是设计稿宽度除以10。
baseDpr是物理像素和css像素的比值。
可在gulpfile.js更改。

## 安装项目
```
cd projectname
npm install
```

## 启动项目
```
gulp
```

# 参考文章
[使用Flexible实现手淘H5页面的终端适配](http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)