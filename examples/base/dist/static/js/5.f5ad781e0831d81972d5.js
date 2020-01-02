webpackJsonp([5],{JDyN:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=i("1Va+"),o=i("QmSG"),s={components:{Btn:i("AtgF").a},data:function(){return{isSingleMode:o.a}},computed:{mode:function(){return this.isSingleMode?"单例模式":"多例模式"}},methods:{pageTurnNumberList:function(){this.$router.push({name:"mainNumberList"})},change:function(n){t.a.set("isSingleMode",n),window.location.reload()}}},r={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("vi-page",[i("div",{class:n.$style.config},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"mode"},[i("span",{staticClass:"mode-placeholder"},[n._v("使用单例模式")]),n._v(" "),i("vi-switch",{on:{change:n.change},model:{value:n.isSingleMode,callback:function(e){n.isSingleMode=e},expression:"isSingleMode"}})],1),n._v(" "),i("div",{staticClass:"instruction"},[i("div",{staticClass:"group"},[n._v("\n          单例模式是指系统中一个路由对应的组件(缓存实例)只存在一个,\n          比如A=>B=>C=>A,系统中只会存在3个缓存实例,\n          所以路由和缓存实例(key)是一一对应的。\n        ")]),n._v(" "),i("div",{staticClass:"group"},[n._v("\n          多例模式是指系统中一个路由对应的组件(缓存实例)可以存在多个,\n          比如A=>B=>C=>A,系统中会存在4个缓存实例,\n          所以路由和缓存实例(key)是一对多的关系。\n        ")]),n._v(" "),i("div",{staticClass:"group"},[n._v("\n          多例模式系统性能存在浪费,\n          多例模式可以说是简单模式,\n          如果A要回跳C页面需要C页面刷新,只能push到C页面,\n          多例模式能做的事情单例模式都能实现。\n        ")]),n._v(" "),i("div",{staticClass:"group"},[n._v("\n          单例模式系统的性能高,\n          有灵活的手动清除缓存的api,\n          如果A要回跳C页面需要C页面刷新,\n          可以调用api清除C页面缓存然后back到C页面(推荐)。\n          也可以直接push到C页面(但是这样浏览器会比执行back多存历史记录)\n        ")])])]),n._v(" "),i("div",{staticClass:"sticky-footer"},[i("btn",{nativeOn:{click:function(e){return n.pageTurnNumberList(e)}}},[n._v(n._s(n.mode)+"尝试")])],1)])])},staticRenderFns:[]};var a=i("VU/8")(s,r,!1,function(n){this.$style=i("O1KT")},null,null);e.default=a.exports},O1KT:function(n,e,i){var t=i("xi+/");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);i("rjj0")("48283f3e",t,!0,{})},"xi+/":function(n,e,i){(e=n.exports=i("FZ+f")(!1)).push([n.i,"\n.config-2AWsS_0 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%;\n  padding: 0.1rem;\n}\n.config-2AWsS_0 .wrapper {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%;\n}\n.config-2AWsS_0 .wrapper .mode {\n  font-size: 0.24rem;\n  color: #41b883;\n  text-align: right;\n  margin-bottom: 0.2rem;\n  line-height: 0.3rem;\n}\n.config-2AWsS_0 .wrapper .mode .mode-placeholder {\n  font-size: 0.16rem;\n  vertical-align: middle;\n}\n.config-2AWsS_0 .wrapper .instruction {\n  font-size: 0.16rem;\n  color: #41b883;\n  line-height: 0.2rem;\n}\n.config-2AWsS_0 .wrapper .instruction .group {\n  margin-bottom: 0.15rem;\n}\n.config-2AWsS_0 .sticky-footer {\n  -webkit-transform: translate(0, -100%);\n          transform: translate(0, -100%);\n}\n",""]),e.locals={config:"config-2AWsS_0"}}});