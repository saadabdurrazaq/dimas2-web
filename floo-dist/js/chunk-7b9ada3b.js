(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b9ada3b"],{2388:function(e,t,n){"use strict";var r=n("c953"),o="/company-management",a=function(){return r["a"].get(o)},i=function(e){return r["a"].post(o,e)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return r["a"].put(o+"/".concat(e),t)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return r["a"].put(o+"/".concat(e,"/activate"),t)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return r["a"].put(o+"/".concat(e,"/deactivate"),t)};t["a"]={get:a,add:i,update:c,activate:s,deactivate:u}},2611:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("72dd");function o(){return{$show:Object(r["e"])("$messageBox"),$prompt:Object(r["e"])("$prompt"),$alert:Object(r["e"])("$alert"),$confirm:Object(r["e"])("$confirm")}}},"56dd":function(e,t,n){"use strict";var r=n("5530"),o=n("c953"),a=function(e){return o["a"].post("/registration-periods",Object(r["a"])({},e))},i=function(){return o["a"].get("/registration-periods/get-active")},c=function(){return o["a"].get("/registration-periods")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o["a"].put("registration-periods/".concat(e,"/activate"))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o["a"].put("registration-periods/".concat(e,"/deactivate"))};t["a"]={create:a,getActive:i,getAll:c,activate:s,deactivate:u}},"9c96e":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"p-5"},a=Object(r["createVNode"])("p",null,"Periode Registrasi:",-1),i={key:0,class:"text-xl"},c={class:"mt-4"};function s(e,t,n,s,u,l){var d=Object(r["resolveComponent"])("data-grid"),p=Object(r["resolveComponent"])("el-tab-pane"),b=Object(r["resolveComponent"])("el-tabs"),g=Object(r["resolveComponent"])("document-form");return Object(r["openBlock"])(),Object(r["createBlock"])(g,{title:"Daftar Approval Distributor"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",o,[a,null!=e.registrationPeriod?(Object(r["openBlock"])(),Object(r["createBlock"])("p",i,Object(r["toDisplayString"])(e.registrationPeriod.period),1)):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("div",c,[Object(r["createVNode"])(b,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{label:"Belum Diproses"},{default:Object(r["withCtx"])((function(){return[null!=e.registrationPeriod?(Object(r["openBlock"])(),Object(r["createBlock"])(d,{isApproved:-1,class:"mt-4",registrationPeriod:e.registrationPeriod,key:3},null,8,["registrationPeriod"])):Object(r["createCommentVNode"])("",!0)]})),_:1}),Object(r["createVNode"])(p,{label:"Approved"},{default:Object(r["withCtx"])((function(){return[null!=e.registrationPeriod?(Object(r["openBlock"])(),Object(r["createBlock"])(d,{isApproved:1,class:"mt-4",registrationPeriod:e.registrationPeriod,key:1},null,8,["registrationPeriod"])):Object(r["createCommentVNode"])("",!0)]})),_:1}),Object(r["createVNode"])(p,{label:"Rejected"},{default:Object(r["withCtx"])((function(){return[null!=e.registrationPeriod?(Object(r["openBlock"])(),Object(r["createBlock"])(d,{isApproved:0,class:"mt-4",registrationPeriod:e.registrationPeriod,key:2},null,8,["registrationPeriod"])):Object(r["createCommentVNode"])("",!0)]})),_:1})]})),_:1})])])]})),_:1})}var u=n("1da1"),l=(n("96cf"),n("72dd")),d=n("c45b"),p=Object(r["createTextVNode"])(" Lihat Dokumen "),b={key:0,class:"flex"};function g(e,t,n,o,a,i){var c=Object(r["resolveComponent"])("DxFilterRow"),s=Object(r["resolveComponent"])("DxColumn"),u=Object(r["resolveComponent"])("router-link"),l=Object(r["resolveComponent"])("DxSelection"),d=Object(r["resolveComponent"])("DxPaging"),g=Object(r["resolveComponent"])("DxPager"),m=Object(r["resolveComponent"])("DxDataGrid");return Object(r["openBlock"])(),Object(r["createBlock"])(m,{ref:"root","data-source":e.customStore,"show-borders":!0,"remote-operations":{paging:!0,filtering:!0,sorting:!0},"allow-column-reordering":!0,"allow-column-resizing":!0,"column-auto-width":!0,onSelectionChanged:e.onSelectionChanged,onToolbarPreparing:t[4]||(t[4]=function(t){return e.onToolbarPreparing(t)}),onCellPrepared:e.onCellPrepared},{cellTemplate:Object(r["withCtx"])((function(t){var n=t.data;return[Object(r["createVNode"])(u,{tag:"button",class:"btn btn-sm rounded-lg px-4",to:e.linkToProcessDocument(n),target:"_blank"},{default:Object(r["withCtx"])((function(){return[p]})),_:2},1032,["to"])]})),toolbarTemplate:Object(r["withCtx"])((function(n){n.data;return[e.selectedRowKeyArray.length?(Object(r["openBlock"])(),Object(r["createBlock"])("div",b,[Object(r["createVNode"])("button",{class:"px-4 py-2 btn bg-theme-9 text-white rounded mr-2",onClick:t[1]||(t[1]=function(){return e.approveSelected&&e.approveSelected.apply(e,arguments)})}," Approve Selected "),Object(r["createVNode"])("button",{class:"px-4 py-2 btn bg-theme-6 text-white rounded mr-2",onClick:t[2]||(t[2]=function(){return e.rejectSelected&&e.rejectSelected.apply(e,arguments)})}," Reject Selected "),Object(r["createVNode"])("button",{class:"px-4 py-2 btn rounded",onClick:t[3]||(t[3]=function(t){return e.root.instance.clearSelection()})}," Clear Selection ")])):Object(r["createCommentVNode"])("",!0)]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c,{visible:!0}),Object(r["createVNode"])(s,{"data-field":"registration_number.formatted_number","data-type":"string",caption:"No Pendaftaran"}),Object(r["createVNode"])(s,{"data-field":"distributor.sap_id","data-type":"string",caption:"Customer ID"}),Object(r["createVNode"])(s,{"data-field":"distributor.name","data-type":"string",caption:"Nama Distributor",width:"300"}),Object(r["createVNode"])(s,{"data-field":"region.name","data-type":"string",caption:"Region"}),Object(r["createVNode"])(s,{"data-field":"related_bundles_on_revision_hold","data-type":"boolean",caption:"Revision in Progress"}),Object(r["createVNode"])(s,{"data-field":"registration_number.created_at","data-type":"datetime",caption:"Tanggal Pendaftaran"}),Object(r["createVNode"])(s,{"data-field":"id",caption:"Action","cell-template":"cellTemplate",allowFiltering:!1}),-1===e.isApproved?(Object(r["openBlock"])(),Object(r["createBlock"])(l,{key:0,mode:"multiple","select-all-mode":"page"})):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(d,{"page-size":20}),Object(r["createVNode"])(g,{"show-page-size-selector":!0,"allowed-page-sizes":[5,10,20,50]})]})),_:1},8,["data-source","onSelectionChanged","onCellPrepared"])}n("0cfa");var m=n("5040"),f=n.n(m),v=(n("99af"),n("fb6a"),n("159b"),n("caad"),n("b0c0"),n("d30a")),h=n("2597"),j=n.n(h),O=n("c953"),w=n("2388"),x=n("4360"),k=function(e,t){return O["a"].post("/distributor-approvals/approve-batch",{bundle_ids:e,registration_period_id:t})},C=function(e,t){return O["a"].post("/distributor-approvals/reject-batch",{bundle_ids:e,registration_period_id:t})},y={approveSelected:k,rejectSelected:C},_=n("2611"),P=n("1efe"),D=n.n(P),S=(n("2ef0"),Object(r["defineComponent"])({components:{DxDataGrid:v["DxDataGrid"],DxColumn:v["DxColumn"],DxPaging:v["DxPaging"],DxPager:v["DxPager"],DxSorting:v["DxSorting"],DxHeaderFilter:v["DxHeaderFilter"],DxFilterRow:v["DxFilterRow"],DxSelection:v["DxSelection"]},props:["registrationPeriod","isApproved"],setup:function(e,t){var n=this,o=(t.emit,Object(x["b"])()),a=Object(r["ref"])(null),i=Object(_["a"])();function c(e){return void 0!==e&&null!==e&&""!==e}var s=Object(r["inject"])("env"),l=new j.a({key:"id",load:function(t){var n="?";return["skip","take","requireTotalCount","requireGroupCount","sort","filter","totalSummary","group","groupSummary"].forEach((function(e){e in t&&c(t[e])&&(n+="".concat(e,"=").concat(JSON.stringify(t[e]),"&"))})),n=n.slice(0,-1),n.length?n+="&":n+="?",n+="registration_period=".concat(e.registrationPeriod.id),n+="&is_approved=".concat(e.isApproved),O["a"].get("".concat(s["VUE_APP_API_ENDPOINT"],"/distributor-approvals").concat(n)).then((function(e){return e.data})).catch((function(){throw"Data Loading Error"}))}}),d=Object(r["ref"])([]),p=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.currentSelectedRowKeys.forEach((function(e){t.component.byKey(e).done((function(n){n.related_bundles_on_revision_hold?(t.component.deselectRows(e),f.a.warning({title:"Failed",message:"Related bundle on revision process",position:"bottom-right"})):t.component.selectRows(e,!0)}))})),e.next=3,a.value.instance.getSelectedRowKeys();case 3:d.value=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=Object(r["computed"])(Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.value.instance.getSelectedRowKeys();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),g=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w["a"].activate(t).then((function(e){f.a.success({title:"Success",position:"bottom-right"}),v()})).catch((function(e){f.a.error({title:"Failed",position:"bottom-right"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w["a"].deactivate(t).then((function(e){f.a.success({title:"Success",position:"bottom-right"}),v()})).catch((function(e){f.a.error({title:"Failed",position:"bottom-right"})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){a.value.instance.refresh()},h=function(){a.value.instance.clearSelection()},k=function(e){e.toolbarOptions.items.unshift({location:"before",template:"toolbarTemplate"},{location:"after",widget:"dxButton",options:{icon:"refresh",onClick:v.bind(n)}})},C=o.state.auth.user,P=function(t){return console.log(C),["svp_region","svp_pso_planning_management","sevp_marketing_ops","marketing_director"].includes(C.role.name)?{name:"admin-document-verification.distributor-profile.document-verification",params:{distributor_id:t.data.distributor_id},query:{registration_period:e.registrationPeriod.id}}:{name:"admin-document-verification.bundle",params:{distributor_id:t.data.distributor_id},query:{registration_period:e.registrationPeriod.id}}};function S(){return R.apply(this,arguments)}function R(){return R=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.$confirm("Anda yakin ingin menyetujui data yang sudah dipilih. Lanjutkan?","Konfirmasi",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",closeOnClickModal:!1}).then(Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.approveSelected(d.value,e.registrationPeriod.id).then((function(e){f.a.success({title:"Proses berhasil",position:"bottom-right"}),v(),h()})).catch((function(e){f.a.error({title:"Proses gagal",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})}));case 2:case"end":return t.stop()}}),t)}))));case 1:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function N(){return V.apply(this,arguments)}function V(){return V=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.$confirm("Anda yakin ingin menolak data yang sudah dipilih. Lanjutkan?","Konfirmasi",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",closeOnClickModal:!1}).then(Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.rejectSelected(d.value,e.registrationPeriod.id).then((function(e){f.a.success({title:"Proses berhasil",position:"bottom-right"}),v(),h()})).catch((function(e){f.a.error({title:"Proses gagal",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})}));case 2:case"end":return t.stop()}}),t)}))));case 1:case"end":return t.stop()}}),t)}))),V.apply(this,arguments)}function B(e){if("data"===e.rowType&"select"===e.column.command&&e.data.related_bundles_on_revision_hold){var t=D.a.getInstance(e.cellElement.children[0]);console.log(t),t.option("disabled",!0),t.off()}}return{customStore:l,onSelectionChanged:p,activate:g,deactivate:m,onToolbarPreparing:k,refreshDataGrid:v,clearSelection:h,root:a,linkToProcessDocument:P,user:C,selectedRowKeyArray:d,approveSelected:S,rejectSelected:N,onCellPrepared:B,selectedRows:b}}}));S.render=g;var R=S,N=n("56dd"),V=Object(l["c"])({components:{DocumentForm:d["a"],DataGrid:R},setup:function(){var e=Object(l["p"])(null);return Object(l["m"])(Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N["a"].getActive().then((function(t){e.value=t.data}));case 2:case"end":return t.stop()}}),t)})))),{registrationPeriod:e}}});V.render=s;t["default"]=V}}]);