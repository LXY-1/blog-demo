(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"gitignore忽略文件失效问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitignore忽略文件失效问题","aria-hidden":"true"}},[t._v("#")]),t._v(" .gitignore忽略文件失效问题")]),t._v(" "),s("p",[t._v("当我们的文件已经提交到了git仓库，此时再设置相关的文件/文件夹为忽略文件，会发现失效了。因为gitignore只对未提交文件有效。\n此时解决方法是:")]),t._v(" "),s("p",[s("strong",[t._v("1.首先我们先删掉已经提交的文件")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git rm -r --cached .settings；\n")])])]),s("p",[s("strong",[t._v("2.提交并备注")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git commit -m 'delete .settings'；\n")])])]),s("p",[s("strong",[t._v("3.提交到远程仓库")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git push origin master ；\n")])])]),s("p",[s("strong",[t._v("4.在本地文件夹中添加.gitignore文件并添加需要忽略提交的文件")])]),t._v(" "),s("p",[s("strong",[t._v("5.然后执行如下命令：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git add .gitignore；提交至暂存区\n\ngit commit -m 'add .gitignore' ；提交至本地仓库\n\ngit push origin master ；提交至远程仓库\n")])])])])}],!1,null,null,null);e.default=n.exports}}]);