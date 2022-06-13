(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e84617c"],{"191b":function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));n("99af");var r=n("c953"),o=function(e){return r["a"].get("/distributor/".concat(e,"/documents"))},c=function(e){return r["a"].get("/bundle/".concat(e,"/documents"))},i=function(){return r["a"].get("/bundle")},a=function(e,t){return r["a"].get("/distributor/".concat(e,"/item-details-data/item-type/").concat(t))},u=function(e,t,n){return r["a"].post("/bundle/".concat(e,"/item-type/").concat(t,"/approve"),{notes:n})},s=function(e,t,n){return r["a"].post("/bundle/".concat(e,"/item-type/").concat(t,"/reject"),{notes:n})},l=function(e,t,n,o){return r["a"].post("/distributor/".concat(e,"/item-type/").concat(n,"/approve"),{notes:o},{params:{registration_period:t}})},d=function(e,t,n,o){return r["a"].post("/distributor/".concat(e,"/item-type/").concat(n,"/reject"),{notes:o},{params:{registration_period:t}})},b=function(e,t,n,o){return r["a"].post("/distributor/".concat(e,"/item-type/").concat(n,"/propose-revision"),{notes:o},{params:{registration_period:t}})},p=function(e,t,n){return r["a"].get("/distributor/".concat(e,"/item-type/").concat(t,"/status"),{params:{registration_period:n}})},m=function(e,t,n){return r["a"].get("/distributor/".concat(e,"/item-type/").concat(t,"/verification-activities"),{params:{registration_period:n}})},f=function(e,t,n){return r["a"].post("/distributor/".concat(e,"/item-type/").concat(n,"/submit-revision"),{},{params:{registration_period:t}})},j=function(e,t){return r["a"].get("/distributor/".concat(e,"/item-type/").concat(t))},O=function(e,t,n){return r["a"].post("/distributor/".concat(e,"/propose-revision-by-document-type"),{bundle_item_type_ids:t})};t["a"]={getActiveDocuments:o,getBundleItemDetailData:a,getBundles:i,approveBundleItem:u,rejectBundleItem:s,approveDistributorBundleItem:l,rejectDistributorBundleItem:d,showBundleItemByType:j,getBundleActiveDocuments:c,distributorBundleItemStatus:p,getVerificationActivities:m,proposeDistributorBundleItemRevision:b,submitDistributorBundleItemRevision:f,proposeDistributorBundleItemsRevision:O}},2022:function(e,t,n){"use strict";var r=n("7a23"),o={class:"intro-y input-form"},c={class:"sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"};function i(e,t,n,i,a,u){return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["renderSlot"])(e.$slots,"label",{},(function(){return[Object(r["createVNode"])("label",{for:e.id,class:"form-label w-full flex flex-col sm:flex-row"},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.label)+" ",1),Object(r["createVNode"])("span",c,Object(r["toDisplayString"])(e.rulesText),1)],8,["for"])]})),Object(r["renderSlot"])(e.$slots,"default",{slotScope:{id:e.id}}),null!=e.validationData?Object(r["renderSlot"])(e.$slots,"error-message",{key:0},(function(){return[e.validationData.$error?(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],{key:0},Object(r["renderList"])(e.validationData.$errors,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:t,class:"text-theme-6 mt-2"},Object(r["toDisplayString"])(e.$message),1)})),128)):Object(r["createCommentVNode"])("",!0)]})):Object(r["createCommentVNode"])("",!0)])}var a=Object(r["defineComponent"])({props:{validationData:{required:!1,default:null},label:{},rulesText:{},id:{}}});a.render=i;t["a"]=a},af50:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("1da1"),o=(n("96cf"),n("25a0"),n("72dd")),c=n("191b"),i=n("6c02"),a=n("5502");function u(e){var t=Object(o["p"])({}),n=Object(o["p"])(null),u=Object(i["c"])(),s=Object(a["d"])(),l=Object(o["p"])(!0),d=s.state.auth.user,b=Object(o["p"])([]),p=null,m=null;Object(o["k"])(Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("item type: ",e),0==e){t.next=21;break}if("admin"!=u.meta.role){t.next=14;break}return p=u.params.distributor_id,m=u.query.registration_period,console.log("call 1"),t.next=8,v();case 8:return t.next=10,g();case 10:return t.next=12,k();case 12:t.next=21;break;case 14:if(!d.has_registration_number){t.next=21;break}return p=s.state.auth.user.distributor.id,console.log("call 2"),t.next=19,g();case 19:return t.next=21,k();case 21:l.value=!1;case 22:case"end":return t.stop()}}),t)}))));var f=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(m),t.next=3,c["a"].approveDistributorBundleItem(p,m,e,n).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return e.next=4,k();case 4:console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].rejectDistributorBundleItem(p,m,e,n).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return e.next=4,k();case 4:console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].proposeDistributorBundleItemRevision(p,m,e,n).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return e.next=4,k();case 4:console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var n=Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c["a"].showBundleItemByType(p,e).then((function(e){t.value=e.data}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].distributorBundleItemStatus(p,e).then((function(e){n.value=e.data.data}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].getVerificationActivities(p,e).then((function(e){b.value=e.data.data}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].submitDistributorBundleItemRevision(p,m,e).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return e.next=4,k();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=Object(o["a"])((function(){if("distributor"==u.meta.role){if(console.log("bundleitemstatus",n),null==n.value)return!0;if(n.value.need_revision)return!0}return!1}));return{bundleItem:t,bundleItemStatus:n,allowManage:y,approveBundleItem:f,rejectBundleItem:j,proposeBundleItemRevision:O,loading:l,verificationActivities:b,getVerificationActivities:k,submitRevision:I}}},c45b:function(e,t,n){"use strict";n("b0c0"),n("caad");var r=n("7a23"),o={class:"intro-y box"},c={class:"flex w-full"},i={class:"flex items-center"},a={class:"font-medium text-base mr-auto"},u={class:"flex items-center sm:ml-auto hover:-"},s={key:0,class:"bg-theme-14 text-gray-800 inline-block px-4 py-1 rounded-xl mr-2"},l={key:1},d={key:0,class:"bg-yellow-400 text-yellow-800 inline-block px-4 py-1 rounded-xl mr-2"},b=Object(r["createVNode"])("div",{class:"h-10"},null,-1),p={key:0,class:"px-5"},m={class:"ml-5 mt-3"},f={class:"font-semibold"},j={key:0},O=Object(r["createVNode"])("i",null,"No description provided",-1),v={key:1},g={class:"font-semibold"},k=Object(r["createTextVNode"])(),I=Object(r["createVNode"])("br",null,null,-1),y={key:0},B=Object(r["createVNode"])("i",null,"No description provided",-1),w={key:1},x={key:1,class:"px-5"},h=Object(r["createVNode"])("div",{class:"h-10"},null,-1),V={key:0,class:""},R={key:0,class:"grid grid-cols-1 gap-5 border-t p-5"},_={class:"col-span-1"},N={class:"col-span-1"},S={class:"w-100 grid grid-cols-3 gap-2"},D={key:1,class:"pb-5"};function C(e,t,n,C,A,T){var K=Object(r["resolveComponent"])("Maximize2Icon"),$=Object(r["resolveComponent"])("Minimize2Icon"),M=Object(r["resolveComponent"])("el-tab-pane"),F=Object(r["resolveComponent"])("el-timeline-item"),z=Object(r["resolveComponent"])("el-timeline"),U=Object(r["resolveComponent"])("el-tabs"),L=Object(r["resolveComponent"])("form-item");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[Object(r["createVNode"])("div",{class:"flex items-center p-5 border-b rounded-t-md bg-gray-700 text-white border-gray-200 dark:border-dark-5 cursor-pointer",onClick:t[1]||(t[1]=function(t){return e.minimized=!e.minimized})},[Object(r["renderSlot"])(e.$slots,"title",{},(function(){return[Object(r["createVNode"])("div",c,[Object(r["createVNode"])("div",i,[Object(r["createVNode"])("h2",a,Object(r["toDisplayString"])(e.title),1)]),Object(r["createVNode"])("div",u,[e.isRegional?(Object(r["openBlock"])(),Object(r["createBlock"])("div",s," Dokumen Regional ")):Object(r["createCommentVNode"])("",!0),e.useVerificationButtons&&null!=e.bundleItemStatus?(Object(r["openBlock"])(),Object(r["createBlock"])("div",l,[e.bundleItemStatus.need_revision?(Object(r["openBlock"])(),Object(r["createBlock"])("div",d," Perlu Revisi ")):Object(r["createCommentVNode"])("",!0)])):Object(r["createCommentVNode"])("",!0),e.minimized?(Object(r["openBlock"])(),Object(r["createBlock"])(K,{key:2,class:"w-4"})):(Object(r["openBlock"])(),Object(r["createBlock"])($,{key:3,class:"w-4"}))])])]}))]),Object(r["createVNode"])("div",{class:[{hidden:e.minimized},"pb-5"]},[e.useVerificationButtons&&(e.user.has_registration_number||"admin"==e.route.meta.role)&&0!=e.itemType?(Object(r["openBlock"])(),Object(r["createBlock"])(U,{key:0,modelValue:e.activeName,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.activeName=t}),class:"p-5"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(M,{label:"Data",name:"first"},{default:Object(r["withCtx"])((function(){return[Object(r["renderSlot"])(e.$slots,"default",{user:e.user,bundleItemStatus:e.bundleItemStatus,allowManage:e.allowManage},(function(){return[b]})),null!=e.bundleItemStatus&&e.bundleItemStatus.need_revision&&"distributor"==e.user.role.name?(Object(r["openBlock"])(),Object(r["createBlock"])("div",p,[Object(r["createVNode"])("button",{onClick:t[2]||(t[2]=function(){return e.submitRevision&&e.submitRevision.apply(e,arguments)}),class:"btn bg-yellow-400 text-yellow-800 px-8"},"Kirim Revisi")])):Object(r["createCommentVNode"])("",!0)]})),_:3}),Object(r["createVNode"])(M,{label:"Status Verifikasi",name:"second"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",m,[Object(r["createVNode"])("button",{onClick:t[3]||(t[3]=function(){return e.getVerificationActivities&&e.getVerificationActivities.apply(e,arguments)}),class:"btn btn-default px-4 mb-4"}," Refresh "),Object(r["createVNode"])(z,null,{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.verificationActivities,(function(t,n){return Object(r["openBlock"])(),Object(r["createBlock"])(F,{key:n,timestamp:t.created_at},{default:Object(r["withCtx"])((function(){return["distributor"==e.route.meta.role?(Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],{key:0},[Object(r["createVNode"])("span",f,Object(r["toDisplayString"])(e.titleCase(t.action)),1),null==t.notes?(Object(r["openBlock"])(),Object(r["createBlock"])("p",j,[O])):(Object(r["openBlock"])(),Object(r["createBlock"])("p",v,Object(r["toDisplayString"])(t.notes),1))],64)):(Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],{key:1},[Object(r["createVNode"])("p",null,[Object(r["createVNode"])("span",g,Object(r["toDisplayString"])(e.titleCase(t.action)),1),k,I,Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.created_by_user_email)+" ("+Object(r["toDisplayString"])(t.created_by_role_name)+")",1)]),null==t.notes?(Object(r["openBlock"])(),Object(r["createBlock"])("p",y,[B])):(Object(r["openBlock"])(),Object(r["createBlock"])("p",w,Object(r["toDisplayString"])(t.notes),1))],64))]})),_:2},1032,["timestamp"])})),128)),null!=e.bundleItemStatus&&e.bundleItemStatus.need_revision&&"distributor"==e.user.role.name?(Object(r["openBlock"])(),Object(r["createBlock"])(F,{key:e.verificationActivities.length+1},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("button",{onClick:t[4]||(t[4]=function(){return e.submitRevision&&e.submitRevision.apply(e,arguments)}),class:"btn bg-yellow-400 text-yellow-800 px-8"},"Kirim Revisi")]})),_:1})):Object(r["createCommentVNode"])("",!0)]})),_:1})])]})),_:1})]})),_:1},8,["modelValue"])):(Object(r["openBlock"])(),Object(r["createBlock"])("div",x,[Object(r["renderSlot"])(e.$slots,"default",{user:e.user,bundleItemStatus:e.bundleItemStatus,allowManage:e.allowManage},(function(){return[h]}))]))],2),"admin"==e.route.meta.role&&e.useVerificationButtons&&"vp_sales_region"==e.user.role.name&&!e.loading?(Object(r["openBlock"])(),Object(r["createBlock"])("div",V,[!["SUDAH_DIVERIFIKASI","DITOLAK"].includes(e.bundleItem.verification_status)&&["TIDAK_ADA_REVISI","SUDAH_DIREVISI"].includes(e.bundleItem.revision_status)?(Object(r["openBlock"])(),Object(r["createBlock"])("div",R,[Object(r["createVNode"])("div",_,[Object(r["createVNode"])(L,{label:"Catatan Verifikasi"},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createVNode"])("textarea",{readonly:["SUDAH_DIVERIFIKASI","DITOLAK"].includes(e.bundleItem.verification_status),"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.notes=t}),class:"form-control"},null,8,["readonly"]),[[r["vModelText"],e.notes]])]})),_:1})]),Object(r["createVNode"])("div",N,[Object(r["createVNode"])(L,{label:"Action"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",S,[Object(r["createVNode"])("button",{disabled:["SUDAH_DIVERIFIKASI","DITOLAK"].includes(e.bundleItemStatus.verification_status),onClick:t[7]||(t[7]=function(t){return e.rejectBundleItem(e.notes)}),class:"btn bg-theme-6 text-white disabled:opacity-50 disabled:cursor-not-allowed"}," Tolak ",8,["disabled"]),Object(r["createVNode"])("button",{disabled:["SUDAH_DIVERIFIKASI","DITOLAK"].includes(e.bundleItemStatus.verification_status),onClick:t[8]||(t[8]=function(t){return e.proposeBundleItemRevision(e.notes)}),class:"btn bg-theme-12 text-white disabled:opacity-50 disabled:cursor-not-allowed"}," Revisi ",8,["disabled"]),Object(r["createVNode"])("button",{disabled:["SUDAH_DIVERIFIKASI","DITOLAK"].includes(e.bundleItemStatus.verification_status),onClick:t[9]||(t[9]=function(t){return e.approveBundleItem(e.notes)}),class:"btn bg-theme-9 text-white disabled:opacity-50 disabled:cursor-not-allowed"}," Setuju ",8,["disabled"])])]})),_:1})])])):Object(r["createCommentVNode"])("",!0)])):Object(r["createCommentVNode"])("",!0),e.minimized?(Object(r["openBlock"])(),Object(r["createBlock"])("div",D)):Object(r["createCommentVNode"])("",!0)])}n("5319"),n("ac1f");var A=n("72dd"),T=n("6c02"),K=n("4360"),$=n("2022"),M=n("af50"),F=Object(A["c"])({setup:function(e){var t=Object(K["b"])(),n=Object(T["c"])(),r=Object(A["p"])(""),o=Object(A["a"])((function(){return t.state.auth.user})),c=Object(A["p"])("first"),i=function(e){return e.replace(/([^A-Z])([A-Z])/g,"$1 $2").replace(/[_\-]+/g," ").toLowerCase().replace(/(^\w|\b\w)/g,(function(e){return e.toUpperCase()})).replace(/\s+/g," ").replace(/^\s+|\s+$/,"")};if(0!=e.itemType){var a=Object(M["a"])(e.itemType),u=a.loading,s=a.bundleItem,l=a.bundleItemStatus,d=a.allowManage,b=a.approveBundleItem,p=a.rejectBundleItem,m=a.proposeBundleItemRevision,f=a.verificationActivities,j=a.getVerificationActivities,O=a.submitRevision;return{route:n,bundleItem:s,bundleItemStatus:l,allowManage:d,user:o,activeName:c,minimized:Object(A["p"])(!1),bundleItemApproval:I,approveBundleItem:b,rejectBundleItem:p,proposeBundleItemRevision:m,loading:u,notes:r,verificationActivities:f,getVerificationActivities:j,submitRevision:O,titleCase:i}}var v,g,k,I={},y=Object(A["o"])({}),B=function(){return!1},w=Object(A["p"])(!0),x=Object(A["o"])({verification_status:null});return{route:n,bundleItem:v,bundleItemStatus:x,allowManage:y,user:o,activeName:c,minimized:Object(A["p"])(!1),bundleItemApproval:I,approveBundleItem:g,rejectBundleItem:k,proposeBundleItemRevision:B,loading:w,notes:r,titleCase:i}},components:{FormItem:$["a"]},props:{title:{required:!0},useVerificationButtons:{default:!0},isRegional:{default:!1},itemType:{default:!1}}});F.render=C;t["a"]=F}}]);