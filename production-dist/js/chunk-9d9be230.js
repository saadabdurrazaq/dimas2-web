(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d9be230"],{"27c0":function(e,t,o){"use strict";o.r(t);o("b0c0");var a=o("7a23"),r={key:0},i={class:"grid grid-cols-3 gap-4 mb-2"},c=Object(a["createVNode"])("label",{for:"produsen"},"Distributor",-1),n={class:"text-base"},d=Object(a["createVNode"])("label",{for:"produsen"},"Status",-1),l={key:0,class:"text-base text-theme-9"},s={key:1,class:"text-base text-theme-6"},u={class:"grid grid-cols-3 gap-4 mb-4"},b=Object(a["createVNode"])("label",{for:"produsen"},"Untuk Produsen",-1),p={class:"text-base"},m=Object(a["createVNode"])("label",{for:"propinsi"},"Di Propinsi",-1),O={class:"text-base"},j=Object(a["createVNode"])("label",{for:"kabupaten"},"Di Kabupaten",-1),g={class:"text-base"},f=Object(a["createVNode"])("div",{class:"border border-b-0 mb-4"},null,-1),V={class:"grid grid-cols-1 gap-4"},v=Object(a["createVNode"])("label",{for:"produsen"},"Notes",-1),D={class:"dialog-footer"},N=Object(a["createTextVNode"])("Cancel"),k=Object(a["createTextVNode"])("Confirm");function x(e,t,o,x,y,h){var C=Object(a["resolveComponent"])("el-button"),_=Object(a["resolveComponent"])("el-dialog");return Object(a["openBlock"])(),Object(a["createBlock"])(_,{"append-to-body":"",title:"Tetapkan Status Approval Rekomendasi Distributor",modelValue:e.dialogVisible,width:"50%",onClose:e.closeDialog},{footer:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("span",D,[Object(a["createVNode"])(C,{onClick:e.closeDialog},{default:Object(a["withCtx"])((function(){return[N]})),_:1},8,["onClick"]),Object(a["createVNode"])(C,{type:"primary",onClick:e.submitAllocationForm},{default:Object(a["withCtx"])((function(){return[k]})),_:1},8,["onClick"])])]})),default:Object(a["withCtx"])((function(){return[null!=e.dialogData?(Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",null,[c,Object(a["createVNode"])("p",n,Object(a["toDisplayString"])(e.dialogData.distributor.name),1)]),Object(a["createVNode"])("div",null,[d,e.dialogData.recommended?(Object(a["openBlock"])(),Object(a["createBlock"])("p",l,"APPROVED")):(Object(a["openBlock"])(),Object(a["createBlock"])("p",s,"REJECTED"))])]),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("div",null,[b,Object(a["createVNode"])("p",p,Object(a["toDisplayString"])(e.dialogData.producer.name),1)]),Object(a["createVNode"])("div",null,[m,Object(a["createVNode"])("p",O,Object(a["toDisplayString"])(e.dialogData.province.province_name),1)]),Object(a["createVNode"])("div",null,[j,Object(a["createVNode"])("p",g,Object(a["toDisplayString"])(e.dialogData.city.city_type)+" "+Object(a["toDisplayString"])(e.dialogData.city.city_name),1)])]),f,Object(a["createVNode"])("div",V,[Object(a["createVNode"])("div",null,[v,Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.dialogFormData.notes=t}),class:"form-control mt-2"},null,512),[[a["vModelText"],e.dialogFormData.notes]])])])])):Object(a["createCommentVNode"])("",!0)]})),_:1},8,["modelValue","onClose"])}o("0cfa");var y=o("5040"),h=o.n(y),C=o("1da1"),_=(o("96cf"),o("4de4"),o("8afd")),w=o("2611"),B=o("dd4e"),R=Object(_["c"])({props:{value:String,dialogVisible:{type:Boolean},dialogData:{required:!0},filter:{required:!0}},emits:["update:dialogVisible","dialog:closed"],setup:function(e,t){var o=t.emit,a=Object(_["o"])({notes:""}),r=Object(w["a"])(),i=function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r.$confirm("Simpan data. Lanjutkan?","Konfirmasi",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning",closeOnClickModal:!1}).then(Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B["a"].setRecommendationApproval({registration_period_id:e.filter.periodId,distributor_id:e.dialogData.distributor_id,region_code:e.filter.regionCode,province_id:e.filter.provinceId,city_id:e.filter.cityId,producer_code:e.filter.producerCode,approval_notes:a.notes,is_approved:e.dialogData.recommended,distributor_regions_id:e.dialogData.distributor_region_id}).then((function(e){h.a.success({title:"Success",position:"bottom-right"})})).catch((function(e){h.a.error({title:"Failed",position:"bottom-right"})}));case 2:c(),o("dialog:closed");case 4:case"end":return t.stop()}}),t)}))));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){a.notes="",o("update:dialogVisible",!1)};return{dialogFormData:a,submitAllocationForm:i,closeDialog:c}}}),S=o("6b0d"),T=o.n(S);const A=T()(R,[["render",x]]);t["default"]=A},dd4e:function(e,t,o){"use strict";var a=o("c953"),r=function(e){return a["a"].post("/distributor-recommendations",e)},i=function(e){return a["a"].post("/distributor-recommendations-multi",e)},c=function(e){return a["a"].post("/distributor-recommendation-approvals",e)};t["a"]={setRecommendation:r,setMultipleRecommendation:i,setRecommendationApproval:c}}}]);