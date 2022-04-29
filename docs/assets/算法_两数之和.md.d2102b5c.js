import{_ as n,c as t,o as l,a as e}from"./app.e08cfa65.js";const j='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u7B97\u6CD5/\u4E24\u6570\u4E4B\u548C.md"}',o={},r=e("p",null,"\u4E24\u6570\u4E4B\u548C:\u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u627E\u5230\u6570\u7EC4\u4E2D\u4E24\u6570\u4E4B\u548C\u7B26\u5408\uFF0C\u5E76\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807",-1),a=e("blockquote",null,[e("p",null,"\u7ED9\u5B9Anums=[3,23,2,55,8] target 11,\u90A3\u4E48\u8FD4\u56DE[0,4]")],-1),u=e("blockquote",null,[e("p",null,"\u7B80\u5355\u89E3\u6CD5:\u53CC\u5C42for\u5FAA\u73AF\uFF0C\u66B4\u529B\u67E5\u627E")],-1),c=e("div",{class:"language-"},[e("pre",null,[e("code",null,`let arr = [3, 23, 2, 55, 8];
let len = arr.length;
// \u4E24\u5C42\u5FAA\u73AF\uFF0C\u76F4\u63A5\u6C42\u548C
function foo(target) {
  for (let index = 0; index < len; index++) {
    for (let j = index + 1; j < len; j++) {
      if (arr[index] + arr[j] == target) {
        return [index, j];
      }
    }
  }
}

console.log(foo(11));
`)])],-1),s=e("blockquote",null,[e("p",null,"\u4F7F\u7528\u94FE\u8868")],-1),i=e("div",{class:"language-"},[e("pre",null,[e("code",null,`let arr = [3, 23, 2, 55, 8];
let len = arr.length;
// \u4E24\u5C42\u5FAA\u73AF\uFF0C\u76F4\u63A5\u6C42\u548C
function foo(target) {
  let map = {}; // {needValue:currentIndex}
  for (let i = 0; i < len; i++) {
    let currentValue = arr[i];
    let needValue = target - currentValue;
    if (map[currentValue] !== undefined) {
      return [map[currentValue], i];
    } else {
      map[needValue] = i;
    }
  }
}
console.log(foo(11));

`)])],-1),d=[r,a,u,c,s,i];function _(f,p,g,h,m,x){return l(),t("div",null,d)}var k=n(o,[["render",_]]);export{j as __pageData,k as default};
