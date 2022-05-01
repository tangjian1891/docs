import{_ as o,c as e,o as t,a as n}from"./app.956ff0a1.js";const j='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u7B97\u6CD5/\u6590\u6CE2\u90A3\u5951.md"}',l={},c=n("p",null,"\u6590\u6CE2\u90A3\u5951",-1),s=n("blockquote",null,[n("p",null,"\u5F62\u5982\uFF1A[1,1,2,3,5,8,13,21...]\u7ED9\u51FA\u6307\u5B9A\u7D22\u5F15\uFF0C\u6C42\u51FA\u7D22\u5F15\u7684\u503C")],-1),i=n("div",{class:"language-"},[n("pre",null,[n("code",null,`\u5206\u6790\u9898\u76EE\uFF1A\u51FA\u53E3\u4E3A\u7D22\u5F150\uFF0C\u7D22\u5F151
//  [1,1,2,3,5,8,13,21]
function foo(index){
  if(index===0||index===1){
    return 1 //\u51FA\u53E3
  }else{
    return foo(index-1)+foo(index-2) //\u5047\u8BBE\u662F3\uFF0C\u90A3\u4E48\u5C31\u662Ffoo(2)+foo(1) 1+1,\u4F9D\u6B21\u7C7B\u63A8\u5373\u53EF
  }
}

console.log(foo(5));// 8
console.log(foo(7));// 21
`)])],-1),a=n("blockquote",null,[n("p",null,"\u89E3\u6CD52\uFF1A\u4F7F\u7528\u5FAA\u73AF\u3002\u540C\u6837\u9700\u8981\u8BB0\u5F55\u7D22\u5F150 \u548C\u7D22\u5F151\u3002")],-1),r=n("div",{class:"language-"},[n("pre",null,[n("code",null,`function foo(i) {
  let obj = {
    a: 1,
    b: 1,
  };
  if (i === 0 || i === 1) {
    return i;
  }
  let count;
  for (let index = 2; index <= i; index++) {
    count = obj.a + obj.b;
    obj.a = obj.b;
    obj.b = count;
  }
  return count;
}

console.log(foo(5));//8
console.log(foo(7));//21
`)])],-1),u=[c,s,i,a,r];function d(_,f,p,b,x,g){return t(),e("div",null,u)}var m=o(l,[["render",d]]);export{j as __pageData,m as default};
