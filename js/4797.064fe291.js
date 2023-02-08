"use strict";(self["webpackChunkShmily"]=self["webpackChunkShmily"]||[]).push([[4797,9690],{34797:function(t,a,i){i.r(a),i.d(a,{default:function(){return p}});var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("SourceCount",{attrs:{sourceType:t.sourceType,unit:"字",title:"消息字数",url:t.url}})},e=[],n=i(45889),r=i(44935),c={name:"Statistic-Contrast-Section-MsgWordCOunt-Wrap",data:()=>({sourceType:n.SOURCE_TYPE_CONTRAST}),computed:{url(){return`/statistic/${this.sourceType}/${n.DIRECTION_TYPE_ALL}/${n.COUNT_DB_TYPE_WORDS}/sourceCount.json`}},components:{SourceCount:r.Z}},l=c,o=i(1001),u=(0,o.Z)(l,s,e,!1,null,"4efb872f",null),p=u.exports},44935:function(t,a,i){i.d(a,{Z:function(){return _}});var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("CardWrap",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("div",{staticClass:"wrap"},[i("div",{staticClass:"total"},[i("div",{staticClass:"title"},[t._t("title",(function(){return[i("b",[t._v(t._s(t.title||t.sourceType))])]}))],2),t.sourceData?i("div",{staticClass:"content"},[i("DirectionTip",{attrs:{unit:t.unit,direction:t.sourceData.direction,placement:"right"}},[i("span",[t._v(" "+t._s(t.sourceData.count)+" "),i("span",{staticClass:"unit"},[t._v(t._s(t.unit))])])])],1):t._e(),t.activityDayData?i("div",{staticClass:"specialDay"},[i("span",{staticClass:"label"},[t._v("活跃时间")]),i("DirectionTip",{attrs:{unit:t.unit,direction:t.activityDayData.activityDayDirection,placement:"right"}},[i("span",{staticClass:"value"},[t._v(t._s(t.activityDayData.activityDay))])]),i("span",{staticClass:"unit"},[t._v("天")]),i("el-divider",{staticClass:"hr",attrs:{direction:"vertical"}}),i("DirectionTip",{attrs:{direction:null,placement:"right"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" 总计 "+t._s(t.activityDayData.allDay)+" 天 | 占比 "+t._s(t.activityDayData.activityDayP)+"% ")]},proxy:!0}],null,!1,137808767)},[i("span",[t._v(t._s(t.activityDayData.activityDayP)+"%")])])],1):t._e(),t.avgData?i("div",{staticClass:"specialDay"},[i("span",{staticClass:"label"},[t._v("平均每天")]),i("DirectionTip",{attrs:{unit:t.unit,direction:t.avgData.avgDirection,placement:"right"}},[i("span",{staticClass:"value"},[t._v(t._s(t.avgData.avg))])]),i("span",{staticClass:"unit"},[t._v(t._s(t.unit))])],1):t._e(),t.maxData?i("div",{staticClass:"specialDay"},[i("span",{staticClass:"label"},[t._v("最多当天")]),i("span",{staticClass:"value"},[t._v(t._s(t.maxData.max))]),i("span",{staticClass:"unit"},[t._v(t._s(t.unit))]),i("el-divider",{staticClass:"hr",attrs:{direction:"vertical"}}),t._l(t.maxData.maxDay,(function(a){return i("span",{key:a.date,staticClass:"maxDay"},[i("DirectionTip",{attrs:{unit:t.unit,direction:a.direction,placement:"right"}},[i("span",[t._v(t._s(a.date))])])],1)}))],2):t._e()]),t.sourceData?i("div",{staticClass:"types"},t._l(t.sourceData.children,(function(a){return i("div",{key:a.label,staticClass:"type"},[a.icon?i("img",{staticClass:"icon",attrs:{src:a.icon}}):t._e(),i("span",{staticClass:"label"},[t._v(t._s(a.label))]),i("DirectionTip",{staticClass:"count",attrs:{unit:t.unit,direction:a.direction}},[i("span",[t._v(t._s(a.count))])])],1)})),0):t._e()])])},e=[],n=i(69690),r=i(8206),c=i(72217),l=i(63866),o={name:"Statistic-Components-Plot-SourceCount",mixins:[r.Z],data:()=>({maxData:null,sourceData:null,avgData:null,activityDayData:null}),computed:{defaultUrl(){return`/statistic/${this.sourceType}/${this.directionType}/sourceCount.json`}},methods:{async updatePlot(){await this.toggleLoading(!0);const t=this.url||this.defaultUrl,a=await l.Z.get(t),{sourceData:i,maxData:s,avgData:e,activityDayData:n}=(0,c.deepFreeze)(a);this.sourceData=i,this.maxData=s,this.avgData=e,this.activityDayData=n,await this.toggleLoading(!1)}},components:{DirectionTip:n["default"]}},u=o,p=i(1001),d=(0,p.Z)(u,s,e,!1,null,"441b745c",null),_=d.exports},69690:function(t,a,i){i.r(a),i.d(a,{default:function(){return u}});var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.$slots.title||t.direction?i("el-tooltip",t._b({attrs:{effect:t.effect}},"el-tooltip",t.$attrs,!1),[i("div",{attrs:{slot:"content"},slot:"content"},[t.$slots.title?i("div",{staticClass:"title"},[t._t("title")],2):t._e(),i("hr",{staticClass:"hr"}),t.direction?i("div",{staticClass:"content"},[i("div",{staticClass:"row",staticStyle:{"margin-bottom":"5px"}},[i("img",{staticClass:"img",attrs:{src:t.DEFAULT_AVATAR_COME}}),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.direction.come)+" "+t._s(t.unit))]),i("span",{staticClass:"divider"},[t._v("/")]),i("span",{staticClass:"percent"},[t._v(" "+t._s(t.direction.comeP)+" "),i("small",[t._v("%")])])])]),i("div",{staticClass:"row"},[i("img",{staticClass:"img",attrs:{src:t.DEFAULT_AVATAR_GO}}),i("div",{staticClass:"value"},[i("span",[t._v(t._s(t.direction.go)+" "+t._s(t.unit))]),i("span",{staticClass:"divider"},[t._v("/")]),i("span",{staticClass:"percent"},[t._v(" "+t._s(t.direction.goP)+" "),i("small",[t._v("%")])])])])]):t._e()]),t._t("default")],2):i("div",[t._t("default")],2)},e=[],n=i(95460),r={name:"Statistic-Components-Plot-Tips-directionTip",mixins:[n.Z],props:{direction:{type:Object,require:!0}},data:()=>({})},c=r,l=i(1001),o=(0,l.Z)(c,s,e,!1,null,"d2813294",null),u=o.exports},63866:function(t,a,i){var s=i(26166),e=i.n(s),n=i(74549);const r=e().create({baseURL:"./json/",timeout:36e5});r.interceptors.response.use((t=>t.data),(t=>{const{config:a}=t.response;return n.MessageBox.alert(`无法获取数据 <br /> 请尝试访问 <a href="./json/${a.url}" target="_blank">./json/${a.url}</a>  是否有数据`,"错误",{type:"error",confirmButtonText:"刷新",dangerouslyUseHTMLString:!0}),Promise.reject(t)})),a["Z"]=r},8206:function(t,a,i){var s=i(45889);a["Z"]={props:{title:{type:String,default:""},unit:{type:String,default:"条"},url:[String,Object],sourceType:{type:String},directionType:{type:String,default:s.DIRECTION_TYPE_ALL},plotOptions:{type:Object,default:()=>({plot:{},extra:{}})}},data:()=>({DEFAULT_AVATAR_COME:s.DEFAULT_AVATAR_COME,DEFAULT_AVATAR_GO:s.DEFAULT_AVATAR_GO,$plot:null,loading:!0}),computed:{needUpdate(){return{sourceType:this.sourceType,directionType:this.directionType,url:this.url}}},watch:{needUpdate:{immediate:!0,deep:!0,async handler(){await this.updatePlot()}}},methods:{async toggleLoading(t){t?(this.loading=t,await this.$nextTick()):(await this.$nextTick(),this.loading=t)}},beforeDestroy(){this.$plot&&this.$plot.destroy()}}},95460:function(t,a,i){var s=i(45889);a["Z"]={data:()=>({DEFAULT_AVATAR_COME:s.DEFAULT_AVATAR_COME,DEFAULT_AVATAR_GO:s.DEFAULT_AVATAR_GO}),props:{unit:String,effect:{type:String,default:"light"}}}}}]);