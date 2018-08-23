# 门户

## 兼容性

兼容IE9+，如需查询特性兼容性，使用 [caniuse](https://caniuse.com)

## 目录结构

`src` 下文件夹目录结构用途如下：

- `assets`: 需要 `webpack` 编译的静态文件资源
- `components`: 公共组件
- `libs`: 自己编写的库文件
- `router`: 路由
- `store`: `vuex` 相关文件
- `styles`: 公共样式
- `views`: 视图组件

## 编码要求

- 所有文件使用小写字母，半角符号命名，字母间使用下划线分割
- 项目相关组件（主要在 `view` 和 `component` 中，以 `Y` 作为前缀），如 `<y-menu>`
- 项目使用 `Sass` 作为预处理器，组件中的样式代码需要使用 `scoped` 包裹作用域，如，`<style lang="scss" scoped>`。公共样式写在 `styles` 文件夹中。项目样式使用 `BEM` 命名法
- 项目中的样式需要按照字母表顺序排列，如
  ```
  .foo {
    background: gray;
    height: 56px;
    line-height: 56px;
    position: fixed;
    z-index: 100;
  }
  ```
- 项目使用 [JSDoc](http://usejsdoc.org/) 风格注释代码，且需要确保每一个函数都使用 `JSDoc` 注释

## 协作要求

每开发一个需求需要从 `master` 切出一个分支，分支名格式如，`[类型_谁_分支功能]`，其中，类型约定如下几种：

- b: BUG
- f: 新特性
- d: 修改文档
- o: 优化
- t: 测试

开发完后合并到 `test` 分支，并推送到 `gitlab`，具体操作如下：

```
git checkout master

git checkout -b f_ax_add_about

git commit -m "添加关于我们相关页面"

git checkout test

git merge f_ax_add_about

git push origin test
```


# 已知BUG:
- PC、手机设备判断兼容性不行，需要修改
- 很多字体目前还使用默认字体，需要更换
- 尾部微信提示
