(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-310fa5a8"],{"1e9c":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("1da1"),r=a("5530"),c=(a("96cf"),a("25a0")),o=a("8afd");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=Object(o["p"])(!1),i=Object(o["o"])(Object(r["a"])({},e)),u=null;t&&(u=Object(c["a"])(t,Object(o["q"])(i)));var l=function(){for(var t in e)i[t]=e[t];u&&u.value.$reset()},d=function(t){var a=Object(o["q"])(i);for(var n in e)Object.hasOwnProperty.call(t,n)&&(a[n].value=t[n])},s=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:null!=t?(d(t),a.value=!0):(l(),a.value=!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o["n"])("updateFormData",s),{updateMode:a,formData:i,validate:u,resetFormData:l,hydrateFormData:d,updateFormData:s}}},"54b5":function(e,t,a){"use strict";var n=a("c953"),r="/statement-letter-templates",c=function(){return n["a"].get(r)},o=function(e){return n["a"].post(r,e)},i=function(e){return n["a"].get(r+"/".concat(e))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return n["a"].put(r+"/".concat(e),t)},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return n["a"].put(r+"/".concat(e,"/activate"),t)},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return httpClGient.put(r+"/".concat(e,"/deactivate"),t)},s="/statement-letters",p=function(){return n["a"].get(s)},f=function(e){return n["a"].post(s,e)},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return n["a"].put(s+"/".concat(e),t)},m=function(e,t){return n["a"].put("/distributors/".concat(e,"/statement-letters/save"),t)};t["a"]={get:c,add:o,show:i,update:u,activate:l,deactivate:d,add_letter:f,get_uploaded_letter:p,update_letter:b,bulkUpdate:m}},be21:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r={class:"p-5"},c=Object(n["createTextVNode"])(" ← Back "),o={class:"grid grid-cols-12 gap-5"},i=Object(n["createTextVNode"])("Click to upload"),u={class:"border-t px-5 pt-5"},l={class:"w-full text-right"};function d(e,t,a,d,s,p){var f=Object(n["resolveComponent"])("router-link"),b=Object(n["resolveComponent"])("form-item"),m=Object(n["resolveComponent"])("el-button"),v=Object(n["resolveComponent"])("el-upload"),h=Object(n["resolveComponent"])("document-form"),O=Object(n["resolveDirective"])("loading");return Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createBlock"])(h,{title:"Update Template Surat Pernyataan"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",r,[Object(n["createVNode"])(f,{to:{name:"manage-template-surat-pernyataan.index"},class:"btn btn-sm bg-white mr-5 mb-5"},{default:Object(n["withCtx"])((function(){return[c]})),_:1},8,["to"]),Object(n["createVNode"])("div",o,[Object(n["createVNode"])(b,{class:"col-span-6",label:"Document Name","rules-text":"Required",validationData:e.validate.document_name},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.validate.document_name.$model=t}),class:["form-control",{"border-theme-6":e.validate.document_name.$error}]},null,2),[[n["vModelText"],e.validate.document_name.$model]])]})),_:1},8,["validationData"]),Object(n["createVNode"])(b,{class:"col-span-6",label:"File","rules-text":"Required",validationData:e.validate.file_path},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(v,{ref:"elUpload",class:"upload-demo form-control",action:e.env["VUE_APP_API_ENDPOINT"]+"/files",headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"},"with-credentials":!0,"on-success":e.onUploadSuccees,"file-list":null!=e.formData.file_path?[{name:"file-template",url:e.formData.file_path}]:[],"on-preview":e.handlePreview},{tip:Object(n["withCtx"])((function(){return[]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{size:"small",type:"primary"},{default:Object(n["withCtx"])((function(){return[i]})),_:1})]})),_:1},8,["action","on-success","file-list","on-preview"])]})),_:1},8,["validationData"])])]),Object(n["createVNode"])("div",u,[Object(n["createVNode"])("div",l,[Object(n["createVNode"])("button",{onClick:t[2]||(t[2]=function(){return e.submit&&e.submit.apply(e,arguments)}),type:"button",class:"btn btn-primary w-24 mr-2"}," Submit ")])])]})),_:1},512)),[[O,e.loading]])}a("0cfa");var s=a("5040"),p=a.n(s),f=a("1da1"),b=a("5530"),m=(a("96cf"),a("d3b7"),a("8afd")),v=a("c45b"),h=(a("1e9c"),{id:null,document_name:null,file_path:null,deleted_at:!1}),O=a("25a0"),j=a("6c02"),w=a("e3e1"),g=a("2022"),_=a("54b5"),x=Object(m["c"])({components:{DocumentForm:v["a"],FormItem:g["a"]},setup:function(){var e=Object(j["c"])(),t=Object(m["p"])(Object(b["a"])({},h)),a=Object(m["p"])(!0),n=Object(m["o"])(Object(b["a"])({},h)),r={document_name:{required:w["c"]},file_path:{required:w["c"]}},c=Object(O["a"])(r,Object(m["q"])(n)),o=Object(m["e"])("env");Object(m["m"])(Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.value=!0,t.next=3,_["a"].show(e.params.template_id).then((function(e){for(var t in h)n.hasOwnProperty(t)&&(n[t]=e.data[t])})).finally((function(){a.value=!1}));case 3:case"end":return t.stop()}}),t)}))));var i=function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c.value.$validate(),c.value.$error){e.next=5;break}return a.value=!0,e.next=5,_["a"].update(n.id,n).then((function(e){n.file_path=e.data.file_path,p.a.success({title:"Success",position:"bottom-right",message:"Data updated"})})).catch((function(e){p.a.error({title:"Failed",position:"bottom-right",message:e.data.message})})).finally((function(){a.value=!1}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e,t,a){n.file_path=e.id},l=function(e){var t=window.open(o["VUE_APP_API_ENDPOINT"]+"/files?filePath="+e.url,"_blank");t.focus()};return{formData:n,validate:c,route:e,originalData:t,submit:i,onUploadSuccees:u,handlePreview:l,env:o,loading:a}}}),D=a("6b0d"),N=a.n(D);const V=N()(x,[["render",d]]);t["default"]=V}}]);