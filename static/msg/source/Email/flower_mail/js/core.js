
if(typeof(QSFL)=="undefined"||!QSFL)
{var QSFL={};}
window.QZFL=window.QZFL||{};if(typeof(QZONE)=="object"){QZFL=QZONE;}else{window.QZONE=QZFL={};}
QZFL.version="2.0.6.3";QZFL._qzfl=2.063;QZFL.emptyFn=function(){};QZFL.returnFn=function(v){return v;};QZFL.userAgent=(function(){var t,vie,vff,vopera,vsf,vawk,wintype=false,winver=NaN,mactype=false,vair,vchrome,isBeta=false,discerned=false,_ua=navigator.userAgent,mainRE=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel|Minefield).(\d+\.\d+))|(?:Opera.(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))/,osRE=/(Windows.*?;)|(Mac OS X.*?;)/,winRE=/Windows.+?(\d+\.\d+)/,airRE=/AdobeAIR/,chromeRE=/Chrome.(\d+\.\d+)/,safariRE=/Version\/(\d+(?:\.\d+)?)/,agent=mainRE.exec(_ua),os=osRE.exec(_ua);if(agent){vie=parseFloat(agent[1],10);vff=parseFloat(agent[2],10);vopera=parseFloat(agent[3],10);vawk=parseFloat(agent[4],10);vair=vsf=vchrome=NaN;if(vawk){if(t=airRE.exec(_ua)){vair=1;}else if(t=safariRE.exec(_ua)){if(t.length>1){vsf=parseFloat(t[1],10);}else{vsf=1.0;}}else if(t=chromeRE.exec(_ua)){if(t.length>1){vchrome=parseFloat(t[1],10);}else{vchrome=1.0;}}}}else{vie=vff=vopera=vsf=vawk=vair=vchrome=NaN;if(typeof ActiveXObject=="function"){vie=(/Trident\/4\.0/i.test(navigator.appVersion))?8:8-(typeof XDomainRequest=="object"?0:1)-(typeof XMLHttpRequest=="object"?0:1);}else if(/AppleWebKit\/\d+\.\d+/i.test(navigator.appVersion)){vawk=parseFloat(navigator.appVersion.replace(/^[\s\S]*?AppleWebKit.(\d+\.\d+)[\s\S]*$/i,"$1"));if(typeof openDatabase=="function"){vsf=parseFloat(navigator.appVersion.replace(/^[\s\S]*?Version.(\d+\.\d+)[\s\S]*$/i,"$1"));}
if(typeof MessageEvent=="function"){vchrome=parseFloat(navigator.appVersion.replace(/^[\s\S]*?chrome.(\d+\.\d+)[\s\S]*$/i,"$1"));}
if(/AdobeAIR/i.test(navigator.appVersion)){vair=1;}}else if(typeof document.getBoxObjectFor=="function"){vff=parseFloat(navigator.userAgent.replace(/^[\s\S]*?Firefox\/(\d+\.\d+)[\s\S]*$/i,"$1"));}else if(typeof opera=="object"){vopera=parseFloat(navigator.appVersion.replace(/^(\d+\.\d+)[\s\S]*$/i,"$1"));}else{vie=6;}}
if(vie){t=navigator.appMinorVersion;if(vie>7&&t&&t.toLowerCase().indexOf("beta")>-1){isBeta=true;}}
if(os){wintype=!!os[1];mactype=!!os[2];if(wintype){if(t=winRE.exec(_ua)){if(t.length>0){winver=parseFloat(t[1],10);}}}}
function adjustBehaviors(){if(!adjustBehaviors.adjusted&&vie&&vie<7){try{document.execCommand('BackgroundImageCache',false,true);}catch(ignored){}
adjustBehaviors.adjusted=true;}}
return{beta:isBeta,firefox:vff,ie:vie,opera:vopera,air:vair,safari:vsf,safariV:vsf,webkit:vawk,windows:winver?winver:wintype,macs:mactype,chrome:vchrome,adjustBehaviors:adjustBehaviors};})();QZFL.object={map:function(object,scope){scope=scope||window;QZFL.object.extend(scope,object);},extend:function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options,name,src,copy;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&QZFL.object.getType(target)!=="function"){target={};}
if(length===i){target=QZFL;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&typeof copy==="object"&&!copy.nodeType){var clone;if(src){clone=src;}else if(QZFL.lang.isArray(copy)){clone=[];}else if(QZFL.object.getType(copy)==='object'){clone={};}else{clone=copy;}
target[name]=QZFL.object.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;},each:function(obj,callback){var name,value,i=0,length=obj.length,isObj=(length===undefined)||(typeof(obj)=="function");if(isObj){for(name in obj){if(callback.call(obj[name],obj[name],name,obj)===false){break;}}}else{for(value=obj[0];i<length&&callback.call(value,value,i,obj)!==false;value=obj[++i]){}}
return obj;},getType:function(obj){return obj===null?'null':Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();},route:function(obj,path){obj=obj||{};path+='';var r=/([\d\w_]+)/g,m;r.exec('');while((m=r.exec(path))!==null){obj=obj[m[0]];if(obj===undefined||obj===null)break;}
return obj;},bind:function(obj,fn){var args=Array.prototype.slice.call(arguments,2);return function(){var _obj=obj||this,_args=args.concat(Array.prototype.slice.call(arguments,0));if(typeof(fn)=="string"){if(_obj[fn]){return _obj[fn].apply(_obj,_args);}}else{return fn.apply(_obj,_args);}}}};QZFL.console={print:function(msg,type){window.console&&console.log((type==4?(new Date()+":"):"")+msg);}}
QZFL.runTime={isDebugMode:false,error:QZFL.emptyFn,warn:QZFL.emptyFn}
QZFL.widget={};QZFL.namespace=QZFL.object;QZFL.config={debugLevel:0,defaultDataCharacterSet:"GB2312",DCCookieDomain:"qzone.qq.com",domainPrefix:"qq.com",gbEncoderPath:"http://imgcache.qq.com/qzone/v5/toolpages/",FSHelperPage:"http://imgcache.qq.com/qzone/v5/toolpages/fp_gbk.html",defaultShareObject:"http://imgcache.qq.com/qzone/v5/toolpages/getset.swf",staticServer:"http://imgcache.qq.com/ac/qzone/qzfl/lc/"};QZFL.css={classNameCache:{},getClassRegEx:function(className){var re=QZFL.css.classNameCache[className];if(!re){re=new RegExp('(?:^|\\s+)'+className+'(?:\\s+|$)');QZFL.css.classNameCache[className]=re;}
return re;},convertHexColor:function(color){var p='0x';color=(color||'').toString();color.charAt(0)=='#'&&(color=color.substring(1));color.length==3&&(color=color.replace(/([0-9a-f])/ig,'$1$1'));return color.length==6?[p+color.substr(0,2)-0,p+color.substr(2,2)-0,p+color.substr(4,2)-0]:[0,0,0];},styleSheets:{},getStyleSheetById:function(id){try{return QZFL.dom.get(id).sheet||document.styleSheets[id];}catch(e){return null;}},getRulesBySheet:function(sheetId){var ss=QZFL.css.getStyleSheetById(sheetId);if(ss){try{return ss.cssRules||ss.rules;}catch(e){return null;}}else{return null;}},getRuleBySelector:function(sheetId,selector){var _ss=QZFL.css.getStyleSheetById(sheetId);if(!_ss){return null;}!_ss.cacheSelector&&(_ss.cacheSelector={});var _rs=_ss.cssRules||_ss.rules,re=new RegExp('^'+selector+'$',"i"),_cs=_ss.cacheSelector[selector];if(_cs&&re.test(_rs[_cs].selectorText)){return _rs[_cs];}
for(var i=0,len=_rs.length;i<len;i++){if(re.test(_rs[i].selectorText)){_ss.cacheSelector[selector]=i;return _rs[i];}}
return null;},insertCSSLink:function(url,id){var doc=document,cssLink=(cssLink=$(id))&&cssLink.nodeName=='LINK'?cssLink:null,head=doc.getElementsByTagName("head")[0];if(!cssLink){cssLink=doc.createElement("link");id&&(cssLink.id=id);cssLink.rel="stylesheet";cssLink.rev="stylesheet";cssLink.type="text/css";cssLink.media="screen";head.appendChild(cssLink);}
url&&(cssLink.href=url);return cssLink.sheet||cssLink;},insertStyleSheet:function(sheetId){var ss=document.createElement("style");ss.id=sheetId;document.getElementsByTagName("head")[0].appendChild(ss);return ss.sheet||ss;},removeStyleSheet:function(id){var _ss=QZFL.css.getStyleSheetById(id);_ss&&QZFL.dom.removeElement(_ss.owningElement||_ss.ownerNode);},hasClassName:function(elem,cname){return elem&&cname&&new RegExp('\\b'+cname+'\\b').test(elem.className);},swapClassName:function(elements,class1,class2){function _swap(el,c1,c2){if(QZFL.css.hasClassName(el,c1)){el.className=el.className.replace(c1,c2);}else if(QZFL.css.hasClassName(el,c2)){el.className=el.className.replace(c2,c1);}}
if(elements.constructor!=Array){elements=[elements];}
for(var i=0,len=elements.length;i<len;i++){_swap(elements[i],class1,class2);}},replaceClassName:function(elements,sourceClass,targetClass){function _replace(el,c1,c2){if(QZFL.css.hasClassName(el,c1)){el.className=el.className.replace(c1,c2);}}
if(elements.constructor!=Array){elements=[elements];}
for(var i=0,len=elements.length;i<len;i++){_replace(elements[i],sourceClass,targetClass);}},addClassName:function(elem,cname){if(!QZFL.lang.isElement(elem)||!QZFL.lang.isString(cname)||QZFL.css.hasClassName(elem,cname)){return false;}
return!!(elem.className+=(elem.className.length>0?' ':'')+cname);},removeClassName:function(elem,cname){if(!QZFL.lang.isElement(elem)||!QZFL.lang.isString(cname)||!QZFL.css.hasClassName(elem,cname)){return false;}
elem.className=QZFL.string.trim(elem.className.replace(new RegExp('\\s*'+cname+'\\s*','g'),' '));return true;},toggleClassName:function(elem,cname){var r=QZFL.css;r[(r.hasClassName(elem,cname)?'remove':'add')+'ClassName'](elem,cname);}};QZFL.dom={getById:function(id){return document.getElementById(id);},getByName:function(name,tagName){if(!tagName)
return document.getElementsByName(name);var arr=[];var e=document.getElementsByTagName(tagName);for(var i=0;i<e.length;++i){if(!!e[i].getAttribute("name")&&(e[i].getAttribute("name").toLowerCase()==name.toLowerCase())){arr.push(e[i]);}}
return arr;},get:function(e){if(e&&((e.tagName||e.item)||e.nodeType==9)){return e;}
return QZFL.dom.getById(e);},getNode:function(e){if(e&&(e.nodeType||e.item)){return e;}
if(typeof e==='string'){return QZFL.dom.getById(e);}
return null;},removeElement:function(el){if(typeof(el)=="string"){el=QZFL.dom.getById(el);}
if(!el){return;}
if(el.removeNode){el.removeNode(true);}else{if(el.childNodes.length>0){for(var ii=el.childNodes.length-1;ii>=0;ii--){QZFL.dom.removeElement(el.childNodes[ii]);}}
if(el.parentNode){el.parentNode.removeChild(el);}}
el=null;return null;},searchElementByClassName:function(el,className){el=QZFL.dom.get(el);if(!el){return null}
var re=QZFL.css.getClassRegEx(className);while(el){if(re.test(el.className)){return el;}
el=el.parentNode;}
return null;},getElementsByClassName:function(className,tag,root){var tag=tag||'*';root=(root)?QZFL.dom.get(root):null||document;if(!root){return[];}
var nodes=[],elements=root.getElementsByTagName(tag),re=QZFL.css.getClassRegEx(className);for(var i=0,len=elements.length;i<len;++i){if(re.test(elements[i].className)){nodes[nodes.length]=elements[i];}}
return nodes;},isAncestor:function(node1,node2){if(!node1||!node2){return false;}
if(node1.contains&&node2.nodeType&&!QZFL.userAgent.webkit){return node1.contains(node2)&&node1!=node2;}
if(node1.compareDocumentPosition&&node2.nodeType){return!!(node1.compareDocumentPosition(node2)&16);}else if(node2.nodeType){return!!QZFL.dom.getAncestorBy(node2,function(el){return el==node1;});}
return false;},getAncestorBy:function(node,method){while(node=node.parentNode){if(node&&node.nodeType==1&&(!method||method(node))){return node;}}
return null;},getFirstChild:function(node){node=QZFL.dom.getNode(node);if(!node){return null;}
var child=!!node.firstChild&&node.firstChild.nodeType==1?node.firstChild:null;return child||QZFL.dom.getNextSibling(node.firstChild);},getNextSibling:function(node){node=QZFL.dom.getNode(node);if(!node){return null;}
while(node){node=node.nextSibling;if(!!node&&node.nodeType==1){return node;}}
return null;},getPreviousSibling:function(node){node=QZFL.dom.getNode(node);if(!node){return null;}
while(node){node=node.previousSibling;if(!!node&&node.nodeType==1){return node;}}
return null;},swapNode:function(node1,node2){if(node1.swapNode){node1.swapNode(node2);}else{var prt=node2.parentNode;var next=node2.nextSibling;if(next==node1){prt.insertBefore(node1,node2);}else if(node2==node1.nextSibling){prt.insertBefore(node2,node1);}else{node1.parentNode.replaceChild(node2,node1);prt.insertBefore(node1,next);}}},createElementIn:function(tagName,el,insertFirst,attributes){var tagName=tagName||"div";var el=QZFL.dom.get(el)||document.body;var _doc=el.ownerDocument;var _e=_doc.createElement(tagName);if(attributes){for(var k in attributes){if(/class/.test(k)){_e.className=attributes[k];}else if(/style/.test(k)){_e.style.cssText=attributes[k];}else{_e[k]=attributes[k];}}}
if(insertFirst){el.insertBefore(_e,el.firstChild);}else{el.appendChild(_e);}
return _e;},getStyle:function(el,property){el=QZFL.dom.get(el);if(!el||el.nodeType==9){return null;}
var w3cMode=document.defaultView&&document.defaultView.getComputedStyle;var computed=!w3cMode?null:document.defaultView.getComputedStyle(el,'');var value="";switch(property){case"float":property=w3cMode?"cssFloat":"styleFloat";break;case"opacity":if(!w3cMode){var val=100;try{val=el.filters['DXImageTransform.Microsoft.Alpha'].opacity;}catch(e){try{val=el.filters('alpha').opacity;}catch(e){}}
return val/100;}else{return parseFloat((computed||el.style)[property]);}
break;case"backgroundPositionX":if(w3cMode){property="backgroundPosition";return((computed||el.style)[property]).split(" ")[0];}
break;case"backgroundPositionY":if(w3cMode){property="backgroundPosition";return((computed||el.style)[property]).split(" ")[1];}
break;}
if(w3cMode){return(computed||el.style)[property];}else{return(el.currentStyle[property]||el.style[property]);}},setStyle:function(el,property,value){el=QZFL.dom.get(el);if(!el||el.nodeType==9){return false;}
var w3cMode=document.defaultView&&document.defaultView.getComputedStyle;switch(property){case"float":property=w3cMode?"cssFloat":"styleFloat";break;case"opacity":if(!w3cMode){if(value>=1){el.style.filter="";return true;}
el.style.filter='alpha(opacity='+(value*100)+')';}else{el.style[property]=value;}
return true;case"backgroundPositionX":if(w3cMode){var _y=QZFL.dom.getStyle(el,"backgroundPositionY");el.style["backgroundPosition"]=value+" "+(_y||"top");}else{el.style[property]=value;}
return true;case"backgroundPositionY":if(w3cMode){var _x=QZFL.dom.getStyle(el,"backgroundPositionX");el.style["backgroundPosition"]=(_x||"left")+" "+value;}else{el.style[property]=value;}
return true;}
if(typeof el.style[property]=="undefined"){return false}
el.style[property]=value;return true;},createNamedElement:function(type,name,doc){var _doc=doc||document,element;try{element=_doc.createElement('<'+type+' name="'+name+'">');}catch(ignore){}
if(!element||!element.name){element=_doc.createElement(type);element.name=name;}
return element;},getPosition:function(el){var xy=QZFL.dom.getXY(el),size=QZFL.dom.getSize(el);return{"top":xy[1],"left":xy[0],"width":size[0],"height":size[1]};},setPosition:function(el,pos){QZFL.dom.setXY(el,pos['left'],pos['top']);QZFL.dom.setSize(el,pos['width'],pos['height']);},getXY:function(el,doc){var _t=0,_l=0,_doc=doc||document;if(el){if(_doc.documentElement.getBoundingClientRect&&el.getBoundingClientRect){var box=el.getBoundingClientRect(),oDoc=el.ownerDocument,_fix=QZFL.userAgent.ie?2:0;_t=box.top-_fix+QZFL.dom.getScrollTop(oDoc);_l=box.left-_fix+QZFL.dom.getScrollLeft(oDoc);}else{while(el.offsetParent){_t+=el.offsetTop;_l+=el.offsetLeft;el=el.offsetParent;}}}
return[_l,_t];},getSize:function(el){var _fix=[0,0];if(el){QZFL.object.each(["Left","Right","Top","Bottom"],function(v){_fix[v=="Left"||v=="Right"?0:1]+=(parseInt(QZFL.dom.getStyle(el,"border"+v+"Width"),10)||0)+(parseInt(QZFL.dom.getStyle(el,"padding"+v),10)||0);});var _w=el.offsetWidth-_fix[0];var _h=el.offsetHeight-_fix[1];return[_w,_h];}
return[-1,-1];},setXY:function(el,x,y){el=QZFL.dom.get(el);var _ml=parseInt(QZFL.dom.getStyle(el,"marginLeft"))||0;var _mt=parseInt(QZFL.dom.getStyle(el,"marginTop"))||0;QZFL.dom.setStyle(el,"left",parseInt(x)-_ml+"px");QZFL.dom.setStyle(el,"top",parseInt(y)-_mt+"px");},getScrollLeft:function(doc){var _doc=doc||document;return Math.max(_doc.documentElement.scrollLeft,_doc.body.scrollLeft);},getScrollTop:function(doc){var _doc=doc||document;return Math.max(_doc.documentElement.scrollTop,_doc.body.scrollTop);},getScrollHeight:function(doc){var _doc=doc||document;return Math.max(_doc.documentElement.scrollHeight,_doc.body.scrollHeight);},getScrollWidth:function(doc){var _doc=doc||document;return Math.max(_doc.documentElement.scrollWidth,_doc.body.scrollWidth);},setScrollLeft:function(value,doc){var _doc=doc||document;_doc[_doc.compatMode=="CSS1Compat"&&!QZFL.userAgent.webkit?"documentElement":"body"].scrollLeft=value;},setScrollTop:function(value,doc){var _doc=doc||document;_doc[_doc.compatMode=="CSS1Compat"&&!QZFL.userAgent.webkit?"documentElement":"body"].scrollTop=value;},getClientHeight:function(doc){var _doc=doc||document;return _doc.compatMode=="CSS1Compat"?_doc.documentElement.clientHeight:_doc.body.clientHeight;},getClientWidth:function(doc){var _doc=doc||document;return _doc.compatMode=="CSS1Compat"?_doc.documentElement.clientWidth:_doc.body.clientWidth;},setSize:function(el,w,h){el=QZFL.dom.get(el);var _r=/^\d+(?:\.\d*)?(px|%|em|in|cm|mm|pc|pt)?$/,m;QZFL.dom.setStyle(el,"width",(m=_r.exec(w))?(m[1]?w:(parseInt(w,10)+'px')):'auto');QZFL.dom.setStyle(el,"height",(m=_r.exec(h))?(m[1]?h:(parseInt(h,10)+'px')):'auto');},getDocumentWindow:function(doc){var _doc=doc||document;return _doc.parentWindow||_doc.defaultView;},getElementsByTagNameNS:function(node,ns,tgn){var res=[];if(node){if(node.getElementsByTagNameNS){return node.getElementsByTagName(ns+":"+tgn);}else if(node.getElementsByTagName){var n=document.namespaces;if(n.length>0){var l=node.getElementsByTagName(tgn);for(var i=0,len=l.length;i<len;++i){if(l[i].scopeName==ns){res.push(l[i]);}}}}}
return res;},collection2Array:function(coll){if(isArray(coll)){return coll;}else{var r=[];for(var i=0,len=coll.length;i<len;++i){r.push(coll[i]);}}
return r;},getElementByTagNameBubble:function(a,tn){if(!isNode(a)){return null;}
tn+="";var maxLv=31;while(a&&a.tagName&&(a.tagName.toLowerCase()!=tn.toLowerCase())){if(a==document.body||(--maxLv)<0){return null;}
a=a.parentNode;}
return a;}};QZFL.event={KEYS:{BACKSPACE:8,TAB:9,RETURN:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},extendType:/(click|mousedown|mouseover|mouseout|mouseup|mousemove|scroll|contextmenu|resize)/i,_eventListDictionary:{},_fnSeqUID:0,_objSeqUID:0,addEvent:function(obj,eventType,fn,argArray){var cfn=fn,res=false,l;if(!obj){return res;}
if(!obj.eventsListUID){obj.eventsListUID="e"+(++QZFL.event._objSeqUID);}
if(!(l=QZFL.event._eventListDictionary[obj.eventsListUID])){l=QZFL.event._eventListDictionary[obj.eventsListUID]={};}
if(!fn.__elUID){fn.__elUID="e"+(++QZFL.event._fnSeqUID)+obj.eventsListUID;}
if(!l[eventType]){l[eventType]={};}
if(typeof(l[eventType][fn.__elUID])=='function'){return false;}
if(QZFL.event.extendType.test(eventType)){argArray=argArray||[];}
cfn=function(e){return fn.apply(obj,([QZFL.event.getEvent(e)]).concat(argArray));};if(obj.addEventListener){obj.addEventListener(eventType,cfn,false);res=true;}else if(obj.attachEvent){res=obj.attachEvent("on"+eventType,cfn);}else{res=false;}
if(res){l[eventType][fn.__elUID]=cfn;}
return res;},removeEvent:function(obj,eventType,fn){var cfn=fn,res=false,l;if(!obj){return res;}
if(!cfn){return QZFL.event.purgeEvent(obj,eventType);}
if(!obj.eventsListUID){obj.eventsListUID="e"+(++QZFL.event._objSeqUID);}
if(!(l=QZFL.event._eventListDictionary[obj.eventsListUID])){l=QZFL.event._eventListDictionary[obj.eventsListUID]={};}
if(!fn.__elUID){fn.__elUID="e"+(++QZFL.event._fnSeqUID)+obj.eventsListUID;}
if(!l[eventType]){l[eventType]={};}
if(QZFL.event.extendType.test(eventType)&&l[eventType]&&l[eventType][fn.__elUID]){cfn=l[eventType][fn.__elUID];}
if(obj.removeEventListener){obj.removeEventListener(eventType,cfn,false);res=true;}else if(obj.detachEvent){obj.detachEvent("on"+eventType,cfn);res=true;}else{return false;}
if(res&&l[eventType]){delete l[eventType][fn.__elUID];}
return res;},purgeEvent:function(obj,type){var l;if(obj.eventsListUID&&(l=QZFL.event._eventListDictionary[obj.eventsListUID])&&l[type]){for(var k in l[type]){if(obj.removeEventListener){obj.removeEventListener(type,l[type][k],false);}else if(obj.detachEvent){obj.detachEvent('on'+type,l[type][k]);}}}
if(obj['on'+type]){obj['on'+type]=null;}
if(l){l[type]=null;delete l[type];}
return true;},getEvent:function(evt){var evt=evt||window.event,c;if(!evt&&!QZFL.userAgent.ie){c=QZFL.event.getEvent.caller,cnt=1;while(c){evt=c.arguments[0];if(evt&&Event==evt.constructor){break;}else if(cnt>32){break;}
c=c.caller;cnt++;}}
return evt;},getButton:function(evt){var e=QZFL.event.getEvent(evt);if(!e){return-1}
if(QZFL.userAgent.ie){return e.button-Math.ceil(e.button/2);}else{return e.button;}},getTarget:function(evt){var e=QZFL.event.getEvent(evt);if(e){return e.srcElement||e.target;}else{return null;}},getCurrentTarget:function(evt){var e=QZFL.event.getEvent(evt);if(e){return e.currentTarget||document.activeElement;}else{return null;}},cancelBubble:function(evt){evt=QZFL.event.getEvent(evt);if(!evt){return false}
if(evt.stopPropagation){evt.stopPropagation();}else{if(!evt.cancelBubble){evt.cancelBubble=true;}}},preventDefault:function(evt){evt=QZFL.event.getEvent(evt);if(!evt){return false}
if(evt.preventDefault){evt.preventDefault();}else{evt.returnValue=false;}},mouseX:function(evt){evt=QZFL.event.getEvent(evt);return evt.pageX||(evt.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft));},mouseY:function(evt){evt=QZFL.event.getEvent(evt);return evt.pageY||(evt.clientY+(document.documentElement.scrollTop||document.body.scrollTop));},getRelatedTarget:function(ev){ev=QZFL.event.getEvent(ev);var t=ev.relatedTarget;if(!t){if(ev.type=="mouseout"){t=ev.toElement;}else if(ev.type=="mouseover"){t=ev.fromElement;}else{}}
return t;},onDomReady:function(fn){QZFL.event.onDomReady._fn=function(){fn();QZFL.event.onDomReady._fn=null;}
if(document.addEventListener){if(QZFL.userAgent.safari<4){var interval=setInterval(function(){if((/loaded|complete/).test(document.readyState)){QZFL.event.onDomReady._fn();clearInterval(interval);}},50);}else{document.addEventListener("DOMContentLoaded",QZFL.event.onDomReady._fn,true);}}else{var src=window.location.protocol=='https:'?'//:':'javascript:void(0)';document.write('<script onreadystatechange="if(this.readyState==\'complete\'){this.parentNode.removeChild(this);QZFL.event.onDomReady._fn();}" defer="defer" src="'+src+'"><\/script\>');}}};QZFL.event.on=QZFL.event.addEvent;QZFL.event.bind=QZFL.object.bind;;(function(){var _handler=QZFL.ElementHandler=function(selector,context){this.elements=null;this._isElementHandler=true;this._init(selector,context);};_handler.prototype={_init:function(selector,context){if(QZFL.lang.isString(selector)){this.elements=QZFL.selector(selector,context);}else if(selector instanceof QZFL.ElementHandler){this.elements=selector.elements.slice();}else if(QZFL.lang.isArray(selector)){this.elements=selector;}else if(selector&&((selector.nodeType&&selector.nodeType!==3&&selector.nodeType!==8)||selector.setTimeout)){this.elements=[selector];}else{this.elements=[];}},findElements:function(selector){var _pushstack=[],_s;this.each(function(el){_s=QZFL.selector(selector,el);if(_s.length>0){_pushstack=_pushstack.concat(_s);}});return _pushstack;},find:function(selector){return _el.get(this.findElements(selector));},filter:function(expr,elems,not){if(not){expr=":not("+expr+")";}
return _el.get(QZFL.selector.matches(expr,elems||this.elements));},each:function(fn){QZFL.object.each(this.elements,fn);return this;},concat:function(elements){return _el.get(this.elements.concat(!!elements._isElementHandler?elements.elements:elements));},get:function(index){return _el.get(this.elements[index]);},slice:function(){return _el.get(Array.prototype.slice.apply(this.elements,arguments));}};var _el=QZFL.element={get:function(selector,context){return new _handler(selector,context);},extend:function(object){QZFL.object.extend(_handler,object);},extendFn:function(object){QZFL.object.extend(_handler.prototype,object);},getVersion:function(){return _handler.version;}}})();QZFL.element.extend({version:"1.0"});QZFL.element.extendFn({bind:function(evtType,fn){if(typeof(fn)!='function'){return false;}
return this.each(function(el){QZFL.event.addEvent(el,evtType,fn);});},unBind:function(evtType,fn){return this.each(function(el){QZFL.event[fn?'removeEvent':'purgeEvent'](el,evtType,fn);});},onHover:function(fnOver,fnOut){this.onMouseOver(fnOver);return this.onMouseOut(fnOut);},onMouseEnter:function(fn){return this.bind('mouseover',function(evt){var rel=QZFL.event.getRelatedTarget(evt);if(QZFL.lang.isFunction(fn)&&!QZFL.dom.isAncestor(this,rel)){fn.call(this,evt);}});},onMouseLeave:function(fn){return this.bind('mouseout',function(evt){var rel=QZFL.event.getRelatedTarget(evt);if(QZFL.lang.isFunction(fn)&&!QZFL.dom.isAncestor(this,rel)){fn.call(this,evt);}});}});QZFL.object.each(['onClick','onMouseOver','onMouseMove','onMouseOut','onFocus','onBlur','onKeyDown','onKeyPress','onKeyUp'],function(name,index){QZFL.ElementHandler.prototype[name]=function(fn){return this.bind(name.slice(2).toLowerCase(),fn);};});QZFL.element.extendFn({setHtml:function(value){return this.setAttr("innerHTML",value);},getHtml:function(index){var _e=this.elements[index||0];return!!_e?_e.innerHTML:null;},setVal:function(value){if(QZFL.object.getType(value)=="array"){var _v="\x00"+value.join("\x00")+"\x00";this.each(function(el){if(/radio|checkbox/.test(el.type)){el.checked=el.nodeType&&("\x00"+_v.indexOf(el.value.toString()+"\x00")>-1||_v.indexOf("\x00"+el.name.toString()+"\x00")>-1);}else if(el.tagName=="SELECT"){QZFL.object.each(el.options,function(e){e.selected=e.nodeType==1&&("\x00"+_v.indexOf(e.value.toString()+"\x00")>-1||_v.indexOf("\x00"+e.text.toString()+"\x00")>-1);});}else{el.value=value;}})}else{this.setAttr("value",value);}
return this;},getVal:function(index){var _e=this.elements[index||0],_v;if(_e){if(_e.tagName=="SELECT"){_v=[];if(_e.selectedIndex<0){return null;}
if(_e.type=="select-one"){_v.push(_e.value);}else{QZFL.object.each(_e.options,function(e){if(e.nodeType==1&&e.selected){_v.push(e.value);}});}}else{_v=_e.value;}}else{return null}
return _v;},hasClass:function(className){if(this.elements&&this.elements.length){return QZFL.css.hasClassName(this.elements[0],className);}
return false;},addClass:function(className){return this.each(function(el){QZFL.css.addClassName(el,className);})},removeClass:function(className){return this.each(function(el){QZFL.css.removeClassName(el,className);})},toggleClass:function(className){return this.each(function(el){QZFL.css.toggleClassName(el,className);})},getSize:function(index){var _e=this.elements[index||0];return!!_e?QZFL.dom.getSize(_e):null;},getXY:function(index){var _e=this.elements[index||0];return!!_e?QZFL.dom.getXY(_e):null;},setSize:function(width,height){return this.each(function(el){QZFL.dom.setSize(el,width,height);})},setXY:function(X,Y){return this.each(function(el){QZFL.dom.setXY(el,X,Y);})},hide:function(){return this.each(function(el){QZFL.dom.setStyle(el,"display","none");})},show:function(isBlock){return this.each(function(el){QZFL.dom.setStyle(el,"display",isBlock?'block':'');})},getStyle:function(key,index){var _e=this.elements[index||0];return!!_e?QZFL.dom.getStyle(_e,key):null;},setStyle:function(key,value){return this.each(function(el){QZFL.dom.setStyle(el,key,value);})},setAttr:function(key,value){key=(key=="class"?"className":key);return this.each(function(el){el[key]=value;});},getAttr:function(key,index){key=(key=="class"?"className":key);var _e=this.elements[index||0];return!!_e?(_e[key]||_e.getAttribute(key)):null;}});QZFL.element.extendFn({getPrev:function(){var _arr=[];this.each(function(el){var _e=QZFL.dom.getPreviousSibling(el);_arr.push(_e);});return QZFL.element.get(_arr);},getNext:function(){var _arr=[];this.each(function(el){var _e=QZFL.dom.getNextSibling(el);_arr.push(_e);});return QZFL.element.get(_arr);},getChildren:function(){var _arr=[];this.each(function(el){var node=QZFL.dom.getFirstChild(el);while(node){if(!!node&&node.nodeType==1){_arr.push(node);}
node=node.nextSibling;}});return QZFL.element.get(_arr);},getParent:function(){var _arr=[];this.each(function(el){var _e=el.parentNode;_arr.push(_e);});return QZFL.element.get(_arr);}});QZFL.element.extendFn({create:function(tagName,attributes){var _arr=[];this.each(function(el){_arr.push(QZFL.dom.createElementIn(tagName,el,false,attributes));});return QZFL.element.get(_arr);},appendTo:function(el){var el=(el.elements&&el.elements[0])||QZFL.dom.get(el);return this.each(function(element){el.appendChild(element)});},insertAfter:function(el){var el=(el.elements&&el.elements[0])||QZFL.dom.get(el),_ns=el.nextSibling,_p=el.parentNode;return this.each(function(element){_p[!_ns?"appendChild":"insertBefore"](element,_ns);});},insertBefore:function(el){var el=(el.elements&&el.elements[0])||QZFL.dom.get(el),_p=el.parentNode;return this.each(function(element){_p.insertBefore(element,el)});},remove:function(){return this.each(function(el){QZFL.dom.removeElement(el);})}});QZFL.queue=(function(){var _o=QZFL.object;var _queue={};var _Queue=function(key,queue){if(this instanceof arguments.callee){this._qz_queuekey=key;return this;}
if(_o.getType(queue=queue||[])=="array"){_queue[key]=queue;}
return new _Queue(key);};var _extend={push:function(key,fn){fn=this._qz_queuekey?key:fn;_queue[this._qz_queuekey||key].push(fn);},shift:function(key){var _q=_queue[this._qz_queuekey||key];if(_q){return QZFL.queue._exec(_q.shift());}},getLen:function(key){return _queue[this._qz_queuekey||key].length;},run:function(key){var _q=_queue[this._qz_queuekey||key];if(_q){_o.each(_q,QZFL.queue._exec);}},timedChunk:function(key,conf){var _q=_queue[this._qz_queuekey||key],_conf;if(_q){_conf=QZFL.lang.propertieCopy(conf,QZFL.queue._tcCof,null,true);setTimeout(function(){var _start=+new Date();do{QZFL.queue.shift(key);}while(QZFL.queue.getLen(key)>0&&(+new Date()-_start<_conf.runTime));if(QZFL.queue.getLen(key)>0){setTimeout(arguments.callee,_conf.waitTime);_conf.onWait();}else{_conf.onRunEnd();}},0);}},_tcCof:{'runTime':50,'waitTime':25,'onRunEnd':QZFL.emptyFn,'onWait':QZFL.emptyFn},_exec:function(value,key,source){if(!value||_o.getType(value)!="function"){if(_o.getType(key)=="number"){source[key]=null;}
return false;}
try{return value();}catch(e){QZFL.console.print("QZFL Queue Got An Error: ["+e.name+"]  "+e.message,1)}}};_o.extend(_Queue.prototype,_extend);_o.extend(_Queue,_extend);return _Queue;})();QZFL.string={RegExps:{trim:/^\s*|\s*$/g,ltrim:/^\s*/,rtrim:/\s*$/,nl2br:/\n/g,s2nb:/[\x20]{2}/g,URIencode:/[\x09\x0A\x0D\x20\x21-\x29\x2B\x2C\x2F\x3A-\x3F\x5B-\x5E\x60\x7B-\x7E]/g,escHTML:{re_amp:/&/g,re_lt:/</g,re_gt:/>/g,re_apos:/\x27/g,re_quot:/\x22/g},escString:{bsls:/\\/g,nl:/\n/g,rt:/\r/g,tab:/\t/g},restXHTML:{re_amp:/&amp;/g,re_lt:/&lt;/g,re_gt:/&gt;/g,re_apos:/&(?:apos|#0?39);/g,re_quot:/&quot;/g},write:/\{(\d{1,2})(?:\:([xodQqb]))?\}/g,isURL:/^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i,cut:/[\x00-\xFF]/,getRealLen:{r0:/[^\x00-\xFF]/g,r1:/[\x00-\xFF]/g},format:/\{([\d\w\.]+)\}/g},commonReplace:function(s,p,r){return s.replace(p,r);},listReplace:function(s,l){if(QZFL.lang.isHashMap(l)){for(var i in l){s=QZFL.string.commonReplace(s,l[i],i);}
return s;}else{return s+'';}},trim:function(str){QZFL.string.RegExps.trim.lastIndex=0;return QZFL.string.commonReplace(str+"",QZFL.string.RegExps.trim,'');},ltrim:function(str){return QZFL.string.commonReplace(str+"",QZFL.string.RegExps.ltrim,'');},rtrim:function(str){return QZFL.string.commonReplace(str+"",QZFL.string.RegExps.rtrim,'');},nl2br:function(str){return QZFL.string.commonReplace(str+"",QZFL.string.RegExps.nl2br,'<br />');},s2nb:function(str){return QZFL.string.commonReplace(str+"",QZFL.string.RegExps.s2nb,'&nbsp;&nbsp;');},URIencode:function(str){var cc,ccc;return(str+"").replace(QZFL.string.RegExps.URIencode,function(a){if(a=="\x20"){return"+";}else if(a=="\x0D"){return"";}
cc=a.charCodeAt(0);ccc=cc.toString(16);return"%"+((cc<16)?("0"+ccc):ccc);});},escHTML:function(str){var t=QZFL.string.RegExps.escHTML;return QZFL.string.listReplace((str+""),{'&amp;':t.re_amp,'&lt;':t.re_lt,'&gt;':t.re_gt,'&#039;':t.re_apos,'&quot;':t.re_quot});},escString:function(str){var t=QZFL.string.RegExps.escString;return QZFL.string.listReplace((str+""),{'\\\\':t.bsls,'\\n':t.nl,'':t.rt,'\\t':t.tab,'\\\'':t.re_apos,'\\"':t.re_quot});},restHTML:function(str){if(!QZFL.string.restHTML.__utilDiv){QZFL.string.restHTML.__utilDiv=document.createElement("div");}
var t=QZFL.string.restHTML.__utilDiv;t.innerHTML=(str+"");if(typeof(t.innerText)!='undefined'){return t.innerText;}else if(typeof(t.textContent)!='undefined'){return t.textContent;}else if(typeof(t.text)!='undefined'){return t.text;}else{return'';}},restXHTML:function(str){var t=QZFL.string.RegExps.restXHTML;return QZFL.string.listReplace((str+""),{'<':t.re_lt,'>':t.re_gt,'\x27':t.re_apos,'\x22':t.re_quot,'&':t.re_amp});},write:function(strFormat,someArgs){if(arguments.length<1||!QZFL.lang.isString(strFormat)){return'';}
var rArr=QZFL.lang.arg2arr(arguments),result=rArr.shift(),tmp;return result.replace(QZFL.string.RegExps.write,function(a,b,c){b=parseInt(b,10);if(b<0||(typeof rArr[b]=='undefined')){return'(n/a)';}else{if(!c){return rArr[b];}else{switch(c){case'x':return'0x'+rArr[b].toString(16);case'o':return'o'+rArr[b].toString(8);case'd':return rArr[b].toString(10);case'Q':return'\x22'+rArr[b].toString(16)+'\x22';case'q':return'`'+rArr[b].toString(16)+'\x27';case'b':return'<'+!!rArr[b]+'>';}}}});},isURL:function(s){return QZFL.string.RegExps.isURL.test(s);},customEncode:function(s,type){var r;if(typeof type=='undefined'){type='';}
switch(type.toUpperCase()){case"URICPT":r=encodeURIComponent(s);break;default:r=encodeURIComponent(s);}
return r;},escapeURI:function(s){if(window.encodeURIComponent){return encodeURIComponent(s);}
if(window.escape){return escape(s);}
return'';},fillLength:function(source,length,ch,isRight){source=source+'';if(source.length<length){var res=(1<<(length-source.length)).toString(2).substring(1);if(ch){res=res.replace("0",ch).substring(1);}
return isRight?(source+res):(res+source);}else{return source;}},cut:function(str,bitLen,tails){str+='';bitLen-=0;tails=tails||'';if(isNaN(bitLen)){return str;}
var len=str.length,i=Math.min(Math.floor(bitLen/2),len),cnt=QZFL.string.getRealLen(str.slice(0,i));for(;i<len&&cnt<bitLen;i++){cnt+=1+!QZFL.string.RegExps.cut.test(str.charAt(i));}
return str.slice(0,cnt>bitLen?i-1:i)+(i<len?tails:'');},getRealLen:function(s,isUTF8){if(typeof(s)!='string'){return 0;}
if(!isUTF8){return s.replace(QZFL.string.RegExps.getRealLen.r0,"**").length;}else{var cc=s.replace(QZFL.string.RegExps.getRealLen.r1,"");return(s.length-cc.length)+(encodeURI(cc).length/3);}},format:function(str){var args=Array.prototype.slice.call(arguments),v;str=args.shift()+'';if(args.length==1&&typeof(args[0])=='object'){args=args[0];}
QZFL.string.RegExps.format.lastIndex=0;return str.replace(QZFL.string.RegExps.format,function(m,n){v=QZFL.object.route(args,n);return v===undefined?m:v;});}};QZFL.util={buildUri:function(s){return new QZFL.util.URI(s);},URI:function(s){if(!(QZFL.object.getType(s)=="string")){return null;}
if(s.indexOf("://")<1){s=location.protocol+"//"+location.host+(s.indexOf("/")==0?"":location.pathname.substr(0,location.pathname.lastIndexOf("/")+1))+s;}
var depart=s.split("://");if(QZFL.object.getType(depart)=="array"&&depart.length>1&&(/^[a-zA-Z]+$/).test(depart[0])){this.protocol=depart[0].toLowerCase();var h=depart[1].split("/");if(QZFL.object.getType(h)=="array"){this.host=h[0];this.pathname="/"+h.slice(1).join("/").replace(/(\?|\#).+/i,"");this.href=s;var se=depart[1].lastIndexOf("?"),ha=depart[1].lastIndexOf("#");this.search=(se>=0)?depart[1].substring(se):"";this.hash=(ha>=0)?depart[1].substring(ha):"";if(this.search.length>0&&this.hash.length>0){if(ha<se){this.search="";}else{this.search=depart[1].substring(se,ha);}}
return this;}else{return null;}}else{return null;}}}
QZFL.lang={isString:function(o){return QZFL.object.getType(o)=="string";},isArray:function(o){return QZFL.object.getType(o)=="array";},isFunction:function(o){return QZFL.object.getType(o)=="function";},isHashMap:function(o){return QZFL.object.getType(o)=="object";},isNode:function(o){if(typeof(Node)=='undefined'){Node=null;}
try{if(!o||!((Node!=undefined&&o instanceof Node)||o.nodeName)){return false;}}catch(ignored){return false;}
return true;},isElement:function(o){return o&&o.nodeType==1;},isValidXMLdom:function(o){if(!o||!o.xml||!(/^<\?xml/.test(o.xml))){return false;}
return true;},arg2arr:function(refArgs,start){return Array.prototype.slice.apply(refArgs,[start||0,refArgs.length]);},getObjByNameSpace:function(ns,setup){if(typeof(ns)!='string'){return ns;}
var l=ns.split("."),r=window;try{for(var i=0,len=l.length;i<len;++i){if(typeof(r[l[i]])=='undefined'){if(setup){r[l[i]]={};}else{return void(0);}}
r=r[l[i]];}
return r;}catch(ignore){return void(0);}},objectClone:function(obj,preventName){if((typeof obj)=='object'){var res=(QZFL.lang.isArray(obj))?[]:{};for(var i in obj){if(i!=preventName)
res[i]=QZFL.lang.objectClone(obj[i],preventName);}
return res;}else if((typeof obj)=='function'){return(new obj()).constructor;}
return obj;},obj2str:function(obj){var t,sw;if((typeof obj)=='object'){if(obj===null){return'null';}
sw=QZFL.lang.isArray(obj);t=[];for(var i in obj){t.push((sw?"":("\""+QZFL.string.escString(i)+"\":"))+obj2str(obj[i]));}
t=t.join();return sw?("["+t+"]"):("{"+t+"}");}else if((typeof obj)=='function'){return'';}else if((typeof obj)=='undefined'){return'undefined';}else if((typeof obj)=='number'){return obj.toString();}
return!obj?"\"\"":("\""+QZFL.string.escString(obj)+"\"");},propertieCopy:function(s,b,propertiSet,notOverWrite){var l=(!propertiSet||typeof(propertiSet)!='object')?b:propertiSet;s=s||{};for(var p in l){if(!notOverWrite||!(p in s)){s[p]=l[p];}}
return s;},tryThese:function(){var res;for(var ii=0,len=arguments.length;ii<len;ii++){try{res=arguments[ii]();return res;}catch(ignore){}}
return res;},chain:function(u,v){var calls=[];for(var ii=0,len=arguments.length;ii<len;ii++){calls.push(arguments[ii]);}
return(function(){for(var ii=0,len=calls.length;ii<len;ii++){if(calls[ii]&&calls[ii].apply(null,arguments)===false){return false;}}
return true;});},uniqueArray:function(arr){if(!QZFL.lang.isArray(arr)){return arr;}
var flag={},index=0;while(index<arr.length){if(flag[arr[index]]==typeof(arr[index])){arr.splice(index,1);continue;}
flag[arr[index].toString()]=typeof(arr[index]);++index;}
return arr;}};QZFL.XHR=function(actionURL,cname,method,data,isAsync,nocache){if(!cname){cname="_xhrInstence_"+(QZFL.XHR.counter+1);}
var prot;if(QZFL.XHR.instance[cname]instanceof QZFL.XHR){prot=QZFL.XHR.instance[cname];}else{prot=(QZFL.XHR.instance[cname]=this);QZFL.XHR.counter++;}
prot._name=cname;prot._nc=!!nocache;prot._method=(QZFL.object.getType(method)!="string"||method.toUpperCase()!="GET")?"POST":(method="GET");prot._isAsync=(!(isAsync===false))?true:isAsync;prot._uri=actionURL;prot._data=(QZFL.object.getType(data)=="object"||QZFL.object.getType(data)=='string')?data:{};prot._sender=null;prot._isHeaderSetted=false;prot._xmlQueue=QZFL.queue("xhr"+cname,[function(){return new XMLHttpRequest();},function(){return new ActiveXObject("Msxml2.XMLHTTP");},function(){return new ActiveXObject("Microsoft.XMLHTTP");}]);this.onSuccess=QZFL.emptyFn;this.onError=QZFL.emptyFn;this.charset="gb2312";this.proxyPath="";return prot;}
QZFL.XHR.instance={};QZFL.XHR.counter=0;QZFL.XHR._errCodeMap={400:{msg:'Bad Request'},401:{msg:'Unauthorized'},403:{msg:'Forbidden'},404:{msg:'Not Found'},999:{msg:'Proxy page error'},1000:{msg:'Bad Response'},1001:{msg:'No Network'},1002:{msg:'No Data'},1003:{msg:'Eval Error'}};QZFL.XHR.xsend=function(o,uri){if(!(o instanceof QZFL.XHR)){return false;}
if(QZFL.userAgent.firefox&&QZFL.userAgent.firefox<3){return false;}
function clear(obj){try{obj._sender=obj._sender.callback=obj._sender.errorCallback=obj._sender.onreadystatechange=null;}catch(ignore){}
if(QZFL.userAgent.safari||QZFL.userAgent.opera){setTimeout('QZFL.dom.removeElement($("_xsend_frm_'+obj._name+'"))',50);}else{QZFL.dom.removeElement($("_xsend_frm_"+obj._name));}}
if(o._sender===null||o._sender===void(0)){var sender=document.createElement("iframe");sender.id="_xsend_frm_"+o._name;sender.style.width=sender.style.height=sender.style.borderWidth="0";document.body.appendChild(sender);sender.callback=QZFL.event.bind(o,function(data){o.onSuccess(data);clear(o);});sender.errorCallback=QZFL.event.bind(o,function(num){o.onError(QZFL.XHR._errCodeMap[num]);clear(o);});o._sender=sender;}
var tmp=QZFL.config.gbEncoderPath;o.GBEncoderPath=tmp?tmp:"";o._sender.src=uri.protocol+"://"+uri.host+(this.proxyPath?this.proxyPath:"/xhr_proxy_gbk.html");return true;}
QZFL.XHR.genHttpParamString=function(o,cs){cs=(cs||"gb2312").toLowerCase();var r=[];for(var i in o){r.push(i+"="+((cs=="utf-8")?encodeURIComponent(o[i]):QZFL.string.URIencode(o[i])));}
return r.join("&");};QZFL.XHR.prototype.send=function(){if(this._method=='POST'&&this._data==null){return false;}
var u=new QZFL.util.URI(this._uri);if(u==null){return false;}
this._uri=u.href;if(QZFL.object.getType(this._data)=="object"){this._data=QZFL.XHR.genHttpParamString(this._data,this.charset);}
if(this._method=='GET'){this._uri+=(this._uri.indexOf("?")<0?"?":"&")+this._data;}
if(u.host!=location.host){return QZFL.XHR.xsend(this,u);}
if(this._sender===null||this._sender===void(0)){var sender=(function(){if(!this._xmlQueue.getLen()){return null;}
var _xhr=this._xmlQueue.shift();if(_xhr){return _xhr;}else{return arguments.callee.call(this);}}).call(this);if(!sender){return false;}
this._sender=sender;}
try{this._sender.open(this._method,this._uri,this._isAsync);}catch(err){return false;}
if(this._method=='POST'&&!this._isHeaderSetted){this._sender.setRequestHeader('Content-Type','application/x-www-form-urlencoded');this._isHeaderSetted=true;}
if(this._nc){this._sender.setRequestHeader('If-Modified-Since','Thu, 1 Jan 1970 00:00:00 GMT');this._sender.setRequestHeader('Cache-Control','no-cache');}
this._sender.onreadystatechange=QZFL.event.bind(this,function(){try{if(this._sender.readyState==4){if(this._sender.status>=200&&this._sender.status<300){this.onSuccess({text:this._sender.responseText,xmlDom:this._sender.responseXML});}else{if(QZFL.userAgent.safari&&(QZFL.object.getType(this._sender.status)=='undefined')){this.onError(QZFL.XHR._errCodeMap[1002]);}else{this.onError(QZFL.XHR._errCodeMap[this._sender.status]);}}
delete this._sender;this._sender=null;}}catch(err){}});this._sender.send((this._method=='POST'?this._data:void(0)));return true;};QZFL.XHR.prototype.destroy=function(){var n=this._name;delete QZFL.XHR.instance[n]._sender;QZFL.XHR.instance[n]._sender=null;delete QZFL.XHR.instance[n];QZFL.XHR.counter--;return null;};QZFL.JsLoader=function(isDebug){this.debug=isDebug||(QZFL.config.debugLevel>1);this.onload=QZFL.emptyFn;this.onerror=QZFL.emptyFn;}
QZFL.JsLoader.prototype.load=function(src,doc,opt){var opts={},t=typeof(opt),o=this;if(t=="string"){opts.charset=opt;}else if(t=="object"){opts=opt;}
opts.charset=opts.charset||"gb2312";setTimeout(function(){o._load.apply(o,[src,doc||document,opts]);o=null;},0);}
QZFL.JsLoader.prototype._load=function(src,doc,opts){var _ie=QZFL.userAgent.ie,_js=doc.createElement("script"),o=this,_rm=QZFL.dom.removeElement,_ae=QZFL.event.addEvent,tmp,k;_ae(_js,(_ie?"readystatechange":"load"),function(){if(!_js||_ie&&!(_js.readyState=='loaded')){return;}
o.onload();if(!o.debug){_rm(_js);}
_js=_rm=_ae=o=null;});if(!_ie){_ae(_js,'error',function(){o.onerror();if(!o.debug){_rm(_js);}
_js=_rm=_ae=o=null;})}
for(k in opts){if(typeof(tmp=opts[k])=="string"&&k.toLowerCase()!="src"){_js.setAttribute(k,tmp);}}
doc.getElementsByTagName("head")[0].appendChild(_js);_js.src=src;opts=null;};QZFL["js"+"Loader"]=QZFL.JsLoader;QZFL.JSONGetter=function(actionURL,cname,data,charset,junctionMode){if(QZFL.object.getType(cname)!="string"){cname="_jsonInstence_"+(QZFL.JSONGetter.counter+1);}
var prot=QZFL.JSONGetter.instance[cname];if(prot instanceof QZFL.JSONGetter){}else{QZFL.JSONGetter.instance[cname]=prot=this;QZFL.JSONGetter.counter++;prot._name=cname;prot._sender=null;prot._timer=null;this.onSuccess=QZFL.emptyFn;this.onError=QZFL.emptyFn;this.onTimeout=QZFL.emptyFn;this.timeout=5000;this.clear=QZFL.emptyFn;this._baseClear=function(){this._waiting=false;this._squeue=[];this._equeue=[];this.onSuccess=this.onError=QZFL.emptyFn;this.clear=null;};}
prot._uri=actionURL;prot._data=(data&&(QZFL.object.getType(data)=="object"||QZFL.object.getType(data)=="string"))?data:null;prot._charset=(QZFL.object.getType(charset)!='string')?QZFL.config.defaultDataCharacterSet:charset;prot._jMode=!!junctionMode;return prot;};QZFL.JSONGetter.instance={};QZFL.JSONGetter.counter=0;QZFL.JSONGetter._errCodeMap={999:{msg:'Connection or Server error.'},998:{msg:'Connection to Server timeout.'}};QZFL.JSONGetter.genHttpParamString=function(o){var r=[];for(var i in o){r.push(i+"="+encodeURIComponent(o[i]));}
return r.join("&");};QZFL.JSONGetter.prototype.addOnSuccess=function(f){if(typeof(f)=="function"){if(this._squeue&&this._squeue.push){}else{this._squeue=[];}
this._squeue.push(f);}};QZFL.JSONGetter._runFnQueue=function(q,resultArgs,th){var f;if(q&&q.length){while(q.length>0){f=q.shift();if(typeof(f)=="function"){f.apply(th?th:null,resultArgs);}}}};QZFL.JSONGetter.prototype.addOnError=function(f){if(typeof(f)=="function"){if(this._equeue&&this._equeue.push){}else{this._equeue=[];}
this._equeue.push(f);}};QZFL.JSONGetter.pluginsPool={"srcStringHandler":[],"onErrorHandler":[]};QZFL.JSONGetter._pluginsRunner=function(pType,data){var _s=QZFL.JSONGetter,l=_s.pluginsPool[pType],t=data,len;if(l&&(len=l.length)){for(var i=0;i<len;++i){if(typeof(l[i])=="function"){t=l[i](t);}}}
return t;};QZFL.JSONGetter.prototype.send=function(callbackFnName){if(this._waiting){return;}
var clear,cfn=(QZFL.object.getType(callbackFnName)!='string')?"callback":callbackFnName,da=this._uri;if(this._data){da+=(da.indexOf("?")<0?"?":"&")+((typeof(this._data)=="object")?QZFL.JSONGetter.genHttpParamString(this._data):this._data);}
da=QZFL.JSONGetter._pluginsRunner("srcStringHandler",da);if(this._jMode){window[cfn]=this.onSuccess;var _sd=new QZFL.JsLoader();_sd.onerror=this.onError;_sd.load(da,void(0),this._charset);return;}
this._timer=setTimeout((function(th){return function(){th._waiting=false;th.onTimeout();};})(this),this.timeout);if(QZFL.userAgent.ie&&(QZFL.userAgent.ie<10)&&!(QZFL.userAgent.beta&&navigator.appVersion.indexOf("Trident\/4.0")>-1)){var df=document.createDocumentFragment(),sender=(QZFL.userAgent.ie>8?document:df).createElement("script");sender.charset=this._charset;this._senderDoc=df;this._sender=sender;this.clear=clear=function(o){clearTimeout(o._timer);if(o._sender){o._sender.onreadystatechange=null;}
df['callback']=df['_Callback']=df[cfn]=null;df=o._senderDoc=o._sender=null;o._baseClear();};df['callback']=df['_Callback']=df[cfn]=(function(th){return(function(){th._waiting=false;th.onSuccess.apply(th,arguments);QZFL.JSONGetter._runFnQueue(th._squeue,arguments,th);clear(th);});})(this);if(QZFL.userAgent.ie<9){sender.onreadystatechange=(function(th){return(function(){if(th._sender&&th._sender.readyState=="loaded"){try{th._onError();}catch(ignore){}}});})(this);}else{sender.onerror=(function(th){return(function(){try{th._onError();}catch(ignore){}});})(this);}
this._waiting=true;df.appendChild(sender);this._sender.src=da;}else{this.clear=clear=function(o){clearTimeout(o._timer);o._baseClear();};window[cfn]=function(){QZFL.JSONGetter.args=arguments;};var callback=(function(th){return function(){th.onSuccess.apply(th,QZFL.JSONGetter.args);QZFL.JSONGetter._runFnQueue(th._squeue,QZFL.JSONGetter.args,th);QZFL.JSONGetter.args=[];clear(th);}})(this);var _ecb=(function(th){return(function(){th._waiting=false;var _eo=QZFL.JSONGetter._errCodeMap[999];th.onError(_eo);QZFL.JSONGetter._runFnQueue(th._equeue,[_eo],th);clear(th);});})(this);var h=document.getElementsByTagName('head'),node;h=h&&h[0]||document.body;if(!h)
return;var baseElement=h.getElementsByTagName('base')[0];node=document.createElement('script');node.charset=this._charset||'utf-8';node.onload=function(){this.onload=null;if(node.parentNode){h.removeChild(node);}
callback();node=void(0);};node.onerror=function(){this.onerror=null;_ecb();}
node.src=da;baseElement?h.insertBefore(node,baseElement):h.appendChild(node);}};QZFL.JSONGetter.prototype._onError=function(){this._waiting=false;var _eo=QZFL.JSONGetter._errCodeMap[999];this.onError(_eo);QZFL.JSONGetter._runFnQueue(this._equeue,[_eo],this);QZFL.JSONGetter._pluginsRunner("onErrorHandler",this);this.clear(this);};QZFL.JSONGetter.prototype.destroy=QZFL.emptyFn;QZFL.FormSender=function(actionURL,method,data,charset){this.name="_fpInstence_"+QZFL.FormSender.counter;QZFL.FormSender.instance[this.name]=this;QZFL.FormSender.counter++;var c=String(charset).toLowerCase();if(typeof(actionURL)=='object'&&actionURL.nodeType==1&&actionURL.tagName=='FORM'){this.instanceForm=actionURL;}else{this.method=method||"POST";this.uri=actionURL;this.charset=(c=='utf-8'||c=='gbk'||c=='gb2312'||c=='gb18030')?c:'gb2312';this.data=(typeof(data)=="object"||typeof(data)=='string')?data:null;this.proxyURL=(this.charset=="utf-8")?QZFL.config.FSHelperPage.replace(/_gbk/,"_utf8"):QZFL.config.FSHelperPage;}
this._sender=null;this.onSuccess=QZFL.emptyFn;this.onError=QZFL.emptyFn;};QZFL.FormSender.instance={};QZFL.FormSender.counter=0;QZFL.FormSender._errCodeMap={999:{msg:'Connection or Server error'}};QZFL.FormSender.pluginsPool={"formHandler":[],"onErrorHandler":[]};QZFL.FormSender._pluginsRunner=function(pType,data){var _s=QZFL.FormSender,l=_s.pluginsPool[pType],t=data,len;if(l&&(len=l.length)){for(var i=0;i<len;++i){if(typeof(l[i])=="function"){t=l[i](t);}}}
return t;};QZFL.FormSender._clear=function(o){o._sender=o._sender.callback=o._sender.errorCallback=o._sender.onreadystatechange=null;if(QZFL.userAgent.safari||QZFL.userAgent.opera){setTimeout('QZFL.dom.removeElement(document.getElementById("_fp_frm_'+o.name+'"))',50);}else{QZFL.dom.removeElement(document.getElementById("_fp_frm_"+o.name));}
o.instanceForm=null;};QZFL.FormSender.prototype.send=function(){if(this._sender===null||this._sender===void(0)){var timer,sender=document.createElement("iframe");sender.id=sender.name="_fp_frm_"+this.name;sender.style.cssText="width:0;height:0;border-width:0;display:none;";document.body.appendChild(sender);sender._Callback=(function(th){return function(o){clearTimeout(timer);th.onSuccess(o);QZFL.FormSender._clear(th);}})(this);sender.errorCallback=(function(th){return function(o){clearTimeout(timer);th.onError(o);QZFL.FormSender._pluginsRunner('onErrorHandler',th);QZFL.FormSender._clear(th);};})(this);if(typeof(sender.onreadystatechange)!='undefined'){((!this.instanceForm)&&(QZFL.userAgent.ie&&QZFL.userAgent.ie<8))&&(sender.onreadystatechange=(function(th){return function(){if(th._sender.readyState=='complete'&&th._sender.submited){QZFL.FormSender._clear(th);th.onError(QZFL.FormSender._errCodeMap[999]);QZFL.FormSender._pluginsRunner('onErrorHandler',th);}};})(this));}else{timer=setTimeout((function(th){return function(){try{var _t=th._sender.contentWindow.location.href;if(_t.indexOf(th.uri)==0){clearTimeout(timer);QZFL.FormSender._clear(th);th.onError(QZFL.FormSender._errCodeMap[999]);QZFL.FormSender._pluginsRunner('onErrorHandler',th);}}catch(err){clearTimeout(timer);QZFL.FormSender._clear(th);th.onError(QZFL.FormSender._errCodeMap[999]);QZFL.FormSender._pluginsRunner('onErrorHandler',th);}}})(this),1500);}
this._sender=sender;}
if(!this.instanceForm){var t=this,ie=QZFL.userAgent.ie,ifrurl,ifrHTML,data=t.data,jsondata={};ifrHTML='<!DOCTYPE html><html lang="zh-cn"><head><meta http-equiv="content-type" content="text/html; charset='+t.charset+'" /><meta charset="'+t.charset+'" />';if(ie){ifrurl='javascript:document.open();document.domain="'+document.domain+'";var me=parent.QZFL.FormSender.instance["'+t.name+'"];document.write(me.ifrHTML);document.close();';}
ifrHTML=ifrHTML+'<script type="text/javascript">'+(ie&&('document.charset="'+t.charset+'"')||'')+';document.domain="'+document.domain+'";frameElement.submited=void(0);<\/script><\/head><body>';ifrHTML=ifrHTML+'<form action="'+t.uri+(t.uri.indexOf('?')>-1?'&':'?')+'g_tk='+QSFL.xhr.getAntiCSRFToken()+'" accept-charset="'+t.charset+'" id="p" enctype="application/x-www-form-urlencoded;charset='+t.charset+'" method="post">';ifrHTML=ifrHTML+'<input type="hidden" name="qzreferrer" id="qzreferrer" />';ifrHTML=ifrHTML+'<\/form><script type="text/javascript">var me=parent.QZFL.FormSender.instance["'+t.name+'"],doc=document,f=doc.getElementById("p"),d=me.jsonData,fg=doc.createDocumentFragment();if(typeof d=="string"){var l=d.split("&");for(var i=0;i<l.length;i++){var kv=l[i].split("=");var ipt=doc.createElement("input");ipt.type="hidden";ipt.name=kv[0];ipt.value=decodeURIComponent(kv[1]);fg.appendChild(ipt);}}else{for(var i in d){var ipt=doc.createElement("input");ipt.type="hidden";ipt.name=i;ipt.value=d[i];fg.appendChild(ipt);}}f.appendChild(fg);doc.getElementById("qzreferrer").value=parent.location.href;f.submit();<\/script><\/body><\/html>';t.ifrHTML=ifrHTML;t.ifrurl=ifrurl;t.jsonData=data;ie?setTimeout((function(th){return function(){th._sender.src=th.ifrurl;}})(t),10):(sender.src='javascript:;');if(!ie){var d=sender.contentDocument||sender.contentWindow.document;if(d){d.open();d.write(t.ifrHTML);d.close();}}}else{this.instanceForm.target=(sender.name=sender.id);this._sender.submited=true;this.instanceForm.submit();}
return true;};QZFL.FormSender.prototype.destroy=function(){var n=this.name;delete QZFL.FormSender.instance[n]._sender;QZFL.FormSender.instance[n]._sender=null;delete QZFL.FormSender.instance[n];QZFL.FormSender.counter--;return null;};if(!QSFL.lang)
{QSFL.lang={};}
QSFL.lang.getType=function(o)
{return o===null?'null':(o===undefined?'undefined':Object.prototype.toString.call(o).slice(8,-1).toLowerCase());};QSFL.lang.isString=function(o)
{return QSFL.lang.getType(o)=="string";};QSFL.lang.isArray=function(o)
{return QSFL.lang.getType(o)=="array";};QSFL.lang.isFunction=function(o)
{return QSFL.lang.getType(o)=="function";};if(!QSFL.string)
{QSFL.string={};}
QSFL.string.format=function(o)
{return QZFL.string.format.apply(this,arguments);};Array.fromObject=function(xObject)
{if(typeof(xObject)!="undefined")
{if(typeof(xObject.length)!="undefined")
{var aData=[];for(var i=0;i<xObject.length;++i)
{aData.push(xObject[i]);}
return aData;}
else
{return[xObject];}}
return[];}
Array.prototype.each=function(fnOp)
{for(var i=0;i<this.length;++i)
{fnOp(this[i]);}
return this;}
Array.prototype.del=function(iIndex)
{if(iIndex<-this.length||iIndex>=this.length)
{return this;}
if(iIndex<0)
{return this.del(this.length+iIndex);}
else
{return this.slice(0,iIndex).concat(this.slice(iIndex+1,this.length));}}
Array.prototype.find=function(xData)
{for(var i=0;i<this.length;++i)
{if(this[i]==xData)
{return i;}}
return null;};Array.prototype.findIf=function(fnEQ)
{for(var i=0;i<this.length;++i)
{if(fnEQ(this[i]))
{return i;}}
return null;};Array.prototype.findElemIf=function(fnEQ)
{for(var i=0;i<this.length;++i)
{if(fnEQ(this[i]))
{return this[i];}}
return null;};Array.prototype.findMul=function(xData)
{var a=[];for(var i=0;i<this.length;++i)
{if(this[i]==xData)
{a.push(i);}}
return a;};Array.prototype.findMulElem=function(xData)
{var a=[];for(var i=0;i<this.length;++i)
{if(this[i]==xData)
{a.push(this[i]);}}
return a;};Array.prototype.findMulIf=function(fnEQ)
{var a=[];for(var i=0;i<this.length;++i)
{if(fnEQ(this[i]))
{a.push(i);}}
return a;};Array.prototype.findMulElemIf=function(fnEQ)
{var a=[];for(var i=0;i<this.length;++i)
{if(fnEQ(this[i]))
{a.push(this[i]);}}
return a;};Array.prototype.pushIfNotExists=function(xData)
{if(this.find(xData)==null)
{this.push(xData);}
return this;};Array.prototype.pushIfNotExistsIf=function(xData,fnEQ)
{if(this.findIf(fnEQ)==null)
{this.push(xData);}
return this;};Array.prototype.remove=function(xData)
{var a=this.findMul(xData);for(var i=a.length-1;i>=0;--i)
{this.splice(a[i],1);}
return this;};Array.prototype.removeIf=function(fnEQ)
{var a=this.findMulIf(fnEQ);for(var i=a.length-1;i>=0;--i)
{this.splice(a[i],1);}
return this;};Array.prototype.transform=function(fnOp)
{for(var i=0;i<this.length;++i)
{this[i]=fnOp(this[i]);}
return this;};Array.prototype.uniq=function()
{var i=1;while(i<this.length)
{if(this[i]==this[i-1])
{this.splice(i,1);}
else
{++i;}}
return this;}
Array.prototype.uniqIf=function(fnEQ)
{var i=1;while(i<this.length)
{if(fnEQ(this[i],this[i-1]))
{this.splice(i,1);}
else
{++i;}}
return this;}
Math.randomInt=function(nMax)
{return Math.floor(Math.random()*nMax);};String.prototype.between=function(sBegin,sEnd)
{var bp=this.indexOf(sBegin);if(bp==-1)
{return("");}
bp+=sBegin.length;var ep=this.indexOf(sEnd,bp);if(ep==-1)
{return("");}
return this.substr(bp,ep-bp);};String.prototype.replaceAll=function(sSrc,sTarget)
{return this.split(sSrc).join(sTarget);};String.prototype.asclen=function()
{return this.replace(/[\u0100-\uffff]/g,"  ").length;};String.prototype.asccut=function(nAsclen)
{var i=0;while(nAsclen>0&&i<this.length)
{nAsclen-=this.charCodeAt(i)>=256?2:1;i+=(nAsclen>=0?1:0);}
return this.substr(0,i);};String.prototype.escHtmlEp=function()
{return this.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g,function(r)
{return"&#"+r.charCodeAt(0)+";"});};String.prototype.escHtml=function()
{return this.replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g,function(r)
{return"&#"+r.charCodeAt(0)+";"}).replace(/ /g,"&nbsp;").replace(/\r\n/g,"<br />").replace(/\n/g,"<br />").replace(/\r/g,"<br />");};String.prototype.escScript=function()
{return this.replace(/[\\"']/g,function(r)
{return"\\"+r;}).replace(/%/g,"\\x25").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\x01/g,"\\x01");};String.prototype.escUrl=function()
{return escape(this).replace(/\+/g,"%2B");};String.prototype.escMiniUrl=function()
{return this.replace(/%/g,"%25");};String.prototype.escHrefScript=function()
{return this.escScript().escMiniUrl().escHtmlEp();};String.prototype.escRegexp=function()
{return this.replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g,function(a,b)
{return"\\"+a;});};String.prototype.escape=function()
{return escape(this);};String.prototype.unescape=function()
{return unescape(this);};String.prototype.escNone=function()
{return this.toString();}
String.prototype.trim=function()
{return this.replace(/(^\s*)|(\s*$)/g,"");};String.prototype.trimLeft=function()
{return this.replace(/(^\s*)/g,"");};String.prototype.trimRight=function()
{return this.replace(/(\s*$)/g,"");};Date.prototype.format=function(sFmt)
{function LENFix(i,n)
{var sRet=i.toString();while(sRet.length<n)
{sRet="0"+sRet;}
return sRet;}
var mapData={"%Y":this.getFullYear(),"%m":LENFix(this.getMonth()+1,2),"%d":LENFix(this.getDate(),2),"%H":LENFix(this.getHours(),2),"%M":LENFix(this.getMinutes(),2),"%S":LENFix(this.getSeconds(),2)};return sFmt.replace(/%[YmdHMS]/g,function(sData)
{return(mapData[sData]);});};QSFL.encode={escUrl:function(v)
{return v.toString().escUrl();},escHtml:function(v)
{return v.toString().escHtml();},escHtmlEp:function(v)
{return v.toString().escHtmlEp();},escScript:function(v)
{return v.toString().escScript();},escHrefScript:function(v)
{return v.toString().escHrefScript();},escNone:function(v)
{return v.toString().escNone();}};QSFL.lang.huffman={algorithm:{encode:function(sData)
{function v()
{return String.fromCharCode.apply(null,arguments);}
var m=[];m[48]=[1,v(0)];m[57]=[6,v(1)];m[124]=[6,v(33)];m[46]=[5,v(17)];m[49]=[4,v(9)];m[54]=[6,v(5)];m[56]=[6,v(37)];m[52]=[5,v(21)];m[50]=[6,v(13)];m[38]=[8,v(45,0)];m[10]=[9,v(173,0)];m[70]=[10,v(173,1)];m[100]=[15,v(173,3)];m[105]=[16,v(173,67,0)];m[65]=[18,v(173,195,0)];m[69]=[18,v(173,195,2)];m[4]=[23,v(173,195,1)];m[5]=[23,v(173,195,65)];m[2]=[23,v(173,195,33)];m[3]=[23,v(173,195,97)];m[8]=[23,v(173,195,17)];m[9]=[23,v(173,195,81)];m[6]=[23,v(173,195,49)];m[7]=[23,v(173,195,113)];m[34]=[22,v(173,195,9)];m[36]=[22,v(173,195,41)];m[0]=[23,v(173,195,25)];m[1]=[23,v(173,195,89)];m[33]=[22,v(173,195,57)];m[22]=[23,v(173,195,5)];m[23]=[23,v(173,195,69)];m[20]=[23,v(173,195,37)];m[21]=[23,v(173,195,101)];m[26]=[23,v(173,195,21)];m[27]=[23,v(173,195,85)];m[24]=[23,v(173,195,53)];m[25]=[23,v(173,195,117)];m[13]=[23,v(173,195,13)];m[14]=[23,v(173,195,77)];m[11]=[23,v(173,195,45)];m[12]=[23,v(173,195,109)];m[18]=[23,v(173,195,29)];m[19]=[23,v(173,195,93)];m[15]=[23,v(173,195,61)];m[17]=[23,v(173,195,125)];m[62]=[22,v(173,195,3)];m[64]=[22,v(173,195,35)];m[59]=[22,v(173,195,19)];m[60]=[22,v(173,195,51)];m[84]=[22,v(173,195,11)];m[91]=[22,v(173,195,43)];m[78]=[22,v(173,195,27)];m[83]=[22,v(173,195,59)];m[41]=[22,v(173,195,7)];m[42]=[22,v(173,195,39)];m[39]=[22,v(173,195,23)];m[40]=[22,v(173,195,55)];m[47]=[22,v(173,195,15)];m[58]=[22,v(173,195,47)];m[43]=[22,v(173,195,31)];m[44]=[22,v(173,195,63)];m[67]=[14,v(173,35)];m[117]=[13,v(173,19)];m[103]=[16,v(173,11,0)];m[165]=[23,v(173,139,0)];m[166]=[23,v(173,139,64)];m[162]=[23,v(173,139,32)];m[164]=[23,v(173,139,96)];m[169]=[23,v(173,139,16)];m[170]=[23,v(173,139,80)];m[167]=[23,v(173,139,48)];m[168]=[23,v(173,139,112)];m[156]=[23,v(173,139,8)];m[157]=[23,v(173,139,72)];m[154]=[23,v(173,139,40)];m[155]=[23,v(173,139,104)];m[160]=[23,v(173,139,24)];m[161]=[23,v(173,139,88)];m[158]=[23,v(173,139,56)];m[159]=[23,v(173,139,120)];m[181]=[23,v(173,139,4)];m[182]=[23,v(173,139,68)];m[179]=[23,v(173,139,36)];m[180]=[23,v(173,139,100)];m[185]=[23,v(173,139,20)];m[186]=[23,v(173,139,84)];m[183]=[23,v(173,139,52)];m[184]=[23,v(173,139,116)];m[173]=[23,v(173,139,12)];m[174]=[23,v(173,139,76)];m[171]=[23,v(173,139,44)];m[172]=[23,v(173,139,108)];m[177]=[23,v(173,139,28)];m[178]=[23,v(173,139,92)];m[175]=[23,v(173,139,60)];m[176]=[23,v(173,139,124)];m[132]=[23,v(173,139,2)];m[133]=[23,v(173,139,66)];m[130]=[23,v(173,139,34)];m[131]=[23,v(173,139,98)];m[136]=[23,v(173,139,18)];m[137]=[23,v(173,139,82)];m[134]=[23,v(173,139,50)];m[135]=[23,v(173,139,114)];m[30]=[23,v(173,139,10)];m[31]=[23,v(173,139,74)];m[28]=[23,v(173,139,42)];m[29]=[23,v(173,139,106)];m[128]=[23,v(173,139,26)];m[129]=[23,v(173,139,90)];m[32]=[23,v(173,139,58)];m[127]=[23,v(173,139,122)];m[148]=[23,v(173,139,6)];m[149]=[23,v(173,139,70)];m[146]=[23,v(173,139,38)];m[147]=[23,v(173,139,102)];m[152]=[23,v(173,139,22)];m[153]=[23,v(173,139,86)];m[150]=[23,v(173,139,54)];m[151]=[23,v(173,139,118)];m[140]=[23,v(173,139,14)];m[141]=[23,v(173,139,78)];m[138]=[23,v(173,139,46)];m[139]=[23,v(173,139,110)];m[144]=[23,v(173,139,30)];m[145]=[23,v(173,139,94)];m[142]=[23,v(173,139,62)];m[143]=[23,v(173,139,126)];m[230]=[23,v(173,139,1)];m[231]=[23,v(173,139,65)];m[228]=[23,v(173,139,33)];m[229]=[23,v(173,139,97)];m[234]=[23,v(173,139,17)];m[235]=[23,v(173,139,81)];m[232]=[23,v(173,139,49)];m[233]=[23,v(173,139,113)];m[222]=[23,v(173,139,9)];m[223]=[23,v(173,139,73)];m[220]=[23,v(173,139,41)];m[221]=[23,v(173,139,105)];m[226]=[23,v(173,139,25)];m[227]=[23,v(173,139,89)];m[224]=[23,v(173,139,57)];m[225]=[23,v(173,139,121)];m[246]=[23,v(173,139,5)];m[247]=[23,v(173,139,69)];m[244]=[23,v(173,139,37)];m[245]=[23,v(173,139,101)];m[250]=[23,v(173,139,21)];m[251]=[23,v(173,139,85)];m[248]=[23,v(173,139,53)];m[249]=[23,v(173,139,117)];m[238]=[23,v(173,139,13)];m[239]=[23,v(173,139,77)];m[236]=[23,v(173,139,45)];m[237]=[23,v(173,139,109)];m[242]=[23,v(173,139,29)];m[243]=[23,v(173,139,93)];m[240]=[23,v(173,139,61)];m[241]=[23,v(173,139,125)];m[198]=[23,v(173,139,3)];m[199]=[23,v(173,139,67)];m[196]=[23,v(173,139,35)];m[197]=[23,v(173,139,99)];m[202]=[23,v(173,139,19)];m[203]=[23,v(173,139,83)];m[200]=[23,v(173,139,51)];m[201]=[23,v(173,139,115)];m[189]=[23,v(173,139,11)];m[190]=[23,v(173,139,75)];m[187]=[23,v(173,139,43)];m[188]=[23,v(173,139,107)];m[194]=[23,v(173,139,27)];m[195]=[23,v(173,139,91)];m[192]=[23,v(173,139,59)];m[193]=[23,v(173,139,123)];m[214]=[23,v(173,139,7)];m[215]=[23,v(173,139,71)];m[212]=[23,v(173,139,39)];m[213]=[23,v(173,139,103)];m[218]=[23,v(173,139,23)];m[219]=[23,v(173,139,87)];m[216]=[23,v(173,139,55)];m[217]=[23,v(173,139,119)];m[206]=[23,v(173,139,15)];m[207]=[23,v(173,139,79)];m[204]=[23,v(173,139,47)];m[205]=[23,v(173,139,111)];m[210]=[23,v(173,139,31)];m[211]=[23,v(173,139,95)];m[208]=[23,v(173,139,63)];m[209]=[23,v(173,139,127)];m[102]=[16,v(173,75,0)];m[72]=[20,v(173,203,0)];m[82]=[20,v(173,203,8)];m[96]=[22,v(173,203,4)];m[112]=[22,v(173,203,36)];m[93]=[22,v(173,203,20)];m[94]=[22,v(173,203,52)];m[123]=[22,v(173,203,12)];m[125]=[22,v(173,203,44)];m[118]=[22,v(173,203,28)];m[121]=[22,v(173,203,60)];m[80]=[21,v(173,203,2)];m[81]=[21,v(173,203,18)];m[254]=[23,v(173,203,10)];m[255]=[23,v(173,203,74)];m[252]=[23,v(173,203,42)];m[253]=[23,v(173,203,106)];m[61]=[21,v(173,203,26)];m[99]=[20,v(173,203,6)];m[88]=[21,v(173,203,14)];m[126]=[22,v(173,203,30)];m[120]=[22,v(173,203,62)];m[75]=[20,v(173,203,1)];m[79]=[20,v(173,203,9)];m[16]=[21,v(173,203,5)];m[163]=[22,v(173,203,21)];m[191]=[22,v(173,203,53)];m[89]=[20,v(173,203,13)];m[97]=[19,v(173,203,3)];m[109]=[19,v(173,203,7)];m[101]=[15,v(173,43)];m[107]=[21,v(173,107,0)];m[122]=[21,v(173,107,16)];m[85]=[21,v(173,107,8)];m[106]=[21,v(173,107,24)];m[71]=[20,v(173,107,4)];m[76]=[20,v(173,107,12)];m[63]=[19,v(173,107,2)];m[87]=[20,v(173,107,6)];m[90]=[20,v(173,107,14)];m[92]=[19,v(173,107,1)];m[73]=[21,v(173,107,5)];m[98]=[21,v(173,107,21)];m[74]=[20,v(173,107,13)];m[114]=[21,v(173,107,3)];m[119]=[21,v(173,107,19)];m[104]=[21,v(173,107,11)];m[113]=[21,v(173,107,27)];m[68]=[19,v(173,107,7)];m[116]=[16,v(173,235,0)];m[37]=[14,v(173,27)];m[66]=[16,v(173,59,0)];m[108]=[17,v(173,187,0)];m[115]=[17,v(173,187,1)];m[111]=[16,v(173,123,0)];m[110]=[16,v(173,251,0)];m[77]=[11,v(173,7)];m[45]=[9,v(109,0)];m[86]=[9,v(109,1)];m[35]=[8,v(237,0)];m[53]=[6,v(29)];m[55]=[7,v(61)];m[51]=[7,v(125)];m[95]=[2,v(3)];var nByte=0;var nBit=0;var sResult="";sResult+=String.fromCharCode(Math.floor(sData.length/256)%256);sResult+=String.fromCharCode((sData.length)%256);for(var i=0;i<sData.length;i++)
{for(var j=0;j<m[sData.charCodeAt(i)][0];j++)
{nByte|=((m[sData.charCodeAt(i)][1].charCodeAt(j/8)>>(j%8))&1)<<nBit;if(++nBit==8)
{sResult+=String.fromCharCode(nByte);nByte=0;nBit=0;}}}
if(nBit>0)
{sResult+=String.fromCharCode(nByte);}
return sResult;},conv64:function(sData)
{var mapSymbol=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-","_"];var nByte=0;var nBit=0;var sResult="";for(var i=0;i<sData.length;i++)
{for(var j=0;j<8;j++)
{nByte|=(sData.charCodeAt(i)>>(7-j)&1)<<(5-nBit);if(++nBit==6)
{sResult+=mapSymbol[nByte];nByte=0;nBit=0;}}}
if(nBit>0)
{sResult+=mapSymbol[nByte];}
return sResult;},encodeQQShow:function(sData)
{if(sData.substr(0,1)!='V'||sData.length>1024*6)
{return"";}
return"Z2"+this.conv64(this.encode(sData));}},encodeQQShow:function(sData)
{return this.algorithm.encodeQQShow(sData)}}
QSFL.env={UIN:{MIN:10000,MAX:4294967294,BEGIN:10000,END:4294967295,CONSTANT_END:0},DOMAIN:{QQSHOW:"show.qq.com",CARDGAME:"card.show.qq.com",MINIHOME:"world.show.qq.com",LIVE:"live.show.qq.com",CONSTANT_END:0}}
QSFL.userAgent=(function()
{return QZFL.userAgent;})();QSFL.userAgent.isIE=function()
{return QSFL.userAgent.ie>0;};QSFL.userAgent.isIE6=function()
{return QSFL.userAgent.ie==6;};QSFL.userAgent.isIE7=function()
{return QSFL.userAgent.ie==7;};QSFL.userAgent.isIE8=function()
{return QSFL.userAgent.ie==8;};QSFL.userAgent.isFireFox=function()
{return QSFL.userAgent.firefox>0;};QSFL.userAgent.isOpera=function()
{return QSFL.userAgent.opera>0;};QSFL.userAgent.isChrome=function()
{return QSFL.userAgent.chrome>0;};QSFL.userAgent.isSafari=function()
{return QSFL.userAgent.safari>0;};QSFL.userAgent.isWebKit=function()
{return navigator.userAgent.indexOf("AppleWebKit")>-1;};QSFL.userAgent.isTT=function()
{var bIsTT=true;try
{var version=window.external.getTTVerStr();}
catch(all)
{bIsTT=false}
return bIsTT;};QSFL.userAgent.is360SE=function()
{return navigator.userAgent.toLowerCase().indexOf("360se")>0;};QSFL.userAgent.isMaxthon=function()
{return navigator.userAgent.toLowerCase().indexOf("maxthon")>0;};QSFL.userAgent.isTheworld=function()
{return navigator.userAgent.toLowerCase().indexOf("theworld")>0;};(function(){function _tk_hash(str){var hash=5381;for(var i=0,len=str.length;i<len;++i){hash+=(hash<<5)+str.charCodeAt(i);}
return hash&0x7fffffff;}
QSFL.xhr={XHR:QZFL.XHR,getProxy:function(){var _FN=arguments.callee;if(!_FN._iframeProxy){_FN._iframeProxy=QSFL.xhr.proxy;for(var oWin=window;oWin.parent!=oWin;oWin=oWin.parent){try{oWin.QSFL.xhr.proxy&&(_FN._iframeProxy=oWin.QSFL.xhr.proxy);}catch(e){}}}
return _FN._iframeProxy;},getAntiCSRFToken:function(){return _tk_hash(QSFL.cookie.get("skey"));},getAntiCSRFPair:function(){var skey=QSFL.cookie.get("skey"),QS_TK_KEY="qs_tk",qs_tk;if(skey){return["g_tk",_tk_hash(skey)];}
else{qs_tk=QSFL.cookie.get(QS_TK_KEY);if(!qs_tk){qs_tk=parseInt(100*Math.random()+1,10).toString();QSFL.cookie.set(QS_TK_KEY,qs_tk);}
return[QS_TK_KEY,_tk_hash(qs_tk)];}},_getXml:function(sUrl,fnSucc,fnError,sMethod,isAsync){var _arrData=sUrl.split("?");var _method=(!sMethod||sMethod.toUpperCase()!="GET")?"POST":(sMethod="GET");var _data=_method=="POST"?_arrData[1]||"":"";var _oSender=_method=="POST"?new this.XHR(_arrData[0]+"?g_tk="+this.getAntiCSRFToken(),null,_method,_data,isAsync):new this.XHR(sUrl+(sUrl.indexOf("?")<0?"?":"&")+"g_tk="+this.getAntiCSRFToken(),null,_method,_data,isAsync);_oSender.onSuccess=fnSucc;_oSender.onError=fnError;_oSender.send();},getXml:function(sUrl,fnSucc,fnError,sMethod,isAsync){var oLoc=QZFL.util.URI(sUrl);if(/show\.qq\.com$/.test(oLoc.host)){if(oLoc.host=="show.qq.com"){var vRes=/(\w+)$/.exec(oLoc.pathname);var sCgiName=(vRes!=null?vRes[1]:"");var sHost=this.getProxy().getHostByCgiName(sCgiName);if(sHost!=null){oLoc.host=sHost;}
sUrl=oLoc.protocol+"://"+oLoc.host+oLoc.pathname+oLoc.search+oLoc.hash;}
this.getProxy().getFrameWindow(oLoc.host,function(oWin){oWin.QSFL.xhr._getXml(sUrl,fnSucc,fnError,sMethod,isAsync);});}else{this._getXml(sUrl,fnSucc,fnError,sMethod,isAsync);}},_getXmlResponse:function(sUrl,fnSucc,fnError,sMethod,isAsync){var _arrData=sUrl.split("?");var _method=(!sMethod||sMethod.toUpperCase()!="GET")?"POST":(sMethod="GET");var _data=_method=="POST"?_arrData[1]||"":"";var _oSender=_method=="POST"?new this.XHR(_arrData[0]+"?g_tk="+this.getAntiCSRFToken(),null,_method,_data,isAsync):new this.XHR(sUrl+(sUrl.indexOf("?")<0?"?":"&")+"g_tk="+this.getAntiCSRFToken(),null,_method,_data,isAsync);_oSender.onSuccess=function(){fnSucc(_oSender._sender);};_oSender.onError=fnError;_oSender.send();},getXmlResponse:function(sUrl,fnSucc,fnError,sMethod,isAsync){var oLoc=QZFL.util.URI(sUrl);if(/show\.qq\.com$/.test(oLoc.host)){if(oLoc.host=="show.qq.com"){var vRes=/(\w+)$/.exec(oLoc.pathname);var sCgiName=(vRes!=null?vRes[1]:"");var sHost=this.getProxy().getHostByCgiName(sCgiName);if(sHost!=null){oLoc.host=sHost;}
sUrl=oLoc.protocol+"://"+oLoc.host+oLoc.pathname+oLoc.search+oLoc.hash;}
this.getProxy().getFrameWindow(oLoc.host,function(oWin){oWin.QSFL.xhr._getXmlResponse(sUrl,fnSucc,fnError,sMethod,isAsync);});}else{this._getXmlResponse(sUrl,fnSucc,fnError,sMethod,isAsync);}},replaceHtmlWithXml:function(xmlNode,sHtml,mapName,iAbsIndex,iRltIndex){var eData={"@abs(I)":iAbsIndex&&iAbsIndex.toString()||"0","@rlt(I)":iRltIndex&&iRltIndex.toString()||"0"};for(var i=0;i<mapName.length;++i){var vData=(mapName[i][0].constructor!=Array)?(eData[mapName[i][0]]||xmlNode.getAttribute(mapName[i][0])):([].concat(mapName[i][0]).transform(function(v){return(eData[v]||xmlNode.getAttribute(v));}));sHtml=sHtml.replace(new RegExp(mapName[i][1].escRegexp(),"g"),(mapName[i][2]?mapName[i][2](vData):vData).toString().replace(/\$/g,"$$$$"));}
return sHtml;},showXMLNode:function(xmlDoc,oParent,sXmlNodeName,sHtml,mapName,iBeginIdx,iEndIdx,iNe){var xmlNode=xmlDoc.getElementsByTagName(sXmlNodeName);(!iBeginIdx||iBeginIdx<0)&&(iBeginIdx=0);(!iEndIdx||iEndIdx<0)&&(iEndIdx=xmlNode.length);(!iNe||iNe<0)&&(iNe=1);var sHtmlHd=sHtml.between("<%--HD--%>","<%--LB--%>");var sHtmlTl=sHtml.between("<%--LE--%>","<%--TL--%>");var sHtmlLB=sHtml.between("<%--LB--%>","<%--EB--%>");var sHtmlLE=sHtml.between("<%--EE--%>","<%--LE--%>");var sHtmlEM=sHtml.between("<%--EB--%>","<%--EE--%>")||sHtml;var aHtml=[];for(var i=iBeginIdx;i<iEndIdx;i+=iNe){aHtml.push(sHtmlLB);for(var n=0;n<Math.min(iEndIdx-i,iNe);++n){aHtml.push(this.replaceHtmlWithXml(xmlNode[i+n],sHtmlEM,mapName,i+n,i-iBeginIdx+n));}
aHtml.push(sHtmlLE);}
oParent.innerHTML=sHtmlHd+aHtml.join("")+sHtmlTl;}}
QSFL.xhr.proxy={_winCache:{},_reqPool:{},_hostMap:{"qqshow_live_citic_saveshow":"mkt.show.qq.com","qqshow_live_cocacola_upload":"mkt.show.qq.com","qqshow_live_com_v3":"mkt.show.qq.com","qqshow_live_com_v20":"mkt.show.qq.com","qqshow_livedata_ex_get":"mkt.show.qq.com","qqshow_livedata_get":"mkt.show.qq.com","qqshow_live_game_saveshow":"mkt.show.qq.com","qqshow_live_points":"mkt.show.qq.com","qqshow_live_qualify_saveshow":"mkt.show.qq.com","qqshow_live_vote":"mkt.show.qq.com","qqshow_livework_get":"mkt.show.qq.com","qqshow_livedata_ex_set":"mkt.show.qq.com","qqshow_live_friendstatus":"mkt.show.qq.com","qqshow_live_messageboard_get":"mkt.show.qq.com","qqshow_live_points_get":"mkt.show.qq.com","qqshow_live_invite":"mkt.show.qq.com","qqshow_live_msgboard_get_v20":"mkt.show.qq.com","qqshow_live_qualify_singledata":"mkt.show.qq.com","qqshow_live_itemsend":"mkt.show.qq.com","qqshow_livenum_get":"mkt.show.qq.com","qqshow_live_ossexchange":"mkt.show.qq.com","qqshow_live_present":"mkt.show.qq.com","qqshow_live_qzoneblog_add":"mkt.show.qq.com","qqshow_live_uploadphoto_v2":"mkt.show.qq.com","qqshow_live_valentine_query":"mkt.show.qq.com","qqshow_live_valentine_send_normalflower":"mkt.show.qq.com","qqshow_live_valentine_send_specialflower":"mkt.show.qq.com","qqshow_roulette_query_v2":"mkt.show.qq.com","qqshow_roulette_proc_v2":"mkt.show.qq.com","qqshow_live_sendmsg":"mkt.show.qq.com","qqshow_auto_reg":"gm.show.qq.com","qqshow_gm_comm_get_present":"gm.show.qq.com","qqshow_gm_get_qqlevel":"gm.show.qq.com","qqshow_gold_buyitem":"gm.show.qq.com","qqshow_gold_get":"gm.show.qq.com","qqshow_gold_pay":"gm.show.qq.com","qqshow_gwq_askfor":"gm.show.qq.com","qqshow_gwq_pay":"gm.show.qq.com","qqshow_gwq_paygold":"gm.show.qq.com","qqshow_gwq_push":"gm.show.qq.com","qqshow_live_act_sendvip":"gm.show.qq.com","qqshow_live_act_thanksgiving":"gm.show.qq.com","qqshow_live_after_newyear":"gm.show.qq.com","qqshow_live_christmas_exchange_gift":"gm.show.qq.com","qqshow_live_christmas_get_gift_pack":"gm.show.qq.com","qqshow_live_christmas_query":"gm.show.qq.com","qqshow_live_lfact":"gm.show.qq.com","qqshow_live_preschool_info":"gm.show.qq.com","qqshow_live_preschool_prize":"gm.show.qq.com","qqshow_live_present_lv4spe6":"gm.show.qq.com","qqshow_live_present_reg":"gm.show.qq.com","qqshow_live_present_superqq":"gm.show.qq.com","qqshow_live_querysuperqq":"gm.show.qq.com","qqshow_live_sqqlvup_gift":"gm.show.qq.com","qqshow_live_staract_apply":"gm.show.qq.com","qqshow_live_vipyear_get":"gm.show.qq.com","qqshow_pay_qbean":"gm.show.qq.com","qqshow_query_jbmiss_ext":"gm.show.qq.com","qqshow_rank_info":"gm.show.qq.com","qqshow_roulette_proc_superqq":"gm.show.qq.com","qqshow_user_active":"gm.show.qq.com","qqshow_user_active_score":"gm.show.qq.com","qqshow_user_active_score_get":"gm.show.qq.com","qqshow_user_addfreemission":"gm.show.qq.com","qqshow_user_bean":"gm.show.qq.com","qqshow_user_bookmail":"gm.show.qq.com","qqshow_user_buy_jbitem":"gm.show.qq.com","qqshow_user_buyladydress_sendvip":"gm.show.qq.com","qqshow_user_cart_getconfig":"gm.show.qq.com","qqshow_user_chrismas_gift":"gm.show.qq.com","qqshow_user_firecracker":"gm.show.qq.com","qqshow_user_free_passport":"gm.show.qq.com","qqshow_user_freemission_prize":"gm.show.qq.com","qqshow_user_getFBCard":"gm.show.qq.com","qqshow_user_get_fshow":"gm.show.qq.com","qqshow_user_get_jbitem":"gm.show.qq.com","qqshow_user_getcoupon":"gm.show.qq.com","qqshow_user_getfreemission":"gm.show.qq.com","qqshow_user_getvip":"gm.show.qq.com","qqshow_user_headermsg":"gm.show.qq.com","qqshow_user_info_ext":"gm.show.qq.com","qqshow_user_jbiteminfo":"gm.show.qq.com","qqshow_user_mailbooking":"gm.show.qq.com","qqshow_user_notreg":"gm.show.qq.com","qqshow_user_opfreemission":"gm.show.qq.com","qqshow_user_passport_get":"gm.show.qq.com","qqshow_user_presale_jbitem":"gm.show.qq.com","qqshow_user_query_jbitem":"gm.show.qq.com","qqshow_user_query_jbitem_ex":"gm.show.qq.com","qqshow_user_query_jbmiss":"gm.show.qq.com","qqshow_user_queryaq":"gm.show.qq.com","qqshow_user_reg":"gm.show.qq.com","qqshow_user_reg_ext":"gm.show.qq.com","qqshow_user_sale_jbitem":"gm.show.qq.com","qqshow_user_search_jbitem":"gm.show.qq.com","qqshow_user_search_jbitem_mul":"gm.show.qq.com","qqshow_user_set_fshow":"gm.show.qq.com","qqshow_user_vipfriend":"gm.show.qq.com","qqshow_user_vipfriendshow":"gm.show.qq.com","qqshow_user_vipicon_autosave":"gm.show.qq.com","qqshow_user_vipicon_freesave":"gm.show.qq.com","qqshow_user_vipicon_itemprotect":"gm.show.qq.com","qqshow_user_vipicon_lvitem":"gm.show.qq.com","qqshow_user_vipicon_photo":"gm.show.qq.com","qqshow_user_vipicon_sendflower":"gm.show.qq.com","qqshow_user_vipicon_senditem":"gm.show.qq.com","qqshow_user_vipinfo":"gm.show.qq.com","qqshow_user_vipyearlive_get":"gm.show.qq.com","qqshow_user_vipyearlive_sendbadge":"gm.show.qq.com","qqshow_user_wallpic":"gm.show.qq.com","qqshow_vip_adviser":"gm.show.qq.com","qqshow_vip_expire_get":"gm.show.qq.com","qqshow_vip_itemsend":"gm.show.qq.com","qqshow_vip_wallet_js":"gm.show.qq.com","qqshow_vipdzp_tickets":"gm.show.qq.com","qqshow_vipshowpark_apply":"gm.show.qq.com","qqshow_vipyear_passport_relaymsg":"gm.show.qq.com","qqshow_vipyear_passport_send":"gm.show.qq.com","qqshow_wallet_js":"gm.show.qq.com","qs_gm_livenum_get":"gm.show.qq.com","qqshow_camera_agree":"social.show.qq.com","qqshow_camera_del":"social.show.qq.com","qqshow_camera_delclient":"social.show.qq.com","qqshow_camera_getphoto":"social.show.qq.com","qqshow_camera_init":"social.show.qq.com","qqshow_camera_jump":"social.show.qq.com","qqshow_camera_listclient":"social.show.qq.com","qqshow_camera_noname":"social.show.qq.com","qqshow_camera_reject":"social.show.qq.com","qqshow_camera_showclient":"social.show.qq.com","qqshow_camera_single":"social.show.qq.com","qqshow_camera_unexpire":"social.show.qq.com","qqshow_camera_userinfo":"social.show.qq.com","qqshow_flower_activity":"social.show.qq.com","qqshow_flowerapp_friendrank":"social.show.qq.com","qqshow_flowerapp_saveshow":"social.show.qq.com","qqshow_flowerapp_trans":"social.show.qq.com","qqshow_flower_charmget":"social.show.qq.com","qqshow_flower_chkauth":"social.show.qq.com","qqshow_flower_chkfreeget":"social.show.qq.com","qqshow_flower_delete":"social.show.qq.com","qqshow_flower_delreplyinfo":"social.show.qq.com","qqshow_flower_freeget":"social.show.qq.com","qqshow_flower_getreplyinfo":"social.show.qq.com","qqshow_flower_getsendinfo":"social.show.qq.com","qqshow_flower_items":"social.show.qq.com","qqshow_flower_send":"social.show.qq.com","qqshow_flower_sended":"social.show.qq.com","qqshow_flower_sended_del":"social.show.qq.com","qqshow_flower_sendremsg":"social.show.qq.com","qqshow_flower_setcharm":"social.show.qq.com","qqshow_flower_setcount":"social.show.qq.com","qqshow_flower_setmsg":"social.show.qq.com","qqshow_flower_setreceive":"social.show.qq.com","qqshow_helper_similar":"social.show.qq.com","qqshow_helper_task_delete":"social.show.qq.com","qqshow_helper_task_enter":"social.show.qq.com","qqshow_helper_task_info":"social.show.qq.com","qqshow_helper_task_relate":"social.show.qq.com","qqshow_helper_user_allottask":"social.show.qq.com","qqshow_helper_user_badge":"social.show.qq.com","qqshow_helper_user_gettask":"social.show.qq.com","qqshow_helper_user_info":"social.show.qq.com","qqshow_helper_user_infoupdate":"social.show.qq.com","qqshow_helper_user_replytask":"social.show.qq.com","qqshow_user_groupphotoinfo":"social.show.qq.com","qqshow_user_historyphotoinfo":"social.show.qq.com","qqshow_user_historyphoto_del":"social.show.qq.com","qqshow_user_albumphoto_del":"social.show.qq.com","qqshow_user_bubblephoto_del":"social.show.qq.com","qqshow_user_qqphotoupload":"social.show.qq.com","qqshow_user_qqphotoinfo":"social.show.qq.com","qqshow_user_savephototoqzone":"social.show.qq.com","qqshow_user_albumstatusupdate":"social.show.qq.com","qqshow_user_savehistorytoqzone":"social.show.qq.com","qqshow_user_badge_items":"social.show.qq.com","qqshow_badge_delres":"social.show.qq.com","qqshow_badge_getsendinfo":"social.show.qq.com","qqshow_badge_record":"social.show.qq.com","qqshow_msgcenter_get":"mall.show.qq.com","qqshow_user_msg_del":"mall.show.qq.com","qqshow_user_msg_get_repay":"mall.show.qq.com","qqshow_user_msg_set_status":"mall.show.qq.com","qqshow_user_msg_top3":"mall.show.qq.com","qqshow_user_msginfo":"mall.show.qq.com","qqshow_user_ccreason":"mall.show.qq.com","qqshow_msg_get_expire_special":"mall.show.qq.com","qqshow_send_remsg":"mall.show.qq.com","qqshow_user_fitem_get":"mall.show.qq.com","qqshow_user_fitem_reuse":"mall.show.qq.com","qqshow_user_record_buy":"mall.show.qq.com","qqshow_user_record_commend":"mall.show.qq.com","qqshow_user_record_gift":"mall.show.qq.com","qqshow_user_record_pay":"mall.show.qq.com","qqshow_user_record_send":"mall.show.qq.com","qqshow_user_askrecord":"mall.show.qq.com","qqshow_user_expiremsg":"mall.show.qq.com","qqshow_user_timeshow_get":"mall.show.qq.com","qqshow_user_timeshow_init":"mall.show.qq.com","qqshow_user_timeshow_set":"mall.show.qq.com","qqshow_user_specialshow_count":"mall.show.qq.com","qqshow_user_specialshow_del":"mall.show.qq.com","qqshow_user_specialshow_iteminfo":"mall.show.qq.com","qqshow_user_avheadupload":"mall.show.qq.com","qqshow_user_coolfaceupload":"mall.show.qq.com","qqshow_user_login_proxy":"mall.show.qq.com","qqshow_get_headinfo":"mall.show.qq.com","qqshow_user_showcollection_add":"mall.show.qq.com","qqshow_user_showcollection_del":"mall.show.qq.com","qqshow_user_showcollection_get":"mall.show.qq.com","qqshow_user_showcollection_set":"mall.show.qq.com","qqshow_user_itemcollection_add":"mall.show.qq.com","qqshow_user_itemcollection_del":"mall.show.qq.com","qqshow_user_itemcollection_get":"mall.show.qq.com","qqshow_user_commendcollection_add":"mall.show.qq.com","qqshow_user_commendcollection_del":"mall.show.qq.com","qqshow_user_commendcollection_get":"mall.show.qq.com","qqshow_user_commendshowcollection_get":"mall.show.qq.com","qqshow_user_history":"mall.show.qq.com","qqshow_user_historyshow2js_get":"mall.show.qq.com","qqshow_user_historyshow_del":"mall.show.qq.com","qqshow_user_historyshow_get":"mall.show.qq.com","qqshow_user_getsuit":"mall.show.qq.com","qqshow_user_itemwardrobe_get":"mall.show.qq.com","qqshow_user_getmyhead":"mall.show.qq.com","qqshow_user_getmyhead_proxy":"mall.show.qq.com","qqshow_user_setavhead":"mall.show.qq.com","qqshow_user_saveblog":"mall.show.qq.com","qqshow_user_getbloginfo":"mall.show.qq.com","qqshow_user_get_blogtitle":"mall.show.qq.com","qqshow_user_friendbirth":"mall.show.qq.com","qqshow_inputmethod_snapshot":"mall.show.qq.com","qqshow_user_pkwar_active":"mall.show.qq.com","qqshow_user_dailry_senditem":"mall.show.qq.com","qqshow_real_item_info":"mall.show.qq.com","qqshow_real_items_info":"mall.show.qq.com","qqshow_real_jump":"mall.show.qq.com","qqshow_real_show_info":"mall.show.qq.com","qqshow_user_hotfriend":"mall.show.qq.com","qqshow_user_hotfriend_ext":"mall.show.qq.com","qqshow_user_get_show_type":"mall.show.qq.com","qqshow_mall_paradise_vote":"mall.show.qq.com","qqshow_user_itemlove":"mall.show.qq.com","qqshow_mall_item2commoditys":"mall.show.qq.com","qqshow_user_friendlist":"mall.show.qq.com","qqshow_user_infoupdate":"mall.show.qq.com","qqshow_match_figures_get":"mall.show.qq.com","qqshow_match_models_get":"mall.show.qq.com","qqshow_match_single_figure":"mall.show.qq.com","qqshow_match_singleitems":"mall.show.qq.com","qqshow_user_searchitem":"mall.show.qq.com","qqshow_user_searchshow":"mall.show.qq.com","qqshow_particular_info":"mall.show.qq.com","qqshow_user_getshowstr":"mall.show.qq.com","qqshow_user_get_item_tag":"mall.show.qq.com","qqshow_user_get_set_tag":"mall.show.qq.com","qqshow_user_invite_friendlist":"mall.show.qq.com","qqshow_live_rcmd_itemget":"mall.show.qq.com","qqshow_mall_microblog":"mall.show.qq.com","qqshow_user_itemsend":"show.qq.com","qqshow_word_check":"show.qq.com","qqshow_pay_acct":"show.qq.com","qqshow_pay_begin":"show.qq.com","qqshow_pay_end":"show.qq.com","qqshow_expire_get":"show.qq.com","qqshow_expire_pay":"show.qq.com","qqshow_expire_push":"show.qq.com","qqshow_noname_info":"show.qq.com","qqshow_user_askpass":"show.qq.com","qqshow_user_special_itemsend":"show.qq.com","qqshow_user_askfor":"show.qq.com","qqshow_user_friendgroup":"show.qq.com","qqshow_user_askreject":"show.qq.com","qqshow_get_show":"show.qq.com","qqshow_udv_rebuy":"show.qq.com","qqshow_sns_saveshow":"show.qq.com","qqshow_user_clientsave":"show.qq.com","qqshow_user_saveshow":"show.qq.com","qqshow_user_sexupdate":"show.qq.com","qqshow_user_after_saveshow":"show.qq.com","qqshow_user_info":"show.qq.com","qqshow_user_coreinfo":"show.qq.com","qqshow_user_extinfo":"show.qq.com","qqshow_item_info":"show.qq.com","qqshow_short_url":"show.qq.com","qqshow_url_redirect":"show.qq.com","qqshow_special_item_info":"show.qq.com","qqshow_client_info":"show.qq.com","qqshow_hummer_info":"show.qq.com","qqshow_flashav_info":"show.qq.com","qqshow_user_iteminfo_v3":"show.qq.com","qqshow_user_itemdelete":"show.qq.com","qqshow_user_aio_save":"show.qq.com"},_hostChecked:{"mkt.show.qq.com":true,"gm.show.qq.com":true,"show.qq.com":true,"mall.show.qq.com":true,"social.show.qq.com":true},_frameID:function(sHost){return"_xdr_"+sHost.replace(/\W/g,"_");},_createIframe:function(sHost){var iID=this._frameID(sHost);if(!document.getElementById(iID)){var e=document.createElement("iframe");e.id=iID;e.style.position="absolute";e.style.top=e.style.left="-100px";e.style.width=e.style.height=e.style.borderWidth="0px";e.src="http://"+sHost+"/qqshow_xhr.html";setTimeout(function(){document.body.appendChild(e);},0);}},getFrameWindow:function(sHost,fnCallback){!this._winCache[window.location.host]&&(this._winCache[window.location.host]=window);if(this._winCache[sHost]){fnCallback&&fnCallback(this._winCache[sHost]);}else{this._reqPool[sHost]=(this._reqPool[sHost]||[]).concat(fnCallback);this._createIframe(sHost);}},getHostByCgiName:function(sName){var sHost=this._hostMap[sName];if(sHost&&this._hostChecked[sHost]){return sHost;}else{return null;}},notify:function(sHost,oWin){if(sHost&&oWin){this._winCache[sHost]=oWin;var reqs=this._reqPool[sHost];for(var i=0;i<reqs.length;++i){reqs[i]&&reqs[i](oWin);}
this._reqPool[sHost]=[];}},_getDomainUrl:function(sDomain,sUrl){return sDomain+sUrl.replace(/^http\:\/\/(\w+\.)+\w+\//,"/");},showUrl:function(sUrl){sUrl=sUrl.toString();var sDomain="http://show.qq.com";return this._getDomainUrl(sDomain,sUrl);},mallUrl:function(sUrl){sUrl=sUrl.toString();var sDomain="http://mall.show.qq.com";return this._getDomainUrl(sDomain,sUrl);},mktUrl:function(sUrl){sUrl=sUrl.toString();var sDomain="http://mkt.show.qq.com";return this._getDomainUrl(sDomain,sUrl);},socialUrl:function(sUrl){sUrl=sUrl.toString();var sDomain="http://social.show.qq.com";return this._getDomainUrl(sDomain,sUrl);},gmUrl:function(sUrl){sUrl=sUrl.toString();var sDomain="http://gm.show.qq.com";return this._getDomainUrl(sDomain,sUrl);}};})()
QSFL.cookie={findWindow:function(sDomain,oWin)
{if(!oWin)
{if(window.location.hostname.indexOf(sDomain)>=0)
{return window;}
return arguments.callee.apply(this,[sDomain,top]);}
try
{if(oWin.location.hostname.indexOf(sDomain)>=0)
{return oWin;}}
catch(e)
{}
for(var i=0;i<oWin.frames.length;++i)
{var oFind=arguments.callee.apply(this,[sDomain,oWin.frames[i]]);if(oFind)
{return oFind;}}
return null;},set:function(sName,sValue,nExpireSec,sDomain,sPath)
{sDomain=sDomain||"show.qq.com";sPath=sPath||"/";var sCookie=sName+"="+escape(sValue)+";";if((document.cookie.length+sCookie.length)>=4096)
{return false;}
if(nExpireSec)
{var oDate=new Date();oDate.setTime(oDate.getTime()+parseInt(nExpireSec)*1000);sCookie+="expires="+oDate.toUTCString()+";";}
if(sDomain)
{sCookie+="domain="+sDomain+";";}
if(sPath)
{sCookie+="path="+sPath+";"}
var oWin=this.findWindow(sDomain);if(!oWin)
{return false;}
try
{oWin.document.cookie=sCookie;}
catch(e)
{return false;}
return true;},get:function(sName,sDomain)
{sDomain=sDomain||"show.qq.com";var oWin=sDomain?(this.findWindow(sDomain)||window):window;return QSFL.excore.getParam(oWin.document.cookie,sName,"; ","=");}};if(!QSFL.userdata)
{QSFL.userdata={};}
QSFL.userdata=(function()
{var _userdataTools={getDomain:function()
{try
{if(top.location.hostname.indexOf("show.qq.com")>=0)
{return top.location.hostname;}}
catch(e)
{}
return"show.qq.com";},findWindow:function(sDomain,oWin)
{if(!oWin)
{if(window.location.hostname.indexOf(sDomain)==0)
{return window;}
return arguments.callee.apply(this,[sDomain,top]);}
try
{if(oWin.location.hostname.indexOf(sDomain)==0)
{return oWin;}}
catch(e)
{}
for(var i=0;i<oWin.frames.length;++i)
{var oFind=arguments.callee.apply(this,[sDomain,oWin.frames[i]]);if(oFind)
{return oFind;}}
return null;}};function _MSIEUSERDATA()
{function _USERData(oObj,sName,sCookie)
{this._Object=oObj;this._svName=sName;this._Cookie=sCookie;this._Object.addBehavior("#default#userData");this._Object.load(this._svName);if(!QSFL.cookie.get(this._Cookie)||parseInt(this._Object.getAttribute(this._Cookie))<parseInt(QSFL.cookie.get(this._Cookie)))
{this.expiresDiscard();}
if(!QSFL.cookie.get(this._Cookie))
{QSFL.cookie.set(this._Cookie,new Date().getTime());}}
_USERData.prototype.expiresDiscard=function()
{this._Object.expires=new Date(new Date().getTime()-365*86400000).toUTCString();this._Object.save(this._svName);this._Object.load(this._svName);this._Object.expires=new Date(new Date().getTime()+365*86400000).toUTCString();};var _userData_=null;var _userDataDocumentElement_=null;function getUserDataObject()
{try
{var oWin=_userdataTools.findWindow(_userdataTools.getDomain());if(!_userDataDocumentElement_){_userDataDocumentElement_=oWin.document.documentElement;_userData_=new _USERData(_userDataDocumentElement_,"QQSHOW","QSUDTMmilliSeconds");return _userData_;}
return _userData_;}
catch(e)
{}
return null;}
return{get:function(sName)
{if(!getUserDataObject())
{return"";}
return _userData_._Object.getAttribute(sName);},set:function(sName,sValue)
{if(!getUserDataObject())
{return false;}
_userData_._Object.setAttribute(sName,sValue);_userData_._Object.setAttribute(_userData_._Cookie,new Date().getTime());_userData_._Object.save(_userData_._svName);return true;}};};function _FF2XUSERDATA()
{function getUserDataWindow()
{return _userdataTools.findWindow(_userdataTools.getDomain())||window;}
return{get:function(sName)
{return getUserDataWindow().sessionStorage.getItem(sName)||null;},set:function(sName,sValue)
{getUserDataWindow().sessionStorage.setItem(sName,sValue);return true;}};};function _NOUSERDATA()
{return{get:function(sName)
{return!_NOUSERDATA._load&&(_NOUSERDATA._load=true)&&alert("¶Ô²»Æð£¬ÓÉÓÚÄúµÄä¯ÀÀÆ÷²»Ö§³ÖÒ»Ð©ÌØÐÔ£¬QQÐãÉÌ³ÇµÄ²¿·Ö¹¦ÄÜÄú½«ÎÞ·¨Õý³£Ê¹ÓÃ¡£\nÎÒÃÇ½¨ÒéÄúÊ¹ÓÃInternet Explorer 6.0+»òÕßFirefox 2.0+ÒÔ»ñµÃ×î¼ÑÐ§¹û¡£");return"";},set:function(sName,sValue)
{return!_NOUSERDATA._load&&(_NOUSERDATA._load=true)&&alert("¶Ô²»Æð£¬ÓÉÓÚÄúµÄä¯ÀÀÆ÷²»Ö§³ÖÒ»Ð©ÌØÐÔ£¬QQÐãÉÌ³ÇµÄ²¿·Ö¹¦ÄÜÄú½«ÎÞ·¨Õý³£Ê¹ÓÃ¡£\nÎÒÃÇ½¨ÒéÄúÊ¹ÓÃInternet Explorer 6.0+»òÕßFirefox 2.0+ÒÔ»ñµÃ×î¼ÑÐ§¹û¡£");return false;}};};return window.sessionStorage?_FF2XUSERDATA():(document.documentElement.addBehavior?_MSIEUSERDATA():_NOUSERDATA());})();(function()
{function getLocalCachImpl()
{var _userdataTools={getDomain:function()
{try
{if(top.location.hostname.indexOf("show.qq.com")>=0)
{return top.location.hostname;}}
catch(e)
{}
return"show.qq.com";},findWindow:function(sDomain,oWin)
{if(!oWin)
{if(window.location.hostname.indexOf(sDomain)==0)
{return window;}
return arguments.callee.apply(this,[sDomain,top]);}
try
{if(oWin.location.hostname.indexOf(sDomain)==0)
{return oWin;}}
catch(e)
{}
for(var i=0;i<oWin.frames.length;++i)
{var oFind=arguments.callee.apply(this,[sDomain,oWin.frames[i]]);if(oFind)
{return oFind;}}
return null;}};function KeyManager(get,set)
{this._aKeys=[];this._KEYNAME="__qqshow_local_data_keys__";this._VERSIONNAME="__qqshow_local_data_version__";this._MAX_LENGTH=100;this._version=1;this.get=get;this.set=set;this.load();}
KeyManager.prototype.checkKeyName=function(sName)
{if(sName==this._KEYNAME||sName==this._VERSIONNAME)
{return false;}
return true;}
KeyManager.prototype.load=function()
{this._aKeys=[];var version=this.get(this._VERSIONNAME),keyStr;if(!version)
{this.set(this._VERSIONNAME,this._version.toString());}
if(version==this._version)
{keyStr=this.get(this._KEYNAME)||"";}
else
{keyStr="";}
if(keyStr)
{this._aKeys=keyStr.split("|");this._aKeys.transform(function(v)
{v=v.split("_");v[0]=unescape(v[0]);return v;});}}
KeyManager.prototype.save=function()
{var aCopy=this._aKeys.slice()
aCopy.transform(function(v)
{v=v.slice()
v[0]=escape(v[0]);return v.join("_");});this.set(this._KEYNAME,aCopy.join("|"));}
KeyManager.prototype.remove=function(sName)
{var data=this._aKeys.findElemIf(function(v)
{return v[0]==sName;});if(null!=data)
{this._aKeys.remove(data);this.save();}}
KeyManager.prototype.kick=function()
{var sKickName=null;if(this._aKeys.length<this._MAX_LENGTH)
{return sKickName;}
var iMin=new Date().getTime(),iMiliSec,iIndex=-1;for(var i=0,len=this._aKeys.length;i<len;i++)
{iMiliSec=parseInt(this._aKeys[i][1],10);if(iMiliSec<iMin)
{iMin=iMiliSec;iIndex=i;}}
if(iIndex!=-1)
{sKickName=this._aKeys.splice(iIndex,1)[0][0];this.save();return sKickName;}
return sKickName;}
KeyManager.prototype.add=function(sName)
{var sKick=null;if(null==this._aKeys.findIf(function(v){return v[0]==sName}))
{sKick=this.kick();this._aKeys.push([sName,new Date().getTime().toString()]);this.save();}
else
{this.update(sName);}
return sKick;}
KeyManager.prototype.update=function(sName)
{var data=this._aKeys.findElemIf(function(v){return v[0]==sName});if(null!=data)
{data[1]=new Date().getTime().toString();this.save();}}
function getUserDataImpl()
{function _USERData(oObj,sName)
{this._svName=sName;this._Object=oObj;this._Object.addBehavior("#default#userData");this._Object.load(this._svName);var that=this;this._keyManger=new KeyManager(function(name)
{return that._Object.getAttribute(name)},function(name,value)
{that._Object.setAttribute(name,value);that._Object.save(that._svName);});}
_USERData.prototype.clear=function()
{this._Object.expires=new Date(new Date().getTime()-365*86400000).toUTCString();this._Object.save(this._svName);this._Object.load(this._svName);this._Object.expires=new Date(new Date().getTime()+365*86400000).toUTCString();this._keyManger.load();};_USERData.prototype.checkKeyName=function(sName)
{var digit=/[0-9]/;if("string"!==typeof sName||sName.length<=0||digit.test(sName.charAt(0)))
{return false;}
if(!this._keyManger.checkKeyName(sName))
{return false;}
return true;}
var _userData_=null;var _userDataDocumentElement_=null;function getUserDataObject()
{try
{var oWin=_userdataTools.findWindow(_userdataTools.getDomain());if(oWin.document.documentElement!=_userDataDocumentElement_)
{_userDataDocumentElement_=oWin.document.documentElement;_userData_=new _USERData(_userDataDocumentElement_,"QQSHOW_PERSISTENT");return _userData_;}
return _userData_;}
catch(e)
{}
return null;}
return{getLocal:function(sName)
{if(!getUserDataObject())
{return"";}
_userData_._keyManger.update(sName);return _userData_._Object.getAttribute(sName);},removeLocal:function(sName)
{if(!getUserDataObject())
{return false;}
if(!_userData_.checkKeyName(sName))
{return false;}
_userData_._keyManger.remove(sName);_userData_._Object.removeAttribute(sName);_userData_._Object.save(_userData_._svName);},setLocal:function(sName,sValue)
{if(!getUserDataObject())
{return false;}
if(!_userData_.checkKeyName(sName))
{return false;}
try
{_userData_._Object.setAttribute(sName,sValue);_userData_._Object.save(_userData_._svName);var sKickName=_userData_._keyManger.add(sName);if(sKickName)
{_userData_._Object.removeAttribute(sKickName);_userData_._Object.save(_userData_._svName);}}
catch(e)
{_userData_.clear();return false;}
return true;}};};function getLocalStorageImpl()
{function getUserDataWindow()
{return _userdataTools.findWindow(_userdataTools.getDomain())||window;}
var storage=getUserDataWindow().localStorage;var keyManager=new KeyManager(function(name)
{storage.getItem(name);},function(name,value)
{storage.setItem(name,value);});function checkKeyName(sName)
{var digit=/[0-9]/;if("string"!==typeof sName||sName.length<=0||digit.test(sName.charAt(0)))
{return false;}
if(!keyManager.checkKeyName(sName))
{return false;}
return true;}
return{getLocal:function(sName)
{var sValue=storage.getItem(sName);keyManager.update(sName);return sValue;},setLocal:function(sName,sValue)
{if(!checkKeyName(sName))
{return false;}
try
{storage.setItem(sName,sValue);var sKickName=keyManager.add(sName)
if(sKickName)
{storage.removeItem(sKickName);}}
catch(e)
{storage.clear();keyManager.load();return false;}
return true;},removeLocal:function(sName,sValue)
{if(!checkKeyName(sName))
{return;}
keyManager.remove(sName);storage.removeItem(sName);}};};function getNoImpl()
{var alertMsg="¶Ô²»Æð£¬ÓÉÓÚÄúµÄä¯ÀÀÆ÷²»Ö§³ÖÒ»Ð©ÌØÐÔ£¬QQÐãÉÌ³ÇµÄ²¿·Ö¹¦ÄÜÄú½«ÎÞ·¨Õý³£Ê¹ÓÃ¡£\nÎÒÃÇ½¨ÒéÄúÊ¹ÓÃInternet Explorer 6.0+»òÕßFirefox 2.0+ÒÔ»ñµÃ×î¼ÑÐ§¹û¡£";function alertOnce()
{!getNoImpl._load&&(getNoImpl._load=true)&&alert(alertMsg);}
return{getLocal:function(sName)
{alertOnce();},setLocal:function(sName,sValue)
{alertOnce();return false;},removeLocal:function(sName)
{alertOnce();}};};return window.localStorage?getLocalStorageImpl():(document.documentElement.addBehavior?getUserDataImpl():getNoImpl());}
try
{if(QSFL.userAgent.firefox>=13&&window!=top&&typeof top.QSFL!='undefined'&&typeof top.QSFL.userdata!='undefined'){QSFL.userdata=top.QSFL.userdata;}
else
{QZFL.object.extend(QSFL.userdata,getLocalCachImpl());}}
catch(e)
{QZFL.object.extend(QSFL.userdata,getLocalCachImpl());}})()
QSFL.dom={getById:function(sId)
{return QZFL.dom.getById.apply(QZFL.dom,[sId]);},get:function(e)
{return QZFL.dom.get.apply(QZFL.dom,[e]);},getPosition:function(el)
{return QZFL.dom.getPosition.apply(QZFL.dom,[el]);},setPosition:function(el,pos)
{QZFL.dom.setPosition.apply(QZFL.dom,[el,pos]);},getXY:function(el)
{return QZFL.dom.getXY.apply(QZFL.dom,[el]);},setXY:function(el,x,y)
{QZFL.dom.setXY.apply(QZFL.dom,[el,x,y]);},getSize:function(el)
{return QZFL.dom.getSize.apply(QZFL.dom,[el]);},setSize:function(el,width,height)
{QZFL.dom.setSize.apply(QZFL.dom,[el,width,height]);},setStyle:function(el,property,value)
{return QZFL.dom.setStyle.apply(QZFL.dom,[el,property,value]);},getScrollLeft:function(doc)
{return QZFL.dom.getScrollLeft.apply(QZFL.dom,[doc]);},getScrollTop:function(doc)
{return QZFL.dom.getScrollTop.apply(QZFL.dom,[doc]);},getScrollHeight:function(doc)
{return QZFL.dom.getScrollHeight.apply(QZFL.dom,[doc]);},getScrollWidth:function(doc)
{return QZFL.dom.getScrollWidth.apply(QZFL.dom,[doc]);},getClientHeight:function(doc)
{return QZFL.dom.getClientHeight.apply(QZFL.dom,[doc]);},getClientWidth:function(doc)
{return QZFL.dom.getClientWidth.apply(QZFL.dom,[doc]);},getDocumentWindow:function(doc)
{return QZFL.dom.getDocumentWindow.apply(QZFL.dom,[doc]);},createElementIn:function(tagName,el,insertFirst,attributes)
{return QZFL.dom.createElementIn.apply(QZFL.dom,[tagName,el,insertFirst,attributes]);},removeElement:function(el)
{return QZFL.dom.removeElement.apply(QZFL.dom,[el]);}}
QSFL.$=QSFL.dom.getById;QSFL.event={addEvent:function(obj,eventType,fn,argArray)
{if(obj.eventsListUID&&!QZFL.event._eventListDictionary[obj.eventsListUID])
obj.eventsListUID=null;QZFL.event.addEvent.apply(QZFL.event,[obj,eventType,fn,argArray]);},removeEvent:QZFL.event.removeEvent,purgeEvent:QZFL.event.purgeEvent,getEvent:QZFL.event.getEvent,getTarget:QZFL.event.getTarget,cancelBubble:QZFL.event.cancelBubble,mouseX:QZFL.event.mouseX,mouseY:QZFL.event.mouseY,bind:QZFL.event.bind,preventDefault:QZFL.event.preventDefault};if(!QSFL.dialog)
{QSFL.dialog={};}
QSFL.dialog.tools={position:{center:{Left:function(oWin,iObjWidth)
{oWin=oWin||window;iObjWidth=iObjWidth||0;this.valueOf=function()
{var w=QSFL.dom.getClientWidth(oWin.document);var l=QSFL.dom.getScrollLeft(oWin.document);return l
+Math.max((parseInt((w-iObjWidth)/2))||0,0);};this.toString=function()
{return this.valueOf().toString();};},Top:function(oWin,iObjHeight)
{oWin=oWin||window;iObjHeight=iObjHeight||0;this.valueOf=function()
{var h=QSFL.dom.getClientHeight(oWin.document);var t=QSFL.dom.getScrollTop(oWin.document);return t
+Math.max((parseInt((h-iObjHeight)/2))||0,0);};this.toString=function()
{return this.valueOf().toString();};}}},fullScreen:function(oDoc,e)
{e.style.display="none";var iWidth=Math.max(QSFL.dom.getScrollWidth(oDoc),QSFL.dom.getClientWidth(oDoc));var iHeight;if(QSFL.userAgent.isIE6()){iHeight=Math.max(QSFL.dom.getScrollHeight(oDoc),QSFL.dom.getClientHeight(oDoc));}else{iHeight=QSFL.dom.getClientHeight(oDoc);}
QSFL.dom.setXY(e,0,0);QSFL.dom.setSize(e,iWidth,iHeight);e.style.display="";},createDiv:function(oWin,oParent,sID,oStyle)
{if(oWin&&oWin.document)
{if(!oWin.document.getElementById(sID))
{var e=oWin.document.createElement("DIV");e.id=sID;try
{oParent&&oParent.appendChild(e);}
catch(e)
{}}
var e=oWin.document.getElementById(sID);e.style.position="absolute";e.style.zIndex=oStyle.zIndex||999;QSFL.dom.setPosition(e,{width:oStyle.width,height:oStyle.height,left:oStyle.left,top:oStyle.top});e.style.display=oStyle.display||"";return e;}
return oWin.document.getElementById(sID);}};QSFL.dialog._FloatFrame=function(objData)
{function uniname()
{return"__"+(new Date().getTime())+"_"
+(Math.random().toString().replace(".",""))+"__";}
function checkData(v)
{return(typeof(v)!="undefined"&&v!=null);}
var _TO=this;objData=objData||{};_TO._objData={};_TO._objData.window=objData.window||window;_TO._objData.parentNode=objData.parentNode||_TO._objData.window.document.body;_TO._objData.zIndex=objData.zIndex||1000;_TO._sName=uniname();_TO._sCName="C"+_TO._sName;_TO._sFName="F"+_TO._sName;_TO._objContainer=QSFL.dialog.tools.createDiv(_TO._objData.window,_TO._objData.parentNode,_TO._sCName,{left:0,top:0,width:"auto",height:"auto",display:"",zIndex:_TO._objData.zIndex});_TO._objContainer.innerHTML='<IFRAME id="'
+_TO._sFName
+'" name="'
+_TO._sFName
+'" frameBorder="0" scrolling="no" allowTransparency></IFRAME>';_TO._objFrame=_TO._objContainer.getElementsByTagName("IFRAME")[0];this.show=function(sUrl,objData)
{checkData(objData)||(objData=_TO._objData);checkData(objData.width)||(objData.width=450);checkData(objData.height)||(objData.height=300);checkData(objData.left)||(objData.left=0);checkData(objData.top)||(objData.top=0);_TO._objFrame.src=sUrl;QSFL.dom.setXY(_TO._objContainer,objData.left,objData.top);QSFL.dom.setSize(_TO._objFrame,objData.width,objData.height);(typeof(objData.zIndex)!="undefined")&&(_TO._objContainer.style.zIndex=objData.zIndex);_TO.showView();}
this.showView=function()
{_TO._objContainer.style.display="";}
this.hideView=function(bNoClearDoc)
{!bNoClearDoc&&(_TO._objFrame.src="about:blank");_TO._objContainer.style.display="none";}
this.autoSize=function()
{var objElement=_TO._objFrame;var oWin=_TO._objData.window.frames[_TO._sFName];function autoSize(w,e)
{QSFL.dom.setSize(e,(QSFL.dom.getScrollWidth(w.document)),(QSFL.dom.getScrollHeight(w.document)))}
autoSize(oWin,objElement);}
this.setSize=function(iWidth,iHeight)
{var objElement=_TO._objFrame;QSFL.dom.setSize(objElement,iWidth,iHeight);}
this.setXY=function(iLeft,iTop)
{var objElement=_TO._objContainer;QSFL.dom.setXY(objElement,iLeft,iTop);}
this.getFrameWindow=function()
{return _TO._objData.window.frames[_TO._sFName];}
this.moveWindow=new QSFL.dragdrop.WindowMove(_TO._objContainer,[_TO._objData.window,_TO._objData.window.frames[_TO._sFName]]);};QSFL.dialog.FloatFrameAgent=function(objData,nIndex)
{var _FAFN=arguments.callee;if(!_FAFN.__instance)
{_FAFN.__instance=[];_FAFN.findInstanceByWindow=function(oWin)
{var objElement=document.getElementsByName(oWin.name)[0];return _FAFN.__instance[_FAFN.__instance.findIf(function(v)
{if(!v||!v._objFrame){return false;}
return objElement==v._objFrame;})];}}
var objCtrl=new QSFL.dialog._FloatFrame(objData);nIndex=nIndex||0;_FAFN.__instance[nIndex]=objCtrl;return objCtrl;}
QSFL.dialog.mask={create:function(oWin,parentId){var id="ID_QQSHOW_WAIT_BACKGND";oWin=oWin||window;var oParent=parentId&&oWin.document.getElementById(parentId);oParent=oParent||oWin.document.body;var e=oWin.document.getElementById(id);if(!e){e=QSFL.dialog.tools.createDiv(oWin,oParent,id,{zIndex:998,left:0,top:0,width:"100%",height:"100%",display:"none"});if(QSFL.userAgent.isIE6())e.style.position="absolute";else e.style.position="fixed";e.style.backgroundColor="#000000";e.style.opacity=0.5;e.style.filter="alpha(opacity=50)";if(QSFL.userAgent.isIE6()&&(oWin.document.getElementsByTagName("select").length>0)){e.innerHTML='<iframe style="position:absolute;top:0;left:0;border:0;width:100%;height:100%;opacity:0;filter:alpha(opacity=0);"></iframe><div style="position:absolute;top:0;left:0;width:100%;height:100%;opacity:1;filter:alpha(opacity=100);"></div>';}}
return e;},show:function(oWin,parentId){oWin=oWin||window;var e=this.create(oWin,parentId);if(e){e._referCount=Math.max(1,(parseInt(e._referCount)||0)+1);e.style.display="";QSFL.dialog.tools.fullScreen(oWin.document,e);QSFL.event.addEvent(oWin,"resize",oWin.QSFL.dialog.mask.fullScreen,[oWin.document,e]);}},hide:function(oWin,parentId){oWin=oWin||window;var e=this.create(oWin,parentId);if(e){e._referCount=Math.max(0,(parseInt(e._referCount)||0)-1);if(e._referCount==0){if(top.leftfra&&oWin==top.leftfra){e.parentNode.removeChild(e);e=null;}else{e.style.display="none";}}}
QSFL.event.removeEvent(oWin,"resize",oWin.QSFL.dialog.mask.fullScreen);},start:function(aWin)
{for(var i=0;i<arguments[0].length;++i)
{try
{this.show(arguments[0][i]);}
catch(e)
{}}},end:function(aWin)
{for(var i=0;i<arguments[0].length;++i)
{try
{this.hide(arguments[0][i]);}
catch(e)
{}}},fullScreen:function(obj,oDoc,e)
{var iWidth=Math.max(QSFL.dom.getScrollWidth(oDoc),QSFL.dom.getClientWidth(oDoc));var iHeight=Math.max(QSFL.dom.getScrollHeight(oDoc),QSFL.dom.getClientHeight(oDoc));var aSize=QSFL.dom.getSize(e);if(aSize[0]>=iWidth&&aSize[1]>=iHeight)
return;QSFL.dom.setXY(e,0,0);QSFL.dom.setSize(e,iWidth,iHeight);e.style.display="";}};QSFL.dialog.process={create:function(oWin)
{if(oWin&&oWin.document&&oWin.document.body)
{if(!oWin.document.getElementById("ID_QQSHOW_WAIT_PROCESS"))
{var e=QSFL.dialog.tools.createDiv(oWin,oWin.document.body,"ID_QQSHOW_WAIT_PROCESS",{zIndex:999,left:new QSFL.dialog.tools.position.center.Left(oWin,160),top:new QSFL.dialog.tools.position.center.Top(oWin,48),width:"160px",height:"48px",display:"none"});e.innerHTML='<p style="background:transparent url(http://imgcache.qq.com/qqshow_v3/ac/popup/bg_loading.gif) no-repeat scroll 0 0; width:160px; height:48px; text-indent:55px; line-height:50px; overflow:hidden;">´¦ÀíÖÐ£¬ÇëÉÔºò...</p>';}
return oWin.document.getElementById("ID_QQSHOW_WAIT_PROCESS");}
return null;},show:function(oWin,lTxt)
{var e=this.create(oWin);(!lTxt)&&(lTxt=["´¦ÀíÖÐ£¬ÇëÉÔºò..."]);if(e)
{e._referCount=Math.max(1,(parseInt(e._referCount)||0)+1);(lTxt)&&(e.getElementsByTagName("p")[0].innerHTML=lTxt[0]);QSFL.dom.setXY(e,new QSFL.dialog.tools.position.center.Left(oWin,160).valueOf(),new QSFL.dialog.tools.position.center.Top(oWin,48).valueOf());e.style.display="block";}},hide:function(oWin)
{var e=this.create(oWin);if(e)
{e._referCount=Math.max(0,(parseInt(e._referCount)||0)-1);if(e._referCount==0)
{e.style.display="none";}}}};QSFL.dialog.wait={start:function(aWin,lTxt,bTxt)
{QSFL.dialog.mask.start(arguments[0]);if(arguments[0][0]&&!bTxt)
{QSFL.dialog.process.show(arguments[0][0],lTxt);}},end:function(aWin)
{QSFL.dialog.mask.end(arguments[0]);if(arguments[0][0])
{QSFL.dialog.process.hide(arguments[0][0]);}}};QSFL.dialog.messageBox=function(sUrl,objData,objView,nIndex)
{var _MBFN=arguments.callee;var checkWindowReady=window.checkWindowReady||function()
{return true;}
if(!checkWindowReady(objData.window||window))
{setTimeout(function()
{_MBFN(sUrl,objData,objView,nIndex);},500);return-1;}
if(!_MBFN.init)
{var _maskWindow={};function MaskInc(sName,vMaskWindow)
{QSFL.dialog.mask.start(_maskWindow[sName]=vMaskWindow||[window]);}
function MaskDec(sName)
{QSFL.dialog.mask.end(_maskWindow[sName]);}
function findFrameCtrl(oWin)
{return QSFL.dialog.FloatFrameAgent.findInstanceByWindow(oWin);}
_MBFN.getFrameCtrl=function(nIndex)
{return QSFL.dialog.FloatFrameAgent.__instance[nIndex||0];}
_MBFN.getFrameWindow=function(nIndex)
{nIndex=nIndex||0;if(QSFL.dialog.FloatFrameAgent.__instance&&QSFL.dialog.FloatFrameAgent.__instance[nIndex])
{return QSFL.dialog.FloatFrameAgent.__instance[nIndex].getFrameWindow();}
return null;}
_MBFN.getData=function(oWin)
{return findFrameCtrl(oWin)._objMessageBoxData||{title:null,subTitle:null,content:[],button:[["È·¶¨"]]};}
_MBFN.autoSize=function(oWin)
{findFrameCtrl(oWin).autoSize();}
_MBFN.setSize=function(oWin,iWidth,iHeight)
{findFrameCtrl(oWin).setSize(iWidth,iHeight);}
_MBFN.setXY=function(oWin,iLeft,iTop)
{findFrameCtrl(oWin).setXY(iLeft,iTop);}
_MBFN.onButtonClick=function(oWin,iIndex,objData)
{var objCtrl=findFrameCtrl(oWin);if(objCtrl._objMessageBoxData&&objCtrl._objMessageBoxData.button&&objCtrl._objMessageBoxData.button[iIndex]&&objCtrl._objMessageBoxData.button[iIndex][1]&&typeof(objCtrl._objMessageBoxData.button[iIndex][1])=="function")
{if(objCtrl._objMessageBoxData.button[iIndex][1](objData)!==false)
{objCtrl.hideView();MaskDec(objCtrl._sCName);}}
else
{objCtrl.hideView();MaskDec(objCtrl._sCName);}}
_MBFN.onClose=function(oWin,objData)
{var objCtrl=findFrameCtrl(oWin);if(objCtrl._objMessageBoxData&&typeof(objCtrl._objMessageBoxData.onClose)!="undefined")
{var fnClose=objCtrl._objMessageBoxData.onClose;if(typeof(fnClose)=="number")
{_MBFN.onButtonClick(oWin,fnClose,objData);}
else if(typeof(fnClose)=="function")
{if(fnClose(objData)!==false)
{objCtrl.hideView();MaskDec(objCtrl._sCName);}}}
else
{objCtrl.hideView();MaskDec(objCtrl._sCName);}}
_MBFN.moveWindow={init:function(oWin,objElement)
{findFrameCtrl(oWin).moveWindow.bind(objElement);},stop:function(oWin)
{findFrameCtrl(oWin).moveWindow.stop();}};_MBFN.init=function(sUrl,objData,objView,nIndex)
{nIndex=nIndex||0;if(!QSFL.dialog.FloatFrameAgent.__instance)
{QSFL.dialog.FloatFrameAgent(objData,nIndex);return _MBFN.init(sUrl,objData,objView,nIndex);}
if(nIndex>=0&&QSFL.dialog.FloatFrameAgent.__instance[nIndex])
{MaskInc(QSFL.dialog.FloatFrameAgent.__instance[nIndex]._sCName,objData.maskWindow);QSFL.dialog.FloatFrameAgent.__instance[nIndex]._objMessageBoxData=objView;QSFL.dialog.FloatFrameAgent.__instance[nIndex].show(sUrl,objData);return nIndex;}
QSFL.dialog.FloatFrameAgent(objData,nIndex);return _MBFN.init(sUrl,objData,objView,nIndex);}}
return _MBFN.init(sUrl,objData,objView,nIndex);};QSFL.dialog.env={getMaskWindow:function()
{var aWindow=[];if(top.mainfra)
{top.mainfra&&aWindow.push(top.mainfra);top.topfra&&aWindow.push(top.topfra);top.leftfra&&aWindow.push(top.leftfra);}
else
{aWindow.push(window);}
return aWindow;}};QSFL.dialog.messageBox.defaultData=function(objData)
{function defaultInt(v,dv)
{return(!v&&v!=0)?dv:v;};objData=objData||{};objData.width=defaultInt(objData.width,451);objData.height=defaultInt(objData.height,190);objData.left=defaultInt(objData.left,new QSFL.dialog.tools.position.center.Left(objData.window||window,objData.width));objData.top=defaultInt(objData.top,new QSFL.dialog.tools.position.center.Top(objData.window||window,objData.height));objData.maskWindow=objData.maskWindow||QSFL.dialog.env.getMaskWindow();return objData;};QSFL.dialog.showLoginBox=function(sUrl,oWin,vMask,objData)
{try
{if(QSFL.dialog.isPhone())
{QSFL.dialog.showPhoneLoginBox(sUrl);return;}}
catch(ex)
{}
oWin=oWin||top;vMask=vMask||[top];function onLoginPtlogin2()
{return oWin.document.getElementById("ID_LOGIN_AGREEMENT").checked?true:false;}
function onLoginPtlogin2Resize(iWidth,iHeight)
{var objElem=oWin.document.getElementById("ID_LOGIN_FRAME");var objMask=oWin.document.getElementById("ID_LOGIN_FRAMEMASK");objElem.width=iWidth;objElem.height=iHeight;objMask.style.height=iHeight+"px";}
oWin["ptlogin2_onLogin"]=onLoginPtlogin2;oWin["ptlogin2_onResize"]=onLoginPtlogin2Resize;QSFL.dialog.mask.start(vMask);QSFL.cookie.set("onkeylogin",sUrl);sUrl="http://imgcache.qq.com/qqshow_v3/htdocs/inc/loginto.html?myurl="
+escape(sUrl);var sLoginUrl="http://ui.ptlogin2.qq.com/cgi-bin/login?appid=10000101";sLoginUrl+="&s_url="+escape(sUrl).substring(0,1000);sLoginUrl+="&target=self";sLoginUrl+="&f_url=loginerroralert&hide_title_bar=1&link_target=blank&qlogin_jumpname=qqshow_main";var e=QSFL.dialog.tools.createDiv(oWin,oWin.document.getElementById("id_pendant_abs")||oWin.document.body,"ID_QQSHOW_FLOAT_WIN",{zIndex:999,left:objData&&objData.left||new QSFL.dialog.tools.position.center.Left(oWin,370),top:objData&&objData.top||new QSFL.dialog.tools.position.center.Top(oWin,320),width:"auto",height:"auto",display:""});e.innerHTML='<div class="dialog login" style="background:url(http://imgcache.qq.com/qqshow_v3/ac/popup/bg_alert_title.png) no-repeat -999px 0;"><div class="box_title" id="ID_LOGIN_HEAD"><h1>µÇÂ¼</h1></div><div class="box_content"><div style="position:relative;"><iframe id="ID_LOGIN_FRAME" name="ID_LOGIN_FRAME" scrolling="no" frameborder="0" width="98%"  allowtransparency="true" src="'
+sLoginUrl
+'"></iframe><div id="ID_LOGIN_FRAMEMASK" style="position:absolute; left:0px; top:0px; width:99%; height:150px; background:#999999; filter:alpha(opacity=30); -moz-opacity:0.3; opacity:0.3; display:none;" onclick="alert(\'ÇëÏÈÍ¬Òâ·þÎñÌõ¿î\')"></div></div><div style="text-align:center;padding:5px 0;margin:0;font-size:12px;color:#666;"><input type="checkbox" checked="checked" id="ID_LOGIN_AGREEMENT">Í¬Òâ<a href="http://show.qq.com/inc/ser_term.html" target="_blank">·þÎñÌõ¿î</a></div></div><p class="close" id="ID_LOGIN_CLOSE"><a href="javascript:void(0);"><button type="button" title="¹Ø±Õ">¹Ø±Õ</button></a></p><div class="q"></div><div class="e"></div><div class="z"></div><div class="c"></div></div><div style="display:none;border:1px dotted #000000; position:absolute;"></div>';new QSFL.dragdrop.WindowMove(e,[oWin]).bind(oWin.document.getElementById("ID_LOGIN_HEAD"));var objAgreement=oWin.document.getElementById("ID_LOGIN_AGREEMENT");objAgreement.onclick=function()
{var objMask=oWin.document.getElementById("ID_LOGIN_FRAMEMASK");objMask.style.display=this.checked?"none":"";}
var objClose=oWin.document.getElementById("ID_LOGIN_CLOSE");objClose.onclick=function()
{e.style.display="none";QSFL.dialog.mask.end(vMask);}};QSFL.dialog.isPhone=function()
{var sUserAgent=navigator.userAgent.toLowerCase();var isIphoneOs=sUserAgent.match(/iphone os/i)=="iphone os";var isAndroid=sUserAgent.match(/android/i)=="android";return isIphoneOs||isAndroid;};QSFL.dialog.showPhoneLoginBox=function(url)
{var toQueryString=function(obj)
{var a=[];for(var name in obj)
{a.push(name+'='+obj[name]);}
return a.join('&');};top.location.href='http://ui.ptlogin2.qq.com/cgi-bin/login?'+toQueryString({'style':(function()
{var sUserAgent=navigator.userAgent.toLowerCase();var isIphoneOs=sUserAgent.match(/iphone os/i)=="iphone os";var isAndroid=sUserAgent.match(/android/i)=="android";return isIphoneOs?8:isAndroid?9:-1;})(),'appid':'10000101','s_url':escape('http://imgcache.qq.com/qqshow_v3/htdocs/inc/loginto.html?myurl='+escape(url)).substring(0,1000),'low_login_enable':'0','hln_css':encodeURIComponent('http://imgcache.qq.com/ac/qqshow/dev/upload/mp/20120625150014654321.png'),'hln_title':'','hln_acc':'','hln_pwd':'','hln_u_tips':'','hln_p_tips':'','hln_autologin':'','hln_login':'','hln_otheracc':'','hln_qloginacc':'','hln_reg':'','hln_vctitle':'','hln_verifycode':'','hln_vclogin':'','hln_feedback':''});};QSFL.dialog._FloatDiv=function(objData)
{function uniname()
{return"__"+(new Date().getTime())+"_"
+(Math.random().toString().replace(".",""))+"__";}
function checkData(v)
{return(typeof(v)!="undefined"&&v!=null);}
var _TO=this;objData=objData||{};_TO._objData={};_TO._objData.window=objData.window||window;_TO._objData.parentNode=objData.parentNode||_TO._objData.window.document.body;_TO._objData.zIndex=objData.zIndex||1000;_TO._sName=uniname();_TO._sCName="C"+_TO._sName;_TO._objContainer=QSFL.dialog.tools.createDiv(_TO._objData.window,_TO._objData.parentNode,_TO._sCName,{left:0,top:0,width:"auto",height:"auto",display:"",zIndex:_TO._objData.zIndex});_TO._objContainer.style.backgroundColor="#ffffff";this.show=function(sHtml,objData)
{checkData(objData)||(objData=_TO._objData);checkData(objData.width)||(objData.width=0);checkData(objData.height)||(objData.height=0);checkData(objData.left)||(objData.left=0);checkData(objData.top)||(objData.top=0);_TO._objContainer.innerHTML=sHtml;QSFL.dom.setXY(_TO._objContainer,objData.left,objData.top);(objData.width&&objData.height)&&QSFL.dom.setSize(_TO._objContainer,objData.width,objData.height);_TO.showView();}
this.showView=function()
{_TO._objContainer.style.display="";}
this.hideView=function(bNoClearDoc)
{!bNoClearDoc&&(_TO._objContainer.innerHTML="");_TO._objContainer.style.display="none";}
this.autoSize=function()
{}
this.moveWindow=new QSFL.dragdrop.WindowMove(_TO._objContainer,[_TO._objData.window]);};QSFL.dialog.FloatDivAgent=function(objData)
{var _FDAFN=arguments.callee;if(!_FDAFN.__instance)
{_FDAFN.__instance=[];_FDAFN.findInstanceByObject=function(oObject)
{while(oObject.parentNode)
{oObject=oObject.parentNode;if(!oObject.id)
{continue;}
var iFind=_FDAFN.__instance.findIf(function(v)
{return oObject.id==v._sCName;});if(iFind!=null)
{return _FDAFN.__instance[iFind];}}
return null;}}
var objCtrl=new QSFL.dialog._FloatDiv(objData);_FDAFN.__instance.push(objCtrl);return objCtrl;};QSFL.dialog.messageDiv=function(sHtml,objData,nIndex)
{var _MDFN=arguments.callee;var checkWindowReady=window.checkWindowReady||function()
{return true;}
if(!checkWindowReady(objData.window||window))
{setTimeout(function()
{_MDFN(sHtml,objData,nIndex);},500);return-1;}
if(!_MDFN.init)
{var _maskWindow={};function MaskInc(sName,vMaskWindow)
{QSFL.dialog.mask.start(_maskWindow[sName]=vMaskWindow||[window]);}
function MaskDec(sName)
{QSFL.dialog.mask.end([window,top]);QSFL.dialog.mask.end(_maskWindow[sName]);}
function findFrameCtrl(oObject)
{if(typeof(oObject)=="number")
{return QSFL.dialog.FloatDivAgent.__instance[oObject];}
return QSFL.dialog.FloatDivAgent.findInstanceByObject(oObject);}
_MDFN.onClose=function(oObject,objData)
{var objCtrl=findFrameCtrl(oObject);objCtrl.hideView();MaskDec(objCtrl._sCName);}
_MDFN.moveWindow={init:function(oWin,objElement)
{findFrameCtrl(oWin).moveWindow.bind(objElement);},stop:function(oWin)
{findFrameCtrl(oWin).moveWindow.stop();}};_MDFN.init=function(sHtml,objData,nIndex)
{if(!QSFL.dialog.FloatDivAgent.__instance)
{QSFL.dialog.FloatDivAgent(objData);return _MDFN.init(sHtml,objData,0);}
if(nIndex>=0&&QSFL.dialog.FloatDivAgent.__instance[nIndex])
{MaskInc(QSFL.dialog.FloatDivAgent.__instance[nIndex]._sCName,objData.maskWindow);QSFL.dialog.FloatDivAgent.__instance[nIndex].show(sHtml,objData);return nIndex;}
else
{var nFind=QSFL.dialog.FloatDivAgent.__instance.findIf(function(v)
{return v._objContainer.style.display=="none";});if(nFind!=null)
{return _MDFN.init(sHtml,objData,nFind);}}
QSFL.dialog.FloatDivAgent(objData);return _MDFN.init(sHtml,objData,QSFL.dialog.FloatDivAgent.__instance.length-1);}}
return _MDFN.init(sHtml,objData,nIndex);};if(!QSFL.dragdrop)
{QSFL.dragdrop={};}
QSFL.dragdrop.WindowMove=function(oMove,xWin,oDataEx)
{var _TO=this;_TO._oMove=oMove;_TO._oDataEx=oDataEx||{};_TO._aWin=xWin||[window];_TO._aWin.constructor==Array||(_TO._aWin=Array.fromObject(_TO._aWin));function findDocument(oDom)
{if(oDom&&oDom.nodeType!=9)
{return arguments.callee(oDom.parentNode);}
return oDom;}
function findWindow(oDom)
{var oDoc=findDocument(oDom);return _TO._aWin[_TO._aWin.findIf(function(oWin)
{return(oWin&&oWin.document==oDoc)})];}
function findEvent()
{return _TO._aWin[_TO._aWin.findIf(function(oWin)
{return(oWin&&oWin.event)})].event;}
_TO._oMoveDoc=findDocument(_TO._oMove);_TO._oBindWin=null;this.start=function(initEvent)
{var _TF=arguments.callee;function X(e)
{return(e.screenX);}
function Y(e)
{return(e.screenY);}
function getLeft(oDom)
{return parseInt(oDom.style.left)||0;}
function getTop(oDom)
{return parseInt(oDom.style.top)||0;}
function setLeft(oDom,x)
{oDom.style.left=parseInt(x)+"px";}
function setTop(oDom,y)
{oDom.style.top=parseInt(y)+"px";}
if(_TF.__$on)
{return;}
if(!_TF.__onmousemove)
{_TF.__onmousemove=function()
{if(_TF.__$on)
{_TO._oDataEx.callBack&&_TO._oDataEx.callBack.onBeforeMove&&_TO._oDataEx.callBack.onBeforeMove();var e=arguments[0]||findEvent();var l=QSFL.dom.getScrollLeft(_TO._oMoveDoc);var t=QSFL.dom.getScrollTop(_TO._oMoveDoc);var x=_TF._$x+X(e)+l-_TF._$l-_TF._$ex;var y=_TF._$y+Y(e)+t-_TF._$t-_TF._$ey;if(!_TO._oDataEx.limitArea)
{var iWObject=QSFL.dom.getSize(_TO._oMove)[0];var iHObject=QSFL.dom.getSize(_TO._oMove)[1];var iWDocument=QSFL.dom.getScrollWidth(_TO._oMoveDoc);var iHDocument=QSFL.dom.getScrollHeight(_TO._oMoveDoc);x=Math.min(Math.max(0,x),Math.max(0,iWDocument-iWObject-_TF._$BoundR));y=Math.min(Math.max(0,y),Math.max(0,iHDocument-iHObject-_TF._$BoundR));setLeft(_TO._oMove,x);setTop(_TO._oMove,y);}
else
{x=Math.min(Math.max(x,_TO._oDataEx.limitArea.minX),_TO._oDataEx.limitArea.maxX);y=Math.min(Math.max(y,_TO._oDataEx.limitArea.minY),_TO._oDataEx.limitArea.maxY);setLeft(_TO._oMove,x);setTop(_TO._oMove,y);}
_TO._oDataEx.callBack&&_TO._oDataEx.callBack.onAfterMove&&_TO._oDataEx.callBack.onAfterMove();}}
_TF.__onmouseup=function()
{if(_TF.__$on)
{_TO._oDataEx.callBack&&_TO._oDataEx.callBack.onBeforeStop&&_TO._oDataEx.callBack.onBeforeStop();function removeEvents(oWin)
{try
{QSFL.event.removeEvent(oWin.document,"mousemove",_TF.__onmousemove);QSFL.event.removeEvent(oWin.document,"mouseup",_TF.__onmouseup);}
catch(e)
{}}
if(_TO._oBindWin.document.documentElement.releaseCapture)
{_TO._aWin.each(removeEvents);_TO._oBindWin.document.documentElement.releaseCapture();}
else if(_TO._oBindWin.releaseEvents)
{removeEvents(_TO._oBindWin);_TO._oBindWin.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);}
_TF.__$on=false;_TO._oDataEx.callBack&&_TO._oDataEx.callBack.onAfterStop&&_TO._oDataEx.callBack.onAfterStop();}}
_TF.__onmousedown=function()
{if(!_TF.__$on)
{_TF.__$on=true;function addEvents(oWin)
{try
{QSFL.event.addEvent(oWin.document,"mousemove",_TF.__onmousemove);QSFL.event.addEvent(oWin.document,"mouseup",_TF.__onmouseup);}
catch(e)
{}}
if(_TO._oBindWin.document.documentElement.setCapture)
{_TO._oBindWin.document.documentElement.setCapture();_TO._aWin.each(addEvents);}
else if(_TO._oBindWin.captureEvents)
{_TO._oBindWin.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);addEvents(_TO._oBindWin);}}}
_TF.stop=_TF.__onmouseup;}
_TF._$l=QSFL.dom.getScrollLeft(_TO._oMoveDoc)||0;_TF._$t=QSFL.dom.getScrollTop(_TO._oMoveDoc)||0;_TF._$x=getLeft(_TO._oMove);_TF._$y=getTop(_TO._oMove);_TF._$ex=X(initEvent);_TF._$ey=Y(initEvent);_TF._$BoundR=4;_TO._oDataEx.callBack&&_TO._oDataEx.callBack.onBeforeStart&&_TO._oDataEx.callBack.onBeforeStart();_TF.__onmousedown();_TO._oDataEx.callBack&&_TO._oDataEx.callBack.onAfterStart&&_TO._oDataEx.callBack.onAfterStart();}
this.stop=_TO.start.stop;this.bind=function(oBind)
{_TO._oBindWin=findWindow(oBind);oBind.onmousedown=function()
{var e=arguments[0]||findEvent();try
{_TO.start(e);}
catch(e)
{}};oBind.onmouseup=function()
{var e=arguments[0]||findEvent();try
{_TO.stop();}
catch(e)
{}};};}
QSFL.dragdrop.move=function(oMove,oHandle,xWin,oDataEx)
{new QSFL.dragdrop.WindowMove(oMove,xWin,oDataEx).bind(oHandle||oMove);}
QSFL.JsLoader=function(fnOnload,fnOerror)
{this._instance=new QZFL.JsLoader();this._instance.onload=fnOnload||QZFL.emptyFn;this._instance.onerror=fnOerror||QZFL.emptyFn;};QSFL.JsLoader.prototype.load=function(src,doc,charset)
{this._instance.load(src,doc,charset);};QSFL.JsLoader.eval=function(s){eval(s);}
QSFL.JsLoader.prototype.loadCgi=function(src,doc,charset)
{function myHash(src){var oLoc=QZFL.util.URI(src);var value=0;for(var i=0;i<src.length;i++){value+=src.charCodeAt(i);}
var cginame=oLoc.pathname.split("/").pop();return cginame+value;}
var callbackKey="callbackname",modeKey="omode",callbackPrefix="__jsoncb_",that=this,sCallBackName,milSecNow=parseInt(new Date().getTime()*Math.random());src=this.adaptShowCgiUrl(src);var sCallBackName=QSFL.excore.getURLParam(callbackKey,src);if(!sCallBackName){sCallBackName=callbackPrefix+myHash(src);src=QSFL.excore.setURLParam(src,callbackKey,sCallBackName);}
src=QSFL.excore.setURLParam(src,"r",milSecNow);src=QSFL.excore.setURLParam(src,modeKey,"1")
var oldOnload=this._instance.onload;this._instance.onload=function(){oldOnload(window[sCallBackName]);window[sCallBackName]=undefined;}
if(src.length>2000){function adaptSuccess(oResponse){try{QSFL.JsLoader.eval(oResponse.text);}catch(error){}
that._instance.onload();}
function adaptError(){that._instance.onerror()}
var wind=window.location.hostname=="show.qq.com"?window:top;wind.QSFL.xhr.getXml(src,adaptSuccess,adaptError,"POST",true);}
else{this._instance.load(src,doc,charset);}};QSFL.JsLoader.prototype.adaptShowCgiUrl=function(src){var oLoc=QZFL.util.URI(src);if(/show\.qq\.com$/.test(oLoc.host))
{if(oLoc.host=="show.qq.com")
{var vRes=/(\w+)$/.exec(oLoc.pathname);var sCgiName=(vRes!=null?vRes[1]:"");var sHost=QSFL.xhr.proxy.getHostByCgiName(sCgiName);if(sHost!=null)
{oLoc.host=sHost;}
src=oLoc.protocol+"://"+oLoc.host+oLoc.pathname+oLoc.search+oLoc.hash;}}
var r=new RegExp("(^|\\W)g_tk=[^&]*","g");src=src.replace(r,"$1");var pair=QSFL.xhr.getAntiCSRFPair();src=QSFL.excore.setURLParam(src,pair[0],pair[1]);return src;}
QSFL.JSONGetter=function(actionURL,cname,data,charset,junctionMode,fnOnSuccess,fnOnError,fnOnTimeout,iTimeout)
{var _firsrTime=new Date();this._instance=new QZFL.JSONGetter(actionURL,cname,data,charset,junctionMode);var _onSuccess=function(res)
{var _time=new Date()-_firsrTime;var _code=res["code"]-0;QSFL.reportReturnCode(actionURL,_code,_time);fnOnSuccess(res);};this._instance.onSuccess=_onSuccess||QZFL.emptyFn;this._instance.onError=fnOnError||QZFL.emptyFn;this._instance.onTimeout=fnOnTimeout||QZFL.emptyFn;this._instance.timeout=iTimeout||5000;return this._instance.prot;};QSFL.JSONGetter.prototype.send=function(sCallbackFnName)
{this._instance.send(sCallbackFnName||"_CallBack");};QSFL.JSONGetter.prototype.destroy=function()
{this._instance=this._instance.destroy();return null;};QSFL.json={};QSFL.json.Getter=function(actionURL,data,onCallBack,opt)
{var _opt={cname:null,charset:null,junctionMode:null,onError:null,onTimeout:null,timeout:null,callbackFnName:null};if(opt){_opt.cname=opt.cname;_opt.charset=opt.charset||"utf-8";_opt.junctionMode=opt.junctionMode;_opt.onError=opt.onError;_opt.onTimeout=opt.onTimeout;_opt.timeout=opt.timeout;_opt.callbackFnName=opt.callbackFnName;};if(actionURL.indexOf("?")>=0){actionURL+='&g_tk='+QSFL.xhr.getAntiCSRFToken();}else{actionURL+='?g_tk='+QSFL.xhr.getAntiCSRFToken();}
var _firsrTime=new Date();this._instance=new QZFL.JSONGetter(actionURL,_opt.cname,data,_opt.charset,_opt.junctionMode);var _onSuccess=function(res){var _time=new Date()-_firsrTime;var _code=res["code"]-0;QSFL.reportReturnCode(actionURL,_code,_time);onCallBack(res);};this._instance.onSuccess=_onSuccess||QZFL.emptyFn;this._instance.onError=_opt.onError||QZFL.emptyFn;this._instance.onTimeout=_opt.onTimeout||QZFL.emptyFn;this._instance.timeout=_opt.timeout||5000;this.callbackFnName=_opt.callbackFnName||"_Callback";return this._instance.prot;}
QSFL.json.Getter.prototype.send=function()
{this._instance.send(this.callbackFnName);};QSFL.json.Getter.prototype.destroy=function()
{this._instance=this._instance.destroy();return null;};QSFL.json.formSender=function(actionURL,data,onCallBack,opt)
{var _opt={method:null,charset:null};if(opt){_opt.method=opt.method;_opt.charset=opt.charset||"utf-8";}
var _firsrTime=new Date();this._instance=new QZFL.FormSender(actionURL,_opt.method,data,_opt.charset);var _onSuccess=function(res){var _time=new Date()-_firsrTime;var _code=res["code"]-0;QSFL.reportReturnCode(actionURL,_code,_time);onCallBack(res);};this._instance.onSuccess=_onSuccess||QZFL.emptyFn;this._instance.onError=_opt.onError||QZFL.emptyFn;}
QSFL.json.formSender.prototype.send=function()
{this._instance.send();};QSFL.json.formSender.prototype.destroy=function()
{this._instance=this._instance.destroy();return null;};QSFL.json._get=function(actionURL,data,onCallBack,opt)
{opt=opt||{};var _getter=new QSFL.json.Getter(actionURL,data,onCallBack,opt);_getter.send();_getter.destroy();return _getter;}
QSFL.json._post=function(actionURL,data,onCallBack,opt)
{opt=opt||{};var _poster=new QSFL.json.formSender(actionURL,data,onCallBack,opt);_poster.send();setTimeout(function(){_poster.destroy();},5000);return _poster;}
QSFL.json.send=function(actionURL,data,onCallBack,method,opt)
{if(method=="POST"){QSFL.json._post(actionURL,data,onCallBack,opt);}
else{QSFL.json._get(actionURL,data,onCallBack,opt);}}
QSFL.jsontools={replaceHtmlWithData:function(xData,sHtml,mapName,iAbsIndex,iRltIndex)
{var eData={"@abs(I)":iAbsIndex&&iAbsIndex.toString()||"0","@rlt(I)":iRltIndex&&iRltIndex.toString()||"0"};for(var i=0;i<mapName.length;++i)
{var vData=(mapName[i][0].constructor!=Array)?(eData[mapName[i][0]]||xData[mapName[i][0]]):([].concat(mapName[i][0]).transform(function(v){return(eData[v]||xData[v]);}));sHtml=sHtml.replace(new RegExp(mapName[i][1].escRegexp(),"g"),(mapName[i][2]?mapName[i][2](vData):vData).toString().replace(/\$/g,"$$$$"));}
return sHtml;},showJsonData:function(xData,oParent,sHtml,mapName,iBeginIndex,iEndIndex,iNe)
{(!iBeginIndex||iBeginIndex<0)&&(iBeginIndex=0);(!iEndIndex||iEndIndex<0)&&(iEndIndex=xData.length);(!iNe||iNe<0)&&(iNe=1);var sHtmlHd=sHtml.between("<%--HD--%>","<%--LB--%>");var sHtmlTl=sHtml.between("<%--LE--%>","<%--TL--%>");var sHtmlLB=sHtml.between("<%--LB--%>","<%--EB--%>");var sHtmlLE=sHtml.between("<%--EE--%>","<%--LE--%>");var sHtmlEM=sHtml.between("<%--EB--%>","<%--EE--%>")||sHtml;var aHtml=[];for(var i=iBeginIndex;i<iEndIndex;i+=iNe)
{aHtml.push(sHtmlLB);for(var n=0;n<Math.min(iEndIndex-i,iNe);++n)
{aHtml.push(this.replaceHtmlWithData(xData[i+n],sHtmlEM,mapName,i+n,i-iBeginIndex+n));}
aHtml.push(sHtmlLE);}
oParent.innerHTML=sHtmlHd+aHtml.join("")+sHtmlTl;}};QSFL.media={SWFlash:function(sId){return this._init(sId);}};QSFL.media.SWFlash._iInstanceNum=0;QSFL.media.SWFlash._oInstances={};QSFL.media.SWFlash._oOriginalFns={};QSFL.media.SWFlash._sVersion=null;QSFL.media.SWFlash.getVersion=function(){if(QSFL.media.SWFlash._sVersion)return QSFL.media.SWFlash._sVersion;var v,ax,e,a=[".7",".6",".3",""],np=navigator.plugins,d,p,sf="Shockwave Flash",sf2=sf+" 2.0";if(QSFL.userAgent.isIE()){for(var i in a){try{ax=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"+a[i]);ax.allowScriptAccess="always";if(i==1)v="WIN 6,0,21,0";v=ax.GetVariable("$version");if(v)break;}catch(e){if(i==3)v="WIN 2,0,0,11";if(i==2)v="WIN 3,0,18,0";if(v)break;};}}else if(np!=null&&np.length>0){if(np[sf2]||np[sf]){d=np[sf2]?np[sf2].description:np[sf].description;p=d.match(/shockwave +flash +(\d+).(\d+) +([^0-9]{1,1})(\d+)/i);v=" "+p[1]+","+p[2]+","+p[4]+",0";}}
if(v)v=v.substring(v.indexOf(" ")+1);return QSFL.media.SWFlash._sVersion=v;};QSFL.media.SWFlash.compare=function(){var v=QSFL.media.SWFlash.getVersion(),p,i,r=false,d=arguments[0]?arguments[0].split("."):null;if(!d&&v)r=true;else{if(v){p=v.split(",");for(i=0;i<p.length;i++){r=(!isNaN(parseInt(d[i]))?parseInt(p[i])==parseInt(d[i]):true);if(r)continue;r=parseInt(p[i])>parseInt(d[i]);break;}}};return r;};QSFL.media.SWFlash.expressInstall=function(fnHandler){};QSFL.media.SWFlash.writeEmpty=function(sId,oOpt){var container=arguments[2];var o=new QSFL.media.SWFlash(sId).setContent(null,oOpt);o._writeHolder(container);return o;};QSFL.media.SWFlash.buildHTML=function(sUrl,oOpt){if(oOpt.walign){oOpt.align=oOpt.walign;delete oOpt.walign;}
if(sUrl){oOpt.movie=sUrl;oOpt.url=sUrl;}
return QSFL.media.SWFlash.prototype._buildHTML(oOpt,arguments[2]);};QSFL.media.SWFlash.flashReady=function(sId){var o=QSFL.media.SWFlash._oInstances[sId];o?setTimeout(function(){o._onReady.apply(o);},0):0;return true;};QSFL.media.SWFlash.prototype={_init:function(){if(arguments[0])this._sId=arguments[0].toString();else this._sId="unnamed_flash_"+(QSFL.media.SWFlash._iInstanceNum++);return QSFL.media.SWFlash._oInstances[this._sId]=this;},_buildHTML:function(oOpt){var html="",fv="",o=this._oOptions||oOpt,id=this._sId||arguments[1];if(!o.wmode)o.wmode="window";if(!o.url)o.url="about:blank";if(!o.version)o.version="9,0,115,0";if(QSFL.userAgent.isIE()){html='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+o.version+'" width="'+o.width+'" height="'+o.height+'"';if(id)html+=' id="'+id+'"';if(o.style)
{html+=' style="'+o.style+'"';delete o.style;};if(o.align)
{html+=' align="'+o.align+'"';delete o.align;};if(o["class"])
{html+=' class="'+o["class"]+'"';delete o["class"];};html+='>';delete o.width;delete o.height;delete o.version;if(o.src)delete o.src;for(var i in o)
if(i!="url")html+='<param name="'+i+'" value="'+o[i]+'"/>';html+='<param name="movie" value="'+o.url+'"/>';html+="</object>";}else{html='<object';if(id)html+=' id="'+id+'"';html+='><embed';if(id)html+=' name="'+id+'"';o.src=o.url;delete o.url;if(o.movie)delete o.movie;for(var i in o)
html+=' '+i+'="'+o[i]+'"';html+=' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"/></object>';}
return html;},_writeHolder:function(xContainer){var html="",buildHandler=this._buildHTML,o=this._oOptions;this._buildHTML=function(){return html='<div id="'+this._sId+'" style="width:'+o.width+';height:'+o.height+';"></div>';};if(xContainer)this.writeIn(xContainer);else this.write();this._buildHTML=buildHandler;return this;},setContent:function(sUrl,oOpt){this._setOptions(oOpt);this._oOptions.url=sUrl;var opt=this._oOptions,o=this._oElement;if(o){if(o.nodeName=="OBJECT"||o.nodeName=="EMBED"){var i,v;for(i in opt){v=opt[i];if(i.toLowerCase()=="url"){if(QSFL.userAgent.isIE()){if(opt.url){setTimeout(function(){o.setAttribute("movie",opt.url);},0);}}else{if(opt.url)o.setAttribute("src",opt.url);}}else o.setAttribute(i,v);}}else if(o.nodeName=="DIV"){var newElmt=document.createElement("div");var parent=o.parentNode;opt.movie=opt.url;newElmt.innerHTML=this._buildHTML();parent.replaceChild(newElmt,o);this._findObject();}}
return this;},write:function(oOpt){if(!this._oElement){document.write(this._buildHTML());this._findObject();}
return this;},writeIn:function(xContainer,oOpt){var eContainer=typeof(xContainer)=="string"?QSFL.$(xContainer):xContainer;if(!eContainer)throw"SWFlash.writeIn(): '"+xContainer+"' cannot be found!";if(!this._oElement){eContainer.innerHTML=this._buildHTML();var o=this._findObject(),opt=this._oOptions;}
return this;},addCallback:function(sFunc,fnHandler){if(!this._oElement)throw"SWFlash.addCallback: required element!";if(!this._bReady)throw"SWFlash.addCallback: ExternalInvoke required!";if(!this._oCBs)this._oCBs={};var oFns=QSFL.media.SWFlash._oOriginalFns;this._oCBs[sFunc]=oFns[sFunc]||fnHandler;if(typeof window[sFunc]=="undefined"||(window[sFunc]==fnHandler&&!oFns[sFunc]))
{if(window[sFunc]==fnHandler)oFns[sFunc]=fnHandler;window[sFunc]=function(id){var p=Array.prototype.slice.call(arguments,1),i,o=QSFL.media.SWFlash._oInstances[id];if(!o||!o._oCBs)return;p.push(id);setTimeout(function(){o._oCBs[sFunc].apply(o,p);},0);}}},invoke:function(sFunc){var p,i;if(!this._oElement)throw"SWFlash.invoke: required element!";if(this._oElement[sFunc]){p=Array.prototype.slice.call(arguments,1);return this._oElement[sFunc].apply(this._oElement,p);}},onReady:function(oSWFlash){},freeContent:function(){this._reset();return this.setContent("about:blank");},remove:function(){this.freeContent();this._oElement.parentNode.removeChild(this._oElement);delete this._oElement;delete QSFL.media.SWFlash._oInstances[this._sId];this._oElement=null;QSFL.media.SWFlash._iInstanceNum--;},toString:function(){return"[SWFlash "+this._sId+"]";},_findObject:function(){this._oElement=QSFL.$(this._sId);this._oElement=this._oElement.getElementsByTagName("embed")[0]||this._oElement;return this._oElement;},_reset:function(){this._bReady=false;this._oCBs=null;this._oOptions=null;return this;},_onReady:function(){this._bReady=true;this.onReady(this);},_setOptions:function(oOpt){var o=this._oElement,opt=this._oOptions;if(!oOpt&&o&&(o.nodeName=="OBJECT"||o.nodeName=="EMBED")){oOpt={width:o.getAttribute("width")||400,height:o.getAttribute("height")||550,wmode:o.getAttribute("wmode")||"window",allowScriptAccess:o.getAttribute("allowScriptAccess")||"sameDomain"};}
oOpt=oOpt||opt||{width:550,height:400,wmode:"window"};if(opt){for(var i in oOpt)
opt[i]=oOpt[i];}else opt=oOpt;var fv=opt.flashVars||"";if(fv.indexOf("_swcb_=")<0){if(fv)fv+="&";fv+="_swcb_=QSFL.media.SWFlash.flashReady&_swid_="+this._sId;}
opt.flashVars=fv;if(opt.walign){opt.align=opt.walign;delete opt.walign;}
this._oOptions=opt;return opt;},_sId:null,_oElement:null,_bReady:false,_oOptions:null,_oCBs:null};QSFL.media.WriteFlash=function(sUrl,oOpt){var elmt=arguments[2];var oflash=new QSFL.media.SWFlash().setContent(sUrl,oOpt);if(elmt)oflash.writeIn(elmt);else oflash.write();return oflash;};if(!QSFL.excore)
{QSFL.excore={};}
QSFL.excore.param=function(sValPairs,sElemSep,sPairSep)
{if(sValPairs)
{var aElem=sValPairs.toString().split(sElemSep);for(var i=0;i<aElem.length;++i)
{var aPair=aElem[i].split(sPairSep);(aPair.length>1)&&(this[aPair[0]]=unescape(aPair[1]));}}};QSFL.excore.getParam=function(sValPairs,sName,sElemSep,sPairSep)
{var xParam=new QSFL.excore.param(sValPairs,sElemSep,sPairSep);return xParam[sName]?xParam[sName]:"";};QSFL.excore.setParam=function(sValPairs,sName,sValue)
{sValPairs=sValPairs.toString();sName=sName.toString();sValue=sValue.toString().escUrl();var r=new RegExp("(^|\\W)"+sName+"=[^&]*","g");return(sValPairs.match(r))?sValPairs.replace(r,"$1"+sName+"="
+sValue):sValPairs+(sValPairs?"&":"")+sName+"="+sValue;};QSFL.excore.getURLParam=function(sName,sUrl,rCharSet)
{(!sUrl)&&(sUrl=window.location.href);sUrl=sUrl.toString();sUrl=sUrl.split("#")[0];var nIndex=sUrl.indexOf("?");var _value=(nIndex>=0)?QSFL.excore.getParam(sUrl.substr(nIndex+1),sName,"&","="):"";return _value;};QSFL.excore.setURLParam=function(sUrl,sName,sValue)
{sUrl=sUrl.toString();sName=sName.toString();sValue=sValue.toString().escUrl();var r=new RegExp("(^|\\W)"+sName+"=[^&]*","g");var vUrl=sUrl.split("#");vUrl[0]=(vUrl[0].match(r))?vUrl[0].replace(r,"$1"+sName+"="+sValue):vUrl[0]+(vUrl[0].indexOf("?")==-1?"?":"&")+sName+"="
+sValue;return vUrl.join("#");};(function(){function getFixHash(s){if(QSFL.userAgent.isFireFox()&&s.indexOf("=")>=0){return s;}
return unescape(s);}
QSFL.excore.getHashParam=function(sName,oLocation){oLocation||(oLocation=window.location);var _value=oLocation.hash?QSFL.excore.getParam(getFixHash(oLocation.hash.substr(1)),sName,"&","="):"";return _value;};QSFL.excore.setHashParam=function(sName,sValue,oLocation){oLocation||(oLocation=window.location);sValue=sValue.toString().escUrl();var sUrl=getFixHash(oLocation.hash.substr(1));var r=new RegExp("(^|\\W)"+sName+"=[^&]*","g");oLocation.hash=escape((sUrl.match(r))?sUrl.replace(r,"$1"+sName+"="+sValue):sUrl+(sUrl.length?"&":"")+sName+"="+sValue);};})()
QSFL.excore.user={get:function(sName)
{var sData=QSFL.cookie.get("QSUSRINF");var oParam=new QSFL.excore.param(sData,"&","=");return oParam[sName]?oParam[sName]:"";},set:function(sName,sValue)
{var sData=QSFL.cookie.get("QSUSRINF");QSFL.cookie.set("QSUSRINF",QSFL.excore.setParam(sData,sName,sValue));},getAvSex:function()
{var sSex=this.get("avsex");if(sSex.length==0)
{this.set("avsex","F");return"F";}
else
return sSex;},getStyle:function()
{var sStyle=this.get("style");if(sStyle.length==0)
{this.set("style","1");return 1;}
else
return parseInt(sStyle);}};QSFL.excore.vip={get:function()
{var oData={};var sInfo=QSFL.cookie.get("viprank");if(sInfo)
{var aInfo=sInfo.split("|");oData.iType=isNaN(parseInt(aInfo[0],10))?"":parseInt(aInfo[0],10);oData.iLevel=isNaN(parseInt(aInfo[1],10))?"":parseInt(aInfo[1],10);oData.iScore=isNaN(parseInt(aInfo[2],10))?"":parseInt(aInfo[2],10);oData.iSequence=isNaN(parseInt(aInfo[3],10))?"":parseInt(aInfo[3],10);oData.iScoreLeft=isNaN(parseInt(aInfo[4],10))?"":parseInt(aInfo[4],10);oData.iDistance=isNaN(parseInt(aInfo[5],10))?"":parseInt(aInfo[5],10);oData.iInitScore=isNaN(parseInt(aInfo[6],10))?"":parseInt(aInfo[6],10);oData.iPrepayDays=isNaN(parseInt(aInfo[7],10))?"":parseInt(aInfo[7],10);oData.iBankDays=isNaN(parseInt(aInfo[8],10))?"":parseInt(aInfo[8],10);oData.iVipYearDays=isNaN(parseInt(aInfo[9],10))?"":parseInt(aInfo[9],10);oData.iPayWay=isNaN(parseInt(aInfo[10],10))?"":parseInt(aInfo[10],10);oData.iVipBank=isNaN(parseInt(aInfo[11],10))?"":parseInt(aInfo[11],10);oData.iYearSendLeft=isNaN(parseInt(aInfo[12],10))?"":parseInt(aInfo[12],10);oData.iSMS15=isNaN(parseInt(aInfo[13],10))?"":parseInt(aInfo[13],10);}
return oData;},set:function(oData)
{oData=oData||{};var oNowData=this.get();var aVipRank=[];function CheckValue(a,b)
{if(typeof(a)=="undefined")
{if(typeof(b)=="undefined")
return"";else
return b;}
else
return a;}
aVipRank.push(CheckValue(oData.iType,oNowData.iType));aVipRank.push(CheckValue(oData.iLevel,oNowData.iLevel));aVipRank.push(CheckValue(oData.iScore,oNowData.iScore));aVipRank.push(CheckValue(oData.iSequence,oNowData.iSequence));aVipRank.push(CheckValue(oData.iScoreLeft,oNowData.iScoreLeft));aVipRank.push(CheckValue(oData.iDistance,oNowData.iDistance));aVipRank.push(CheckValue(oData.iInitScore,oNowData.iInitScore));aVipRank.push(CheckValue(oData.iPrepayDays,oNowData.iPrepayDays));aVipRank.push(CheckValue(oData.iBankDays,oNowData.iBankDays));aVipRank.push(CheckValue(oData.iVipYearDays,oNowData.iVipYearDays));aVipRank.push(CheckValue(oData.iPayWay,oNowData.iPayWay));aVipRank.push(CheckValue(oData.iVipBank,oNowData.iVipBank));aVipRank.push(CheckValue(oData.iYearSendLeft,oNowData.iYearSendLeft));aVipRank.push(CheckValue(oData.iSMS15,oNowData.iSMS15));QSFL.cookie.set("viprank",aVipRank.join("|"));}}
QSFL.excore.activescore={get:function()
{var oData={};var sInfo=QSFL.cookie.get("actscore");if(sInfo)
{var aInfo=sInfo.split("|");oData.iLevel=isNaN(parseInt(aInfo[0],10))?"":parseInt(aInfo[0],10);oData.iLevelGiftStatus=isNaN(parseInt(aInfo[1],10))?"":parseInt(aInfo[1],10);oData.iTotalScore=isNaN(parseInt(aInfo[2],10))?"":parseInt(aInfo[2],10);oData.iMonthScore=isNaN(parseInt(aInfo[3],10))?"":parseInt(aInfo[3],10);oData.iMonthAvScore=isNaN(parseInt(aInfo[4],10))?"":parseInt(aInfo[4],10);oData.iMonthGiftStatus=isNaN(parseInt(aInfo[5],10))?"":parseInt(aInfo[5],10);oData.iAvScoreChgTime=isNaN(parseInt(aInfo[6],10))?"":parseInt(aInfo[6],10);oData.iScoreChgTime=isNaN(parseInt(aInfo[7],10))?"":parseInt(aInfo[7],10);oData.iMonthGiftGetTime=isNaN(parseInt(aInfo[8],10))?"":parseInt(aInfo[8],10);}
return oData;},set:function(oData)
{oData=oData||{};var oNowData=this.get();var aVipRank=[];function CheckValue(a,b)
{if(typeof(a)=="undefined")
{if(typeof(b)=="undefined")
return"";else
return b;}
else
return a;}
aVipRank.push(CheckValue(oData.iLevel,oNowData.iLevel));aVipRank.push(CheckValue(oData.iLevelGiftStatus,oNowData.iLevelGiftStatus));aVipRank.push(CheckValue(oData.iTotalScore,oNowData.iTotalScore));aVipRank.push(CheckValue(oData.iMonthScore,oNowData.iMonthScore));aVipRank.push(CheckValue(oData.iMonthAvScore,oNowData.iMonthAvScore));aVipRank.push(CheckValue(oData.iMonthGiftStatus,oNowData.iMonthGiftStatus));aVipRank.push(CheckValue(oData.iAvScoreChgTime,oNowData.iAvScoreChgTime));aVipRank.push(CheckValue(oData.iScoreChgTime,oNowData.iScoreChgTime));aVipRank.push(CheckValue(oData.iMonthGiftGetTime,oNowData.iMonthGiftGetTime));QSFL.cookie.set("actscore",aVipRank.join("|"));}}
QSFL.excore.clientApp={checkValue:function(a,b)
{if(isNaN(a)==false)
{return a;}
else
{if(isNaN(b)==false)
{return b;}
else
{return 0;}}},aKey:['iCharm','iLevel','iPrise','iBelittle','iPkwin','iPklost','iFlower'],get:function()
{var oData={};var iLength=this.aKey.length,i=0;for(i=0;i<iLength;i++)
{oData[this.aKey[i]]=0;}
var str=QSFL.cookie.get("clientapp");if(str)
{var a=str.split("|");for(i=0;i<iLength;i++)
{oData[this.aKey[i]]=this.checkValue(a[i],0);}}
return oData;},set:function(oData)
{oData=oData||{};var aData=[];var iLength=this.aKey.length;var oNowData=this.get();for(var i=0;i<iLength;i++)
{aData.push(this.checkValue(oData[this.aKey[i]],oNowData[this.aKey[i]]));}
QSFL.cookie.set("clientapp",aData.join("|"));}}
QSFL.excore.getVipLevel=function(iScore)
{var level2=400;var level3=800;var level4=1600;var level5=3000;var level6=5000;var level7=7000;var level_distin=2000;if(iScore<=0)
return 0;else if(iScore>0&&iScore<level2)
return 1;else if(iScore<level3)
return 2;else if(iScore<level4)
return 3;else if(iScore<level5)
return 4;else if(iScore<level6)
return 5;else if(iScore<level7)
return 6;else
return 7;};QSFL.excore.getVipLevelVal=function(iLevel)
{switch(iLevel)
{case 1:return 0;break;case 2:return 400;break;case 3:return 800;break;case 4:return 1600;break;case 5:return 3000;break;case 6:return 5000;break;case 7:return 7000;break;default:return((iLevel-7)*2000+7000);break;}};QSFL.excore.getItemVipLevel=function(iItemType)
{var iRet=0;switch(iItemType)
{case 3:iRet=2;break;case 9:iRet=3;break;case 10:iRet=4;break;case 11:iRet=5;break;case 4:iRet=6;break;case 12:iRet=7;break;default:iRet=-1;}
return iRet;}
QSFL.excore.countItemByType=function(sAVS,iType)
{var itemNoArr=[];var count=0;var defArr=sAVS.split("#");if(defArr.length<3)
{return count;}
var itemArr=defArr[2].split("|");for(var i=0;i<itemArr.length;i++)
{var itemSpcArr=itemArr[i].split("_");if(itemSpcArr.length<18)
{return count;}
if(itemSpcArr[8]==iType)
{IncreaceAtom(itemSpcArr[0]);}
else if(iType==100&&itemSpcArr[8]>iType)
{IncreaceAtom(itemSpcArr[0]);}
else
{continue;}}
function IncreaceAtom(itemNo)
{for(var i=0;i<itemNoArr.length;i++)
{if(itemNoArr[i]==itemNo)
{return;}}
count++;itemNoArr.push(itemNo);}
return count;};QSFL.excore.hasEffectShow=function(sAVS)
{var defArr=sAVS.split("#");if(defArr.length<3)
{return false;}
var avInfoArr=defArr[1].split("_");if(avInfoArr.length<=8)
{return false;}
else
{if(avInfoArr[8]=="")
{return false;}
else
{return true;}}}
QSFL.excore.filterEffectShow=function(sAVS)
{var defArr=sAVS.split("#");if(defArr.length<3)
{return sAVS;}
var avInfoArr=defArr[1].split("_");if(avInfoArr.length<=8)
{return sAVS;}
else
{avInfoArr.splice(8,1);defArr[1]=avInfoArr.join("_");return defArr.join("#");}}
QSFL.excore.hasItemByType=function(sAVS,iType)
{var itemNoArr=[];var count=0;var defArr=sAVS.split("#");if(defArr.length<3)
{return false;}
var itemArr=defArr[2].split("|");for(var i=0;i<itemArr.length;i++)
{var itemSpcArr=itemArr[i].split("_");if(itemSpcArr.length<18)
{return false;}
if(itemSpcArr[8]==iType)
{return true;}
else if(iType==100&&itemSpcArr[8]>iType)
{return true;}}
return false;};QSFL.excore.filterItemByType=function(sAVS,iType)
{var retArr=[];var defArr=sAVS.split("#");if(defArr.length<3)
{return sAVS;}
var itemArr=defArr[2].split("|");for(var i=0;i<itemArr.length;i++)
{var itemSpcArr=itemArr[i].split("_");if(itemSpcArr.length<18)
{return sAVS;}
if(itemSpcArr[8]==iType)
{continue;}
else if(iType==100&&itemSpcArr[8]>iType)
{continue;}
else
{retArr.push(itemArr[i]);}}
return(defArr[0]+"#"+defArr[1]+"#"+retArr.join("|")+"#");};QSFL.excore.getQQSHOWXml=function(sUrl,fnSucc,fnFail,fnError,bRandom,sMethod,bAsync)
{sUrl=sUrl||"";fnSucc=fnSucc||function()
{};fnFail=fnFail||function()
{};fnError=fnError||function()
{};bRandom=bRandom||false;bAsync=bAsync||true;sMethod=sMethod||"POST";if(bRandom)
{if(sUrl.indexOf("?")==-1)
{sUrl=sUrl+"?rand="+Math.random();}
else
{sUrl=sUrl+"&rand="+Math.random();}}
var dateBeforeCall=new Date();function fnSuccCom(oResponse)
{if(!oResponse||!oResponse.xmlDom)
{var Latency=(new Date())-dateBeforeCall;QSFL.reportReturnCode(sUrl,QSFL.cons.NETWORK_ERROR_CODE,Latency);fnError();return;}
var doc=oResponse.xmlDom;if(doc.getElementsByTagName("QQSHOW").length>0)
{var iCode=parseInt(doc.getElementsByTagName("QQSHOW")[0].getAttribute("code"),10);var Latency=(new Date())-dateBeforeCall;QSFL.reportReturnCode(sUrl,iCode,Latency);if(iCode==0){if(typeof(fnSucc)=="function"){fnSucc(doc);}}else{fnFail(doc);}}
else
{var Latency=(new Date())-dateBeforeCall;QSFL.reportReturnCode(sUrl,QSFL.cons.NETWORK_ERROR_CODE,Latency);fnError(doc);}}
var wind=top;if(window.location.hostname=="show.qq.com")
{wind=window;}
wind.QSFL.xhr.getXml(sUrl,fnSuccCom,fnSuccCom,sMethod,bAsync);QSFL.monitor.requestDetector.detect(sUrl);};QSFL.excore.replaceHtmlWithData=function(xData,sHtml,mapName,iAbsIndex,iRltIndex)
{return QSFL.jsontools.replaceHtmlWithData(xData,sHtml,mapName,iAbsIndex,iRltIndex);};QSFL.excore.showQQSHOWData=function(xData,oParent,sHtml,mapName,iBeginIdx,iEndIdx,iNe)
{QSFL.jsontools.showJsonData(xData,oParent,sHtml,mapName,iBeginIdx,iEndIdx,iNe);};QSFL.excore.showQQSHOWXml=function(sUrl,oParent,xmlNodeName,sHtml,mapName,iBeginIdx,iEndIdx,iNe,fnSucc,fnFail,fnError)
{return QSFL.excore.getQQSHOWXml(sUrl,function(xmlDoc)
{QSFL.xhr.showXMLNode(xmlDoc,oParent,xmlNodeName,sHtml,mapName,iBeginIdx,iEndIdx,iNe);fnSucc&&fnSucc(xmlDoc);},fnFail,fnError);};QSFL.excore.showQQSHOWPage=function(iPno,iPall,fnUrl,oParent,oView,oClass)
{if(!oView)
oView={};oView.iShowPageNum=oView.iShowPageNum||8;if(!oClass)
oClass={};oClass.parent=oClass.parent||"";oClass.active=oClass.active||"";oClass.random=oClass.random||"";oClass.input=oClass.input||"";oClass.pagemain=oClass.pagemain||"";oClass.prevdis=oClass.prevdis||"";oClass.nextdis=oClass.nextdis||"";oClass.count=oClass.count||"";oClass.more=oClass.more||"";oClass.turn=oClass.turn||"";oClass.iJump=oClass.iJump||0;oClass.iSimple=oClass.iSimple||0;if(iPall==1)
{oParent.innerHTML="";return;}
function StyleQQSHOWPage()
{this.linkHtml=function(u,t)
{return'<a href="'+u+'" title="'+t+'"><span>'+t+'</span></a> ';};this.activeHtml=function(u,t)
{return'<span class="'+oClass.active+'"><span>'
+t.toString().escHtml()+'</span></span>';};this.separate=function()
{return('&nbsp;&nbsp;');};this.randomHtml=function(u,a)
{return('<p class="'+oClass.random+'"><span class="'+oClass.turn+'">×ªµ½<input type="text" class="'+oClass.input+'"  id="page_no" name="page_no"  maxlength="5" onkeydown="if(event.keyCode != 13) return;else {var v = parseInt(this.value,10);if((isNaN(v))||(v<=0||v>'
+a
+')) { alert(\'ÄúÊäÈëµÄÒ³Âë²»ÕýÈ·¡£\'); } else { window.location=(\''
+u('[@_pno]')
+'\'.replace(/\\\[@_pno\\\]/g, Math.max(1, Math.min('
+a
+', parseInt(v))))); };return false;}" />Ò³<button type="button" onclick="var v=parseInt(this.parentNode.getElementsByTagName(\'INPUT\')[0].value, 10);if((isNaN(v))||(v<=0||v>'
+a
+')) { alert(\'ÄúÊäÈëµÄÒ³Âë²»ÕýÈ·¡£\'); } else { window.location=(\''
+u('[@_pno]')
+'\'.replace(/\\\[@_pno\\\]/g, Math.max(1, Math.min('
+a+', parseInt(v))))); };return false;"></button></span></p>');};this.prevHtml=function(u)
{return'<p class="'+oClass.pagemain+'">'
+(u?'<a href="'+u+'"title="ÉÏÒ»Ò³"><span>ÉÏÒ»Ò³</span></a>':'<span class="'+oClass.prevdis+'"><span>ÉÏÒ»Ò³</span></span>');};this.nextHtml=function(u)
{return(u?'<a href="'+u+'" title="ÏÂÒ»Ò³"><span>ÏÂÒ»Ò³</span></a></p>':'<span class="'+oClass.nextdis+'"><span>ÏÂÒ»Ò³</span></span></p>');};}
oParent.className=oClass.parent;iPno=parseInt(iPno);iPall=parseInt(iPall);var oStyle=new StyleQQSHOWPage();var aHtml=[];aHtml.push(oStyle.prevHtml((iPno>1)&&fnUrl(iPno-1)));var bi=1;var ei=iPall;if(oClass.iSimple==1)
{aHtml.push('<span class="'+oClass.count+'"><span class="'+oClass.active+'">'+iPno+'</span>/'+iPall+'</span>');aHtml.push(oStyle.nextHtml((iPno<iPall)&&fnUrl(iPno+1)));if(oClass.iJump==1)
var sTemp=aHtml.join(oStyle.separate());else
var sTemp=aHtml.join(oStyle.separate())+oStyle.randomHtml(fnUrl,iPall);oParent.innerHTML=sTemp;return;}
aHtml.push('<span class="'+oClass.count+'">');aHtml.push(iPno==bi?oStyle.activeHtml(fnUrl(bi),bi++):oStyle.linkHtml(fnUrl(bi),bi++));if(iPall<=oView.iShowPageNum)
{while(bi<=iPall)
{aHtml.push(iPno==bi?oStyle.activeHtml(fnUrl(bi),bi++):oStyle.linkHtml(fnUrl(bi),bi++));}}
else
{if(iPno>=oView.iShowPageNum-3)
{aHtml.push("<span class=\""+oClass.more+"\"><span>¡­</span></span>");}
else
{bi=2;while(bi<(oView.iShowPageNum-1))
{aHtml.push(iPno==bi?oStyle.activeHtml(fnUrl(bi),bi++):oStyle.linkHtml(fnUrl(bi),bi++));}
aHtml.push("<span class=\""+oClass.more+"\"><span>¡­</span></span>");}
if(iPno>=(oView.iShowPageNum-3)&&iPall-iPno>=(oView.iShowPageNum-4))
{var iEnd=parseInt((oView.iShowPageNum-4)/2);for(var iii=0-iEnd;iii<=iEnd;iii++)
{if(iii==0)
{aHtml.push(oStyle.activeHtml(fnUrl(iPno+iii),iPno+iii));}
else
{aHtml.push(oStyle.linkHtml(fnUrl(iPno+iii),iPno+iii));}}
aHtml.push("<span class=\""+oClass.more+"\"><span>¡­</span></span>");}
else if(iPall-iPno<(oView.iShowPageNum-4))
{bi=iPall-(oView.iShowPageNum-3);while(bi<iPall)
{aHtml.push(iPno==bi?oStyle.activeHtml(fnUrl(bi),bi++):oStyle.linkHtml(fnUrl(bi),bi++));}}
aHtml.push(iPno==bi?oStyle.activeHtml(fnUrl(bi),bi++):oStyle.linkHtml(fnUrl(iPall),iPall));}
aHtml.push('</span>');aHtml.push(oStyle.nextHtml((iPno<iPall)&&fnUrl(iPno+1)));if(oClass.iJump==1)
var sTemp=aHtml.join(oStyle.separate());else
var sTemp=aHtml.join(oStyle.separate())+oStyle.randomHtml(fnUrl,iPall);oParent.innerHTML=sTemp;};QSFL.excore.showQQSHOWPageV35=function(iPno,iPall,fnUrl,oParent,oView,oClass)
{if(!oView)
oView={};oView.iShowPageNum=oView.iShowPageNum||8;if(!oClass)
oClass={};oClass.parent=oClass.parent||"";oClass.active=oClass.active||"";oClass.random=oClass.random||"";oClass.input=oClass.input||"";oClass.pagemain=oClass.pagemain||"";oClass.prevdis=oClass.prevdis||"";oClass.nextdis=oClass.nextdis||"";oClass.count=oClass.count||"";oClass.more=oClass.more||"";oClass.turn=oClass.turn||"";oClass.iJump=oClass.iJump||0;oClass.iSimple=oClass.iSimple||0;if(iPall==1)
{oParent.innerHTML="";return;}
function StyleQQSHOWPage()
{this.linkHtml=function(u,t)
{return'<a href="'+u+'" title="'+t+'"><span>'+t+'</span></a> ';};this.activeHtml=function(u,t)
{return'<span class="'+oClass.active+'"><span>'
+t.toString().escHtml()+'</span></span>';};this.separate=function()
{return('&nbsp;&nbsp;');};this.randomHtml=function(u,a)
{return('<p class="'+oClass.random+'"><span class="'+oClass.turn+'">×ªµ½<input type="text" class="'+oClass.input+'"  id="page_no" name="page_no"  maxlength="5" onkeydown="if(event.keyCode != 13) return;else {var v = parseInt(this.value,10);if((isNaN(v))||(v<=0||v>'
+a
+')) { alert(\'ÄúÊäÈëµÄÒ³Âë²»ÕýÈ·¡£\'); } else { window.location=(\''
+u('[@_pno]')
+'\'.replace(/\\\[@_pno\\\]/g, Math.max(1, Math.min('
+a
+', parseInt(v))))); };return false;}" />Ò³<a class="'+oClass.btnClass+'" onclick="var v=parseInt(this.parentNode.getElementsByTagName(\'INPUT\')[0].value, 10);if((isNaN(v))||(v<=0||v>'
+a
+')) { alert(\'ÄúÊäÈëµÄÒ³Âë²»ÕýÈ·¡£\'); } else { window.location=(\''
+u('[@_pno]')
+'\'.replace(/\\\[@_pno\\\]/g, Math.max(1, Math.min('
+a+', parseInt(v))))); };return false;"><span>GO</span></a></span></p>');};this.prevHtml=function(u)
{return'<p class="'+oClass.pagemain+'">'
+(u?'<a href="'+u+'"title="ÉÏÒ»Ò³"><span>ÉÏÒ»Ò³</span></a>':'<span class="'+oClass.prevdis+'"><span>ÉÏÒ»Ò³</span></span>');};this.nextHtml=function(u)
{return(u?'<a href="'+u+'" title="ÏÂÒ»Ò³"><span>ÏÂÒ»Ò³</span></a></p>':'<span class="'+oClass.nextdis+'"><span>ÏÂÒ»Ò³</span></span></p>');};}
oParent.className=oClass.parent;iPno=parseInt(iPno);iPall=parseInt(iPall);var oStyle=new StyleQQSHOWPage();var aHtml=[];aHtml.push(oStyle.prevHtml((iPno>1)&&fnUrl(iPno-1)));var bi=1;var ei=iPall;if(oClass.iSimple==1)
{aHtml.push('<span class="'+oClass.count+'"><span class="'+oClass.active+'">'+iPno+'</span>/'+iPall+'</span>');aHtml.push(oStyle.nextHtml((iPno<iPall)&&fnUrl(iPno+1)));if(oClass.iJump==1)
var sTemp=aHtml.join(oStyle.separate());else
var sTemp=aHtml.join(oStyle.separate())+oStyle.randomHtml(fnUrl,iPall);oParent.innerHTML=sTemp;return;}
aHtml.push('<span class="'+oClass.count+'">');aHtml.push(iPno==bi?oStyle.activeHtml(fnUrl(bi),bi++):oStyle.linkHtml(fnUrl(bi),bi++));if(iPall<=oView.iShowPageNum)
{while(bi<=iPall)
{aHtml.push(iPno==bi?oStyle.activeHtml(fnUrl(bi),bi++):oStyle.linkHtml(fnUrl(bi),bi++));}}
else
{if(iPno>=oView.iShowPageNum-3)
{aHtml.push("<span class=\""+oClass.more+"\"><span>¡­</span></span>");}
else
{bi=2;while(bi<(oView.iShowPageNum-1))
{aHtml.push(iPno==bi?oStyle.activeHtml(fnUrl(bi),bi++):oStyle.linkHtml(fnUrl(bi),bi++));}
aHtml.push("<span class=\""+oClass.more+"\"><span>¡­</span></span>");}
if(iPno>=(oView.iShowPageNum-3)&&iPall-iPno>=(oView.iShowPageNum-4))
{var iEnd=parseInt((oView.iShowPageNum-4)/2);for(var iii=0-iEnd;iii<=iEnd;iii++)
{if(iii==0)
{aHtml.push(oStyle.activeHtml(fnUrl(iPno+iii),iPno+iii));}
else
{aHtml.push(oStyle.linkHtml(fnUrl(iPno+iii),iPno+iii));}}
aHtml.push("<span class=\""+oClass.more+"\"><span>¡­</span></span>");}
else if(iPall-iPno<(oView.iShowPageNum-4))
{bi=iPall-(oView.iShowPageNum-3);while(bi<iPall)
{aHtml.push(iPno==bi?oStyle.activeHtml(fnUrl(bi),bi++):oStyle.linkHtml(fnUrl(bi),bi++));}}
aHtml.push(iPno==bi?oStyle.activeHtml(fnUrl(bi),bi++):oStyle.linkHtml(fnUrl(iPall),iPall));}
aHtml.push('</span>');aHtml.push(oStyle.nextHtml((iPno<iPall)&&fnUrl(iPno+1)));if(oClass.iJump==1)
var sTemp=aHtml.join(oStyle.separate());else
var sTemp=aHtml.join(oStyle.separate())+oStyle.randomHtml(fnUrl,iPall);oParent.innerHTML=sTemp;};QSFL.excore.setFlashObject=function(oParent,oFlash)
{if(!oFlash||!oParent)
{throw new Error("QSFL.excore.setFlashObject Set Error,The Flash or the oParent Object is Null!");return;}
oFlash.writeIn(oParent);}
QSFL.excore.getAVFlashStr=function(sShow,iW,iH)
{var iStyle=(sShow.match(/V1#[MFU]_0_/)?0:1);var w=iW||[140,186][iStyle];var h=iH||[226,300][iStyle];var oOpt={};oOpt.width=w;oOpt.height=h;oOpt.quality="high";oOpt.flashVars="sItems="+sShow;oOpt.wmode="transparent";oOpt.allowScriptAccess="always";var sflash=QSFL.media.SWFlash.buildHTML("http://qqshow2-item.qq.com/1000000/53/02/",oOpt);return sflash;};QSFL.excore.getPhotoFlashStr=function(sShow,iW,iH)
{var w=iW?iW:280;var h=iH?iH:226;var oOpt={};oOpt.width=w;oOpt.height=h;oOpt.quality="high";oOpt.flashVars="sItems="+sShow+"&mode=0";oOpt.wmode="transparent";oOpt.allowScriptAccess="always";var sflash=QSFL.media.SWFlash.buildHTML("http://qqshow2-item.qq.com/1000000/55/02/",oOpt);return sflash;};QSFL.excore.getFriendListFlashStr=function(itemNo,iW,iH)
{var w=iW?iW:280;var h=iH?iH:226;var oOpt={};oOpt.width=w;oOpt.height=h;oOpt.align="middle";oOpt.quality="best";oOpt.flashVars="itemno="+itemNo;oOpt.bgcolor="#ffffff";oOpt.wmode="transparent";oOpt.allowScriptAccess="always";var sflash=QSFL.media.SWFlash.buildHTML("/qqshow_v3/htdocs/img/swf/qqshow_friendlist.swf",oOpt,"mlist_flash");return sflash;};QSFL.excore.getFlashStr=function(sSwfUrl,iW,iH,arrVar)
{var sVar="";if(typeof(arrVar)=="undefined")
arrVar=[];if(arrVar.length>0)
{sVar=arrVar.join('&');}
var oOpt={};oOpt.width=iW;oOpt.height=iH;oOpt.align="middle";oOpt.quality="best";oOpt.flashVars=sVar;oOpt.bgcolor="#ffffff";oOpt.wmode="transparent";oOpt.allowScriptAccess="always";var sflash=QSFL.media.SWFlash.buildHTML(sSwfUrl,oOpt,"mlist_flash");return sflash;};QSFL.excore.checkDefaultShow=function(sShow)
{var defAV=new QQSHOWAV();var userArr=sShow.split("#");var defArr=defAV._arrDefShow[userArr[1].substr(0,5)];var itemArr=userArr[2].split("|");var iFlag=0;for(var i=0;i<itemArr.length;i++)
{iFlag=0;var itemSpcArr=itemArr[i].split("_");if(itemSpcArr[1]>=406&&itemSpcArr[1]<=448)
{for(var j=0;j<defArr.length;j++)
{if(itemSpcArr[1]==defArr[j][0])
{iFlag++
if(itemSpcArr[0]!=defArr[j][1])
{return true;}}}
if(iFlag==0)
{return true;}}}
return false;};QSFL.excore.checkBasicShow=function(sShow)
{var defAV=new QQSHOWAV();var userArr=sShow.split("#");var basicArr=defAV._arrBasicShow[userArr[1].substr(0,5)];var itemArr=userArr[2].split("|");var iFlag=0;for(var i=0;i<itemArr.length;i++)
{iFlag=0;var itemSpcArr=itemArr[i].split("_");if(itemSpcArr[1]>=406&&itemSpcArr[1]<=448)
{for(var j=0;j<basicArr.length;j++)
{if(itemSpcArr[1]==basicArr[j][0])
{iFlag++
if(itemSpcArr[0]!=basicArr[j][1])
{return true;}}}
if(iFlag==0)
{return true;}}}
return false;};QSFL.excore.checkHighQualityShow=function(sShow)
{var defAV=new QQSHOWAV();var userArr=sShow.split("#");var itemArr=userArr[2].split("|");var defArr=defAV._arrDefShow[userArr[1].substr(0,5)];var basicArr=defAV._arrBasicShow[userArr[1].substr(0,5)];var defBasicArr=basicArr.concat(defArr);var iNum1=0;var iNum2=0;var iNum3=0;for(var i=0;i<itemArr.length;i++)
{var iFlag=0;var itemSpcArr=itemArr[i].split("_");for(var j=0;j<defBasicArr.length;j++)
{if(itemSpcArr[0]==defBasicArr[j][1])
{iFlag=1;break;}}
if(1==iFlag)
{continue;}
if(436==itemSpcArr[1]||448==itemSpcArr[1])
{iNum1++;}
if(406==itemSpcArr[1]||421==itemSpcArr[1])
{iNum2++;}
if(402==itemSpcArr[1]||482==itemSpcArr[1])
{iNum3++;}}
if((iNum1>0&&iNum2>0)||(iNum1>0&&iNum3>0))
{return true;}
return false;};QSFL.excore.chsetCheck=function(sInput,bAlert,sTxt)
{if(!sInput)
return true;sInput=sInput.toString();var oMatch=new RegExp("/[\x00-\x09\x0B-\x0C\x0E-\x1F\x80-\xFF]/g");if(sInput.match(oMatch))
{if(bAlert)
{alert((sTxt?sTxt+"ÖÐ":"")+'Çë²»ÒªÊ¹ÓÃ"'
+sInput.match(oMatch).toString()+'"µÈ×Ö·û¡£');return false;}
else
return true;}
else
return true;};QSFL.excore.getQBPrice=function(nQPoint)
{var iPrice=parseInt(nQPoint?nQPoint:"0",10)||0;return(parseInt(iPrice/10)+"."+parseInt(iPrice%10));};QSFL.excore.getUin=function()
{return(parseInt(QSFL.cookie.get('uin').match(/\d+/),10)||0);};QSFL.excore.checkUin=function(iUin)
{if(typeof(iUin)!="number"&&!iUin)
{return false;}
var sUin=iUin.toString();return((/^\s*[123456789]\d{4,9}\s*$/).test(sUin)&&parseInt(sUin,10)>=QSFL.env.UIN.MIN&&parseInt(sUin,10)<=QSFL.env.UIN.MAX)?true:false;};QSFL.excore.checkUrlCredit=function(sUrl)
{return(/^(https?:\/\/)?[\w\-.]+\.(qq|paipai|soso|taotao)\.com($|\/|\\)/i).test(sUrl)||(/^[\w][\w\/\.\-_%]+$/i).test(sUrl)||(/^[\/\\][^\/\\]/i).test(sUrl)?true:false;};QSFL.excore.filterNickName=function(sName,iMaxLength,sExtend)
{iMaxLength=iMaxLength||6;if(typeof(sExtend)=='undefined')
{sExtend='...';}
var iLength=sName.asclen();var aTmp=[];var j=0;if(iLength>(iMaxLength*2))
{for(var i=0;i<iLength;i++)
{var sName1=sName.substr(i,1);j+=sName1.asclen();if(j>(iMaxLength-1)*2)
{return aTmp.join("")+sExtend;}
else
{aTmp.push(sName1);}}}
else
return sName;};QSFL.excore.retCommCode=function(xCode)
{var mapRetCode={"-1001":"¶Ô²»Æð£¬Äú»¹Ã»µÇÂ¼£¬ÇëÏÈµÇÂ¼¡£","-1002":"ÄúÊäÈëµÄ²ÎÊýÓÐ´í£¬ÇëÖØÐÂÊäÈë£¬Ð»Ð»¡£","-1003":"²Ù×÷Ê§°Ü£¬ÇëÉÔºòÔÙÊÔ¡£","-1004":"¶Ô²»Æð£¬Äú²Ù×÷Ì«Æµ·±£¬ÇëÉÔºòÔÙÊÔ¡£","-1005":"¶Ô²»Æð£¬Äú»¹Ã»×¢²áQQÐã¡£","-1006":"¶Ô²»Æð£¬ÄúµÄºÃÓÑ»¹Ã»ÓÐ×¢²áQQÐã£¡","-1007":"¶Ô²»Æð£¬¶Ô·½²»ÊÇÄúµÄ7ÌìºÃÓÑ£¡","-1008":"¶Ô²»Æð£¬Äú²»ÊÇ¶Ô·½µÄ7ÌìºÃÓÑ£¡","-1009":"¶Ô²»Æð£¬ÎªÁËÄúµÄ°²È«£¬ÇëÊäÈëÑéÖ¤Âë¡£","-1100":"²Ù×÷Ê§°Ü£¬ÇëÉÔºòÔÙÊÔ¡£","-1101":"¶Ô²»Æð£¬ÄúµÄÁôÑÔÖÐÓÐÃô¸Ð´Ê»ã,ÇëÐÞ¸ÄºóÔÙ½øÐÐ²Ù×÷¡£","-1200":"¶Ô²»Æð£¬ÏµÍ³ÕýÔÚÉý¼¶Î¬»¤ÖÐ£¬ÇëÉÔºóÔÙÊÔ£¬Ð»Ð»ÄúµÄÖ§³Ö!","-1300":"QQÐãÉÌ³ÇÕýÔÚÉý¼¶Î¬»¤ÖÐ£¬²¿·Ö¹¦ÄÜ½«²»¿ÉÓÃ£¬¸øÄú´øÀ´²»±ã£¬¾´ÇëÁÂ½â£¬Ð»Ð»ÄúµÄÖ§³Ö!"}
return mapRetCode[xCode];};QSFL.excore.userInfo={getDeafaultInfo:function(){return{_iRet:0,_iUin:0,_sName:"",_chSex:'U',_sShow:"",_iAvStyle:-1,_iAlbum:-1,_iRegTime:0,_iAutoRenew:-1,_iReqTime:0,_iVip:0,_iVipHome:0,_iVipGame:0,_iVipClub:0,_iVipKing:0,_iVipRank:0,_iTotalScore:0,_iSequence:0,_iVipLevel:0,_iScoreLeft:-1,_iInitScore:0,_iLevelDis:0,_iPrePayDay:0,_iBankDay:0,_iSMS15:0,_iNBAVip:0,_sBirth:"",_iProvince:0,_iCity:0,_iCharacter:0,_iColor:0,_iStyle:-1,_iBand:0,_sUserBand:"",_sMobile:"",_sEmail:"",_iYearVip:0,_iVipBank:0,_iYearDay:0,_iVipDay:0,_iYearPayWay:0,_icFace:0,_icAge:0,_icSex:0,_scNick:"",_scBirth:"",_iBookingStatus:-1,_iMsgCount:0,_iVipSend:0,_iCloseTime:0,_iShowAlert:0,_iTimeShow:0,_iGwq:0,_iQiiNotChgble:0};},getCoreInfo:function(reqList,fnCall){var stUserInfo=this.getDeafaultInfo();if(!QSFL.lang.isArray(reqList))
{reqList=[];}
var sUrl="http://show.qq.com/cgi-bin/qqshow_user_coreinfo";for(var i=0;i<reqList.length;i++){sUrl=QSFL.excore.setURLParam(sUrl,reqList[i],1);}
function fnUserInfoSucc(jsonObj){var childNodes=jsonObj.childNodes;childNodes.each(function(node){switch(node.nodeName){case"info":stUserInfo._iUin=node["uin"]-0;stUserInfo._sName=node["name"];stUserInfo._chSex=node["sex"];stUserInfo._sShow=node["show"];stUserInfo._iAvStyle=node["style"];stUserInfo._iAlbum=node["album"]-0;stUserInfo._iRegTime=node["regtime"]-0;stUserInfo._iAutoRenew=node["autorenew"]-0;stUserInfo._iReqTime=node["now"]-0;stUserInfo._iRet=(node["disaster"]-0)?-1300:0;stUserInfo._iAvChangeTime=node["avchangetime"]-0;stUserInfo._iShowType=node["showtype"]-0;stUserInfo._sPshow=node["pshow"];stUserInfo._iPtime=node["ptime"]-0;break;case"vip":stUserInfo._iVip=node["vip"]-0;stUserInfo._iVipHome=node["viphome"]-0;stUserInfo._iVipGame=node["vipgame"]-0;stUserInfo._iVipClub=node["club"]-0;stUserInfo._iVipKing=node["vipking"]-0;stUserInfo._iVipRank=node["viprank"]-0;stUserInfo._iTotalScore=node["rtotalscore"]-0;stUserInfo._iSequence=node["rsequence"]-0;stUserInfo._iVipLevel=node["rlevel"]-0;stUserInfo._iScoreLeft=node["rscoreleft"]-0;stUserInfo._iLevelDis=node["rleveldis"]-0;stUserInfo._iInitScore=node["rinitscore"]-0;stUserInfo._iPrePayDay=node["prepaydays"]-0;stUserInfo._iBankDay=node["bankdays"]-0;stUserInfo._iSMS15=node["sms15"]-0;break;case"qiiflag":stUserInfo._iQiiNotChgble=node["qiinotchgble"]-0;break;case"nbavip":stUserInfo._iNBAVip=node["nbavip"]-0;break;}});fnCall&&fnCall(stUserInfo,jsonObj);}
function fnUserInfoFail(jsonObj){if(jsonObj){stUserInfo._iRet=jsonObj["code"]-0;}else{stUserInfo._iRet=-1003;}
fnCall&&fnCall(stUserInfo);}
QSFL.excore.getQQSHOWJson(sUrl,fnUserInfoSucc,fnUserInfoFail,fnUserInfoFail);}};QSFL.excore.getQQSHOWJson=function(src,fnSuc,fnFail,fnError,charset,doc){var param=src;if(typeof param=="object"&&param.fnSuc){src=param.src;fnSuc=param.fnSuc;fnFail=param.fnFail;fnError=param.fnError;charset=param.charset;doc=param.doc;}
var dateBeforeCall=new Date();function funWrapper(jsonRoot){var Latency=(new Date())-dateBeforeCall;if(!jsonRoot)
{QSFL.reportReturnCode(src,QSFL.cons.NETWORK_ERROR_CODE,Latency);return;}
var iCode;if(jsonRoot&&jsonRoot.code==0)
{iCode=0;fnSuc(jsonRoot);}
else{if(fnFail){fnFail(jsonRoot||{code:-1003,msg:"server error"});}
if(jsonRoot&&jsonRoot.code)
iCode=jsonRoot.code;else
iCode=QSFL.monitor.TCISD.retCode.config.errReturnFormat;}
QSFL.reportReturnCode(src,iCode,Latency);}
var loader=new QSFL.JsLoader(funWrapper,funWrapper);loader.loadCgi(src,charset,doc);}
QSFL.excore.scrollLoadFn=function(oParam)
{this.oWindow=oParam.window||window;this.aDomParams=oParam.domParam||[];this.iOffset=oParam.offset||0;};QSFL.excore.scrollLoadFn.prototype.start=function()
{if(this.aDomParams.length==0)
{return;}
var iRet=this.aDomParams.findIf(function(o)
{return typeof(o[1])=="undefined";});if(iRet!=null)
{alert("Ã»ÓÐ´«ÈëÕýÈ·µÄ²ÎÊý£¡");return;}
function _loadAll(aParam)
{aParam.each(function(o)
{if(typeof(o[1])=="function")
{o[1]();}
else if(typeof(o[1])=="object")
{o[1].each(function(v)
{v();});}});}
if(QSFL.dom.getClientHeight(this.oWindow.document)==0)
{_loadAll(this.aDomParams);return;}
if(QSFL.userAgent.isIE())
{this.scrollFn(null,this);QSFL.event.addEvent((QSFL.userAgent.isIE6()?this.oWindow:this.oWindow.document.body),"scroll",this.scrollFn,[this]);QSFL.event.addEvent(this.oWindow,"resize",this.scrollFn,[this]);}
else if(QSFL.userAgent.isFireFox()||QSFL.userAgent.isOpera()||QSFL.userAgent.isChrome())
{this.scrollFn(null,this);QSFL.event.addEvent(this.oWindow.document,"scroll",this.scrollFn,[this]);QSFL.event.addEvent(this.oWindow,"resize",this.scrollFn,[this]);}
else
{_loadAll(this.aDomParams);}};QSFL.excore.scrollLoadFn.prototype.end=function()
{if(QSFL.userAgent.isIE())
{QSFL.event.removeEvent((QSFL.userAgent.isIE6()?this.oWindow:this.oWindow.document.body),"scroll",this.scrollFn);QSFL.event.removeEvent(this.oWindow,"resize",this.scrollFn);}
else if(QSFL.userAgent.isFireFox()||QSFL.userAgent.isOpera()||QSFL.userAgent.isChrome())
{QSFL.event.removeEvent(this.oWindow.document,"scroll",this.scrollFn);QSFL.event.removeEvent(this.oWindow,"resize",this.scrollFn);}};QSFL.excore.scrollLoadFn.prototype.scrollFn=function(enObj,oScroll)
{if(oScroll.aDomParams.length==0)
{oScroll.end();return;}
var iHeight=QSFL.dom.getClientHeight(oScroll.oWindow.document);var iBeginTop=QSFL.dom.getScrollTop(oScroll.oWindow.document);var iEndTop=Math.min(QSFL.dom.getScrollHeight(oScroll.oWindow.document),(iBeginTop+iHeight));var i=0;while(i!=oScroll.aDomParams.length)
{if(!(oScroll.oWindow.QSFL.$(oScroll.aDomParams[i][0])))
{oScroll.aDomParams=oScroll.aDomParams.del(i);continue;}
var aPos=QSFL.dom.getPosition(oScroll.oWindow.QSFL.$(oScroll.aDomParams[i][0]));if(((aPos.top>=iBeginTop)&&((aPos.top+oScroll.iOffset)<iEndTop))||((aPos.top+aPos.height-oScroll.iOffset)>iBeginTop&&(aPos.top+aPos.height)<=iEndTop)||(aPos.top<iBeginTop&&(aPos.top+aPos.height)>iEndTop))
{if(typeof(oScroll.aDomParams[i][1])=="function")
{oScroll.aDomParams[i][1]();}
else if(typeof(oScroll.aDomParams[i][1])=="object")
{oScroll.aDomParams[i][1].each(function(v)
{v();});}
oScroll.aDomParams=oScroll.aDomParams.del(i);if(oScroll.aDomParams.length==0)
{oScroll.end();}
continue;}
else
{i++;}}};QSFL.excore.msgbox={defaultEnv:{compiler:"http://imgcache.qq.com/qqshow_v3/htdocs/live/qsfl/messagebox.html",data:null,getData:function()
{return this.data||(this.data=QSFL.dialog.messageBox.defaultData({zIndex:1000,window:top,maskWindow:[top]}));},view:{colorStyle:{title:"#8A77C2",border:"#8A77C2"},buttonStyle:"auto_btn btn_large",buttonStyleList:{AT_B_L:"auto_btn btn_large",AT_B_L_EM:"auto_btn btn_large_em",AT_B_S:"auto_btn",AT_B_S_EM:"auto_btn_em"},setButtonStyle:function(sIndex)
{this.buttonStyle=this.buttonStyleList[sIndex]||this.buttonStyleList.AT_B_L;},logo:null,title:"ÎÂÜ°ÌáÊ¾",subTitle:null,closeDisabled:false},fillData:function(o)
{this.getData();for(var n in this.data)
{(!o[n]&&this.data[n]&&typeof(this.data[n])!="function")&&(o[n]=this.data[n]);}
return o;},fillView:function(o)
{for(var n in this.view)
{(!o[n]&&this.view[n]&&typeof(this.view[n])!="function")&&(o[n]=this.view[n]);}
if(o.button)
{for(var i=0;i<o.button.length;++i)
{o.button[i][2]||(o.button[i][2]=this.view.buttonStyle);}}
return o;}},alert:function(sMessage,onOK)
{var vButton=[["È·¶¨",onOK]];return top.QSFL.dialog.messageBox(this.defaultEnv.compiler,this.defaultEnv.fillData({}),this.defaultEnv.fillView({content:[{value:sMessage}],button:vButton}));},confirm:function(sMessage,onOK,onCancel)
{var vButton=[["È·¶¨",onOK],["È¡Ïû",onCancel]];return top.QSFL.dialog.messageBox(this.defaultEnv.compiler,this.defaultEnv.fillData({}),this.defaultEnv.fillView({content:[{value:sMessage}],button:vButton}));},show:function(objData,objView,nIndex)
{return top.QSFL.dialog.messageBox(this.defaultEnv.compiler,this.defaultEnv.fillData(objData),this.defaultEnv.fillView(objView),nIndex);},messageBox:function(sUrl,objData,objView,nIndex)
{return top.QSFL.dialog.messageBox(sUrl,this.defaultEnv.fillData(objData),objView,nIndex);}};QSFL.monitor={};QSFL.monitor.errorDetector={TBidShowMall:1,TBidMarketing:2,dataId:1000057,errStr:"",detect:function(aBid){var _detector=QSFL.monitor.errorDetector;var bid=aBid||_detector.TBidShowMall;_detector.errStr="";window.onerror=function(sMsg,sUrl,sLineNo)
{sUrl=sUrl.substr(7,sUrl.length);var browser=QSFL.userAgent.isIE()?"IE"+QSFL.userAgent.ie:QSFL.userAgent.isFireFox()?"Firefox"+QSFL.userAgent.firefox:QSFL.userAgent.isChrome()?"Chrome"+QSFL.userAgent.chrome:QSFL.userAgent.isSafari()?"Safari"+QSFL.userAgent.safari:QSFL.userAgent.isOpera()?"Opera"+QSFL.userAgent.opera:"Others";sKey=sMsg.replace(/\n/g," ")+"|"+encodeURIComponent(sUrl)+"|"+sLineNo;if(_detector.errStr.indexOf(sKey)==-1)
{sMsg=encodeURIComponent(sMsg);(browser.length<=16)||(browser=browser.substr(0,16));(sUrl.length<=128)||(sUrl=sUrl.substr(0,128));(sMsg.length<=1024)||(sMsg=sMsg.substr(0,1024));_detector.errStr+=sKey+",";setTimeout(function()
{var img=new Image();img.src="http://s.isdspeed.qq.com/cgi-bin/s.fcg?dataId="+_detector.dataId
+"&bid="+bid+"&url="+sUrl+"&lineNo="+sLineNo+"&browser="+browser+"&errMsg="+sMsg+"&referrer="+document.referrer+"&href="+encodeURIComponent(window.location.href);},0)}
return false;}}};QSFL.monitor.requestDetector={TBid2K:1,TBid1K7:2,dataId:1000063,detect:function(sUrl){var _detector=QSFL.monitor.requestDetector;var bid=0;if(sUrl.length>=2000)
{bid=_detector.TBid2K;}
else if(sUrl.length>=1700)
{bid=_detector.TBid1K7;}
if(bid)
{setTimeout(function()
{var img=new Image();var url="http://s.isdspeed.qq.com/cgi-bin/s.fcg?";url=QSFL.excore.setURLParam(url,"dataId",_detector.dataId);url=QSFL.excore.setURLParam(url,"bid",bid);url=QSFL.excore.setURLParam(url,"length",sUrl.length);sUrl=sUrl?sUrl:"?";var vUrl=sUrl.split("?");if(vUrl[0].length>=128)
{vUrl[0]=vUrl[0].slice(0,128);}
url=QSFL.excore.setURLParam(url,"url",vUrl[0]);if(vUrl.length==1)
{vUrl[1]="";}
var xParam=new QSFL.excore.param(vUrl[1],"&","=");var sMsg="";for(var sName in xParam)
{if(xParam[sName]&&xParam[sName].length>128)
{sMsg=QSFL.excore.setURLParam(sMsg,sName,xParam[sName].length);}}
url=QSFL.excore.setURLParam(url,"msg",sMsg);url=QSFL.excore.setURLParam(url,"rand",Math.random());img.src=url;},0);}}};QSFL.monitor.jsChecker={limit:[],time:10000,check:function(aTime){if(!top.QSFL)return;var _checker=QSFL.monitor.jsChecker;var _limit=top.QSFL.monitor.jsChecker.limit;var timer=aTime||_checker.time;setTimeout(function(){try{var jsScript=document.getElementsByTagName("script");for(var i=0;i<jsScript.length;i++){if(jsScript[i].src&&jsScript[i].getAttribute("check")&&!window[jsScript[i].getAttribute("check")]&&jsScript[i].src.indexOf("imgcache.qq.com")){if(!_limit[jsScript[i].src])
_limit[jsScript[i].src]=1;if(_limit[jsScript[i].src]>2)
return;new QSFL.JsLoader(function(){var div=null;if(top.QSFL.$("ID_CLINICK"))
{div=top.QSFL.$("ID_CLINICK");div.style.display="";}
else
{div=top.window.document.createElement("div");div.id="ID_CLINICK";div.innerHTML='<div style="position:absolute;top:0px;left:0px;width:100%;height:30px;line-height:30px;background:#fff334;border:1px solid #FDCF1A;color:#333;">\
         <a href="javascript:top.QSFL.monitor.jsChecker.reload();void(0);" style="width:100%;display:block;height:30px;line-height:30px;text-decoration:none;text-align:center;font-family:Microsoft YaHei,Arial;">\
         ¿ÉÄÜÒòÎªÍøÂçÔ­Òò£¬ÄúµÄÒ³ÃæÏÔÊ¾²»È«£¬ÎªÁË¸üºÃµÄÌåÑéÎÒÃÇµÄ²úÆ·£¬ÇëË¢ÐÂ</a><button onclick="QSFL.$(\'ID_CLINICK\').style.display=\'none\';QSFL.mall.sendPGV(\'show.dev.jschecker.close\');" style="position:absolute;top:0;right:5px;width:30px;font-family:Arial; \
         font-size:18px;height:30px;border:0;display:block;color:#DF771C;background:none; cursor:pointer;" title="¹Ø±Õ" type="button">X</button></div>';top.window.document.getElementsByTagName("body")[0].appendChild(div);}
QSFL.mall.sendPGV('show.dev.jschecker.show');}).load(jsScript[i].src);_limit[jsScript[i].src]++;}}}catch(e){return;}},timer);},reload:function(){QSFL.$("ID_CLINICK").style.display="none";QSFL.mall.sendPGV("show.dev.jschecker.click");if(top.mainfra)
top.mainfra.location.reload();else
top.location.reload();}};QSFL.cons=QSFL.cons||{};QSFL.cons.NETWORK_ERROR_CODE=500;QSFL.reportReturnCode=(function(){var REPORT_URL='http://c.isdspeed.qq.com/code.cgi',image,NETWORK_ERROR_CODE=500;var report=function(cgiUrl,param){image=image||document.createElement('img');var queryArray=[],prop,val;for(prop in param){if(param.hasOwnProperty(prop)){val=encodeURIComponent(param[prop]);queryArray.push(prop+"="+val);}}
image.src=cgiUrl+"?"+queryArray.join("&");};var getType=function(code){if(code===0){return 1;}
if(code===NETWORK_ERROR_CODE){return 2;}
return 3;};var parseUrl=function(url){url=url.replace(/^\s+/,"").replace(/\s+$/,"");var link=document.createElement("a"),location=window.location,ret={};var translate=function(url){var pureUrl,other,lastChar,firstChar;var root=function(url){return url.replace(/^/,location.origin||origin(location.href));};var relative=function(url){var baseElement=document.getElementsByTagName("base")[0],base=baseElement&&baseElement.href||pure(location.href).replace(/[^\/]*$/,"");url=url.split("../").join(",").replace(/\.\//g,"").split(",").join("../");base=base.replace(/\/?$/,"/");return base+url;};var parentDir=function(url){var parentDirArray=url.split("../"),transUrl=parentDirArray.shift();for(var i=0,len=parentDirArray.length;i<len;i++){transUrl=transUrl.replace(/[^\/]*\/$/,"")+parentDirArray[i];}
return transUrl;};/[^?#]*/.test(url);pureUrl=RegExp.lastMatch;other=RegExp.rightContext;firstChar=pureUrl.charAt(0);lastChar=pureUrl.charAt(pureUrl.length-1);if(lastChar==="."){pureUrl+="/";}
if(firstChar==="/"){pureUrl=root(pureUrl);}else if(firstChar==="."||firstChar===".."){pureUrl=relative(pureUrl);}
if(pureUrl.indexOf("../")===-1){return pureUrl+other;}
return origin(pureUrl)+"/"+parentDir(pureUrl.replace(/https?:\/\/[^\/]*\/(.*)/,"$1"))+other;};var origin=function(href){return href.replace(/^(https?:\/\/[^\/]*).*$/,"$1");};var pure=function(href){return href.replace(/(\?|#).*/,"");};url=translate(url);link.href=url;for(var name in location){if(typeof location[name]==="string"){ret[name]=link[name];}}
if(ret.pathname.charAt(0)!=='/'){ret.pathname='/'+ret.pathname;}
ret.origin=ret.origin||origin(ret.href);ret.filename=ret.pathname.split("/").pop();ret.directory=ret.pathname.replace(/\/[^\/]*$/,"/");return ret;};return function(cgiUrl,code,latency){code=parseInt(code);var type=getType(code),urlParts=parseUrl(cgiUrl);report(REPORT_URL,{type:type,code:code,domain:urlParts.hostname,time:latency,cgi:urlParts.pathname});};})();QSFL.monitor.TCISD={};QSFL.monitor.TCISD.retCode=function(sUrl,code,time,rate,reportUrl,uin){setTimeout(function(){try{QSFL.monitor.TCISD.retCode.process(sUrl,code,time,rate,reportUrl,uin);}catch(e){}},0);};QSFL.monitor.TCISD.retCode.process=function(sUrl,code,time,rate,reportUrl,uin){var type=2;var aDomainAndCGI=QSFL.monitor.TCISD.retCode.splitDomainAndCGI(sUrl);if(code<0)code=-code;if(code==0)type=1;if(code>0&&code<11)code+=2012000;QSFL.monitor.TCISD.retCode.send(aDomainAndCGI[1],type,code,time,aDomainAndCGI[0],rate,reportUrl,uin);}
QSFL.monitor.TCISD.retCode.send=function(cgi,type,code,time,domain,rate,reportUrl,uin){var _s=QSFL.monitor.TCISD.retCode,_c=_s.config,url=[];var iRate=rate||_c.defaultParams.reportRate;if(cgi.trim()=="")
return;domain=domain||"show.qq.com";url.push((reportUrl||_c.webServerInterfaceURL),"?");url.push("cgi=",cgi,"&","type=",type,"&","code=",code,"&","time=",time,"&","domain=",domain,"&","rate=",iRate);if(uin){url.push("&uin=",uin);}
var img=new Image();img.src=url.join("");};QSFL.monitor.TCISD.retCode.config={webServerInterfaceURL:"http://c.isdspeed.qq.com/code.cgi",defaultParams:{reportRate:1,netWorkErrorCode:3}};QSFL.monitor.TCISD.retCode.splitDomainAndCGI=function(sUrl)
{var aDomainAndCGI=[];sUrl=sUrl.split("?")[0];if(sUrl.indexOf("http://")<0)
sUrl=sUrl.split("http://")[0];else
sUrl=sUrl.split("http://")[1];if(sUrl.indexOf("/cgi-bin/")<0)
{var sDmain=QSFL.xhr.proxy.getHostByCgiName(sUrl);if(sDomain&&sDomain!="")
aDomainAndCGI[0]=sDomain;else
aDomainAndCGI[0]="show.qq.com";aDomainAndCGI[1]=sUrl;return aDomainAndCGI;}
else
{var sDomain;aDomainAndCGI=sUrl.split("/cgi-bin/");sDomain=aDomainAndCGI&&aDomainAndCGI[0]?aDomainAndCGI[0]:QSFL.xhr.proxy.getHostByCgiName(aDomainAndCGI[1]);if(sDomain&&sDomain!="")
aDomainAndCGI[0]=sDomain;else
aDomainAndCGI[0]="show.qq.com";return aDomainAndCGI;}
return aDomainAndCGI;}/*  |xGv00|e386d1085d227e91b2236cfb636492cd */