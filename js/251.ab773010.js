"use strict";(self["webpackChunkShmily"]=self["webpackChunkShmily"]||[]).push([[251],{60251:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Dev-Face"},[a("el-form",[a("el-form-item",{attrs:{label:"source"}},[a("el-radio-group",{model:{value:e.source,callback:function(t){e.source=t},expression:"source"}},[a("el-radio",{attrs:{label:"QQ"}},[e._v("QQ")])],1)],1)],1),a("el-drawer",{attrs:{"before-close":e.closeFaceAll,"destroy-on-close":!1,visible:e.faceAll.drawer,"append-to-body":"",size:"90%",title:"表情种类"}},[e._l(e.faceArrPre,(function(t){return a("el-card",{key:t.type,staticClass:"faceType",attrs:{shadow:"hover"}},[e._l(t.faces,(function(t){return a("el-image",{key:t.md5,staticClass:"face",attrs:{"preview-src-list":[e.makeFaceUrl(t.type,t.files[0].md5,t.files[0].ext)],src:e.makeFaceUrl(t.type,t.files[0].md5,t.files[0].ext),fit:"scale-down",lazy:""}})})),a("div",{staticClass:"des"},[a("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(a){return e.selectFaceType(t.type)}}},[e._v("选择")]),a("span",{staticClass:"type",on:{click:function(a){return e.openFaceFolder(t.type)}}},[a("el-link",[e._v(e._s(t.type))])],1)],1)],2)})),a("el-drawer",{attrs:{"before-close":e.closeFaceType,"destroy-on-close":!1,title:e.faceType.type,visible:e.faceType.drawer,"append-to-body":"",size:"80%"},on:{"update:visible":function(t){return e.$set(e.faceType,"drawer",t)}}},[e._l(e.faceType.faceTypeArr,(function(t){return a("div",{key:t.alt,staticClass:"faceAlt",attrs:{shadow:"hover"}},e._l(t.files,(function(s){return a("div",{key:s.md5},[a("el-card",{style:{display:"inline-block"},attrs:{"body-style":{display:"inline-block"}}},[a("el-image",{staticClass:"face",attrs:{"preview-src-list":[e.makeFaceUrl(e.faceType.type,s.md5,s.ext)],src:e.makeFaceUrl(e.faceType.type,s.md5,s.ext),fit:"scale-down",lazy:""}}),a("div",{staticClass:"des"},[a("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(a){return e.selectFaceAlt(t,s)}}},[e._v(e._s(s.alias?s.alias.length:"-"))]),a("span",{staticClass:"type",on:{click:function(t){return e.openFaceFolder(e.faceType.type)}}},[a("el-link",[e._v(e._s(t.alt))])],1)],1)],1),s.alias?a("el-card",{staticClass:"alias",style:{display:"inline-block"}},e._l(s.alias,(function(t){return a("el-image",{key:t.md5,attrs:{src:e.makeFaceUrl(e.faceType.type,t.md5,t.ext,!0),fit:"scale-down"}})})),1):e._e()],1)})),0)})),a("el-drawer",{attrs:{"destroy-on-close":!1,title:e.faceType.type+" - "+e.faceAlt.alt,visible:e.faceAlt.drawer,"append-to-body":"",size:"70%"},on:{"update:visible":function(t){return e.$set(e.faceAlt,"drawer",t)}}})],2)],2)],1)},l=[],r=a(53943),c={name:"Dev-Face",data:()=>({source:"QQ",type:"表情",faceArr:[],faceAll:{drawer:!1,typeMaxFace:2,baseUrl:""},faceType:{type:"",loading:!0,drawer:!1,faceTypeArr:[]},faceAlt:{alt:"",drawer:!1,file:{}}}),computed:{faceArrPre(){return this.makeFaceJson(this.faceArr,"type",this.faceAll.typeMaxFace)}},watch:{source:{immediate:!0,async handler(e){e&&await this.getFaceArr(),this.faceAll.drawer=Boolean(e)}}},methods:{closeFaceAll(e){this.source=""},closeFaceType(){this.faceType={type:"",loading:!0,drawer:!1,faceTypeArr:[]}},closeFaceAlt(){this.faceAlt={alt:"",drawer:!1,file:{}}},async getFaceArr(){const{result:{baseUrl:e,faceArr:t}}=await r.Z.get("/msg/modify/file/face/faceArr",{params:{source:this.source,type:this.type}});this.faceAll.baseUrl=e,this.faceArr=t},makeFaceUrl(e,t,a,s=!1){return`${this.faceAll.baseUrl}/${e}/${s?"alias/":""}${t}${a}`},async selectFaceType(e){this.faceType.type=e,this.faceType.drawer=!0,await this.getFaceTypeArr()},selectFaceAlt(e,t){console.log("t",e,t),this.faceAlt.alt=e.alt,this.faceAlt.drawer=!0,this.faceAlt.file=t},makeFaceJson(e,t,a){return e.reduce(((e,s)=>{let l=e.find((e=>e[t]===s[t]));return l||(l={[t]:s[t],faces:[]},e.push(l)),(!a||l.faces.length<a)&&l.faces.push(s),e}),[])},openFaceFolder(e){r.Z.get("/msg/modify/file/face/openFolder",{params:{source:this.source,type:this.type,faceType:e}})},async getFaceTypeArr(){const{result:{faceTypeArr:e}}=await r.Z.get(`/msg/modify/file/face/${this.faceType.type}/json`,{params:{source:this.source,type:this.type}});this.faceType.faceTypeArr=e}}},i=c,o=a(1001),n=(0,o.Z)(i,s,l,!1,null,"75d22555",null),f=n.exports}}]);