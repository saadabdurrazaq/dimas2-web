(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a14288a"],{"1e9c":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("1da1"),r=a("5530"),c=(a("96cf"),a("25a0")),o=a("8afd");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=Object(o["p"])(!1),i=Object(o["o"])(Object(r["a"])({},e)),u=null;t&&(u=Object(c["a"])(t,Object(o["q"])(i)));var l=function(){for(var t in e)i[t]=e[t];u&&u.value.$reset()},d=function(t){var a=Object(o["q"])(i);for(var n in e)Object.hasOwnProperty.call(t,n)&&(a[n].value=t[n])},s=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:null!=t?(d(t),a.value=!0):(l(),a.value=!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o["n"])("updateFormData",s),{updateMode:a,formData:i,validate:u,resetFormData:l,hydrateFormData:d,updateFormData:s}}},"565d":function(e,t,a){"use strict";a.r(t);a("b0c0");var n=a("7a23"),r={class:"p-5"},c=Object(n["createTextVNode"])(" ← Back "),o={class:"grid grid-cols-12 gap-5"},i={class:"border-t px-5 pt-5"},u={class:"w-full text-right"};function l(e,t,a,l,d,s){var b=Object(n["resolveComponent"])("router-link"),m=Object(n["resolveComponent"])("form-item"),v=Object(n["resolveComponent"])("document-form"),f=Object(n["resolveDirective"])("loading");return Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createBlock"])(v,{title:"Update Produk"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",r,[Object(n["createVNode"])(b,{to:{name:"manage-product.index"},class:"btn btn-sm bg-white mr-5 mb-5"},{default:Object(n["withCtx"])((function(){return[c]})),_:1},8,["to"]),Object(n["createVNode"])("div",o,[Object(n["createVNode"])(m,{class:"col-span-6",label:"Nama Produk","rules-text":"Required",validationData:e.validate.name},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.validate.name.$model=t}),class:["form-control",{"border-theme-6":e.validate.name.$error}]},null,2),[[n["vModelText"],e.validate.name.$model]])]})),_:1},8,["validationData"]),Object(n["createVNode"])(m,{class:"col-span-6",label:"Kode Produk (WCM)","rules-text":"Required",validationData:e.validate.wcm_code},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.validate.wcm_code.$model=t}),class:["form-control",{"border-theme-6":e.validate.wcm_code.$error}]},null,2),[[n["vModelText"],e.validate.wcm_code.$model]])]})),_:1},8,["validationData"])])]),Object(n["createVNode"])("div",i,[Object(n["createVNode"])("div",u,[Object(n["createVNode"])("button",{onClick:t[3]||(t[3]=function(){return e.submit&&e.submit.apply(e,arguments)}),type:"button",class:"btn btn-primary w-24 mr-2"}," Submit ")])])]})),_:1},512)),[[f,e.loading]])}a("0cfa");var d=a("5040"),s=a.n(d),b=a("1da1"),m=a("5530"),v=(a("96cf"),a("d3b7"),a("8afd")),f=a("c45b"),p=(a("1e9c"),{code:null,name:null,wcm_code:null}),O=a("25a0"),j=a("6c02"),w=a("e3e1"),h=a("2022"),g=a("8dc9"),x=Object(v["c"])({components:{DocumentForm:f["a"],FormItem:h["a"]},setup:function(){var e=Object(j["c"])(),t=Object(v["p"])(Object(m["a"])({},p)),a=Object(v["p"])(!0),n=Object(v["o"])(Object(m["a"])({},p)),r={name:{required:w["c"]},wcm_code:{required:w["c"]}},c=Object(O["a"])(r,Object(v["q"])(n)),o=Object(v["e"])("env");Object(v["m"])(Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.value=!0,t.next=3,g["a"].show(e.params.product).then((function(e){for(var t in p)n.hasOwnProperty(t)&&(n[t]=e.data[t])})).finally((function(){a.value=!1}));case 3:case"end":return t.stop()}}),t)}))));var i=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c.value.$validate(),c.value.$error){e.next=5;break}return a.value=!0,e.next=5,g["a"].update(n.code,n).then((function(e){s.a.success({title:"Success",position:"bottom-right",message:"Data updated"})})).catch((function(e){s.a.error({title:"Failed",position:"bottom-right",message:e.data.message})})).finally((function(){a.value=!1}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e,t,a){n.file_path=e.id},l=function(e){var t=window.open(o["VUE_APP_API_ENDPOINT"]+"/files?filePath="+e.url,"_blank");t.focus()};return{formData:n,validate:c,route:e,originalData:t,submit:i,onUploadSuccees:u,handlePreview:l,env:o,loading:a}}}),D=a("6b0d"),k=a.n(D);const _=k()(x,[["render",l]]);t["default"]=_},"8dc9":function(e,t,a){"use strict";var n=a("c953"),r="/products",c=function(){return n["a"].get("".concat(r))},o=function(e){return n["a"].post(r,e)},i=function(e){return n["a"].get(r+"/".concat(e))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return n["a"].put(r+"/".concat(e),t)};t["a"]={all:c,add:o,show:i,update:u}}}]);