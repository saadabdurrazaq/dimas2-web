(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7299b6c2"],{"15fd":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("b64b");function a(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}function o(t,e){if(null==t)return{};var n,o,r=a(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}},1928:function(t,e,n){},2611:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("72dd");function o(){return{$show:Object(a["e"])("$messageBox"),$prompt:Object(a["e"])("$prompt"),$alert:Object(a["e"])("$alert"),$confirm:Object(a["e"])("$confirm")}}},"54b5":function(t,e,n){"use strict";var a=n("c953"),o="/statement-letter-templates",r=function(){return a["a"].get(o)},i=function(t){return a["a"].post(o,t)},c=function(t){return a["a"].get(o+"/".concat(t))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return a["a"].put(o+"/".concat(t),e)},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return a["a"].put(o+"/".concat(t,"/activate"),e)},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return httpClGient.put(o+"/".concat(t,"/deactivate"),e)},s="/statement-letters",f=function(){return a["a"].get(s)},p=function(t){return a["a"].post(s,t)},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;return a["a"].put(s+"/".concat(t),e)},m=function(t,e){return a["a"].put("/distributors/".concat(t,"/statement-letters/save"),e)};e["a"]={get:r,add:i,show:c,update:l,activate:u,deactivate:d,add_letter:p,get_uploaded_letter:f,update_letter:b,bulkUpdate:m}},d0f4:function(t,e,n){"use strict";n("1928")},d81d:function(t,e,n){"use strict";var a=n("23e7"),o=n("b727").map,r=n("1dde"),i=r("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},d84d:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),o={class:"grid grid-cols-12 gap-6"};function r(t,e,n,r,i,c){var l=Object(a["resolveComponent"])("SuratPernyataanForm");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])(l,{distributor:t.id_distributor},null,8,["distributor"])])])}var i={class:"intro-y col-span-12 lg:col-span-12"},c={class:"p-5"},l={class:"custom-table"},u=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{scope:"col"},"Nama Dokumen"),Object(a["createVNode"])("th",{scope:"col"},"Template Dokumen"),Object(a["createVNode"])("th",{scope:"col"},"Aksi")])],-1),d=Object(a["createTextVNode"])("Click to upload"),s={class:"mt-4"},f={class:"intro-y input-form"},p=Object(a["createVNode"])("label",{class:"form-label w-full flex flex-col sm:flex-row"},"Status Verifikasi",-1),b={key:0,class:"flex w-full pt-5"},m={class:"ml-auto"};function v(t,e,n,o,r,v){var h=Object(a["resolveComponent"])("el-button"),O=Object(a["resolveComponent"])("el-upload"),g=Object(a["resolveComponent"])("document-form"),j=Object(a["resolveDirective"])("loading");return Object(a["openBlock"])(),Object(a["createBlock"])("div",i,[Object(a["withDirectives"])(Object(a["createVNode"])(g,{title:"Surat Pernyataan",itemType:5},{default:Object(a["withCtx"])((function(n){var o=n.allowManage;return[Object(a["createVNode"])("div",c,[Object(a["createVNode"])("table",l,[u,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(t.formData.statementTemplates,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id},[Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.document_name),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("a",{href:t.env["VUE_APP_API_ENDPOINT"]+"/files?filePath="+e.file_path,class:"btn btn-sm bg-theme-9 rounded-lg text-white btn-block",target:"_blank"},"File",8,["href"])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])(O,{ref:"elUpload",class:"upload-demo",style:{margin:"0px"},action:t.env["VUE_APP_API_ENDPOINT"]+"/files",headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"},"on-success":function(n,a,o){return t.onUploadSuccees(n,a,o,e.id)},"on-remove":function(n,a){return t.onUploadRemove(n,a,e.id)},"with-credentials":!0,"file-list":t.formData.document[e.id]&&null!=t.formData.document[e.id].file_path?[{name:e.document_name,file_path:t.formData.document[e.id].file_path}]:[],"on-preview":t.handlePreview,disabled:!o},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(h,{disabled:!o,size:"small",type:"primary"},{default:Object(a["withCtx"])((function(){return[d]})),_:2},1032,["disabled"])]})),_:2},1032,["action","on-success","on-remove","file-list","on-preview","disabled"])])])})),128))])]),Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",f,[p,Object(a["createVNode"])("input",{value:t.formData.verification_status,type:"text",readonly:"",class:"form-control"},null,8,["value"])])]),o?(Object(a["openBlock"])(),Object(a["createBlock"])("div",b,[Object(a["createVNode"])("div",m,[t.updateMode?(Object(a["openBlock"])(),Object(a["createBlock"])("button",{key:0,disabled:t.loading,class:[{"cursor-not-allowed":t.loading},"btn btn-primary w-24 mr-2"],type:"button",onClick:e[1]||(e[1]=function(){return t.save&&t.save.apply(t,arguments)})},"Save",10,["disabled"])):(Object(a["openBlock"])(),Object(a["createBlock"])("button",{key:1,disabled:t.loading,class:[{"cursor-not-allowed":t.loading},"btn bg-theme-9 text-white w-24"],type:"button",onClick:e[2]||(e[2]=function(){return t.add&&t.add.apply(t,arguments)})},"Add",10,["disabled"]))])])):Object(a["createCommentVNode"])("",!0)])]})),_:1},512),[[j,t.loading]])])}n("0cfa");var h=n("5040"),O=n.n(h),g=n("15fd"),j=n("1da1"),_=n("5530"),k=(n("96cf"),n("99af"),n("159b"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("fb6a"),n("c45b")),w={id:null,document:[],is_active:!0,verification_status:null,statementTemplates:[]},y=n("25a0"),x=n("2022"),D=n("54b5"),P=n("5502"),N=(n("af50"),n("d30a")),V=n("2597"),S=n.n(V),C=n("c953"),B=n("2611"),R=n("6c02"),T=Object(a["defineComponent"])({components:{DocumentForm:k["a"],FormItem:x["a"],DxDataGrid:N["DxDataGrid"],DxColumn:N["DxColumn"],DxPaging:N["DxPaging"],DxPager:N["DxPager"],DxSorting:N["DxSorting"],DxHeaderFilter:N["DxHeaderFilter"],DxFilterRow:N["DxFilterRow"]},setup:function(){var t=this,e=Object(R["c"])(),n=Object(P["d"])(),o=n.state.auth.user,r=Object(a["ref"])(!1),i=Object(a["ref"])(!0),c=Object(a["ref"])(null),l=Object(a["ref"])(null),u=Object(B["a"])(),d=Object(a["inject"])("env"),s=Object(a["reactive"])(Object(_["a"])({},w)),f={},p=Object(y["a"])(f,Object(a["toRefs"])(s)),b=function(){if("admin"==e.meta.role){var t="".concat(d["VUE_APP_API_ENDPOINT"],"/distributor/").concat(e.params.distributor_id,"/item-details-data/item-type/5");C["a"].get(t).then((function(t){var e=t.data.data;0!=e.length?(r.value=!0,e.forEach((function(t){s.document[t.statement_letter_id]={id:t.id,distributor_id:t.distributor_id,statement_letter_id:t.statement_letter_id,file_path:t.file_path}}))):r.value=!1}))}else D["a"].get_uploaded_letter().then((function(t){var e=t.data.data;0!=e.length?(r.value=!0,e.forEach((function(t){s.document[t.statement_letter_id]={id:t.id,distributor_id:t.distributor_id,statement_letter_id:t.statement_letter_id,file_path:t.file_path}}))):r.value=!1})).catch((function(t){console.log(t)}))};Object(a["onMounted"])((function(){b(),C["a"].get("".concat(d["VUE_APP_API_ENDPOINT"],"/statement-letter-templates")).then((function(t){s.statementTemplates=t.data.data})).catch((function(t){console.log(t)})).finally((function(){i.value=!1})),console.log(s)}));var m=function(){var t=Object(a["toRefs"])(s);for(var e in w)t[e].value=w[e];p.value.$reset()},v=function(t){var e=Object(a["toRefs"])(s);for(var n in w)Object.hasOwnProperty.call(t,n)&&(e[n].value=t[n])},h=function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:null!=e?(v(e),r.value=!0):(m(),r.value=!1);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:p.value.$touch(),p.value.$invalid?(console.log(s),O.a.error({title:"Submit Gagal",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})):u.$confirm("Simpan data. Lanjutkan?","Konfirmasi",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",closeOnClickModal:!1}).then(Object(j["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s.id,e=Object(g["a"])(s,["id"]),e.distributor_id=o.distributor.id,i.value=!0,t.next=5,D["a"].add_letter(e).then((function(t){location.reload(!0),O.a.success({title:"Data berhasil disimpan",position:"bottom-right"})})).catch((function(t){console.log(t),O.a.error({title:"Data gagal disimpan",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})})).finally((function(){i.value=!1}));case 5:case"end":return t.stop()}}),t)})))).catch((function(){}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:p.value.$touch(),p.value.$invalid?O.a.error({title:"Submit Gagal",message:"Silahkan periksa form sekali lagi",position:"bottom-right"}):u.$confirm("Simpan data. Lanjutkan?","Konfirmasi",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",closeOnClickModal:!1}).then(Object(j["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s.id,e=Object(g["a"])(s,["id"]),e.distributor_id=o.distributor.id,i.value=!0,t.next=5,Promise.all(s.document.map((function(t){return null===t.id?(e.is_update=!0,D["a"].add_letter(e)):D["a"].update_letter(t.id,t)}))).then((function(t){location.reload(!0),O.a.success({title:"Data berhasil disimpan",position:"bottom-right"})})).catch((function(t){O.a.error({title:"Data gagal disimpan",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})})).finally((function(){i.value=!1}));case 5:case"end":return t.stop()}}),t)})))).catch((function(){}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(t,e,n,a){console.log(a,s),r.value?s.document[a]?s.document[a].file_path=t.id:s.document[a]={distributor_id:o.distributor.id,statement_letter_id:a,file_path:t.id,id:null}:s.document[a]={distributor_id:o.distributor.id,statement_letter_id:a,file_path:t.id}},V=function(t,e,n){r.value?s.document[n].file_path=null:s.document[n]=null},T=function(t){var e=window.open(d["VUE_APP_API_ENDPOINT"]+"/files?filePath="+t.file_path,"_blank");e.focus()},A=function(){c.value.instance.refresh(),b()},E=function(){c.value.instance.clearSelection()},$=function(e){e.toolbarOptions.items.unshift({location:"after",widget:"dxButton",options:{icon:"refresh",onClick:A.bind(t)}})};function I(t){return void 0!==t&&null!==t&&""!==t}var U=new S.a({key:"id",load:function(t){var e="?";["skip","take","requireTotalCount","requireGroupCount","sort","filter","totalSummary","group","groupSummary"].forEach((function(n){n in t&&I(t[n])&&(e+="".concat(n,"=").concat(JSON.stringify(t[n]),"&"))})),e=e.slice(0,-1);"".concat(d["VUE_APP_API_ENDPOINT"],"/statement-letter-templates").concat(e)}});return Object(a["provide"])("updateFormData",h),{env:d,formData:s,validate:p,dataGrid:c,updateMode:r,loading:i,add:k,save:x,resetFormData:m,onUploadSuccees:N,onUploadRemove:V,elUpload:l,handlePreview:T,clearSelection:E,onToolbarPreparing:$,dataGridStore:U}}});n("d0f4");T.render=v;var A=T,E=Object(a["defineComponent"])({components:{SuratPernyataanForm:A},data:function(){return{id_distributor:151}}});E.render=r;e["default"]=E}}]);