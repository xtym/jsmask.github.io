(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bea428aa"],{"9f8e":function(e,t,n){"use strict";var i=n("b211"),s=n.n(i);s.a},b211:function(e,t,n){},f8bd:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("label",{class:{animate:e.shouldAnimate},attrs:{"data-before":e.before,"data-after":e.after},on:{animationend:e.animationEnded}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{focus:e.onFocus,blur:e.onBlur,keydown:e.onSearch,input:function(t){t.target.composing||(e.value=t.target.value)}}})])])},s=[],a={data:function(){return{value:"",keywords:["iPhone","iPad","Android","Windows Phone"],isFocusing:!1,currentIndex:0,animationTriggerFlag:!1,duration:3e3}},mounted:function(){this.play()},computed:{before:function(){var e=this.keywords[this.currentIndex];return""!=this.value||this.isFocusing?"":e},after:function(){var e="undefined"===typeof this.keywords[this.currentIndex+1]?this.keywords[0]:this.keywords[this.currentIndex+1];return""!=this.value||this.isFocusing?"":e},placeholder:function(){var e=this.keywords[this.currentIndex];return""!=this.value||this.isFocusing?e:""},shouldAnimate:function(){return!(""!=this.value||this.isFocusing)&&this.animationTriggerFlag}},methods:{play:function(){var e=this;this.timer=setTimeout((function(){e.animationTriggerFlag=!0}),this.duration)},onFocus:function(){this.isFocusing=!0,clearTimeout(this.timer),this.timer=null},onBlur:function(){this.isFocusing=!1,this.play()},animationEnded:function(e){if("::after"===e.pseudoElement){this.animationTriggerFlag=!1;var t="undefined"===typeof this.keywords[this.currentIndex+1]?0:this.currentIndex+1;this.currentIndex=t,this.play()}},onSearch:function(e){if(13==e.keyCode){var t=""==this.value?this.keywords[this.currentIndex]:this.value;this.$notification.success({message:t})}}}},r=a,o=(n("9f8e"),n("2877")),u=Object(o["a"])(r,i,s,!1,null,"7fca1bec",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-bea428aa.52b92751.js.map