(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43858226"],{"2f1e":function(t,e,s){},7672:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticClass:"circle-main-box",style:[{width:t.size+"px",height:t.size+"px"}]},[s("svg",{staticClass:"circle",attrs:{width:t.size,height:t.size}},[s("circle",{attrs:{r:t.radius,cx:t.cx,cy:t.cy,fill:"transparent",stroke:"rgba(153,202,251,.2)","stroke-width":t.strokeWidth}}),s("circle",{attrs:{r:t.radius,cx:t.cx,cy:t.cy,fill:"transparent",stroke:"rgba(153,202,251,1)","stroke-width":t.strokeWidth,"stroke-linecap":"round","stroke-dasharray":t.circumference,"stroke-dashoffset":t.progress}})]),s("span",{staticClass:"count-num"},[t._v(t._s(t.countDown))])]),s("a-button",{staticClass:"btn",attrs:{disabled:t.disabled},on:{click:t.run}},[t._v("Run")])],1)},i=[],n={data:function(){return{num:5,strokeWidth:10,size:120,percentage:100,disabled:!1}},computed:{cx:function(){return this.size/2},cy:function(){return this.size/2},radius:function(){return(this.size-this.strokeWidth)/2},countDown:function(){return Math.ceil(this.num*this.percentage/100)},circumference:function(){return 2*Math.PI*this.radius},progress:function(){return(1-this.percentage/100)*this.circumference}},methods:{run:function(){var t=this;this.disabled=!0,this.timer=setInterval((function(){t.percentage-=.1,t.percentage<=0&&(clearInterval(t.timer),t.timer=null,t.disabled=!1,t.percentage=100)}),1e3*this.num/100/10)}}},c=n,a=(s("f253"),s("2877")),u=Object(a["a"])(c,r,i,!1,null,"2067c8bc",null);e["default"]=u.exports},f253:function(t,e,s){"use strict";var r=s("2f1e"),i=s.n(r);i.a}}]);
//# sourceMappingURL=chunk-43858226.7de4de14.js.map