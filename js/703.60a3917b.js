"use strict";(self["webpackChunkShmily"]=self["webpackChunkShmily"]||[]).push([[703],{40244:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("MsgWrap",{attrs:{noPadding:""}},[a("File",{attrs:{ext:t.ext,fileName:t.text,size:t.size,type:null,url:t.url_file},scopedSlots:t._u([{key:"appInfo",fn:function(){return[a("div",{staticClass:"appInfo"},[a("img",{staticClass:"icon-app",attrs:{src:t.appIcon,"data-is-icon":""}}),a("span",{staticClass:"appName"},[t._v(t._s(t.appname))])])]},proxy:!0}])})],1)},p=[],n=a(64317),i=a(92196),r=a.n(i),c={name:"Msg-Wechat-file",props:{msg:Object},data:()=>({}),computed:{item(){return this.msg.$Wechat.webData},url_file(){return r().get(this.item,"$url_file")},appname(){return r().get(this.item,"content.msg.appinfo.appname")},appmsg(){return r().get(this.item,"content.msg.appmsg",{})},ext(){return r().get(this.appmsg,"appattach.fileext")},text(){return r().get(this.appmsg,"title")},size(){return r().get(this.appmsg,"des")||r().get(this.appmsg,"appattach.totallen")},appIcon(){return r().get(this.item,"content.msg.appinfo.$appicon")||"/static/msg/source/Wechat/img/app.png"}},components:{File:n.Z}},l=c,m=a(1001),u=(0,m.Z)(l,s,p,!1,null,"7c51330f",null),o=u.exports}}]);