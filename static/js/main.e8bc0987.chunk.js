(this.webpackJsonpfibonacci=this.webpackJsonpfibonacci||[]).push([[0],{18:function(n,e,t){n.exports=t(29)},23:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(12),o=t.n(i),c=(t(23),t(2)),s=t(4),l=t(5),u=t(17);function m(){var n=Object(s.a)(['\n  input[type="submit"],\n  input[type="text"] {\n    height: 3em;\n    line-height: 3em;\n    outline: none;\n  }\n  input[type="text"] {\n    padding: 0 5px 0 5px;\n    width: 100%;\n    border: 1px solid #ccc;\n  }\n  input[type="text"]:focus {\n    border: 1px solid #3f51b5;\n  }\n  input[type="submit"] {\n    border: none;\n    background: #3f51b5;\n    color: #f1f1f1;\n    width: 33%;\n    transition: all 0.3s linear;\n    margin-top: 5px;\n  }\n  input[type="submit"]:active {\n    transform: scale(0.8);\n  }\n  .error {\n    color: #dd2c00;\n  }\n']);return m=function(){return n},n}var p=l.a.form(m()),d=function(n){var e=n.addNiterations,t=Object(u.a)(),a=t.register,i=t.handleSubmit,o=t.errors;return r.a.createElement(p,{onSubmit:i((function(n,t){n.nIterations=parseInt(n.nIterations),console.log(n),e(n),t.target.reset()}))},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nIterations"},"Number of Iterations *"),r.a.createElement("input",{type:"text",name:"nIterations",id:"nIterations",ref:a({required:!0,pattern:/^\d+$/})}),o.nIterations&&"required"===o.nIterations.type&&r.a.createElement("span",{className:"error"}," Number of Iterations is required "),o.nIterations&&"pattern"===o.nIterations.type&&r.a.createElement("span",{className:"error"},"the number of iterations must be a positive number")),r.a.createElement("input",{type:"submit",value:"Send"}))},f=t(16);function b(){var n=Object(s.a)(["\n  width: 100%;\n  height: 400px;\n"]);return b=function(){return n},n}var h=l.a.div(b()),v=function(n){var e=[{label:"Series Fibonacci",data:function(n){var e=[];if(e.push([1,0]),1===n)return e;if(e.push([2,1]),2===n)return e;for(var t=3;t<=n;t++)e.push([t,e[t-2][1]+e[t-3][1]]);return e}(n.nIterations)}];return r.a.createElement(h,null,r.a.createElement(f.Chart,{data:e,axes:[{primary:!0,type:"linear",position:"bottom"},{type:"linear",position:"left"}]}))};function x(){var n=Object(s.a)(["\n  margin: auto;\n\n  h1 {\n    text-align: center;\n    color: #f1f1f1;\n  }\n\n  .col {\n    background: #f1f1f1;\n    padding: 10px;\n    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);\n    margin-bottom: 10px;\n  }\n  h2 {\n    text-align: center;\n  }\n  @media screen and (min-width: 800px) {\n    width: 800px;\n    .row {\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-start;\n    }\n    .col {\n      width: 48%;\n    }\n  }\n"]);return x=function(){return n},n}var g=l.a.div(x()),E=function(){var n=Object(a.useState)(null),e=Object(c.a)(n,2),t=e[0],i=e[1];return r.a.createElement(g,null,r.a.createElement("h1",null,"Fibonacci"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(d,{addNiterations:function(n){i(n)}})),r.a.createElement("div",{className:"col"},t?r.a.createElement(v,{nIterations:t.nIterations}):r.a.createElement("h2",null," Graph"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e8bc0987.chunk.js.map