import{_ as e,c as n,o as r,b as t}from"./app.956ff0a1.js";const f='{"title":"\u5192\u6CE1\u6392\u5E8F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5192\u6CE1\u6392\u5E8F","slug":"\u5192\u6CE1\u6392\u5E8F"},{"level":2,"title":"\u9009\u62E9\u6392\u5E8F","slug":"\u9009\u62E9\u6392\u5E8F"}],"relativePath":"\u7B97\u6CD5/\u6392\u5E8F.md"}',a={},l=t(`<p>\u8FD9\u662F<a href="https://www.cnblogs.com/AlbertP/p/10847627.html" target="_blank" rel="noopener noreferrer">\u6392\u5E8F</a></p><p><strong>const arr=[20,3,5,1,7,4,8,9,4,43,23,2]</strong></p><h2 id="\u5192\u6CE1\u6392\u5E8F" tabindex="-1">\u5192\u6CE1\u6392\u5E8F <a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a></h2><blockquote><p>\u505A\u4E24\u5C42\u5FAA\u73AF\u3002\u5916\u5C42\u4E3A\u8F6E\u6570\uFF0C\u5185\u5C42\u4E3A\u5BF9\u6BD4\u3002\u503C\u4E5F\u662F\u5185\u5C42\u7D22\u5F15\u4E0E\u7D22\u5F15+1\u5BF9\u6BD4</p></blockquote><div class="language-"><pre><code>const arr = [20, 3, 5, 1, 7, 4, 8, 9, 4, 43, 23, 2];
let len = arr.length;
let temp;
// \u5916\u5FAA\u73AF\u63A7\u5236\u8F6E\u6B21\uFF0C3\u4E2A\u6570\u6392\u5E8F\uFF0C\u9700\u89812\u6B21\u3002\u6240\u4EE5\u5916\u5C42\u662Flen-1
// \u5185\u5C42\u6BCF\u6B21\u90FD\u4ECE\u7D22\u5F150\u5F00\u59CB\uFF0C\u5916\u5C42\u5355\u6B21\u7ED3\u675F\uFF0C\u90FD\u53EF\u4EE5\u8BA9\u6570\u7EC4\u5C3E\u90E8\u786E\u8BA4\u6700\u5927\uFF0C\u6240\u4EE5\u5185\u90E8\u662Flen-\u5916\u5C42\u5DF2\u5B8C\u6210\u7D22\u5F15
for (let i = 0; i &lt; len - 1; i++) {
  for (let j = 0; j &lt; len - i; j++) {
    if (arr[j] &gt; arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

</code></pre></div><h2 id="\u9009\u62E9\u6392\u5E8F" tabindex="-1">\u9009\u62E9\u6392\u5E8F <a class="header-anchor" href="#\u9009\u62E9\u6392\u5E8F" aria-hidden="true">#</a></h2><blockquote><p>\u4E24\u5C42\u5FAA\u73AF\uFF0C\u7528\u5916\u5C42\u7B2C\u4E00\u4E2A\u505A\u4E00\u4E2A\u6700\u5C0F\u503C\u7D22\u5F15\uFF0C\u4E0E\u5185\u5C42\u5BF9\u6BD4\uFF0C\u4E0D\u65AD\u63A8\u79FB\u6700\u5C0F\u503C\u7D22\u5F15\uFF0C\u6700\u540E\u4EA4\u6362\u4F4D\u7F6E\u3002\u5185\u5C42\u8D77\u70B9(\u5916\u5C42+1)</p></blockquote><div class="language-"><pre><code>const arr = [20, 3, 5, 1, 7, 4, 8, 9, 4, 43, 23, 2];
let len = arr.length;
let temp;
// \u9009\u62E9\u6392\u5E8F\u3002 \u4ECE\u9996\u5230\u5C3E\uFF0C\u6BCF\u6B21\u56FA\u5B9A\u6700\u5C0F\u7D22\u5F15\uFF0C\u4E00\u76F4\u5411\u540E\u4E0D\u65AD\u5237\u65B0\u6700\u5C0F\u503C\u7684\u7D22\u5F15,\u7136\u540E\u66FF\u6362\u4E0E\u5916\u5C42\u5FAA\u73AF\u66FF\u6362
for (let i = 0; i &lt; len-1; i++) {
  let minIndex = i;
  for (let j = i + 1; j &lt; len; j++) {
    if (arr[minIndex] &gt; arr[j]) {
      minIndex = j;
    }
  }
  temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

console.log(arr);

</code></pre></div>`,8),o=[l];function i(c,s,d,p,_,h){return r(),n("div",null,o)}var g=e(a,[["render",i]]);export{f as __pageData,g as default};
