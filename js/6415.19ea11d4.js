"use strict";(self["webpackChunkShmily"]=self["webpackChunkShmily"]||[]).push([[6415],{56415:function(t,s,e){e.r(s),e.d(s,{default:function(){return p}});var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-dialog",{attrs:{"append-to-body":!0,"close-on-click-modal":!1,visible:t.dialogVisible,title:"收集资源",width:"80%"},on:{"update:visible":function(s){t.dialogVisible=s}}},[e("div",{staticClass:"body"},[e("el-link",{attrs:{href:t.assetSrc,target:"_blank"}},[t._v(t._s(decodeURI(t.url.pathname)))]),e("div",{staticClass:"content"},[t.EXT_IMAGE.some((function(s){return t.assetSrc.endsWith(s)}))?e("img",{attrs:{src:t.assetSrc}}):t._e(),t.EXT_VIDEO.some((function(s){return t.assetSrc.endsWith(s)}))?e("video",{attrs:{src:t.assetSrc}}):t._e(),t.EXT_AUDIO.some((function(s){return t.assetSrc.endsWith(s)}))?e("audio",{attrs:{src:t.assetSrc}}):t._e()]),e("div",{staticClass:"tags"},[t._l(t.tags,(function(s){return e("el-tag",{key:s,attrs:{"disable-transitions":!1,closable:"",effect:"plain"},on:{click:function(e){t.currTag=s},close:function(e){return t.handleClose(s)}}},[t._v(t._s(s))])})),t.inputVisible?e("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.handleInputConfirm.apply(null,arguments)}},model:{value:t.inputValue,callback:function(s){t.inputValue=s},expression:"inputValue"}}):e("el-button",{staticClass:"button-new-tag",on:{click:t.showInput}},[t._v("+ New Dir")])],2)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.currTag?e("el-tag",{staticClass:"currTag",attrs:{closable:"",effect:"dark",type:"success"},on:{close:function(s){t.currTag=""}}},[t._v(t._s(t.currTag))]):t._e(),e("el-button",{attrs:{disabled:!t.currTag,loading:t.loading,type:"primary"},on:{click:function(s){return t.ajaxCopy()}}},[t._v("提交")])],1)])},a=[],n=e(95787),r=e(53943),l={mounted(){try{const t=JSON.parse(localStorage.copyAssetsDir);if(!Array.isArray(t))throw new Error("copyAssetsDir 不是数组");this.tags=t}catch(t){console.log("copyAssetsDir",t)}},props:{assetSrc:{type:String,require:!0},msg:Object},data:()=>({EXT_IMAGE:n.fQ,EXT_VIDEO:n.fd,EXT_AUDIO:n.Q5,loading:!1,tags:[],currTag:"",inputVisible:!1,inputValue:""}),watch:{tags(t){localStorage.copyAssetsDir=JSON.stringify(t)}},computed:{url(){return this.assetSrc?new URL(this.assetSrc):{}},dialogVisible:{get(){return null!=this.assetSrc},set(t){this.$emit("update:assetSrc",t?this.assetSrc:null)}}},methods:{ajaxCopy(){this.loading||(this.loading=!0,r.Z.post("/assets/copy",{src:decodeURI(this.url.pathname),dir:this.currTag,msg:this.msg}).then((t=>{if(200!=t.code)throw new Error(t.msg);this.$message.success(t.msg),this.dialogVisible=!1})).catch((t=>{this.$alert(t.message,"错误")})).finally((()=>{this.loading=!1})))},handleClose(t){this.tags.splice(this.tags.indexOf(t),1)},showInput(){this.inputVisible=!0,this.$nextTick((t=>{this.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm(){let t=this.inputValue;t&&!this.tags.includes(t)&&this.tags.push(t),this.inputVisible=!1,this.inputValue=""}}},o=l,c=e(1001),u=(0,c.Z)(o,i,a,!1,null,"299ab2b8",null),p=u.exports}}]);