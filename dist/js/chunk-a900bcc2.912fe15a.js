(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a900bcc2"],{"1dde":function(e,t,o){var n=o("d039"),a=o("b622"),r=o("2d00"),c=a("species");e.exports=function(e){return r>=51||!n((function(){var t=[],o=t.constructor={};return o[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"54fc":function(e,t,o){"use strict";o.r(t);o("b0c0"),o("a434");var n=o("7a23"),a={class:"container"},r={class:"row justify-content-center"},c={class:"col-6"},l=Object(n["g"])("h2",{class:"text-center"},"申請職位",-1),s={class:"mb-3"},i=Object(n["g"])("label",{for:"costumerInfoName",class:"form-label"},"姓名",-1),u={class:"mb-3"},f=Object(n["g"])("label",{for:"costumerInfoEmail",class:"form-label"},"Email",-1),m={class:"mb-3"},d=Object(n["g"])("label",{for:"costumerInfoTel",class:"form-label"},"電話",-1),b={class:"mb-3"},g=Object(n["g"])("label",{for:"costumerInfoAddress",class:"form-label"},"地址",-1),p={class:"mb-3"},h=Object(n["g"])("label",{for:"costumerInfoMessage",class:"form-label"},"留言",-1),v={class:"mb-3"},j=Object(n["g"])("label",{for:"costumerInfoCall",class:"form-label"},"call",-1),O={class:"mb-3"},I=Object(n["g"])("label",{for:"costumerInfoPersonalImg",class:"form-label"},"求職照片",-1),y={class:"input-group"},k={class:"imageBtnBox"},x={key:0},V={class:"form-group"},w={for:"imageUrl"},U={class:"input-group"},C={class:"mb-3"},A=Object(n["g"])("label",{for:"costumerInfoCV",class:"form-label"},"履歷連結",-1),F=Object(n["g"])("button",{type:"submit",class:"btn btn-primary"},"送出資料",-1);function S(e,t,o,S,E,T){var M=Object(n["x"])("Field"),P=Object(n["x"])("ErrorMessage"),q=Object(n["x"])("Form");return Object(n["s"])(),Object(n["d"])("div",a,[Object(n["g"])("div",r,[Object(n["g"])("div",c,[l,Object(n["g"])(q,{ref:"customerInfoForm",onSubmit:T.checkCart},{default:Object(n["H"])((function(e){var o=e.errors;return[Object(n["g"])("div",s,[i,Object(n["g"])(M,{id:"costumerInfoName",name:"姓名",type:"text",class:["form-control",{"is-invalid":o["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:E.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return E.form.user.name=e}),ref:"costumerInfoName"},null,8,["class","modelValue"]),Object(n["g"])(P,{name:"姓名",class:"invalid-feedback"})]),Object(n["g"])("div",u,[f,Object(n["g"])(M,{id:"costumerInfoEmail",name:"Email",type:"text",class:["form-control",{"is-invalid":o["Email"]}],placeholder:"請輸入Email",rules:"email|required",modelValue:E.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return E.form.user.email=e}),ref:"costumerInfoName"},null,8,["class","modelValue"]),Object(n["g"])(P,{name:"Email",class:"invalid-feedback"})]),Object(n["g"])("div",m,[d,Object(n["g"])(M,{id:"costumerInfoTel",name:"電話",type:"number",class:["form-control",{"is-invalid":o["電話"]}],placeholder:"請輸入電話",rules:"required",modelValue:E.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return E.form.user.tel=e}),ref:"costumerInfoTel"},null,8,["class","modelValue"]),Object(n["g"])(P,{name:"電話",class:"invalid-feedback"})]),Object(n["g"])("div",b,[g,Object(n["g"])(M,{id:"costumerInfoAddress",name:"地址",type:"text",class:["form-control",{"is-invalid":o["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:E.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return E.form.user.address=e}),ref:"costumerInfoAddress"},null,8,["class","modelValue"]),Object(n["g"])(P,{name:"地址",class:"invalid-feedback"})]),Object(n["g"])("div",p,[h,Object(n["g"])(M,{id:"costumerInfoMessage",name:"留言",type:"text",class:["form-control",{"is-invalid":o["留言"]}],placeholder:"請輸入",modelValue:E.form.message,"onUpdate:modelValue":t[5]||(t[5]=function(e){return E.form.message=e}),ref:"costumerInfoMessage",cols:"30",rows:"10"},null,8,["class","modelValue"]),Object(n["g"])(P,{name:"留言",class:"invalid-feedback"})]),Object(n["g"])("div",v,[j,Object(n["g"])(M,{id:"costumerInfoCall",name:"call",type:"text",class:["form-control",{"is-invalid":o["call"]}],placeholder:"請輸入",modelValue:E.form.options.call,"onUpdate:modelValue":t[6]||(t[6]=function(e){return E.form.options.call=e}),ref:"costumerInfoCall"},null,8,["class","modelValue"]),Object(n["g"])(P,{name:"call",class:"invalid-feedback"})]),Object(n["g"])("div",O,[I,Object(n["g"])("div",y,[Object(n["g"])("input",{id:"costumerInfoPersonalImg",name:"求職照片",type:"file",class:["form-control",{"is-invalid":o["求職照片"]}],placeholder:"請選擇照片上傳",ref:"costumerInfoPersonalImg"},null,2),Object(n["g"])("button",{type:"button",class:"btn btn-primary",onClick:t[7]||(t[7]=function(e){return T.checkFile(e)})}," 上傳照片 ")])]),Object(n["g"])("div",k,[Object(n["g"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100 my-2",onClick:t[8]||(t[8]=function(e){return T.addImageUrl()})}," 新增圖片 ")]),E.form.options.imagesUrl.length>0?(Object(n["s"])(),Object(n["d"])("div",x,[(Object(n["s"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(E.form.options.imagesUrl,(function(e,a){return Object(n["s"])(),Object(n["d"])("div",{key:"costumerInfoImgs"+a},[Object(n["g"])("div",V,[Object(n["g"])("label",w,"請選擇第 "+Object(n["A"])(a+1)+" 張圖片檔案",1),Object(n["g"])("div",U,[Object(n["g"])("input",{id:"costumerInfoImgs"+a,name:"求職照片",type:"file",class:["form-control",{"is-invalid":o["求職照片".concat(a)]}],placeholder:"請選擇照片上傳",ref:"costumerInfoImgs"+a},null,10,["id"]),Object(n["g"])("button",{type:"button",class:"btn btn-outline-primary",onClick:t[9]||(t[9]=function(e){return T.checkFile(e)}),"data-id":a,"data-action":"uploadImgs"}," 上傳照片 ",8,["data-id"]),Object(n["g"])("button",{type:"button",class:"btn btn-outline-primary",onClick:function(e){return E.form.options.imagesUrl.splice(a,1)}}," 刪除圖片 ",8,["onClick"])])]),Object(n["g"])("p",null,"連結："+Object(n["A"])(e),1),Object(n["g"])("img",{class:"img-fluid",alt:"",src:e},null,8,["src"])])})),128))])):Object(n["e"])("",!0),Object(n["g"])("div",C,[A,Object(n["g"])(M,{id:"costumerInfoCV",name:"履歷連結",type:"text",class:["form-control",{"is-invalid":o["履歷連結"]}],placeholder:"請輸入履歷連結",modelValue:E.form.options.cvLink,"onUpdate:modelValue":t[10]||(t[10]=function(e){return E.form.options.cvLink=e}),ref:"costumerInfoCV"},null,8,["class","modelValue"]),Object(n["g"])(P,{name:"履歷連結",class:"invalid-feedback"})]),F]})),_:1},8,["onSubmit"])])])])}o("9911"),o("99af");var E=o("e89f"),T={data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:"",options:{pageAction:"apply-job",nowjobTitle:"待業",personalImg:null,imagesUrl:[]}},token:"",cartState:!1,isLogin:!1}},methods:{checkFile:function(e){var t=e.target.dataset.action,o=e.target.dataset.id;console.log(t);var n=this.$refs.costumerInfoPersonalImg.files[0],a=new FormData;a.append("PersonalImg",n),this.uploadFile(a,t,o)},uploadFile:function(e,t,o){var n=this;this.$http({method:"POST",url:"https://api.imgur.com/3/image",data:e,headers:{Authorization:"Client-ID ef6e862acf052df"},mimeType:"multipart/form-data"}).then((function(e){console.log(e.data),"uploadImgs"!==t?n.options.personalImg=e.data.data.link:n.options.imagesUrl[o]=e.data.data.link})).catch((function(e){console.log(e)}))},checkCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/cart");this.$http.get(t).then((function(t){t.data.data.carts?(e.cartState=!0,e.sendForm()):e.cartState=!1})).catch((function(e){console.log(e)}))},sendForm:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/order");if(!1===this.cartState)console.log("沒東西");else{var o={data:this.form};this.$http.post(t,o).then((function(t){console.log("".concat(t.data.message)),console.log(t),e.$router.push("/")})).catch((function(e){console.log(e)}))}},addImageUrl:function(){this.form.options.imagesUrl.push("")},deleteImageUrl:function(){this.form.options.imagesUrl.pop()}},created:function(){},mounted:function(){E["a"].emit("close-cart")}};T.render=S;t["default"]=T},"65f0":function(e,t,o){var n=o("861d"),a=o("e8b5"),r=o("b622"),c=r("species");e.exports=function(e,t){var o;return a(e)&&(o=e.constructor,"function"!=typeof o||o!==Array&&!a(o.prototype)?n(o)&&(o=o[c],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===t?0:t)}},8418:function(e,t,o){"use strict";var n=o("c04e"),a=o("9bf2"),r=o("5c6c");e.exports=function(e,t,o){var c=n(t);c in e?a.f(e,c,r(0,o)):e[c]=o}},"857a":function(e,t,o){var n=o("1d80"),a=/"/g;e.exports=function(e,t,o,r){var c=String(n(e)),l="<"+t;return""!==o&&(l+=" "+o+'="'+String(r).replace(a,"&quot;")+'"'),l+">"+c+"</"+t+">"}},9911:function(e,t,o){"use strict";var n=o("23e7"),a=o("857a"),r=o("af03");n({target:"String",proto:!0,forced:r("link")},{link:function(e){return a(this,"a","href",e)}})},"99af":function(e,t,o){"use strict";var n=o("23e7"),a=o("d039"),r=o("e8b5"),c=o("861d"),l=o("7b0b"),s=o("50c4"),i=o("8418"),u=o("65f0"),f=o("1dde"),m=o("b622"),d=o("2d00"),b=m("isConcatSpreadable"),g=9007199254740991,p="Maximum allowed index exceeded",h=d>=51||!a((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),v=f("concat"),j=function(e){if(!c(e))return!1;var t=e[b];return void 0!==t?!!t:r(e)},O=!h||!v;n({target:"Array",proto:!0,forced:O},{concat:function(e){var t,o,n,a,r,c=l(this),f=u(c,0),m=0;for(t=-1,n=arguments.length;t<n;t++)if(r=-1===t?c:arguments[t],j(r)){if(a=s(r.length),m+a>g)throw TypeError(p);for(o=0;o<a;o++,m++)o in r&&i(f,m,r[o])}else{if(m>=g)throw TypeError(p);i(f,m++,r)}return f.length=m,f}})},a434:function(e,t,o){"use strict";var n=o("23e7"),a=o("23cb"),r=o("a691"),c=o("50c4"),l=o("7b0b"),s=o("65f0"),i=o("8418"),u=o("1dde"),f=u("splice"),m=Math.max,d=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var o,n,u,f,p,h,v=l(this),j=c(v.length),O=a(e,j),I=arguments.length;if(0===I?o=n=0:1===I?(o=0,n=j-O):(o=I-2,n=d(m(r(t),0),j-O)),j+o-n>b)throw TypeError(g);for(u=s(v,n),f=0;f<n;f++)p=O+f,p in v&&i(u,f,v[p]);if(u.length=n,o<n){for(f=O;f<j-n;f++)p=f+n,h=f+o,p in v?v[h]=v[p]:delete v[h];for(f=j;f>j-n+o;f--)delete v[f-1]}else if(o>n)for(f=j-n;f>O;f--)p=f+n-1,h=f+o-1,p in v?v[h]=v[p]:delete v[h];for(f=0;f<o;f++)v[f+O]=arguments[f+2];return v.length=j-n+o,u}})},af03:function(e,t,o){var n=o("d039");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b0c0:function(e,t,o){var n=o("83ab"),a=o("9bf2").f,r=Function.prototype,c=r.toString,l=/^\s*function ([^ (]*)/,s="name";n&&!(s in r)&&a(r,s,{configurable:!0,get:function(){try{return c.call(this).match(l)[1]}catch(e){return""}}})},e8b5:function(e,t,o){var n=o("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-a900bcc2.912fe15a.js.map