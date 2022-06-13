(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40a5d413"],{"3d18":function(e,t,a){"use strict";a.r(t);a("b0c0");var r=a("7a23"),o={class:"grid grid-cols-12 gap-6"},n=Object(r["createVNode"])("div",{class:"col-span-12"},[Object(r["createVNode"])("div",{class:"intro-y flex items-center mt-8"},[Object(r["createVNode"])("h2",{class:"text-lg font-medium mr-auto"}," Update Account ")])],-1),c=Object(r["createVNode"])("div",{class:"col-span-12 xl:col-span-3"},[Object(r["createVNode"])("div",{class:"xl:border-r border-theme-5 -mb-10 pb-10"},[Object(r["createVNode"])("div",{class:"xl:pr-6 grid grid-cols-12 gap-5 pb-0"},[Object(r["createVNode"])("div",{class:"col-span-12 md:col-span-12 xl:col-span-12 xxl:col-span-12"},[Object(r["createVNode"])("div",{class:"intro-y col-span-12 lg:col-span-8 xl:col-span-9"},[Object(r["createVNode"])("div",{class:"intro-x"},[Object(r["createVNode"])("a",{tag:"div",class:"box px-5 py-3 mb-3 flex items-center zoom-in",href:"#updateProfile"},[Object(r["createVNode"])("div",{class:"ml-2 mr-auto"},[Object(r["createVNode"])("div",{class:"font-medium"},"Update Profile")])])]),Object(r["createVNode"])("div",{class:"intro-x"},[Object(r["createVNode"])("a",{class:"box px-5 py-3 mb-3 flex items-center zoom-in",href:"#changePassword"},[Object(r["createVNode"])("div",{class:"ml-2 mr-auto"},[Object(r["createVNode"])("div",{class:"font-medium"},"Change Password")])])])])])])])],-1),s={class:"col-span-12 xl:col-span-9"},i={class:"p-5"},d={class:"grid grid-cols-12 gap-5"},l={class:"border-t px-5 pt-5"},u={class:"w-full text-right"},p={class:"p-5"},b={class:"grid grid-cols-12 gap-5"},m={class:"border-t px-5 pt-5"},f={class:"w-full text-right"};function v(e,t,a,v,w,O){var j=Object(r["resolveComponent"])("form-item"),g=Object(r["resolveComponent"])("document-form"),h=Object(r["resolveDirective"])("loading");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[n,c,Object(r["createVNode"])("div",s,[Object(r["withDirectives"])(Object(r["createVNode"])(g,{title:"Update Profile",id:"updateProfile"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",i,[Object(r["createVNode"])("div",d,[Object(r["createVNode"])(j,{class:"col-span-6",label:"Nama","rules-text":"Required",validationData:e.validate.name},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createVNode"])("input",{placeholder:"Nama",class:["form-control",{"border-theme-6":e.validate.name.$error}],"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.validate.name.$model=t})},null,2),[[r["vModelText"],e.validate.name.$model]])]})),_:1},8,["validationData"]),Object(r["createVNode"])(j,{class:"col-span-6",label:"Email","rules-text":"Required",validationData:e.validate.email},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createVNode"])("input",{placeholder:"Email",class:["form-control",{"border-theme-6":e.validate.email.$error}],"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.validate.email.$model=t})},null,2),[[r["vModelText"],e.validate.email.$model]])]})),_:1},8,["validationData"])])]),Object(r["createVNode"])("div",l,[Object(r["createVNode"])("div",u,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary w-24 mr-2",onClick:t[3]||(t[3]=function(){return e.resetFormData&&e.resetFormData.apply(e,arguments)})},"Reset"),Object(r["createVNode"])("button",{type:"button",class:"btn btn-primary w-24 mr-2",onClick:t[4]||(t[4]=function(){return e.saveProfile&&e.saveProfile.apply(e,arguments)})},"Save")])])]})),_:1},512),[[h,e.profileLoading]]),Object(r["withDirectives"])(Object(r["createVNode"])(g,{title:"Change Password",id:"changePassword",class:"mt-5"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",p,[Object(r["createVNode"])("div",b,[Object(r["createVNode"])(j,{class:"col-span-6",label:"New Password","rules-text":"Required",validationData:e.validatePassword.password},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"password",class:["form-control",{"border-theme-6":e.validatePassword.password.$error}],"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.validatePassword.password.$model=t})},null,2),[[r["vModelText"],e.validatePassword.password.$model]])]})),_:1},8,["validationData"]),Object(r["createVNode"])(j,{class:"col-span-6",label:"Confirm New Password","rules-text":"Required",validationData:e.validatePassword.repeatPassword},{default:Object(r["withCtx"])((function(){return[Object(r["withDirectives"])(Object(r["createVNode"])("input",{type:"password",class:["form-control",{"border-theme-6":e.validatePassword.repeatPassword.$error}],"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.validatePassword.repeatPassword.$model=t})},null,2),[[r["vModelText"],e.validatePassword.repeatPassword.$model]])]})),_:1},8,["validationData"])])]),Object(r["createVNode"])("div",m,[Object(r["createVNode"])("div",f,[Object(r["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary w-24 mr-2",onClick:t[7]||(t[7]=function(){return e.resetFormData&&e.resetFormData.apply(e,arguments)})},"Reset"),Object(r["createVNode"])("button",{type:"button",class:"btn btn-primary w-24 mr-2",onClick:t[8]||(t[8]=function(){return e.savePassword&&e.savePassword.apply(e,arguments)})},"Save")])])]})),_:1},512),[[h,e.passwordLoading]])])])}a("0cfa");var w=a("5040"),O=a.n(w),j=a("1da1"),g=a("5530"),h=(a("96cf"),a("d3b7"),a("72dd")),x=a("c45b"),N=a("2022"),V=a("818a"),P=a("6c02"),y=a("25a0"),D=a("e3e1"),k={id:null,name:null,email:null,email_verified_at:null,last_name:null,first_name:null},C=a("5502"),R=Object(h["c"])({components:{DocumentForm:x["a"],FormItem:N["a"]},setup:function(){var e=Object(P["c"])(),t=(Object(h["p"])({}),Object(h["p"])([])),a=Object(h["p"])(!0),r=Object(h["p"])(!0),o=Object(C["d"])(),n=o.state.auth.user,c=Object(h["p"])({}),s=Object(h["o"])(Object(g["a"])({},k)),i={name:{required:D["c"]},email:{required:D["c"]},role_id:{required:D["c"]}},d=Object(y["a"])(i,Object(h["q"])(s)),l={password:null,repeatPassword:null},u=Object(h["o"])(Object(g["a"])({},l)),p=function(e){return D["a"].withMessage("Password konfirmasi harus sama",(function(t){return console.log(e,t),t==e.password}))},b={password:{required:D["c"],minLength:Object(D["b"])(8)},repeatPassword:{sameAsPassword:p(u)}},m=Object(y["a"])(b,u);Object(h["m"])(Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.value=!0,r.value=!1,e.next=4,V["c"].show(n.id).then((function(e){for(var t in c.value=e.data.data,k)s.hasOwnProperty(t)&&(s[t]=e.data.data[t])})).finally((function(){a.value=!1}));case 4:case"end":return e.stop()}}),e)}))));var f=function(){for(var e in k)s.hasOwnProperty(e)&&(s[e]=c.value[e])},v=function(){u["password"]=null,u["repeatPassword"]=null,m.value.$reset()},w=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.value=!0,e.next=3,V["c"].update(n.id,s).then((function(e){O.a.success({title:"Data berhasil disimpan",position:"bottom-right"})})).catch((function(e){O.a.error({title:"Data gagal disimpan",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})})).finally((function(){a.value=!1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.value=!0,e.next=3,V["c"].changePassword(n.id,{password:u.password,password_confirmation:u.repeatPassword}).then((function(e){O.a.success({title:"Password berhasil diubah",position:"bottom-right"})})).catch((function(e){O.a.error({title:"Password gagal diubah",message:"Silahkan periksa form sekali lagi",position:"bottom-right"})})).finally((function(){v(),r.value=!1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{formData:s,originalData:c,route:e,validate:d,resetFormData:f,validatePassword:m,saveProfile:w,savePassword:x,roles:t,profileLoading:a,passwordLoading:r}}});R.render=v;t["default"]=R},"818a":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return s}));var r=a("5530"),o=a("c953"),n={add:function(e){return o["a"].post("/admins/create",e)},show:function(e){return o["a"].get("/admins/".concat(e))},update:function(e,t){return o["a"].put("/admins/".concat(e),Object(r["a"])({},t))},changePassword:function(e,t){return o["a"].put("/admins/".concat(e,"/change-password"),Object(r["a"])({},t))},deactivate:function(e){return o["a"].get("/admins/".concat(e,"/deactivate"))},activate:function(e){return o["a"].get("/admins/".concat(e,"/activate"))},assignRegions:function(e,t){return o["a"].post("/admins/".concat(e,"/assign-region"),{region_ids:t})},getAdminRoles:function(e){return o["a"].get("/admins/".concat(e,"/roles"))},assignAdminRoles:function(e,t){return o["a"].put("/admins/".concat(e,"/assign-roles"),{role_ids:t})}},c={index:function(){return o["a"].get("/roles")}},s={show:function(e){return o["a"].get("/users/".concat(e))},update:function(e,t){return o["a"].put("/users/".concat(e),Object(r["a"])({},t))},changePassword:function(e,t){return o["a"].put("/users/".concat(e,"/change-password"),Object(r["a"])({},t))}}}}]);