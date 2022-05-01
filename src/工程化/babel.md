### 什么是babel

babel是一个javascript编译器。因为我们大部分js得宿主是浏览器，我们并不能决定用户使用什么样得浏览器。
但是希望我们得代码，可以编写一次，到处运行。

例如：你写了es2020得高级语法，可选链，空值合并，却想在ie中运行，那么你需要babel

## Tip

一般来说，js得提案更新分为以下两种

- 新的语法，例如源代码得let const申明,经过babel后，会编译为var。()=>箭头函数，会编译为普通function函数
- 新的api。 babel检测到后，会自动polyfill(判断有没有，手动实现以下)
  - 新的全局变量Promise
  - 静态方法Array.isArray。
  - 实例方法例如:Array.prototype.includes

## 如何使用babel?
如果你没有使用webpack,rollup构建工具。那么需要CLI工具，可以在终端中使用命令处理文件
> 安装一下：@babel/cli 这个包这样可以使用内置得bin。

然后npx babel app.js   这样就能编译这个文件了，但是编译后得文件会输出到控制台，而且实际上，代码没有变动，因为你没有指定想要转换申明
- 编译文件并输出  npx babel app.js -o dist.js
- 编译文件夹并输出  npx babel src -d dist
- 使用插件   --plugins （额外安装一个@babel/core） npx babel app.js -o dist.js --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-proposal-optional-chaining
- 使用预设preset,一个预设相当于所有包  --presets  (额外安装一个@babel/preset-env) npx babel app.js -o dist.js --presets=@babel/preset-env
- 监听文件自动编译 -w
- 添加sourcemap -s   （额外安装一个@babel/core）

> 上面就是cli得一些操作，当然了，使用配置文件还是更方便,配置文件中，配置presets和plugins。

## @babel/preset-env
预设的preset-env，除非是特殊的stage2提案，其余stage3以上都可以用。无论usage还是entry，都希望手动声明corejs:3

- useBuiltIns:"usage" 自动监测，并引入对应浏览器以及当前代码需要的polyfill，按需引入。core-js/stable与regenerator-runtime/runtime
- useBuiltIns:"entry" 。仅根据浏览器版本，引入浏览器所需要的polyfill,不参考代码。 所以这样需要我们先在source中手动引入一下，产物才会被转换。preset-env之前包含@babel/polyfill，因为core-js升级到3，所以废弃了，现在建议直接安装下面两个包即可
```js
import "core-js/stable";
import "regenerator-runtime/runtime";
```
## @babel/polyfill
已被废弃。分解后为core-js/stable与regenerator-runtime/runtime两个包，在使用useBuiltIns:"entry"需要手动引用polyfill时，改为引入这两个包即可，参考上面。

## @babel/plugin-transform-runtime
polyfill会默认修改全局api，为了不污染全局变量，可以作为局部。 可与preset-env的polyfill功能一致，使用一方即可
```js
{
  "presets": [
    // [
    //   "@babel/preset-env",
    //   {
    //     "useBuiltIns": "usage", //entry
    //     "corejs": 3
    //   }
    // ]
  ],
  "targets": {
    // "ie": "7"
    // "chrome": "ie11"
    "ie": "11"
  },
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}

```
## @babel/standalone
非node库，可在浏览器中使用 (未能测试成功)
在浏览器中，可以勉强使用一下全量的polyfill
```js
<script src="https://cdn.jsdelivr.net/npm/babel-polyfill@6.26.0/dist/polyfill.min.js"></script>
```

如果你有使用构建工具,那么构建工具肯定有对应得工具包。可以参考[交互式设置指南](https://babel.docschina.org/setup.html)

## 共性

无论你使用cli终端编译，还是使用已有得构建工具。都会出现以下疑问。

- 我可能并不需要特别低得版本得js，那么我怎么告诉babel呢。因为越低版本得js，build耗时更长，build产物体积越大。根据targets设定的浏览器
- 实际上假设对于所有得语法，babel都有单独维护得包。[包仓库](https://github.com/babel/babel/tree/main/packages)
例如：babel-plugin-transform-arrow-functions 如果你仅仅是想转换箭头函数，那么只需要安装这一个包就行，那么编译代码，仅仅只会转换箭头函数。  使用@babel/preset-env


