"use strict";(self["webpackChunkShmily"]=self["webpackChunkShmily"]||[]).push([[5605],{25605:function(t,s,i){i.r(s),i.d(s,{default:function(){return m}});var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("MsgWrap",{attrs:{noPadding:""}},[i("div",{staticClass:"wechat-chatRecord",attrs:{target:"_blank"},on:{click:function(s){t.dialogVisible=!0}}},[i("h4",[t._v(t._s(t.title))]),i("div",{staticClass:"description",domProps:{innerHTML:t._s(t.des)}}),i("div",{staticClass:"bottom"},[t._v("聊天记录")]),i("el-dialog",{staticClass:"dialog-chatList",attrs:{"append-to-body":!0,fullscreen:!0,title:t.title,visible:t.dialogVisible},on:{"update:visible":function(s){t.dialogVisible=s}}},t._l(t.datalist,(function(s,e){return i("div",{key:e,staticClass:"chatWrap"},[i("div",{staticClass:"left"},[i("img",{staticClass:"avatar",attrs:{src:t.avatarUrl(s)}})]),i("div",{staticClass:"center"},[i("div",{staticClass:"row"},[i("div",{staticClass:"info"},[i("span",{staticClass:"name"},[t._v(t._s(s.sourcename))]),i("span",{staticClass:"time"},[t._v(t._s(s.sourcetime))])]),s.fullmd5?i("img",{attrs:{src:t.chatUrl(e,s.fullmd5)},on:{click:function(i){return t.previewImg(e,s.fullmd5)}}}):t._e(),i("hr")])]),i("div",{staticClass:"right"})])})),0)],1)])},a=[],r=i(92196),l=i.n(r),n={name:"Msg-Wechat-chatRecord",props:{msg:Object},data:()=>({dialogVisible:!1}),computed:{item(){return this.msg.$Wechat.webData},url_pre(){return l().get(this.item,"$url_pre")},title(){return l().get(this.item,"content.msg.appmsg.title")},des(){const t=l().get(this.item,"content.msg.appmsg.recorditem.recordinfo.desc","").replace(/(\r\n|\r|\n)/g,"<br/>");return t},datalist(){return l().get(this.item,"content.msg.appmsg.recorditem.recordinfo.datalist.dataitem",[])||[]}},methods:{avatarUrl(t){const s=l().get(t,"dataitemsource.fromusr");return`${this.url_pre}/avatar/${s}.png`},chatUrl(t,s){const i=this.item.msgId;return`${this.url_pre}/chatList/${i}/${t}_${s}.jpg`},previewImg(t,s){const i=this.datalist.map(((t,s)=>({i:s,fullmd5:t.fullmd5}))).filter((t=>t.fullmd5)).map((t=>this.chatUrl(t.i,t.fullmd5)));this.$hevueImgPreview({multiple:!0,nowImgIndex:i.findIndex((i=>i==this.chatUrl(t,s))),imgList:i})}}},c=n,d=i(1001),o=(0,d.Z)(c,e,a,!1,null,"58562aa8",null),m=o.exports}}]);