(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7865b094"],{2388:function(e,t,n){"use strict";var r=n("c953"),o="/company-management",i=function(){return r["a"].get(o)},a=function(e){return r["a"].post(o,e)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return r["a"].put(o+"/".concat(e),t)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return r["a"].put(o+"/".concat(e,"/activate"),t)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return r["a"].put(o+"/".concat(e,"/deactivate"),t)};t["a"]={get:i,add:a,update:c,activate:s,deactivate:u}},"56dd":function(e,t,n){"use strict";var r=n("5530"),o=n("c953"),i=function(e){return o["a"].post("/registration-periods",Object(r["a"])({},e))},a=function(){return o["a"].get("/registration-periods/get-active")},c=function(){return o["a"].get("/registration-periods")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o["a"].put("registration-periods/".concat(e,"/activate"))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o["a"].put("registration-periods/".concat(e,"/deactivate"))};t["a"]={create:i,getActive:a,getAll:c,activate:s,deactivate:u}},cf94:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"p-5"},i=Object(r["createVNode"])("p",null,"Periode Registrasi:",-1),a={key:0,class:"text-xl"};function c(e,t,n,c,s,u){var d=Object(r["resolveComponent"])("data-grid"),l=Object(r["resolveComponent"])("el-tab-pane"),p=Object(r["resolveComponent"])("data-grid-revision"),g=Object(r["resolveComponent"])("el-tabs"),b=Object(r["resolveComponent"])("document-form");return Object(r["openBlock"])(),Object(r["createBlock"])(b,{title:"Daftar Verifikasi Data"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",o,[i,null!=e.registrationPeriod?(Object(r["openBlock"])(),Object(r["createBlock"])("p",a,Object(r["toDisplayString"])(e.registrationPeriod.period),1)):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{label:"Verifikasi Data",class:"pb-10"},{default:Object(r["withCtx"])((function(){return[null!=e.registrationPeriod?(Object(r["openBlock"])(),Object(r["createBlock"])(d,{key:0,registrationPeriod:e.registrationPeriod},null,8,["registrationPeriod"])):Object(r["createCommentVNode"])("",!0)]})),_:1}),Object(r["createVNode"])(l,{label:"Dokumen Telah Direvisi",class:"pb-10"},{default:Object(r["withCtx"])((function(){return[null!=e.registrationPeriod?(Object(r["openBlock"])(),Object(r["createBlock"])(p,{key:0,registrationPeriod:e.registrationPeriod},null,8,["registrationPeriod"])):Object(r["createCommentVNode"])("",!0)]})),_:1})]})),_:1})])]})),_:1})}var s=n("1da1"),u=(n("96cf"),n("72dd")),d=n("c45b"),l=Object(r["createTextVNode"])(" Proses ");function p(e,t,n,o,i,a){var c=Object(r["resolveComponent"])("DxFilterRow"),s=Object(r["resolveComponent"])("DxColumn"),u=Object(r["resolveComponent"])("router-link"),d=Object(r["resolveComponent"])("DxPaging"),p=Object(r["resolveComponent"])("DxPager"),g=Object(r["resolveComponent"])("DxDataGrid");return Object(r["openBlock"])(),Object(r["createBlock"])(g,{ref:"root","data-source":e.customStore,"show-borders":!0,"remote-operations":{paging:!0,filtering:!0,sorting:!0},selection:{mode:"single"},onSelectionChanged:e.onSelectionChanged,onToolbarPreparing:t[1]||(t[1]=function(t){return e.onToolbarPreparing(t)})},{cellTemplate:Object(r["withCtx"])((function(t){var n=t.data;return[Object(r["createVNode"])(u,{tag:"button",class:"btn btn-sm rounded-lg px-4",to:e.linkToProcessDocument(n)},{default:Object(r["withCtx"])((function(){return[l]})),_:2},1032,["to"])]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c,{visible:!0}),Object(r["createVNode"])(s,{"data-field":"registration_number.formatted_number","data-type":"string",caption:"No Pendaftaran"}),Object(r["createVNode"])(s,{"data-field":"distributor.name","data-type":"string",caption:"Nama Distributor"}),Object(r["createVNode"])(s,{"data-field":"distributor.classification","data-type":"string",caption:"Klasifikasi Distributor"}),Object(r["createVNode"])(s,{"data-field":"registration_number.created_at","data-type":"string",caption:"Tanggal Pendaftaran"}),Object(r["createVNode"])(s,{"data-field":"avp_verification_status","data-type":"string",caption:"Status Verifikasi Dokumen"}),Object(r["createVNode"])(s,{width:100,"data-field":"id",caption:"Action","cell-template":"cellTemplate"}),Object(r["createVNode"])(d,{"page-size":20}),Object(r["createVNode"])(p,{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20,50]})]})),_:1},8,["data-source","onSelectionChanged"])}n("0cfa");var g=n("5040"),b=n.n(g),f=(n("99af"),n("fb6a"),n("caad"),n("b0c0"),n("d30a")),m=n("2597"),v=n.n(m),O=n("c953"),j=n("2388"),h=n("4360"),D=Object(r["defineComponent"])({components:{DxDataGrid:f["DxDataGrid"],DxColumn:f["DxColumn"],DxPaging:f["DxPaging"],DxPager:f["DxPager"],DxSorting:f["DxSorting"],DxHeaderFilter:f["DxHeaderFilter"],DxFilterRow:f["DxFilterRow"]},props:["registrationPeriod"],setup:function(e,t){var n=this,o=(t.emit,Object(h["b"])()),i=Object(r["ref"])(null);Object(r["onMounted"])((function(){}));function a(e){return void 0!==e&&null!==e&&""!==e}var c=Object(r["inject"])("env"),u=new v.a({key:"distributor_id",load:function(t){var n="?";return["skip","take","requireTotalCount","requireGroupCount","sort","filter","totalSummary","group","groupSummary"].forEach((function(e){e in t&&a(t[e])&&(n+="".concat(e,"=").concat(JSON.stringify(t[e]),"&"))})),n=n.slice(0,-1),n+="&registration_period=".concat(e.registrationPeriod.id),O["a"].get("".concat(c["VUE_APP_API_ENDPOINT"],"/bundles/by-admin-region").concat(n)).then((function(e){return e.data})).catch((function(){throw"Data Loading Error"}))}}),d=function(e){e.selectedRowsData},l=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j["a"].activate(t).then((function(e){b.a.success({title:"Success",position:"bottom-right"}),g()})).catch((function(e){b.a.error({title:"Failed",position:"bottom-right"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j["a"].deactivate(t).then((function(e){b.a.success({title:"Success",position:"bottom-right"}),g()})).catch((function(e){b.a.error({title:"Failed",position:"bottom-right"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){i.value.instance.refresh()},f=function(){i.value.instance.clearSelection()},m=function(e){e.toolbarOptions.items.unshift({location:"after",widget:"dxButton",options:{icon:"refresh",onClick:g.bind(n)}})},D=o.state.auth.user,x=function(t){return console.log(D),["svp_region","svp_pso_planning_management","sevp_marketing_ops","marketing_director"].includes(D.role.name)?{name:"admin-document-verification.distributor-profile.document-verification",params:{distributor_id:t.data.distributor_id},query:{registration_period:e.registrationPeriod.id}}:{name:"admin-document-verification.bundle",params:{distributor_id:t.data.distributor_id},query:{registration_period:e.registrationPeriod.id}}};return{customStore:u,onSelectionChanged:d,activate:l,deactivate:p,onToolbarPreparing:m,refreshDataGrid:g,clearSelection:f,root:i,linkToProcessDocument:x,user:D}}});D.render=p;var x=D,P=Object(r["createTextVNode"])(" Proses ");function w(e,t,n,o,i,a){var c=Object(r["resolveComponent"])("DxFilterRow"),s=Object(r["resolveComponent"])("DxColumn"),u=Object(r["resolveComponent"])("router-link"),d=Object(r["resolveComponent"])("DxPaging"),l=Object(r["resolveComponent"])("DxPager"),p=Object(r["resolveComponent"])("DxDataGrid");return Object(r["openBlock"])(),Object(r["createBlock"])(p,{ref:"root","data-source":e.customStore,"show-borders":!0,"remote-operations":{paging:!0,filtering:!0,sorting:!0},selection:{mode:"single"},onSelectionChanged:e.onSelectionChanged,onToolbarPreparing:t[1]||(t[1]=function(t){return e.onToolbarPreparing(t)})},{cellTemplate:Object(r["withCtx"])((function(t){var n=t.data;return[Object(r["createVNode"])(u,{tag:"button",class:"btn btn-sm rounded-lg px-4",to:e.linkToProcessDocument(n)},{default:Object(r["withCtx"])((function(){return[P]})),_:2},1032,["to"])]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c,{visible:!0}),Object(r["createVNode"])(s,{"data-field":"registration_number.formatted_number","data-type":"string",caption:"No Pendaftaran"}),Object(r["createVNode"])(s,{"data-field":"distributor.name","data-type":"string",caption:"Nama Distributor"}),Object(r["createVNode"])(s,{"data-field":"distributor.classification","data-type":"string",caption:"Klasifikasi Distributor"}),Object(r["createVNode"])(s,{"data-field":"registration_number.created_at","data-type":"string",caption:"Tanggal Pendaftaran"}),Object(r["createVNode"])(s,{width:100,"data-field":"id",caption:"Action","cell-template":"cellTemplate"}),Object(r["createVNode"])(d,{"page-size":20}),Object(r["createVNode"])(l,{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20,50]})]})),_:1},8,["data-source","onSelectionChanged"])}var C=Object(r["defineComponent"])({components:{DxDataGrid:f["DxDataGrid"],DxColumn:f["DxColumn"],DxPaging:f["DxPaging"],DxPager:f["DxPager"],DxSorting:f["DxSorting"],DxHeaderFilter:f["DxHeaderFilter"],DxFilterRow:f["DxFilterRow"]},props:["registrationPeriod"],setup:function(e,t){var n=this,o=(t.emit,Object(h["b"])()),i=Object(r["ref"])(null);Object(r["onMounted"])((function(){}));function a(e){return void 0!==e&&null!==e&&""!==e}var c=Object(r["inject"])("env"),u=new v.a({key:"distributor_id",load:function(t){var n="?";return["skip","take","requireTotalCount","requireGroupCount","sort","filter","totalSummary","group","groupSummary"].forEach((function(e){e in t&&a(t[e])&&(n+="".concat(e,"=").concat(JSON.stringify(t[e]),"&"))})),n=n.slice(0,-1),n+="&registration_period=".concat(e.registrationPeriod.id),O["a"].get("".concat(c["VUE_APP_API_ENDPOINT"],"/bundles-revision/by-admin-region").concat(n)).then((function(e){return e.data})).catch((function(){throw"Data Loading Error"}))}}),d=function(e){e.selectedRowsData},l=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j["a"].activate(t).then((function(e){b.a.success({title:"Success",position:"bottom-right"}),g()})).catch((function(e){b.a.error({title:"Failed",position:"bottom-right"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j["a"].deactivate(t).then((function(e){b.a.success({title:"Success",position:"bottom-right"}),g()})).catch((function(e){b.a.error({title:"Failed",position:"bottom-right"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){i.value.instance.refresh()},f=function(){i.value.instance.clearSelection()},m=function(e){e.toolbarOptions.items.unshift({location:"after",widget:"dxButton",options:{icon:"refresh",onClick:g.bind(n)}})},D=o.state.auth.user,x=function(t){return console.log(t.data),["svp_region","svp_pso_planning_management","sevp_marketing_ops","marketing_director"].includes(D.role.name),{name:"admin-document-verification.distributor-profile.document-verification",params:{distributor_id:t.data.distributor_id},query:{registration_period:e.registrationPeriod.id}}};return{customStore:u,onSelectionChanged:d,activate:l,deactivate:p,onToolbarPreparing:m,refreshDataGrid:g,clearSelection:f,root:i,linkToProcessDocument:x,user:D}}});C.render=w;var _=C,k=n("56dd"),N=Object(u["c"])({components:{DocumentForm:d["a"],DataGrid:x,DataGridRevision:_},setup:function(){var e=Object(u["p"])(null);return Object(u["m"])(Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k["a"].getActive().then((function(t){e.value=t.data}));case 2:case"end":return t.stop()}}),t)})))),{registrationPeriod:e}}});N.render=c;t["default"]=N}}]);