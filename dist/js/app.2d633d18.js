(function(t){function e(e){for(var o,r,a=e[0],u=e[1],s=e[2],d=0,b=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&b.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(o=!1)}o&&(c.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},c=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/diary/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10ee":function(t,e,n){},1493:function(t,e,n){"use strict";n("940e")},"2e5f":function(t,e,n){},3882:function(t,e,n){},4303:function(t,e,n){"use strict";n("10ee")},4512:function(t,e,n){"use strict";n("2e5f")},"4b98":function(t,e,n){"use strict";n("b8fe")},"4bc1":function(t,e,n){"use strict";n("3882")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b0c0");var o=n("7a23"),i={class:"app"};function c(t,e,n,c,r,a){var u=Object(o["z"])("router-view");return Object(o["s"])(),Object(o["f"])("div",i,[Object(o["h"])(u)])}var r=n("5530"),a=n("5502"),u={computed:Object(r["a"])({},Object(a["e"])(["noteList"])),methods:Object(r["a"])({},Object(a["b"])(["loadNotes","uploadNotes"])),watch:{noteList:{handler:function(){this.uploadNotes()},deep:!0}},mounted:function(){this.loadNotes()}};n("5baa");u.render=c;var s=u,l=n("6c02");Object(o["v"])("data-v-519f4e65");var d={class:"main-page"},b={class:"main"},f={class:"main__note-list"};function m(t,e,n,i,c,r){var a=Object(o["z"])("my-header"),u=Object(o["z"])("note-item"),s=Object(o["z"])("note-item-form");return Object(o["s"])(),Object(o["f"])("div",d,[Object(o["h"])(a,{onButtonClick:e[0]||(e[0]=function(t){return c.isFormVisible=!c.isFormVisible})}),Object(o["g"])("main",b,[Object(o["g"])("div",f,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(t.noteList,(function(e){return Object(o["s"])(),Object(o["d"])(u,{class:"main__note-item",key:e.id,noteItem:e,onDelete:t.deleteNote},null,8,["noteItem","onDelete"])})),128)),Object(o["F"])(Object(o["h"])(s,{onConfirm:r.onConfirm},null,8,["onConfirm"]),[[o["D"],c.isFormVisible]])])])])}Object(o["t"])();var p={data:function(){return{isFormVisible:!1}},computed:Object(r["a"])({},Object(a["e"])(["noteList"])),methods:Object(r["a"])(Object(r["a"])({},Object(a["d"])(["deleteNote","updateNote"])),{},{onConfirm:function(t){t.title.length&&this.updateNote(t),this.isFormVisible=!1}}),mounted:function(){document.body.style.backgroundColor="#f9f3e5"}};n("4512");p.render=m,p.__scopeId="data-v-519f4e65";var O=p;Object(o["v"])("data-v-fffa9b22");var j={key:0,class:"note-page"},v={class:"main"},h={class:"main__list"};function y(t,e,n,i,c,r){var a=Object(o["z"])("my-header"),u=Object(o["z"])("todo-item"),s=Object(o["z"])("todo-item-form");return c.noteItemCopy?(Object(o["s"])(),Object(o["f"])("div",j,[Object(o["h"])(a,{title:c.noteItemCopy.title,onButtonClick:e[0]||(e[0]=function(t){return c.isFormVisible=!c.isFormVisible})},null,8,["title"]),Object(o["g"])("main",v,[Object(o["g"])("div",h,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(c.noteItemCopy.todoList,(function(t){return Object(o["s"])(),Object(o["d"])(u,{class:"main__item",key:t.id,todoItem:t,onToggle:r.onToggle,onDelete:r.onDelete},null,8,["todoItem","onToggle","onDelete"])})),128)),Object(o["F"])(Object(o["h"])(s,{onConfirm:r.onConfirm},null,8,["onConfirm"]),[[o["D"],c.isFormVisible]])])])])):Object(o["e"])("",!0)}Object(o["t"])();n("a9e3"),n("4de4");var g={data:function(){return{isFormVisible:!1,noteItemCopy:null}},computed:Object(r["a"])(Object(r["a"])({},Object(a["c"])(["getNoteById"])),{},{noteItem:function(){return this.getNoteById(Number(this.$route.params.id))}}),methods:Object(r["a"])(Object(r["a"])({},Object(a["d"])(["updateNote"])),{},{onToggle:function(t){this.noteItemCopy.todoList.forEach((function(e){e.id===t&&(e.isComplete=!e.isComplete)}))},onDelete:function(t){this.noteItemCopy.todoList=this.noteItemCopy.todoList.filter((function(e){return e.id!==t}))},onConfirm:function(t){t.title.length&&this.noteItemCopy.todoList.push(t),this.isFormVisible=!1}}),mounted:function(){this.noteItemCopy=this.noteItem,document.body.style.backgroundColor="#f4d799"},watch:{noteItemCopy:{handler:function(t,e){e&&this.updateNote(t)},deep:!0}}};n("cf87");g.render=y,g.__scopeId="data-v-fffa9b22";var _=g,I=[{name:"main",path:"/",component:O},{name:"note",path:"/note/:id",component:_}],C=Object(l["a"])({history:Object(l["b"])("/diary/"),routes:I}),k=C,N=Object(a["a"])({state:function(){return{noteList:[]}},getters:{getNoteById:function(t){return function(e){for(var n in t.noteList)if(t.noteList[n].id===e)return t.noteList[n]}}},mutations:{deleteNote:function(t,e){t.noteList=t.noteList.filter((function(t){return t.id!==e}))},updateNote:function(t,e){var n=-1;t.noteList.forEach((function(t,o){t.id===e.id&&(n=o)})),~n?t.noteList[n]=e:t.noteList.push(e)}},actions:{loadNotes:function(t){var e=t.commit,n=JSON.parse(localStorage.noteList);Array.isArray(n)&&n.forEach((function(t){e("updateNote",t)}))},uploadNotes:function(t){var e=t.state;localStorage.noteList=JSON.stringify(e.noteList)}}});Object(o["v"])("data-v-7410845c");var L={class:"header"};function V(t,e,n,i,c,r){return Object(o["s"])(),Object(o["f"])("header",L,[Object(o["g"])("h1",{class:"header__title",onClick:e[0]||(e[0]=function(e){return t.$router.push({name:"main"})})},Object(o["B"])(n.title),1),Object(o["g"])("button",{class:"header__button",onClick:e[1]||(e[1]=function(e){return t.$emit("buttonClick")})},"+")])}Object(o["t"])();var w={name:"MyHeader",props:{title:{type:String,default:"Diary"}}};n("4bc1");w.render=V,w.__scopeId="data-v-7410845c";var F=w;Object(o["v"])("data-v-2cf43cd0");var S=["value"];function x(t,e,n,i,c,r){return Object(o["s"])(),Object(o["f"])("textarea",{class:"my-textarea",value:n.modelValue,onInput:e[0]||(e[0]=function(){return r.updateInput&&r.updateInput.apply(r,arguments)}),ref:"myInput",style:Object(o["o"])(r.inputStyle)},"\r\n  ",44,S)}Object(o["t"])();var z={name:"MyInput",props:{modelValue:[String,Number]},data:function(){return{inputHeight:0}},methods:{resize:function(){this.inputHeight="".concat(this.$refs.myInput.scrollHeight,"px")},updateInput:function(t){this.$emit("update:modelValue",t.target.value)}},watch:{modelValue:function(){this.resize()}},computed:{inputStyle:function(){return{height:this.inputHeight}}},mounted:function(){this.resize()}};n("4b98");z.render=x,z.__scopeId="data-v-2cf43cd0";var D=z;Object(o["v"])("data-v-6c4eacf9");var $={class:"note-item__title"},B=Object(o["g"])("p",null,"x",-1),T=[B];function P(t,e,n,i,c,r){return Object(o["s"])(),Object(o["f"])("div",{class:"note-item",onClick:e[1]||(e[1]=function(e){return t.$router.push({name:"note",params:{id:n.noteItem.id}})})},[Object(o["g"])("p",$,Object(o["B"])(n.noteItem.title),1),Object(o["g"])("button",{class:"note-item__button",onClick:e[0]||(e[0]=Object(o["G"])((function(e){return t.$emit("delete",n.noteItem.id)}),["stop"]))},T)])}Object(o["t"])();var M={name:"NoteItem",props:{noteItem:{type:Object,required:!0}}};n("1493");M.render=P,M.__scopeId="data-v-6c4eacf9";var H=M;Object(o["v"])("data-v-4cd60984");var E={class:"note-item"},J=Object(o["g"])("p",null,"✓",-1),G=[J];function q(t,e,n,i,c,r){var a=Object(o["z"])("my-input");return Object(o["s"])(),Object(o["f"])("div",E,[Object(o["h"])(a,{class:"note-item__title",modelValue:c.title,"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.title=t})},null,8,["modelValue"]),Object(o["g"])("button",{class:"note-item__button",onClick:e[1]||(e[1]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},G)])}Object(o["t"])();var A={name:"NoteItemForm",data:function(){return{title:""}},methods:{onClick:function(){this.$emit("confirm",{id:Date.now(),title:this.title,todoList:[]}),this.title=""}}};n("5c1f");A.render=q,A.__scopeId="data-v-4cd60984";var U=A;Object(o["v"])("data-v-41334ebe");var K={class:"todo-item__title"},Q=Object(o["g"])("p",null,"x",-1),R=[Q];function W(t,e,n,i,c,r){return Object(o["s"])(),Object(o["f"])("div",{class:Object(o["n"])(["todo-item",{"todo-item_completed":n.todoItem.isComplete}])},[Object(o["g"])("button",{class:"todo-item__checkbox",onClick:e[0]||(e[0]=Object(o["G"])((function(e){return t.$emit("toggle",n.todoItem.id)}),["stop"]))}),Object(o["g"])("p",K,Object(o["B"])(n.todoItem.title),1),Object(o["g"])("button",{class:"todo-item__button",onClick:e[1]||(e[1]=Object(o["G"])((function(e){return t.$emit("delete",n.todoItem.id)}),["stop"]))},R)],2)}Object(o["t"])();var X={name:"TodoItem",props:{todoItem:{type:Object,required:!0}}};n("4303");X.render=W,X.__scopeId="data-v-41334ebe";var Y=X;Object(o["v"])("data-v-a05cfe7c");var Z={class:"todo-item"},tt=Object(o["g"])("p",null,"✓",-1),et=[tt];function nt(t,e,n,i,c,r){var a=Object(o["z"])("my-input");return Object(o["s"])(),Object(o["f"])("div",Z,[Object(o["h"])(a,{class:"todo-item__title",modelValue:c.title,"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.title=t})},null,8,["modelValue"]),Object(o["g"])("button",{class:"todo-item__button",onClick:e[1]||(e[1]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},et)])}Object(o["t"])();var ot={name:"TodoItemForm",data:function(){return{title:""}},methods:{onClick:function(){this.$emit("confirm",{id:Date.now(),title:this.title,isComplete:!1}),this.title=""}}};n("e8e2");ot.render=nt,ot.__scopeId="data-v-a05cfe7c";var it=ot,ct=[F,D,H,U,Y,it],rt=Object(o["c"])(s);ct.forEach((function(t){rt.component(t.name,t)})),rt.use(N).use(k).mount("#app")},"5baa":function(t,e,n){"use strict";n("c732")},"5c1f":function(t,e,n){"use strict";n("d220")},"940e":function(t,e,n){},"9c8b":function(t,e,n){},a246:function(t,e,n){},b8fe:function(t,e,n){},c732:function(t,e,n){},cf87:function(t,e,n){"use strict";n("9c8b")},d220:function(t,e,n){},e8e2:function(t,e,n){"use strict";n("a246")}});
//# sourceMappingURL=app.2d633d18.js.map