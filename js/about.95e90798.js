"use strict";(self["webpackChunkShmily"]=self["webpackChunkShmily"]||[]).push([[2443],{26708:function(t,e,i){i.r(e),i.d(e,{default:function(){return Q}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"AboutPage"}},[i("div",{staticClass:"top"},[t._m(0),i("div",{staticClass:"panel"},[i("div",{staticClass:"title"},[i("span",{staticClass:"bar"}),i("h4",{ref:"shmily",on:{click:t.w}}),i("span",{staticClass:"typed-cursor typed-cursor--blink",attrs:{"aria-hidden":"true"}},[t._v("_")])]),i("div",{staticClass:"content"},[i("p",[t._v("好像应该说点什么，但我又不知该说些什么。")]),i("p",[t._v("In case I don't see you, Good afternoon, Good evening, and Good night!")]),i("p",{staticStyle:{"text-align":"right","font-size":"12px",cursor:"pointer"},on:{click:function(e){return t.openWin("/#/query?id=msg-qq_s60.json_2010-02-24_10-48-45_c_d9377d_1")}}},[t._v(" ~2008/12/18 - 2019/09/13 > 3921天 ")])])])]),i("div",{staticClass:"bottom"},[i("div",{staticClass:"panel"},[i("div",{staticClass:"img-holder",class:{rotate:t.rotate},on:{click:function(e){t.rotate=!t.rotate}}},[t._m(1)]),i("div",{staticClass:"content"},[i("h4",[t._v("My Love")]),t._l(t.loadingTexts,(function(e,s){return i("p",{key:s},[t._v(t._s(e))])})),t._m(2)],2)])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("a",{attrs:{href:"https://github.com/lqzhgood/Shmily",target:"_blank"}},[s("img",{attrs:{alt:"github",src:i(83446)}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"img-border"},[s("img",{staticClass:"cover front",attrs:{src:i(25006)}}),s("img",{staticClass:"cover back",attrs:{src:i(63863)}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"love"},[t._v(" Made by lqzh, Powered by "),i("span",{staticClass:"heart"},[t._v("♥")])])}],r=i(23796);class o{constructor(t,e={}){(0,r.Z)(this,"working",!1),(0,r.Z)(this,"elm",null),(0,r.Z)(this,"options",{speed:50}),this.elm=t,this.options=Object.assign(this.options,e)}async w(t){if(await this.c(),!this.working){this.working=!0;for(let e=1;e<=t.length;e++)this.elm.innerText=t.substring(0,e),await this.delay();this.working=!1}}async c(){if(this.working)return;this.working=!0;const t=this.elm.innerText;for(let e=t.length-1;e>=0;e--)this.elm.innerText=t.substring(0,e),await this.delay(10);this.working=!1}delay(t=this.options.speed){return new Promise((e=>{setTimeout(e,t)}))}}var a=o,c=i(72217),l=i(56754),g={name:"View-About",async mounted(){this.$store.commit("app/setInitOk"),await this.$nextTick(),this.typing=new a(this.$refs.shmily,{speed:80}),await this.w()},data:()=>({loadingTexts:l.loadingTexts,typing:null,rotate:!1}),methods:{async w(){if(this.typing.working)return;let t=this.$refs.shmily.dataset.index||0;const e=["SHMILY","See How Much I Love You~ ","She History, Much In Leave Years. "];await this.typing.w(e[t]),t++,t>e.length-1&&(t=0),this.$refs.shmily.dataset.index=t},openWin:c.openWin}},h=g,I=i(1001),E=(0,I.Z)(h,s,n,!1,null,"417e073b",null),Q=E.exports},63863:function(t,e,i){t.exports=i.p+"img/cover-back.b935c9e1.png"},25006:function(t,e,i){t.exports=i.p+"img/cover-front.e27bb859.jpg"},83446:function(t){t.exports="data:image/png;base64,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"},23796:function(t,e,i){function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,{Z:function(){return s}})}}]);