"use strict";(self["webpackChunkc_tool"]=self["webpackChunkc_tool"]||[]).push([[9192],{2398:function(t,e,r){r.d(e,{Z:function(){return h}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Input",{staticClass:"auto-height-textarea",style:t.style,attrs:{type:"textarea",placeholder:t.placeholder},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})},i=[],a=(r(9653),r(92222),r(69600),r(96486)),u=r.n(a),s={name:"autoHeightTextarea",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},height:{type:[String,Number],default:""}},data:function(){return{textarea:""}},computed:{style:function(){var t=[];return this.height&&t.push("height:".concat(this.height).concat(u().isNumber(this.height)?"px":"")),t.join(";")}},watch:{textarea:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){t!==this.textarea&&(this.textarea=t)}},created:function(){this.textarea=this.value}},o=s,c=r(1001),p=(0,c.Z)(o,n,i,!1,null,null,null),h=p.exports},63486:function(t,e,r){r.d(e,{Z:function(){return l}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:"height:"+t.height},[t._t("default")],2)},i=[],a=r(62032),u=(r(9653),r(92222),r(57327),r(41539),r(26699),r(32023),r(34809));function s(t){var e=document.querySelector(t);if(null===e)return 0;var r=window.getComputedStyle(e),n=parseFloat(r["marginTop"])+parseFloat(r["marginBottom"]);return Math.ceil(e.offsetHeight+n)}var o={name:"heightResize",props:{append:{type:Array,default:function(){return[]}},reduce:{type:Number,default:0},remove:{type:Array,default:function(){return[]}},ignore:{type:Boolean,default:!1}},data:function(){return{height:"auto"}},methods:{reportWindowSize:function(){this.resize()},resize:function(){var t,e=this,r=window.innerHeight,n=[".tool-select-block",".tool-category-menu-block",".ctool-bottom"],i=n.filter((function(t){return!e.remove.includes(t)})).concat(this.append),u=(0,a.Z)(i);try{for(u.s();!(t=u.n()).done;){var o=t.value;r-=s(o)}}catch(c){u.e(c)}finally{u.f()}this.reduce>0&&(r-=this.reduce),r>100&&(r-=5),this.ignore||(this.height=r+"px"),this.$emit("resize",r)}},destroyed:function(){window.removeEventListener(u.KU,this.reportWindowSize)},mounted:function(){window.addEventListener(u.KU,this.reportWindowSize),this.resize()}},c=o,p=r(1001),h=(0,p.Z)(c,n,i,!1,null,null,null),l=h.exports},29192:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("heightResize",{attrs:{ignore:"",append:[".page-option-block"]},on:{resize:t.resize}},[r("autoHeightTextarea",{attrs:{height:t.inputHeight,placeholder:t.$t("encrypt_input")},model:{value:t.current.input,callback:function(e){t.$set(t.current,"input",e)},expression:"current.input"}}),r("option-block",{staticClass:"page-option-block"},[r("FormItem",[r("Select",{staticStyle:{width:"200px"},model:{value:t.current.type,callback:function(e){t.$set(t.current,"type",e)},expression:"current.type"}},t._l(t.type,(function(e){return r("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),r("FormItem",[r("Input",{attrs:{placeholder:t.$t("encrypt_password")},model:{value:t.current.password,callback:function(e){t.$set(t.current,"password",e)},expression:"current.password"}})],1),"SM2"===t.current.type?r("FormItem",[r("Select",{staticStyle:{width:"100px"},model:{value:t.current.sm2CipherMode,callback:function(e){t.$set(t.current,"sm2CipherMode",e)},expression:"current.sm2CipherMode"}},[r("Option",{attrs:{value:"C1C3C2"}},[t._v("C1C3C2")]),r("Option",{attrs:{value:"C1C2C3"}},[t._v("C1C2C3")])],1)],1):t._e(),r("FormItem",[r("ButtonGroup",[r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handle("encrypt")}}},[t._v(t._s(t.$t("encrypt_encrypt")))]),r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handle("decrypt")}}},[t._v(t._s(t.$t("encrypt_decrypt")))]),"SM2"===t.current.type?r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.sm2Generate()}}},[t._v(" "+t._s(t.$t("encrypt_generate_secret_key"))+" ")]):t._e()],1)],1)],1),r("autoHeightTextarea",{attrs:{value:t.current.output,height:t.outputHeight,placeholder:t.$t("encrypt_output")}})],1)},i=[],a=(r(41539),r(39714),r(21703),r(69600),r(81354)),u=r.n(a),s=r(63486),o=r(2398),c={components:{heightResize:s.Z,autoHeightTextarea:o.Z},created:function(){this.$initToolData("input")},methods:{handle:function(t){var e=r(52664).sm2,n=r(52664).sm4;if(this.current.input){try{var i="";switch(this.current.type){case"AES":case"DES":case"RC4":case"Rabbit":case"TripleDES":i="encrypt"===t?u()[this.current.type].encrypt(this.current.input,this.current.password).toString():u()[this.current.type].decrypt(this.current.input,this.current.password).toString(u().enc.Utf8);break;case"SM2":if("encrypt"===t)i=e.doEncrypt(this.current.input,this.current.password,this.current.sm2CipherMode),i=u().enc.Base64.stringify(u().enc.Hex.parse(i));else{var a=u().enc.Hex.stringify(u().enc.Base64.parse(this.current.input));i=e.doDecrypt(a,this.current.password,this.current.sm2CipherMode)}break;case"SM4":if("encrypt"===t)i=n.encrypt(this.current.input,this.current.password),i=u().enc.Base64.stringify(u().enc.Hex.parse(i));else{var s=u().enc.Hex.stringify(u().enc.Base64.parse(this.current.input));i=n.decrypt(s,this.current.password)}}if(!i)throw new Error("output null");this.current.output=i}catch(o){return this.$Message.error(this.$t("encrypt_failed",[o.message]).toString())}this.current.operation=t,this.$clipboardCopy(this.current.output),this.$saveToolData(this.current)}},sm2Generate:function(){var t=r(52664).sm2,e=t.generateKeyPairHex(),n=[this.$t("encrypt_public_key"),e.publicKey,this.$t("encrypt_private_key"),e.privateKey,"",this.$t("encrypt_secret_key_prompt")].join("\n");this.$Modal.info({render:function(t){return t("Input",{props:{value:n,type:"textarea",rows:9}})},okText:this.$t("encrypt_close"),width:600})},resize:function(t){this.inputHeight=Math.min(160,Math.ceil(t/2)),this.outputHeight=t-this.inputHeight}},data:function(){return{current:{input:"",password:"",sm2CipherMode:"C1C3C2",output:"",type:"AES",operation:""},type:["AES","DES","RC4","Rabbit","TripleDES","SM2","SM4"],inputHeight:100,outputHeight:100}}},p=c,h=r(1001),l=(0,h.Z)(p,n,i,!1,null,null,null),d=l.exports}}]);