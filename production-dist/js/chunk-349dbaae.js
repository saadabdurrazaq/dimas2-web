(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-349dbaae"],{"15fd":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("a4d3"),a("b64b");function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}function r(e,t){if(null==e)return{};var a,r,o=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},2611:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("8afd");function r(){return{$show:Object(n["e"])("$messageBox"),$prompt:Object(n["e"])("$prompt"),$alert:Object(n["e"])("$alert"),$confirm:Object(n["e"])("$confirm")}}},"5a50":function(e,t,a){"use strict";a.r(t);a("b0c0");var n=a("7a23"),r={class:"intro-y col-span-12 lg:col-span-12"},o={class:"p-5"},i={class:"grid grid-cols-1 mb-5"},c={class:"grid grid-cols-1 mb-5"},l={class:"grid grid-cols-2 gap-5"},u=Object(n["createTextVNode"])("Click to upload"),s={class:"grid grid-cols-1 gap-5 mt-5"},d={class:"mt-4 grid grid-cols-2 gap-5 pb-5 border-b"},p={class:"intro-y input-form"},b=Object(n["createVNode"])("label",{class:"form-label w-full flex flex-col sm:flex-row"}," Status ",-1),f={class:"intro-y input-form"},m=Object(n["createVNode"])("label",{class:"form-label w-full flex flex-col sm:flex-row"}," Status Verifikasi ",-1),v={class:"flex w-full px-5"},h={key:1,class:"ml-auto"},g={key:1};function O(e,t,a,O,j,k){var w=Object(n["resolveComponent"])("el-option"),x=Object(n["resolveComponent"])("el-select"),y=Object(n["resolveComponent"])("form-item"),_=Object(n["resolveComponent"])("el-button"),D=Object(n["resolveComponent"])("el-upload"),C=Object(n["resolveComponent"])("DataGrid"),N=Object(n["resolveComponent"])("document-form");return Object(n["openBlock"])(),Object(n["createBlock"])("div",r,[Object(n["createVNode"])(N,{title:"Person In Charge (PIC) Perusahaan",isRegional:!0,itemType:13},{default:Object(n["withCtx"])((function(a){var r=a.allowManage;return[Object(n["createVNode"])("div",o,[Object(n["createVNode"])("div",i,[Object(n["createVNode"])(y,{label:"Region","rules-text":"Required",validationData:e.validate.region_code},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{clearable:"",modelValue:e.formData.region_code,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.formData.region_code=t}),class:["form-control",{"border-theme-6":e.validate.region_code.$error}],filterable:""},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(e.distributorRegions,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(w,{key:e.code,label:e.name,value:e.code},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","class"])]})),_:1},8,["validationData"])]),Object(n["createVNode"])("div",c,[Object(n["createVNode"])(y,{label:"Nama PIC","rules-text":"Required",validationData:e.validate.name},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{placeholder:"Nama PIC",class:["form-control",{"border-theme-6":e.validate.name.$error}],"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.validate.name.$model=t})},null,2),[[n["vModelText"],e.validate.name.$model]])]})),_:1},8,["validationData"])]),Object(n["createVNode"])("div",l,[Object(n["createVNode"])(y,{label:"Nomor KTP","rules-text":"Required",validationData:e.validate.province_id,class:"intro-y"},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{placeholder:"Nomor KTP",class:["form-control",{"border-theme-6":e.validate.ktp_number.$error}],pattern:"\\d*",maxlength:"16","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.validate.ktp_number.$model=t})},null,2),[[n["vModelText"],e.validate.ktp_number.$model]])]})),_:1},8,["validationData"]),Object(n["createVNode"])(y,{label:"File KTP","rules-text":"Required",validationData:e.validate.ktp_file_path,class:"intro-y"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(D,{ref:"elUpload",class:"upload-demo",action:e.env["VUE_APP_API_ENDPOINT"]+"/files",headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"},"on-success":e.onUploadSuccees,"with-credentials":!0,"file-list":null!=e.formData.ktp_file_path?[{name:"file-ktp",url:e.formData.ktp_file_path}]:[],"on-preview":e.handlePreview},{tip:Object(n["withCtx"])((function(){return[]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(_,{size:"small",type:"primary"},{default:Object(n["withCtx"])((function(){return[u]})),_:1})]})),_:1},8,["action","on-success","file-list","on-preview"])]})),_:1},8,["validationData"]),Object(n["createVNode"])(y,{label:"Jabatan di perusahaan","rules-text":"Required",validationData:e.validate.position,class:"intro-y"},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{placeholder:"Jabatan di perusahaan",class:["form-control",{"border-theme-6":e.validate.position.$error}],"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.validate.position.$model=t})},null,2),[[n["vModelText"],e.validate.position.$model]])]})),_:1},8,["validationData"]),Object(n["createVNode"])(y,{label:"Nomor HP","rules-text":"Required",validationData:e.validate.phone_number,class:"intro-y"},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{placeholder:"Nomor HP",class:["form-control",{"border-theme-6":e.validate.phone_number.$error}],"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.validate.phone_number.$model=t})},null,2),[[n["vModelText"],e.validate.phone_number.$model]])]})),_:1},8,["validationData"])]),Object(n["createVNode"])("div",s,[Object(n["createVNode"])(y,{label:"Email","rules-text":"Required",validationData:e.validate.email,class:"intro-y"},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{placeholder:"Email",class:["form-control",{"border-theme-6":e.validate.email.$error}],"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.validate.email.$model=t})},null,2),[[n["vModelText"],e.validate.email.$model]])]})),_:1},8,["validationData"])]),Object(n["createVNode"])("div",d,[Object(n["createVNode"])("div",p,[b,Object(n["createVNode"])("input",{value:e.formData.is_active?"Active":"Not Activated",type:"text",readonly:"",class:"form-control"},null,8,["value"])]),Object(n["createVNode"])("div",f,[m,Object(n["createVNode"])("input",{value:e.formData.verification_status,type:"text",readonly:"",class:"form-control"},null,8,["value"])])])]),Object(n["createVNode"])("div",v,[e.updateMode?(Object(n["openBlock"])(),Object(n["createBlock"])("button",{key:0,type:"button",class:"btn btn-outline-secondary mr-2",onClick:t[7]||(t[7]=function(){var t;return e.dataGrid.clearSelection&&(t=e.dataGrid).clearSelection.apply(t,arguments)})}," Clear Selection ")):Object(n["createCommentVNode"])("",!0),r?(Object(n["openBlock"])(),Object(n["createBlock"])("div",h,[e.updateMode?(Object(n["openBlock"])(),Object(n["createBlock"])("button",{key:0,type:"button",class:"btn btn-primary w-24 mr-2",onClick:t[8]||(t[8]=function(){return e.save&&e.save.apply(e,arguments)})}," Save ")):(Object(n["openBlock"])(),Object(n["createBlock"])("div",g,[Object(n["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary w-24 mr-2",onClick:t[9]||(t[9]=function(){return e.resetFormData&&e.resetFormData.apply(e,arguments)})}," Reset "),Object(n["createVNode"])("button",{type:"button",class:"btn bg-theme-9 text-white w-24",onClick:t[10]||(t[10]=function(){return e.add&&e.add.apply(e,arguments)})}," Add ")]))])):Object(n["createCommentVNode"])("",!0)]),Object(n["createVNode"])(C,{ref:"dataGrid",class:"m-5",allowManage:r},null,8,["allowManage"])]})),_:1})])}a("0cfa");var j=a("5040"),k=a.n(j),w=a("15fd"),x=a("1da1"),y=a("5530"),_=(a("d3b7"),a("96cf"),a("c45b")),D={key:0},C={key:1};function N(e,t,a,r,o,i){var c=Object(n["resolveComponent"])("DxColumn"),l=Object(n["resolveComponent"])("DxPaging"),u=Object(n["resolveComponent"])("DxPager"),s=Object(n["resolveComponent"])("DxDataGrid");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{ref:"root","data-source":e.store,"show-borders":!0,"remote-operations":!0,selection:{mode:"single"},onSelectionChanged:e.onSelectionChanged,onToolbarPreparing:t[1]||(t[1]=function(t){return e.onToolbarPreparing(t)})},{statusAktivasiCellTemplate:Object(n["withCtx"])((function(e){var t=e.data;return[t.data.is_active?(Object(n["openBlock"])(),Object(n["createBlock"])("span",D," Active ")):(Object(n["openBlock"])(),Object(n["createBlock"])("span",C," Non-Active "))]})),cellTemplate:Object(n["withCtx"])((function(t){var a=t.data;return[a.data.is_active?(Object(n["openBlock"])(),Object(n["createBlock"])("button",{key:1,onClick:function(t){return e.deactivate(a.data.id)},class:"btn btn-sm bg-theme-6 rounded-lg text-white"}," Deactivate ",8,["onClick"])):(Object(n["openBlock"])(),Object(n["createBlock"])("button",{key:0,onClick:function(t){return e.activate(a.data.id)},class:"btn btn-sm bg-theme-9 rounded-lg text-white"}," Activate ",8,["onClick"]))]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(c,{"data-field":"name","data-type":"string",caption:"Nama"}),Object(n["createVNode"])(c,{"data-field":"ktp_number","data-type":"string",caption:"Nomor KTP"}),Object(n["createVNode"])(c,{"data-field":"position","data-type":"string",caption:"Posisi"}),Object(n["createVNode"])(c,{"data-field":"region.name","data-type":"string",caption:"Region","header-filter":{dataSource:e.availableRegions}},null,8,["header-filter"]),Object(n["createVNode"])(c,{allowFiltering:!1,"data-field":"is_active",caption:"Status Aktivasi","data-type":"boolean","cell-template":"statusAktivasiCellTemplate"}),"distributor"==e.route.meta.role&&e.allowManage?(Object(n["openBlock"])(),Object(n["createBlock"])(c,{key:0,allowFiltering:!1,width:100,"data-field":"id",caption:"Aksi","cell-template":"cellTemplate"})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(l,{"page-size":5}),Object(n["createVNode"])(u,{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20]})]})),_:1},8,["data-source","onSelectionChanged"])}a("99af"),a("fb6a");var V=a("d30a"),P=a("2597"),R=a.n(P),S=a("c953"),B="/",$=function(){return S["a"].get(B+"person-in-charge")},T=function(e){return S["a"].post(B+"person-in-charge",e)},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return S["a"].put(B+"person-in-charge/".concat(e),t)},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return S["a"].put(B+"person-in-charge/".concat(e,"/activate"),t)},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return S["a"].put(B+"person-in-charge/".concat(e,"/deactivate"),t)},M={get:$,add:T,update:A,activate:F,deactivate:q},G=a("6c02"),I=Object(n["defineComponent"])({components:{DxDataGrid:V["DxDataGrid"],DxColumn:V["DxColumn"],DxPaging:V["DxPaging"],DxPager:V["DxPager"],DxSorting:V["DxSorting"],DxHeaderFilter:V["DxHeaderFilter"],DxFilterRow:V["DxFilterRow"]},props:["allowManage"],setup:function(e,t){var a=this,r=(t.emit,Object(n["ref"])(null)),o=Object(G["c"])();function i(e){return void 0!==e&&null!==e&&""!==e}Object(n["onMounted"])((function(){}));var c=Object(n["inject"])("env"),l=new R.a({key:"id",load:function(e){var t="?";["skip","take","requireTotalCount","requireGroupCount","sort","filter","totalSummary","group","groupSummary"].forEach((function(a){a in e&&i(e[a])&&(t+="".concat(a,"=").concat(JSON.stringify(e[a]),"&"))})),t=t.slice(0,-1);var a="".concat(c["VUE_APP_API_ENDPOINT"],"/person-in-charge").concat(t);return"admin"==o.meta.role&&(a="".concat(c["VUE_APP_API_ENDPOINT"],"/distributor/").concat(o.params.distributor_id,"/item-details-data/item-type/13")),S["a"].get(a).then((function(e){return e.data})).catch((function(){throw"Data Loading Error"}))}}),u=Object(n["inject"])("updateFormData"),s=function(e){var t=e.selectedRowsData;u(t[0])},d=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.activate(t).then((function(e){k.a.success({title:"Success",position:"bottom-right"}),b()})).catch((function(e){k.a.error({title:"Failed",position:"bottom-right"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.deactivate(t).then((function(e){k.a.success({title:"Success",position:"bottom-right"}),b()})).catch((function(e){k.a.error({title:"Failed",position:"bottom-right"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){r.value.instance.refresh()},f=function(){r.value.instance.clearSelection()},m=function(e){e.toolbarOptions.items.unshift({location:"after",widget:"dxButton",options:{icon:"refresh",onClick:b.bind(a)}})};return{store:l,onSelectionChanged:s,activate:d,deactivate:p,onToolbarPreparing:m,refreshDataGrid:b,clearSelection:f,root:r,route:o}}}),U=a("6b0d"),E=a.n(U);const K=E()(I,[["render",N]]);var H=K,J={id:null,distributor_id:null,name:null,ktp_number:null,ktp_file_path:null,position:null,phone_number:null,email:null,is_active:!0,verification_status:null,region_code:null},L=a("25a0"),z=a("e3e1"),X=a("2022"),W=a("5502"),Q=a("b405"),Y=a("2611"),Z=(a("af50"),["id"]),ee=["id"],te=Object(n["defineComponent"])({components:{DocumentForm:_["a"],DataGrid:H,FormItem:X["a"]},setup:function(){Object(G["c"])();var e=Object(W["d"])(),t=e.state.auth.user,a=Object(n["ref"])(!1),r=Object(n["ref"])(!1),o=Object(Y["a"])(),i=Object(n["ref"])(null),c=Object(n["ref"])(null),l=Object(n["inject"])("env"),u=Object(n["reactive"])(Object(y["a"])({},J)),s={name:{required:z["c"]},ktp_number:{required:z["c"]},ktp_file_path:{required:z["c"]},position:{},phone_number:{required:z["c"]},email:{required:z["c"]},region_code:{required:z["c"]}},d=Object(L["a"])(s,Object(n["toRefs"])(u)),p=function(){for(var e in J)u[e]=J[e];d.value.$reset()},b=function(e){var t=Object(n["toRefs"])(u);for(var a in J)Object.hasOwnProperty.call(e,a)&&(t[a].value=e[a])},f=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:null!=t?(b(t),a.value=!0):(p(),a.value=!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d.value.$touch(),d.value.$invalid?k.a.error({title:"Submit Gagal",message:"Silahkan periksa form sekali lagi",position:"bottom-right"}):o.$confirm("Simpan data. Lanjutkan?","Konfirmasi",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",closeOnClickModal:!1}).then(Object(x["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u.id,a=Object(w["a"])(u,Z),a.distributor_id=t.distributor.id,r.value=!0,e.next=5,M.update(u.id,a).then((function(e){k.a.success({title:"Data berhasil disimpan",position:"bottom-right"}),c.value.clearFiles(),i.value.clearSelection(),i.value.refreshDataGrid(),p()})).catch((function(e){k.a.error({title:"Data gagal disimpan",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})})).finally((function(){r.value=!1}));case 5:case"end":return e.stop()}}),e)})))).catch((function(){}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d.value.$touch(),d.value.$invalid?k.a.error({title:"Submit Gagal",message:"Silahkan periksa form sekali lagi",position:"bottom-right"}):o.$confirm("Simpan data. Lanjutkan?","Konfirmasi",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",closeOnClickModal:!1}).then(Object(x["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u.id,a=Object(w["a"])(u,ee),a.distributor_id=t.distributor.id,r.value=!0,e.next=5,M.add(a).then((function(e){k.a.success({title:"Data berhasil disimpan",position:"bottom-right"}),c.value.clearFiles(),i.value.refreshDataGrid(),p()})).catch((function(e){k.a.error({title:"Data gagal disimpan",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})})).finally((function(){r.value=!1}));case 5:case"end":return e.stop()}}),e)})))).catch((function(){}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(e,t,a){u.ktp_file_path=e.id},g=function(e){var t=window.open(l["VUE_APP_API_ENDPOINT"]+"/files?filePath="+e.url,"_blank");t.focus()};Object(n["provide"])("updateFormData",f);var O=Object(Q["a"])(t),j=O.distributorRegions;return Object(n["provide"])("distributorRegions",j),{env:l,formData:u,validate:d,dataGrid:i,updateMode:a,loading:r,save:m,add:v,resetFormData:p,onUploadSuccees:h,elUpload:c,handlePreview:g,distributorRegions:j}}});const ae=E()(te,[["render",O]]);t["default"]=ae},"6eb3":function(e,t,a){"use strict";a("99af");var n=a("c953"),r="/distributors",o=function(e){return n["a"].get("".concat(r,"/").concat(e,"/regions"))},i=function(e){return n["a"].get("".concat(r,"/").concat(e,"/proposed-regions"))},c=function(e,t){return n["a"].get("".concat(r,"/").concat(e,"/proposed-regions/").concat(t,"/provinces"))},l=function(e,t,a){return n["a"].get("".concat(r,"/").concat(e,"/proposed-regions/").concat(t,"/provinces/").concat(a,"/cities"))};t["a"]={show:o,getProposedRegions:i,getProposedProvinces:c,getProposedCities:l}},b405:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("1da1"),r=(a("96cf"),a("8afd")),o=a("6eb3"),i=a("6c02");function c(e,t){var a=Object(r["p"])([]),c=Object(r["p"])([]),l=Object(r["p"])([]),u=Object(i["c"])(),s="";function d(e){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.province_id=null,t.city_id=null,!a){e.next=5;break}return e.next=5,o["a"].getProposedProvinces(s,a).then((function(e){c.value=e.data.data}));case 5:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function b(e,t){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(a,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.city_id=null,!a||!n){e.next=4;break}return e.next=4,o["a"].getProposedCities(s,a,n).then((function(e){l.value=e.data.data}));case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return v=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].getProposedRegions(s).then((function(e){a.value=e.data.data}));case 2:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}return Object(r["m"])(Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s="admin"!=u.meta.role?e.distributor.id:u.params.distributor_id,t.next=3,m();case 3:case"end":return t.stop()}}),t)})))),{distributorRegions:a,distributorProvinces:c,distributorCities:l,onRegionChanged:d,onProvinceChanged:b,getProposedRegions:m}}}}]);