"use strict";(self["webpackChunkShmily"]=self["webpackChunkShmily"]||[]).push([[9973],{19973:function(t,s,a){a.r(s),a.d(s,{default:function(){return o}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("MsgWrap",{attrs:{noPadding:""}},[a("div",{staticClass:"wechat-pay",class:t.paySubtype.class},[a("div",{staticClass:"title"},[a("img",{staticClass:"img",attrs:{src:t.iconSrc,"data-is-icon":""}}),a("h4",{staticClass:"text"},[a("span",[t._v(t._s(t.text))]),a("br"),a("span",{staticClass:"tip"},[t._v(t._s(t.paySubtype.text)+" "+t._s(t.tip))])])]),a("div",{staticClass:"bottom"},[t._v("微信转账")])])])},c=[],i=a(92196),r=a.n(i),n={name:"Msg-Wechat-pay",props:{msg:Object},data:()=>({}),computed:{data(){return this.msg.$Wechat.data},text(){return r().get(this.data,"appmsg.wcpayinfo.feedesc")},tip(){return r().get(this.data,"appmsg.title")||"微信转账"},paySubtype(){const t=r().get(this.data,"appmsg.wcpayinfo.paysubtype")+"";switch(t){case"1":return{class:"pay",text:"已转账"};case"3":return{class:"collect",text:"已收钱"};default:return console.warn(`paysubtype ${t}`),{class:"",text:""}}},iconSrc(){switch(this.paySubtype.class){case"collect":return"/static/msg/source/Wechat/img/transfer_ok.png";default:return"/static/msg/source/Wechat/img/transfer.png"}}}},p=n,l=a(1001),u=(0,l.Z)(p,e,c,!1,null,"64775268",null),o=u.exports}}]);