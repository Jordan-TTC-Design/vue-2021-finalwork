(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fa979b2"],{"1dde":function(e,t,o){var a=o("d039"),r=o("b622"),c=o("2d00"),n=r("species");e.exports=function(e){return c>=51||!a((function(){var t=[],o=t.constructor={};return o[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,o){var a=o("861d"),r=o("e8b5"),c=o("b622"),n=c("species");e.exports=function(e,t){var o;return r(e)&&(o=e.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)?a(o)&&(o=o[n],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===t?0:t)}},8418:function(e,t,o){"use strict";var a=o("c04e"),r=o("9bf2"),c=o("5c6c");e.exports=function(e,t,o){var n=a(t);n in e?r.f(e,n,c(0,o)):e[n]=o}},"99af":function(e,t,o){"use strict";var a=o("23e7"),r=o("d039"),c=o("e8b5"),n=o("861d"),l=o("7b0b"),s=o("50c4"),i=o("8418"),u=o("65f0"),f=o("1dde"),d=o("b622"),m=o("2d00"),b=d("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",v=m>=51||!r((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),h=f("concat"),j=function(e){if(!n(e))return!1;var t=e[b];return void 0!==t?!!t:c(e)},O=!v||!h;a({target:"Array",proto:!0,forced:O},{concat:function(e){var t,o,a,r,c,n=l(this),f=u(n,0),d=0;for(t=-1,a=arguments.length;t<a;t++)if(c=-1===t?n:arguments[t],j(c)){if(r=s(c.length),d+r>p)throw TypeError(g);for(o=0;o<r;o++,d++)o in c&&i(f,d,c[o])}else{if(d>=p)throw TypeError(g);i(f,d++,c)}return f.length=d,f}})},b0c0:function(e,t,o){var a=o("83ab"),r=o("9bf2").f,c=Function.prototype,n=c.toString,l=/^\s*function ([^ (]*)/,s="name";a&&!(s in c)&&r(c,s,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},e8b5:function(e,t,o){var a=o("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},ff2e:function(e,t,o){"use strict";o.r(t);o("b0c0");var a=o("7a23"),r={class:"container"},c={class:"row justify-content-center"},n={class:"col-6"},l=Object(a["g"])("h2",{class:"text-center"},"結帳",-1),s={class:"mb-3"},i=Object(a["g"])("label",{for:"costumerInfoName",class:"form-label"},"姓名",-1),u={class:"mb-3"},f=Object(a["g"])("label",{for:"costumerInfoEmail",class:"form-label"},"Email",-1),d={class:"mb-3"},m=Object(a["g"])("label",{for:"costumerInfoTel",class:"form-label"},"電話",-1),b={class:"mb-3"},p=Object(a["g"])("label",{for:"costumerInfoAddress",class:"form-label"},"地址",-1),g={class:"mb-3"},v=Object(a["g"])("label",{for:"costumerInfoMessage",class:"form-label"},"留言",-1),h={class:"mb-3"},j=Object(a["g"])("label",{for:"costumerInfoCall",class:"form-label"},"call",-1),O=Object(a["g"])("button",{type:"submit",class:"btn btn-primary"},"送出資料",-1);function y(e,t,o,y,x,I){var V=Object(a["x"])("Field"),w=Object(a["x"])("ErrorMessage"),k=Object(a["x"])("Form");return Object(a["s"])(),Object(a["d"])("div",r,[Object(a["g"])("div",c,[Object(a["g"])("div",n,[l,Object(a["g"])(k,{ref:"customerInfoForm",onSubmit:I.checkCart},{default:Object(a["H"])((function(e){var o=e.errors;return[Object(a["g"])("div",s,[i,Object(a["g"])(V,{id:"costumerInfoName",name:"姓名",type:"text",class:["form-control",{"is-invalid":o["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:x.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return x.form.user.name=e}),ref:"costumerInfoName"},null,8,["class","modelValue"]),Object(a["g"])(w,{name:"姓名",class:"invalid-feedback"})]),Object(a["g"])("div",u,[f,Object(a["g"])(V,{id:"costumerInfoEmail",name:"Email",type:"text",class:["form-control",{"is-invalid":o["Email"]}],placeholder:"請輸入Email",rules:"email|required",modelValue:x.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return x.form.user.email=e}),ref:"costumerInfoName"},null,8,["class","modelValue"]),Object(a["g"])(w,{name:"Email",class:"invalid-feedback"})]),Object(a["g"])("div",d,[m,Object(a["g"])(V,{id:"costumerInfoTel",name:"電話",type:"number",class:["form-control",{"is-invalid":o["電話"]}],placeholder:"請輸入電話",rules:"required",modelValue:x.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return x.form.user.tel=e}),ref:"costumerInfoTel"},null,8,["class","modelValue"]),Object(a["g"])(w,{name:"電話",class:"invalid-feedback"})]),Object(a["g"])("div",b,[p,Object(a["g"])(V,{id:"costumerInfoAddress",name:"地址",type:"text",class:["form-control",{"is-invalid":o["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:x.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return x.form.user.address=e}),ref:"costumerInfoAddress"},null,8,["class","modelValue"]),Object(a["g"])(w,{name:"地址",class:"invalid-feedback"})]),Object(a["g"])("div",g,[v,Object(a["g"])(V,{id:"costumerInfoMessage",name:"留言",type:"text",class:["form-control",{"is-invalid":o["留言"]}],placeholder:"請輸入",modelValue:x.form.message,"onUpdate:modelValue":t[5]||(t[5]=function(e){return x.form.message=e}),ref:"costumerInfoMessage",cols:"30",rows:"10"},null,8,["class","modelValue"]),Object(a["g"])(w,{name:"留言",class:"invalid-feedback"})]),Object(a["g"])("div",h,[j,Object(a["g"])(V,{id:"costumerInfoCall",name:"call",type:"text",class:["form-control",{"is-invalid":o["call"]}],placeholder:"請輸入",modelValue:x.form.options.call,"onUpdate:modelValue":t[6]||(t[6]=function(e){return x.form.options.call=e}),ref:"costumerInfoCall"},null,8,["class","modelValue"]),Object(a["g"])(w,{name:"call",class:"invalid-feedback"})]),O]})),_:1},8,["onSubmit"])])])])}o("99af");var x=o("e89f"),I={data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:"",options:{call:""}},apiData:{apiUrl:"https://vue3-course-api.hexschool.io",api:"jordanttcdesign"},cartState:!1}},methods:{checkCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/cart");this.$http.get(t).then((function(t){t.data.data.carts?(e.cartState=!0,e.sendForm()):e.cartState=!1})).catch((function(e){console.log(e)}))},sendForm:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/order");if(!1===this.cartState)console.log("沒東西");else{var o={data:this.form};this.$http.post(t,o).then((function(t){console.log("".concat(t.data.message)),console.log(t),e.$router.push("/")})).catch((function(e){console.log(e)}))}}},created:function(){console.log(this.$refs)},mounted:function(){x["a"].emit("close-cart")}};I.render=y;t["default"]=I}}]);
//# sourceMappingURL=chunk-6fa979b2.ee3a4802.js.map