(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbd2121a"],{"15fd":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("a4d3"),a("b64b");function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}function r(e,t){if(null==e)return{};var a,r,o=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},2611:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("8afd");function r(){return{$show:Object(n["e"])("$messageBox"),$prompt:Object(n["e"])("$prompt"),$alert:Object(n["e"])("$alert"),$confirm:Object(n["e"])("$confirm")}}},"3c6f":function(e,t,a){"use strict";t["a"]={DemplotReport:1,SocializationReport:2,SuppliesFulfillment:3,F5F6Report:4,DistributorPositiveNews:5,DistributorErdkk:6,KioskPerformance:7,FertilizerRedemption:8,FertilizerDistribution:9,KioskToFarmers:10,F5ReportSubmission:11,TPubersActivation:12,KioskTransaction:13,DistributorSanction:14,DistributorCompliance:15,DistributorReportCorrection:16,DistributorActivity:17,KioskStockFulfillment:18}},c4cf:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r={class:"intro-y col-span-12 lg:col-span-12"},o={class:"p-5"},i={class:"sm:grid grid-cols-2 gap-5"},c={class:""},l=Object(n["createVNode"])("p",null,"Periode Penilaian:",-1),u={key:0,class:"text-xl"},d={class:"mt-5 text-right"},s=Object(n["createTextVNode"])("Q1"),b=Object(n["createTextVNode"])("Q2"),f=Object(n["createTextVNode"])("Q3"),p=Object(n["createTextVNode"])("Q4"),m={class:""},v={class:"grid grid-cols-2 gap-5 mt-3"},O={class:"grid grid-cols-2 gap-5 mt-3"},j={class:"grid grid-cols-2 gap-5 mt-3"},h={class:"sm:grid grid-cols gap-5 mt-3"},g=Object(n["createTextVNode"])("Click to upload"),w={class:"flex w-full px-5"},x={class:"ml-auto"},k={key:1};function D(e,t,a,D,_,V){var C=Object(n["resolveComponent"])("el-checkbox"),N=Object(n["resolveComponent"])("el-checkbox-group"),y=Object(n["resolveComponent"])("form-item"),P=Object(n["resolveComponent"])("el-date-picker"),S=Object(n["resolveComponent"])("el-button"),T=Object(n["resolveComponent"])("el-upload"),R=Object(n["resolveComponent"])("DataGrid"),$=Object(n["resolveComponent"])("document-form"),F=Object(n["resolveDirective"])("loading");return Object(n["openBlock"])(),Object(n["createBlock"])("div",r,[Object(n["withDirectives"])(Object(n["createVNode"])($,{title:"Pelanggaran Ketaatan Distributor (Koreksi Tim Verval Kementan)",evaluationPeriod:e.evaluationPeriod},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",o,[Object(n["createVNode"])("div",i,[Object(n["createVNode"])("div",c,[l,null!=e.evaluationPeriod?(Object(n["openBlock"])(),Object(n["createBlock"])("p",u,Object(n["toDisplayString"])(e.evaluationPeriod.period),1)):Object(n["createCommentVNode"])("",!0)]),Object(n["createVNode"])("div",d,[Object(n["createVNode"])(N,{modelValue:e.activeQuartal,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.activeQuartal=t})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(C,{label:1,disabled:""},{default:Object(n["withCtx"])((function(){return[s]})),_:1}),Object(n["createVNode"])(C,{label:2,disabled:""},{default:Object(n["withCtx"])((function(){return[b]})),_:1}),Object(n["createVNode"])(C,{label:3,disabled:""},{default:Object(n["withCtx"])((function(){return[f]})),_:1}),Object(n["createVNode"])(C,{label:4,disabled:""},{default:Object(n["withCtx"])((function(){return[p]})),_:1})]})),_:1},8,["modelValue"])])]),Object(n["createVNode"])("div",m,[Object(n["createVNode"])("div",v,[Object(n["createVNode"])(y,{label:"Nama Kasus",validationData:e.validate.case_name},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",class:["form-control w-full",{"border-theme-6":e.validate.case_name.$error}],placeholder:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.validate.case_name.$model=t})},null,2),[[n["vModelText"],e.validate.case_name.$model]])]})),_:1},8,["validationData"]),Object(n["createVNode"])(y,{label:"Tanggal Kejadian",validationData:e.validate.case_date},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.validate.case_date.$model,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.validate.case_date.$model=t}),class:["form-control",{"border-theme-6":e.validate.case_date.$error}],placeholder:"YYYY/MM/DD"},null,8,["modelValue","class"])]})),_:1},8,["validationData"])]),Object(n["createVNode"])("div",O,[Object(n["createVNode"])(y,{label:"Lokasi",validationData:e.validate.case_location},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",class:["form-control w-full",{"border-theme-6":e.validate.case_location.$error}],placeholder:"","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.validate.case_location.$model=t})},null,2),[[n["vModelText"],e.validate.case_location.$model]])]})),_:1},8,["validationData"]),Object(n["createVNode"])(y,{label:"Reference",validationData:e.validate.case_reference},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",class:["form-control w-full",{"border-theme-6":e.validate.case_reference.$error}],placeholder:"","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.validate.case_reference.$model=t})},null,2),[[n["vModelText"],e.validate.case_reference.$model]])]})),_:1},8,["validationData"])]),Object(n["createVNode"])("div",j,[Object(n["createVNode"])(y,{label:"Keterangan",validationData:e.validate.case_description},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",class:["form-control w-full",{"border-theme-6":e.validate.case_description.$error}],placeholder:"","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.validate.case_description.$model=t})},null,2),[[n["vModelText"],e.validate.case_description.$model]])]})),_:1},8,["validationData"]),Object(n["createVNode"])(y,{label:"Jumlah Koreksi (Rp)"},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"number",class:"form-control w-full","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.formData.correction_amount=t})},null,512),[[n["vModelText"],e.formData.correction_amount]])]})),_:1})]),Object(n["createVNode"])("div",h,[Object(n["createVNode"])(y,{label:"Upload File",validationData:e.validate.file_path},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(T,{ref:"elUpload",class:"upload-demo",action:e.env["VUE_APP_API_ENDPOINT"]+"/files",headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"},"with-credentials":!0,"on-success":e.onUploadSuccess,"file-list":null!=e.formData.file_path?[{name:"file-bukti-pelanggaran-ketaatan",url:e.formData.file_path}]:[],"on-preview":e.handlePreview},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(S,{size:"small",type:"primary"},{default:Object(n["withCtx"])((function(){return[g]})),_:1})]})),_:1},8,["action","on-success","file-list","on-preview"])]})),_:1},8,["validationData"])])])]),Object(n["createVNode"])("div",w,[e.updateMode?(Object(n["openBlock"])(),Object(n["createBlock"])("button",{key:0,type:"button",class:"btn btn-outline-secondary mr-2",onClick:t[8]||(t[8]=function(){var t;return e.dataGrid.clearSelection&&(t=e.dataGrid).clearSelection.apply(t,arguments)})}," Clear Selection ")):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("div",x,[e.updateMode?(Object(n["openBlock"])(),Object(n["createBlock"])("button",{key:0,disabled:e.loading,class:[{"cursor-not-allowed":e.loading},"btn btn-primary w-24 mr-2"],type:"button",onClick:t[9]||(t[9]=function(){return e.save&&e.save.apply(e,arguments)})}," Save ",10,["disabled"])):(Object(n["openBlock"])(),Object(n["createBlock"])("div",k,[Object(n["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary w-24 mr-2",onClick:t[10]||(t[10]=function(){return e.resetFormData&&e.resetFormData.apply(e,arguments)})}," Reset "),Object(n["createVNode"])("button",{disabled:e.loading,class:[{"cursor-not-allowed":e.loading},"btn bg-theme-9 text-white w-24"],type:"button",onClick:t[11]||(t[11]=function(){return e.add&&e.add.apply(e,arguments)})}," Add ",10,["disabled"])]))])]),Object(n["createVNode"])(R,{ref:"dataGrid",class:"m-5",onSelectionChanged:e.onSelectionChanged},null,8,["onSelectionChanged"])]})),_:1},8,["evaluationPeriod"]),[[F,e.loading]])])}a("0cfa");var _=a("5040"),V=a.n(_),C=a("15fd"),N=a("1da1"),y=a("5530"),P=(a("96cf"),a("d3b7"),a("c45b"));function S(e,t,a,r,o,i){var c=Object(n["resolveComponent"])("DxColumn"),l=Object(n["resolveComponent"])("DxPaging"),u=Object(n["resolveComponent"])("DxPager"),d=Object(n["resolveComponent"])("DxDataGrid");return Object(n["openBlock"])(),Object(n["createBlock"])(d,{ref:"root","data-source":e.store,"show-borders":!0,"remote-operations":!0,selection:{mode:"single"},onSelectionChanged:e.onSelectionChanged,onToolbarPreparing:t[1]||(t[1]=function(t){return e.onToolbarPreparing(t)}),"allow-column-reordering":!0,"allow-column-resizing":!0,"column-auto-width":!0},{filePath:Object(n["withCtx"])((function(t){var a=t.data;return[Object(n["createVNode"])("a",{href:e.env["VUE_APP_API_ENDPOINT"]+"/files?filePath="+a.data.file_path,class:"btn btn-sm bg-theme-9 rounded-lg text-white",target:"_blank"},"Preview",8,["href"])]})),cellTemplate:Object(n["withCtx"])((function(t){var a=t.data;return[Object(n["createVNode"])("button",{onClick:function(t){return e.destroy(a.data.id)},class:"btn btn-sm bg-theme-6 rounded-lg text-white"}," Delete ",8,["onClick"])]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(c,{"data-field":"case_name","data-type":"string",caption:"Nama Kasus"}),Object(n["createVNode"])(c,{"data-field":"case_date","data-type":"string",caption:"Tanggal Kejadian"}),Object(n["createVNode"])(c,{"data-field":"case_location","data-type":"string",caption:"Lokasi"}),Object(n["createVNode"])(c,{"data-field":"file_path","data-type":"string",caption:"File Bukti Pelanggaran","cell-template":"filePath"}),Object(n["createVNode"])(c,{allowFiltering:!1,width:100,"data-field":"id",caption:"Aksi","cell-template":"cellTemplate"}),Object(n["createVNode"])(l,{"page-size":5}),Object(n["createVNode"])(u,{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20]})]})),_:1},8,["data-source","onSelectionChanged"])}var T=a("ade3"),R=(a("99af"),a("fb6a"),a("d30a")),$=a("2597"),F=a.n($),B=a("c953"),K="/distributor-compliance",G=function(){return B["a"].get(K)},M=function(e){return B["a"].post(K,e)},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return B["a"].delete(K+"/".concat(e))},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return B["a"].put(K+"/".concat(e),t)},E={get:G,add:M,update:A,destroy:U},q=a("6c02"),I=a("2611"),z=Object(n["defineComponent"])({components:{DxDataGrid:R["DxDataGrid"],DxColumn:R["DxColumn"],DxPaging:R["DxPaging"],DxPager:R["DxPager"],DxSorting:R["DxSorting"],DxHeaderFilter:R["DxHeaderFilter"],DxFilterRow:R["DxFilterRow"]},emits:["selectionChanged"],setup:function(e,t){var a=this,r=t.emit,o=Object(n["ref"])(null),i=Object(q["c"])(),c=Object(I["a"])();function l(e){return void 0!==e&&null!==e&&""!==e}Object(n["onMounted"])((function(){}));var u=Object(n["inject"])("env"),d=new F.a({key:"id",load:function(e){var t="?";["skip","take","requireTotalCount","requireGroupCount","sort","filter","totalSummary","group","groupSummary"].forEach((function(a){a in e&&l(e[a])&&(t+="".concat(a,"=").concat(JSON.stringify(e[a]),"&"))})),t=t.slice(0,-1),t+="&distributor_id="+i.params.distributor_id;var a="".concat(u["VUE_APP_API_ENDPOINT"],"/distributor-compliance").concat(t);return B["a"].get(a).then((function(e){return e.data})).catch((function(){throw"Data Loading Error"}))}}),s=(Object(n["inject"])("updateFormData"),function(e){var t=e.selectedRowsData;r("selectionChanged",t[0])}),b=function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c.$confirm("Hapus data. Lanjutkan?","Konfirmasi",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",closeOnClickModal:!1}).then(Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.destroy(t).then((function(e){V.a.success({title:"Success",position:"bottom-right"}),f()})).catch((function(e){V.a.error({title:"Failed",position:"bottom-right"})}));case 2:case"end":return e.stop()}}),e)})))).catch((function(){}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){o.value.instance.refresh()},p=function(){o.value.instance.clearSelection()},m=function(e){e.toolbarOptions.items.unshift({location:"after",widget:"dxButton",options:{icon:"refresh",onClick:f.bind(a)}})};return Object(T["a"])({env:u,route:i,store:d,onSelectionChanged:s,destroy:b,onToolbarPreparing:m,refreshDataGrid:f,clearSelection:p,root:o},"route",i)}}),L=a("6b0d"),Q=a.n(L);const H=Q()(z,[["render",S]]);var J=H,Y=a("3c6f"),X={id:null,case_name:null,case_date:null,case_location:null,case_reference:null,case_description:null,file_path:null,distributor_id:null,period:null,kuartal:null,correction_amount:null},W=a("25a0"),Z=a("e3e1"),ee=a("2022"),te=a("730f"),ae=a("5502"),ne=["id"],re=["id"],oe=Object(n["defineComponent"])({components:{DocumentForm:P["a"],FormItem:ee["a"],DataGrid:J},setup:function(e){var t=Object(q["c"])(),a=Object(ae["d"])(),r=(a.state.auth.user,Object(n["ref"])(null)),o=Object(n["ref"])(!1),i=Object(n["ref"])(!0),c=Object(I["a"])(),l=Object(n["ref"])(null),u=Object(n["ref"])(null),d=Object(n["inject"])("env"),s=Object(n["reactive"])(Object(y["a"])({},X)),b={case_name:{required:Z["c"]},case_date:{required:Z["c"]},case_location:{required:Z["c"]},case_reference:{required:Z["c"]},case_description:{required:Z["c"]},file_path:{required:Z["c"]}},f=Object(W["a"])(b,Object(n["toRefs"])(s));Object(n["onMounted"])(Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,te["a"].getActive().then((function(e){r.value=e.data,s.period=e.data.period,s.kuartal=e.data.active_kuartal})).finally((function(){s.distributor_id=t.params.distributor_id,i.value=!1}));case 2:case"end":return e.stop()}}),e)}))));var p=function(){for(var e in X)s[e]=X[e];f.value.$reset()},m=function(e){var t=Object(n["toRefs"])(s);for(var a in X)Object.hasOwnProperty.call(e,a)&&(t[a].value=e[a])},v=function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:null!=t?(m(t),o.value=!0):(p(),o.value=!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:f.value.$touch(),f.value.$invalid?V.a.error({title:"Submit Gagal",message:"Silahkan periksa form sekali lagi",position:"bottom-right"}):c.$confirm("Simpan data. Lanjutkan?","Konfirmasi",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",closeOnClickModal:!1}).then(Object(N["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s.id,t=Object(C["a"])(s,ne),i.value=!0,e.next=4,E.update(s.id,t).then((function(e){V.a.success({title:"Data berhasil disimpan",position:"bottom-right"}),l.value.clearSelection(),l.value.refreshDataGrid(),p()})).catch((function(e){V.a.error({title:"Data gagal disimpan",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})})).finally((function(){i.value=!1}));case 4:case"end":return e.stop()}}),e)})))).catch((function(){}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:f.value.$touch(),f.value.$invalid?V.a.error({title:"Submit Gagal",message:"Silahkan periksa form sekali lagi",position:"bottom-right"}):c.$confirm("Simpan data. Lanjutkan?","Konfirmasi",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",closeOnClickModal:!1}).then(Object(N["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s.id,t=Object(C["a"])(s,re),i.value=!0,e.next=4,E.add(t).then((function(e){V.a.success({title:"Data berhasil disimpan",position:"bottom-right"}),u.value.clearFiles(),l.value.refreshDataGrid(),p()})).catch((function(e){V.a.error({title:"Data gagal disimpan",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})})).finally((function(){i.value=!1}));case 4:case"end":return e.stop()}}),e)})))).catch((function(){}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(e,t,a){s.file_path=e.id},g=function(e){var t=window.open(d["VUE_APP_API_ENDPOINT"]+"/files?filePath="+e.url,"_blank");t.focus()};function w(e){v(e)}Object(n["provide"])("updateFormData",v);var x=function(){l.value.refreshDataGrid()};return{env:d,formData:s,validate:f,dataGrid:l,updateMode:o,loading:i,save:O,add:j,resetFormData:p,onUploadSuccess:h,elUpload:u,handlePreview:g,onSelectionChanged:w,refreshDataGrid:x,EvaluationAspectType:Y["a"],evaluationPeriod:r,activeQuartal:Object(n["computed"])((function(){if(!i.value)return[r.value.active_kuartal]}))}},data:function(){return{}}});const ie=Q()(oe,[["render",D]]);t["default"]=ie}}]);