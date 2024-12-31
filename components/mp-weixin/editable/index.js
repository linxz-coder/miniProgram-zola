"use strict";function t(e){"@babel/helpers - typeof";return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,i){return(e=r(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(e){var r=i(e,"string");return"symbol"==t(r)?r:r+""}function i(e,r){if("object"!=t(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,r||"default");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function n(t){function r(e){if(t._edit)t._edit.insert(e);else{var r=t.data.nodes.slice(0);r.push(e),t._editVal("nodes",t.data.nodes,r,!0)}}function i(e){"string"==typeof e.src&&(e.src=[e.src]);for(var i=new s(t),n=0;n<e.src.length;n++)e.src[n]=i.getUrl(e.src[n]);r({name:"div",attrs:{style:"text-align:center"},children:[e]})}var n=this;this.vm=t,this.editHistory=[],this.editI=-1,t._mask=[];var o=function(r){var i=n.editHistory[n.editI+r];i&&(n.editI+=r,t.setData(e({},i.key,i.value)))};t.undo=function(){return o(-1)},t.redo=function(){return o(1)},t._editVal=function(r,i,a,s){for(;n.editI<n.editHistory.length-1;)n.editHistory.pop();for(;n.editHistory.length>30;)n.editHistory.pop(),n.editI--;var o=n.editHistory[n.editHistory.length-1];o&&o.key===r||(o&&(n.editHistory.pop(),n.editI--),n.editHistory.push({key:r,value:i}),n.editI++),n.editHistory.push({key:r,value:a}),n.editI++,s&&t.setData(e({},r,a))},t._getItem=function(e,r,i){var n,s;return"color"===e?a.color:("img"===e.name?(n=a.img.slice(0),t.getSrc||(s=n.indexOf("换图"),-1!==s&&n.splice(s,1),s=n.indexOf("超链接"),-1!==s&&n.splice(s,1),-1!==(s=n.indexOf("预览图"))&&n.splice(s,1)),-1!==(s=n.indexOf("禁用预览"))&&e.attrs.ignore&&(n[s]="启用预览")):"a"===e.name?(n=a.link.slice(0),t.getSrc||-1!==(s=n.indexOf("更换链接"))&&n.splice(s,1)):"video"===e.name||"audio"===e.name?(n=a.media.slice(0),s=n.indexOf("封面"),t.getSrc||-1===s||n.splice(s,1),s=n.indexOf("循环"),e.attrs.loop&&-1!==s&&(n[s]="不循环"),s=n.indexOf("自动播放"),e.attrs.autoplay&&-1!==s&&(n[s]="不自动播放")):n="card"===e.name?a.card.slice(0):a.node.slice(0),r||-1!==(s=n.indexOf("上移"))&&n.splice(s,1),i||-1!==(s=n.indexOf("下移"))&&n.splice(s,1),n)},t._tooltip=function(e){t.setData({tooltip:{top:e.top,items:e.items}}),t._tooltipcb=e.success},t._slider=function(e){t.setData({slider:{min:e.min,max:e.max,value:e.value,top:e.top}}),t._slideringcb=e.changing,t._slidercb=e.change},t._color=function(e){t.setData({color:{items:e.items,top:e.top}}),t._colorcb=e.success},t._maskTap=function(){for(;this._mask.length;)this._mask.pop()();var t={};this.data.tooltip&&(t.tooltip=null),this.data.slider&&(t.slider=null),this.data.color&&(t.color=null),(this.data.tooltip||this.data.slider||this.data.color)&&this.setData(t)},t.insertHtml=function(e){n.inserting=!0;var i=new s(t).parse(e);n.inserting=void 0;for(var a=0;a<i.length;a++)r(i[a])},t.insertImg=function(){t.getSrc&&t.getSrc("img").then(function(e){"string"==typeof e&&(e=[e]);for(var i=new s(t),n=0;n<e.length;n++)r({name:"img",attrs:{src:i.getUrl(e[n])}})}).catch(function(){})},t.insertLink=function(){t.getSrc&&t.getSrc("link").then(function(t){r({name:"a",attrs:{href:t},children:[{type:"text",text:t}]})}).catch(function(){})},t.insertTable=function(t,e){for(var i={name:"table",attrs:{style:"display:table;width:100%;margin:10px 0;text-align:center;border-spacing:0;border-collapse:collapse;border:1px solid gray"},children:[]},n=0;n<t;n++){for(var a={name:"tr",attrs:{},children:[]},s=0;s<e;s++)a.children.push({name:"td",attrs:{style:"padding:2px;border:1px solid gray"},children:[{type:"text",text:""}]});i.children.push(a)}r(i)},t.insertVideo=function(){t.getSrc&&t.getSrc("video").then(function(t){i({name:"video",attrs:{controls:"T"},src:t})}).catch(function(){})},t.insertAudio=function(){t.getSrc&&t.getSrc("audio").then(function(t){var e;t.src?(e=t.src,t.src=void 0):(e=t,t={}),t.controls="T",i({name:"audio",attrs:t,src:e})}).catch(function(){})},t.insertText=function(){r({name:"p",attrs:{},children:[{type:"text",text:""}]})},t.clear=function(){t._maskTap(),t._edit=void 0,t.setData({nodes:[{name:"p",attrs:{},children:[{type:"text",text:""}]}]})},t.getContent=function(){var e="";!function t(r,i){for(var n=0;n<r.length;n++){var a=r[n];if("text"===a.type)e+=a.text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/\xa0/g,"&nbsp;");else{if("img"===a.name&&(a.attrs.src||"").includes("data:image/svg+xml;utf8,")){e+=a.attrs.src.substr(24).replace(/%23/g,"#").replace("<svg",'<svg style="'+(a.attrs.style||"")+'"');continue}if("video"===a.name||"audio"===a.name)if(a.src.length>1){a.children=[];for(var s=0;s<a.src.length;s++)a.children.push({name:"source",attrs:{src:a.src[s]}})}else a.attrs.src=a.src[0];else"div"===a.name&&(a.attrs.style||"").includes("overflow:auto")&&"table"===(a.children[0]||{}).name&&(a=a.children[0]);if("table"===a.name&&(i=a.attrs,(a.attrs.style||"").includes("display:grid"))){a.attrs.style=a.attrs.style.split("display:grid")[0];for(var o=[{name:"tr",attrs:{},children:[]}],l=0;l<a.children.length;l++)a.children[l].attrs.style=a.children[l].attrs.style.replace(/grid-[^;]+;*/g,""),a.children[l].r!==o.length?o.push({name:"tr",attrs:{},children:[a.children[l]]}):o[o.length-1].children.push(a.children[l]);a.children=o}e+="<"+a.name;for(var c in a.attrs){var d=a.attrs[c];d&&("T"!==d&&!0!==d?"t"===a.name[0]&&"style"===c&&i&&(d=d.replace(/;*display:table[^;]*/,""),i.border&&(d=d.replace(/border[^;]+;*/g,function(t){return t.includes("collapse")?t:""})),i.cellpadding&&(d=d.replace(/padding[^;]+;*/g,"")),!d)||(e+=" "+c+'="'+d.replace(/"/g,"&quot;")+'"'):e+=" "+c)}e+=">",a.children&&(t(a.children,i),e+="</"+a.name+">")}}}(t.data.nodes);for(var r=t.plugins.length;r--;)t.plugins[r].onGetContent&&(e=t.plugins[r].onGetContent(e)||e);return e}}var a=require("./config"),s=require("../parser");n.prototype.onUpdate=function(t,e){var r=this;this.vm.data.editable&&(this.vm._maskTap(),e.entities.amp="&",this.inserting||(this.vm._edit=void 0,t||setTimeout(function(){r.vm.setData({nodes:[{name:"p",attrs:{},children:[{type:"text",text:""}]}]})},0)))},n.prototype.onParse=function(t){!this.vm.data.editable||"td"!==t.name&&"th"!==t.name||this.vm.getText(t.children)||t.children.push({type:"text",text:""})},module.exports=n;