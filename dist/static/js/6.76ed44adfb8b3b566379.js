webpackJsonp([6],{JJsv:function(t,i){},lZFt:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{staticStyle:{width:"70%","margin-left":"15%"}},[n("div",{staticClass:"maindiv",class:{red:t.backgroundColorred,green:t.backgroundColorgreen}},[n("div",{staticClass:"testdiv",class:{location:t.islocation,rotate:t.isrotate,translation:t.istranslation,animation:t.isanimation}},[t._v("this is a div")])]),t._v(" "),n("div",{staticStyle:{width:"20%"}},[n("el-button",{on:{click:t.changebackgroundColor}},[t._v("更换背景颜色")]),t._v(" "),n("el-button",{on:{click:t.changelocation}},[t._v(t._s(t.thislocation))]),t._v(" "),n("el-button",{on:{click:t.changetranslation}},[t._v(t._s(t.thistranslation))]),t._v(" "),n("el-button",{on:{click:t.changerotate}},[t._v(t._s(t.thisrotate))]),t._v(" "),n("el-button",{on:{click:t.changeanimation}},[t._v(t._s(t.thisanimation))])],1)])])},staticRenderFns:[]};var a=n("VU/8")({name:"change",data:function(){return{backgroundColorred:!0,backgroundColorgreen:"",islocation:"",isrotate:"",istranslation:"",isanimation:"",thislocation:"居中",thisrotate:"平移（循环）",thistranslation:"旋转",thisanimation:"动画"}},methods:{changelocation:function(){this.islocation?(this.islocation=!1,this.thislocation="居中"):(this.islocation=!0,this.thislocation="停止")},changerotate:function(){this.isrotate?(this.isrotate=!1,this.thisrotate="平移（循环）"):(this.isrotate=!0,this.thisrotate="停止")},changetranslation:function(){this.istranslation?(this.istranslation=!1,this.thistranslation="旋转"):(this.istranslation=!0,this.thistranslation="停止")},changeanimation:function(){this.isanimation?(this.isanimation=!1,this.thisanimation="动画"):(this.isanimation=!0,this.thisanimation="停止")},changebackgroundColor:function(){this.backgroundColorred?(this.backgroundColorred=!1,this.backgroundColorgreen=!0):this.backgroundColorgreen?this.backgroundColorgreen=!1:this.backgroundColorred=!0}}},o,!1,function(t){n("JJsv")},"data-v-337743d9",null);i.default=a.exports}});
//# sourceMappingURL=6.76ed44adfb8b3b566379.js.map