(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2782b0ec"],{2814:function(e,t,o){"use strict";o("4b21")},"296b":function(e,t,o){},"2e20":function(e,t,o){"use strict";var a=o("7a23"),c={class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"imageCropperModal"},n={class:"modal-dialog modal-lg"},r={class:"modal-content"},s={class:"modal-header"},l={class:"modal-title",id:"exampleModalLabel"},i={class:"modal-body"},d={class:"container"},m={class:"row"},p={class:"col-8"},b={class:"cropperImageBox"},u={class:"cropperImage",ref:"cropperImage",src:"",alt:""},f={class:"col-4"},g={class:"compeletedImgBox"},j=Object(a["createVNode"])("p",null,"預覽圖",-1),O={class:"modal-footer"};function V(e,t,o,V,y,N){return Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",s,[Object(a["createVNode"])("h5",l,"編輯照片"+Object(a["toDisplayString"])(y.nowId),1),Object(a["createVNode"])("button",{type:"button",onClick:t[1]||(t[1]=function(){return N.closeModal&&N.closeModal.apply(N,arguments)}),class:"btn-close","aria-label":"Close"})]),Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",d,[Object(a["createVNode"])("div",m,[Object(a["createVNode"])("div",p,[Object(a["createVNode"])("div",b,[Object(a["createVNode"])("img",u,null,512)])]),Object(a["createVNode"])("div",f,[Object(a["createVNode"])("div",g,[j,Object(a["createVNode"])("img",{class:"img-preview",src:y.destination,alt:""},null,8,["src"])])])])])]),Object(a["createVNode"])("div",O,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary",onClick:t[2]||(t[2]=function(){return N.processImage&&N.processImage.apply(N,arguments)})}," 確定 ")])])])],512)}o("a9e3");var y=o("e89f"),N=o("7b17"),h=o("bab4"),I=o.n(h),v={name:"ImageCropper",data:function(){return{modal:{},cropper:{},cropsrc:"",nowId:0,isImg:!1,imgData:{},destination:{}}},methods:{putImage:function(e){var t=this,o=new FileReader;e&&(this.isImg=!0,o.readAsDataURL(e),o.onload=function(e){console.log(e);var a=o.result;t.imgData=t.$refs.cropperImage,t.imgData.src=a,t.cropper=new I.a(t.imgData,{aspectRatio:16/9,viewMode:1,dragMode:"move",zoomable:!1,scalable:!1,crop:function(){var e=t.cropper.getCroppedCanvas({maxWidth:320,maxHeight:180});t.destination=e.toDataURL("image/jpeg")}}),t.openModal()})},processImage:function(){var e=this.cropper.getCroppedCanvas({maxWidth:4096,maxHeight:4096,fillColor:"#fff",imageSmoothingEnabled:!1,imageSmoothingQuality:"high"});this.cropsrc=e.toDataURL("image/jpeg"),this.sendbackImg()},sendbackImg:function(){this.$emit("emit-send-img-data",this.cropsrc,this.nowId-1),this.closeModal()},cleanImg:function(){this.isImg&&(this.cropsrc="",console.log("delete"),this.cropper.destroy(),this.isImg=!1)},closeModal:function(){this.modal.hide(),this.cleanImg()},openModal:function(){this.modal.show()}},watch:{},created:function(){var e=this;y["a"].on("close-imageCropper",(function(){e.closeModal()})),y["a"].on("delete-imageCropper",(function(){e.cleanImg()}))},mounted:function(){var e=this;y["a"].on("open-imageCropper",(function(t){if(e.cropper!=={}&&e.cleanImg(),console.log(t),"upLoadSingleImg"===t[2])e.nowId="";else{var o=Number(t[1]);e.nowId=o+1}setTimeout((function(){e.putImage(t[0])}),1500)})),this.modal=new N["a"](this.$refs.imageCropperModal)}};o("f4eb");v.render=V;t["a"]=v},"4b21":function(e,t,o){},"7f9d":function(e,t,o){"use strict";o.r(t);o("b0c0");var a=o("7a23"),c={class:"container"},n={class:"addProcess mb-6"},r=Object(a["createVNode"])("h2",{class:"pageTitle text-primary text-center mb-4"},"新建企業",-1),s={class:"row  justify-content-center"},l={class:"col-2"},i=Object(a["createStaticVNode"])('<h5 class="addProcessBox__title">1</h5><p class="addProcessBox__txt">填寫公司資料</p><div class="icon--okBox"><div class="icon--okBox__innerBox"><i class="jobIcon bi bi-check-lg"></i></div></div>',3),d={class:"col-2"},m=Object(a["createStaticVNode"])('<h5 class="addProcessBox__title">2</h5><p class="addProcessBox__txt">填寫公司聯絡人</p><div class="icon--okBox"><div class="icon--okBox__innerBox"><i class="jobIcon bi bi-check-lg"></i></div></div>',3),p={class:"col-2"},b=Object(a["createStaticVNode"])('<h5 class="addProcessBox__title">3</h5><p class="addProcessBox__txt">購買服務</p><div class="icon--okBox"><div class="icon--okBox__innerBox"><i class="jobIcon bi bi-check-lg"></i></div></div>',3),u={class:"row justify-content-center"},f={class:"col-8"},g={key:0,class:"newCompanyForm box--shadow"},j=Object(a["createVNode"])("h3",{class:"page__title--sub"},[Object(a["createVNode"])("span",{class:"title__icon"}),Object(a["createTextVNode"])("公司基本資料")],-1),O=Object(a["createVNode"])("p",{class:"mb-4"},"於 Fine Job 創建公司需嚴格審核，請填寫正確企業資訊：",-1),V={class:"row"},y={class:"col-4"},N={class:"form__inputBox"},h=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoCompanyLogo",class:"form__label--custom form-label"},"公司logo"),Object(a["createVNode"])("p",{class:"formTag--must"},"必填")],-1),I={class:"cropImgBox"},v={key:0,class:"cropImgBox__cover"},_={key:1,class:"subTxt"},x={class:"d-flex justify-content-between"},k={class:"col-8"},C={class:"form__inputBox"},B=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoCompanyName",class:"form__label--custom form-label"},"公司名稱"),Object(a["createVNode"])("p",{class:"formTag--must"},"必填")],-1),S={class:"form__inputBox"},F=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoIndustryCategory",class:"form__label--custom form-label"},"公司行業類別"),Object(a["createVNode"])("p",{class:"formTag--must"},"必填")],-1),w=Object(a["createVNode"])("option",{value:"",disabled:"",selected:""},"請選擇您公司的行業類別",-1),L={class:"form__inputBox"},D=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoCompanyAddressCity",class:"form__label--custom form-label"},"公司地址"),Object(a["createVNode"])("p",{class:"formTag--must"},"必填")],-1),T={class:""},U=Object(a["createVNode"])("option",{value:"",disabled:"",selected:""},"請選擇縣市",-1),M={class:"col-12"},P={class:"form__inputBox form__infoEditBox  border-bottom border-gray-line pb-4"},A=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoCompanyInfo",class:"form__label--custom form-label"},"公司簡介"),Object(a["createVNode"])("p",{class:"formTag--must"},"必填")],-1),q={class:"col-12"},E=Object(a["createVNode"])("h3",{class:"page__title--sub"},[Object(a["createVNode"])("span",{class:"title__icon"}),Object(a["createTextVNode"])("公司環境形象照片")],-1),J=Object(a["createVNode"])("p",{class:"mb-4"}," 嚴選三張符合公司形象或是公司辦公環境照片，幫助求職者能更加了解貴公司： ",-1),$={class:"row"},R={class:"form__inputBox"},z={class:"form__labelBox"},H={for:"imageUrl",class:"form__label--custom form-label"},Q={key:0,class:"formTag--must"},W={class:"cropImgBox"},Z=Object(a["createVNode"])("div",{class:"iconBox__innerBox"},[Object(a["createVNode"])("i",{class:"jobIcon bi bi-x-lg"})],-1),G={key:1,class:"cropImgBox__cover"},K={key:2,class:"subTxt"},X={class:"d-flex justify-content-between"},Y={class:"col-12"},ee={class:"formStepBtnBox d-flex justify-content-end"},te=Object(a["createVNode"])("button",{type:"submit",class:"btn btn-primary"}," 下一步 ",-1),oe={key:1,class:"newCompanyForm box--shadow"},ae=Object(a["createVNode"])("h3",{class:"page__title--sub"},[Object(a["createVNode"])("span",{class:"title__icon"}),Object(a["createTextVNode"])("聯絡人基本資料")],-1),ce=Object(a["createVNode"])("p",{class:"mb-4"},"請填寫企業聯絡人的正確資訊，以便 Fine Jobs 與您聯繫：",-1),ne={class:"row"},re={class:"col-6"},se={class:"form__inputBox"},le=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoName",class:"form__label--custom form-label"},"聯絡人姓名"),Object(a["createVNode"])("p",{class:"formTag--must"},"必填")],-1),ie={class:"col-6"},de={class:"form__inputBox"},me=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoContactPosition",class:"form__label--custom form-label"},"聯絡人職稱")],-1),pe={class:"col-6"},be={class:"form__inputBox"},ue=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoTel",class:"form__label--custom form-label"},"聯絡人電話"),Object(a["createVNode"])("p",{class:"formTag--must"},"必填")],-1),fe={class:"col-6"},ge={class:"form__inputBox"},je=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoEmail",class:"form__label--custom form-label"},"聯絡人Email"),Object(a["createVNode"])("p",{class:"formTag--must"},"必填")],-1),Oe={class:"col-6"},Ve={class:"form__inputBox"},ye=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoPassword",class:"form__label--custom form-label"},"登入密碼"),Object(a["createVNode"])("p",{class:"formTag--must"},"必填")],-1),Ne={class:"col-12"},he={class:"formStepBtnBox d-flex justify-content-between"},Ie=Object(a["createVNode"])("button",{type:"submit",class:"btn btn-primary"}," 下一步 ",-1),ve={key:2,class:"newCompanyForm box--shadow"},_e=Object(a["createVNode"])("h3",{class:"page__title--sub"},[Object(a["createVNode"])("span",{class:"title__icon"}),Object(a["createTextVNode"])("職位推廣")],-1),xe=Object(a["createVNode"])("p",{class:"mb-4"}," 目前Fine Job 試營運中，職位可免費刊登。 如您欲加速招募流程，建議您可以購買下面職位推廣額度，可以讓您的職位升級，大大增加曝光機會！ ",-1),ke={class:"row"},Ce={class:"col-6"},Be={class:"form__inputBox"},Se=Object(a["createVNode"])("div",{class:"form__labelBox"},[Object(a["createVNode"])("label",{for:"sendFormInfoAddJobsToken",class:"form__label--custom form-label"},"預先購買職位刊登額度"),Object(a["createVNode"])("p",{class:"formTag--must"},"必填")],-1),Fe={class:"input-group w-50 mb-4"},we=Object(a["createVNode"])("p",{class:"subTxt mb-1"}," 單價：500 NTD ",-1),Le=Object(a["createVNode"])("p",{class:"subTxt mb-1"}," 使用時效：7 天 ",-1),De=Object(a["createVNode"])("p",{class:"subTxt mb-1"}," 推廣方式：會出現在首頁、優質職位頁面最上方區塊，同時享有職位皇冠標示， 讓求職者知道貴司求才若渴。 ",-1),Te={class:"col-12"},Ue={class:"formStepBtnBox d-flex justify-content-between"},Me=Object(a["createVNode"])("button",{type:"submit",class:"btn btn-primary"}," 完成填寫 ",-1),Pe={key:3,class:"newCompanyForm box--shadow"},Ae={class:"row justify-content-center"},qe={class:"col-8"},Ee=Object(a["createVNode"])("h3",{class:"page__title--sub justify-content-center "},"申請創建公司帳戶成功",-1),Je=Object(a["createVNode"])("p",{class:"mb-4 text-center"}," 恭喜您已完成填寫創建公司帳戶流程， 本公司會於3個工作天內審核資料，如審核完畢會寄 email 給您！ 預祝貴公司招募順利～ ",-1),$e=Object(a["createVNode"])("p",{class:"mb-4 text-center"},"如有任何問題歡迎您寄信聯絡我們，很高興能為您服務～",-1),Re=Object(a["createVNode"])("p",{class:"mb-6 text-center text-primary text-decoration-underline"}," Jordan.ttc.design@gmail.com ",-1),ze={class:"d-flex justify-content-center"},He=Object(a["createTextVNode"])("回首頁");function Qe(e,t,o,Qe,We,Ze){var Ge=Object(a["resolveComponent"])("Field"),Ke=Object(a["resolveComponent"])("ErrorMessage"),Xe=Object(a["resolveComponent"])("ckeditor"),Ye=Object(a["resolveComponent"])("Form"),et=Object(a["resolveComponent"])("router-link"),tt=Object(a["resolveComponent"])("ImageCropper");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",c,[Object(a["createVNode"])("div",n,[r,Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",{class:["addProcessBox py-2",{completed:We.formStep>1}],ref:"addProcessBox--1"},[i],2)]),Object(a["createVNode"])("div",d,[Object(a["createVNode"])("div",{class:["addProcessBox py-2",{completed:We.formStep>2,unActive:We.formStep<2}],ref:"addProcessBox--2"},[m],2)]),Object(a["createVNode"])("div",p,[Object(a["createVNode"])("div",{class:["addProcessBox py-2",{completed:We.formStep>3,unActive:We.formStep<3}],ref:"addProcessBox--3"},[b],2)])])]),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("div",f,[1===We.formStep?(Object(a["openBlock"])(),Object(a["createBlock"])("div",g,[Object(a["createVNode"])(Ye,{ref:"sendFormInfoForm1",onSubmit:t[14]||(t[14]=function(e){return Ze.changeStep("next")})},{default:Object(a["withCtx"])((function(e){var o=e.errors;return[j,O,Object(a["createVNode"])("div",V,[Object(a["createVNode"])("div",y,[Object(a["createVNode"])("div",N,[h,Object(a["createVNode"])("input",{id:"sendFormInfoCompanyLogo",ref:"sendFormInfoCompanyLogo",name:"公司logo",type:"file",class:["form-control d-none",{"is-invalid":o["公司logo"]}],rules:"required","data-input":"upLoadSingleImg",onChange:t[1]||(t[1]=function(e){return Ze.loadingImg(e)}),accept:"image/*"},null,34),Object(a["createVNode"])("div",I,[We.companyLogo.src?(Object(a["openBlock"])(),Object(a["createBlock"])("div",v)):Object(a["createCommentVNode"])("",!0),""==We.companyLogo.src?(Object(a["openBlock"])(),Object(a["createBlock"])("p",_,"(上限 5 mb )")):Object(a["createCommentVNode"])("",!0),""!==We.companyLogo.src?(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:2,class:"cropImg h-100",ref:"cropImgCompanyLogo",src:We.companyLogo.src,alt:""},null,8,["src"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",x,[Object(a["createVNode"])("button",{type:"button",class:["btn",{"btn-gray-light":""!==We.companyLogo.src,"btn-outline-primary":""==We.companyLogo.src}],onClick:t[2]||(t[2]=function(e){return Ze.clickInput(e)}),"data-input":"upLoadSingleImg"},Object(a["toDisplayString"])(""!=We.companyLogo.src?"重選":"選擇圖片"),3),Object(a["createVNode"])("button",{type:"button",class:["btn",{"btn-gray-light":!!We.companyLogo.isUpDated||""==We.companyLogo.src,"btn-outline-primary":""!==We.companyLogo.src}],onClick:t[3]||(t[3]=function(e){return Ze.updateImg(e)}),"data-input":"upLoadSingleImg",disabled:!!We.companyLogo.isUpDated||""==We.companyLogo.src},Object(a["toDisplayString"])(We.companyLogo.isUpDated?"已上傳":"上傳"),11,["disabled"])]),Object(a["createVNode"])(Ge,{id:"sendFormInfoCompanyLogoCheck",ref:"sendFormInfoCompanyLogoCheck",name:"公司Logo",type:"text",class:["form-control d-none",{"is-invalid":o["公司Logo"]}],modelValue:We.form.user.options.company.companyLogoUrl,"onUpdate:modelValue":t[4]||(t[4]=function(e){return We.form.user.options.company.companyLogoUrl=e}),rules:"required"},null,8,["class","modelValue"]),Object(a["createVNode"])(Ke,{name:"公司Logo",class:"invalid-feedback"})])]),Object(a["createVNode"])("div",k,[Object(a["createVNode"])("div",C,[B,Object(a["createVNode"])(Ge,{id:"sendFormInfoCompanyName",name:"公司名稱",type:"text",class:["form-control",{"is-invalid":o["公司名稱"]}],placeholder:"請輸入公司名稱",rules:"required",modelValue:We.form.user.options.company.companyName,"onUpdate:modelValue":t[5]||(t[5]=function(e){return We.form.user.options.company.companyName=e}),ref:"sendFormInfoCompanyName"},null,8,["class","modelValue"]),Object(a["createVNode"])(Ke,{name:"公司名稱",class:"invalid-feedback"})]),Object(a["createVNode"])("div",S,[F,Object(a["createVNode"])(Ge,{name:"公司行業類別",as:"select",id:"sendFormInfoIndustryCategory",class:["form-control form-select",{"is-invalid":o["公司行業類別"]}],rules:"required",modelValue:We.form.user.options.company.industryCategory,"onUpdate:modelValue":t[6]||(t[6]=function(e){return We.form.user.options.company.industryCategory=e}),ref:"sendFormInfoIndustryCategory"},{default:Object(a["withCtx"])((function(){return[w,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(We.formData.jobCategory,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("option",{value:e,key:e},Object(a["toDisplayString"])(e),9,["value"])})),128))]})),_:2},1032,["class","modelValue"]),Object(a["createVNode"])(Ke,{name:"公司行業類別",class:"invalid-feedback"})]),Object(a["createVNode"])("div",L,[D,Object(a["createVNode"])("div",T,[Object(a["createVNode"])(Ge,{id:"sendFormInfoCompanyAddressCity",ref:"sendFormInfoCompanyAddressCity",name:"公司地址縣市",as:"select",class:["form-control form-select w-auto mb-2",{"is-invalid":o["公司地址縣市"]}],rules:"required",modelValue:We.form.user.options.company.companyAddressCity,"onUpdate:modelValue":t[7]||(t[7]=function(e){return We.form.user.options.company.companyAddressCity=e})},{default:Object(a["withCtx"])((function(){return[U,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(We.formData.city,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("option",{value:e,key:e},Object(a["toDisplayString"])(e),9,["value"])})),128))]})),_:2},1032,["class","modelValue"]),Object(a["createVNode"])(Ke,{name:"公司地址縣市",class:"invalid-feedback"}),Object(a["createVNode"])(Ge,{id:"sendFormInfoCompanyAddressDetail",ref:"sendFormInfoCompanyAddressDetail",name:"公司詳細地址",type:"text",class:["form-control ",{"is-invalid":o["公司詳細地址"]}],placeholder:"請輸入公司詳細地址",rules:"required",modelValue:We.form.user.options.company.companyAddressDetail,"onUpdate:modelValue":t[8]||(t[8]=function(e){return We.form.user.options.company.companyAddressDetail=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(Ke,{name:"公司詳細地址",class:"invalid-feedback"})])])]),Object(a["createVNode"])("div",M,[Object(a["createVNode"])("div",P,[A,Object(a["createVNode"])(Xe,{id:"sendFormInfoCompanyInfo",ref:"sendFormInfoCompanyInfo",name:"公司簡介",editor:We.editor,"tag-name":"textarea",modelValue:We.form.user.options.company.companyInfo,"onUpdate:modelValue":t[9]||(t[9]=function(e){return We.form.user.options.company.companyInfo=e}),config:We.editorConfig},null,8,["editor","modelValue","config"]),Object(a["createVNode"])(Ge,{name:"公司簡介",type:"text",class:["form-control d-none",{"is-invalid":o["公司簡介"]}],placeholder:"請輸入",modelValue:We.form.user.options.company.companyInfo,"onUpdate:modelValue":t[10]||(t[10]=function(e){return We.form.user.options.company.companyInfo=e}),as:"textarea",rules:"required"},null,8,["class","modelValue"]),Object(a["createVNode"])(Ke,{name:"公司簡介",class:"invalid-feedback"})])]),Object(a["createVNode"])("div",q,[E,J,Object(a["createVNode"])("div",$,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(We.temImageInputs,(function(e,c){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-4",key:"sendFormInfoImgs"+c},[Object(a["createVNode"])("div",R,[Object(a["createVNode"])("div",z,[Object(a["createVNode"])("label",H,"第 "+Object(a["toDisplayString"])(c+1)+" 張企業圖片",1),0===c?(Object(a["openBlock"])(),Object(a["createBlock"])("p",Q,"必填")):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("input",{id:"sendFormInfoImgs"+c,name:"企業圖片",type:"file",class:["form-control d-none",{"is-invalid":o["企業圖片".concat(c)]}],placeholder:"請選擇照片上傳",ref:"sendFormInfoImgs"+c,"data-id":c,"data-input":"upLoadMutiImg",onChange:t[11]||(t[11]=function(e){return Ze.loadingImg(e)}),accept:"image/*"},null,42,["id","data-id"]),Object(a["createVNode"])("div",W,[We.temImages[c]?(Object(a["openBlock"])(),Object(a["createBlock"])("button",{key:0,type:"button",class:"iconBox btn",onClick:function(e){return Ze.deleteImgInput(c)}},[Z],8,["onClick"])):Object(a["createCommentVNode"])("",!0),We.temImages[c]?(Object(a["openBlock"])(),Object(a["createBlock"])("div",G)):Object(a["createCommentVNode"])("",!0),0==We.temImages[c]?(Object(a["openBlock"])(),Object(a["createBlock"])("p",K,"(上限 5 mb )")):Object(a["createCommentVNode"])("",!0),We.temImages[c]?(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:3,class:"cropImg",ref:"cropImg"+c,src:We.temImages[c],alt:""},null,8,["src"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("div",X,[Object(a["createVNode"])("button",{type:"button","data-id":c,class:["btn",{"btn-gray-light":We.temImages[c],"btn-outline-primary":!We.temImages[c]}],onClick:function(e){return Ze.clickInput(e,c)},"data-input":"upLoadMutiImg"},Object(a["toDisplayString"])(We.temImages[c]?"重選":"選擇圖片"),11,["data-id","onClick"]),Object(a["createVNode"])("button",{type:"button",class:["btn",{"btn-gray-light":!!We.temImageInputs[c].isUpDated||0==We.temImages[c],"btn-outline-primary":We.temImages[c]}],onClick:t[12]||(t[12]=function(e){return Ze.updateImg(e)}),"data-input":"upLoadMutiImg","data-id":c,disabled:!!We.temImageInputs[c].isUpDated||0==We.temImages[c]},Object(a["toDisplayString"])(We.temImageInputs[c].isUpDated?"已上傳":"上傳"),11,["data-id","disabled"])])])])})),128))])]),Object(a["createVNode"])("div",Y,[Object(a["createVNode"])("div",ee,[Object(a["withDirectives"])(Object(a["createVNode"])("button",{type:"button",class:"btn btn-gray-light",onClick:t[13]||(t[13]=function(e){return Ze.changeStep("back")})}," 上一步 ",512),[[a["vShow"],We.formStep>1]]),te])])])]})),_:1},512)])):Object(a["createCommentVNode"])("",!0),2===We.formStep?(Object(a["openBlock"])(),Object(a["createBlock"])("div",oe,[Object(a["createVNode"])(Ye,{ref:"sendFormInfoForm2",onSubmit:t[21]||(t[21]=function(e){return Ze.changeStep("next")})},{default:Object(a["withCtx"])((function(e){var o=e.errors;return[ae,ce,Object(a["createVNode"])("div",ne,[Object(a["createVNode"])("div",re,[Object(a["createVNode"])("div",se,[le,Object(a["createVNode"])(Ge,{id:"sendFormInfoName",ref:"sendFormInfoName",name:"聯絡人姓名",type:"text",class:["form-control",{"is-invalid":o["聯絡人姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:We.form.user.name,"onUpdate:modelValue":t[15]||(t[15]=function(e){return We.form.user.name=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(Ke,{name:"聯絡人姓名",class:"invalid-feedback"})])]),Object(a["createVNode"])("div",ie,[Object(a["createVNode"])("div",de,[me,Object(a["withDirectives"])(Object(a["createVNode"])("input",{id:"sendFormInfoContactPosition",ref:"sendFormInfoContactPosition",name:"聯絡人職稱",type:"text",class:"form-control",placeholder:"請輸入聯絡人職稱","onUpdate:modelValue":t[16]||(t[16]=function(e){return We.form.user.options.company.contactPosition=e})},null,512),[[a["vModelText"],We.form.user.options.company.contactPosition]])])]),Object(a["createVNode"])("div",pe,[Object(a["createVNode"])("div",be,[ue,Object(a["createVNode"])(Ge,{id:"sendFormInfoTel",ref:"sendFormInfoTel",name:"聯絡人電話",type:"tel",class:["form-control",{"is-invalid":o["聯絡人電話"]}],placeholder:"請輸入電話",rules:"required",modelValue:We.form.user.tel,"onUpdate:modelValue":t[17]||(t[17]=function(e){return We.form.user.tel=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(Ke,{name:"聯絡人電話",class:"invalid-feedback"})])]),Object(a["createVNode"])("div",fe,[Object(a["createVNode"])("div",ge,[je,Object(a["createVNode"])(Ge,{id:"sendFormInfoEmail",ref:"sendFormInfoEmail",name:"聯絡人Email",type:"text",class:["form-control",{"is-invalid":o["聯絡人Email"]}],placeholder:"請輸入Email",rules:"email|required",modelValue:We.form.user.email,"onUpdate:modelValue":t[18]||(t[18]=function(e){return We.form.user.email=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(Ke,{name:"聯絡人Email",class:"invalid-feedback"})])]),Object(a["createVNode"])("div",Oe,[Object(a["createVNode"])("div",Ve,[ye,Object(a["createVNode"])(Ge,{id:"sendFormInfoPassword",ref:"sendFormInfoPassword",name:"登入密碼",type:"password",class:["form-control",{"is-invalid":o["登入密碼"]}],placeholder:"請輸入登入密碼",rules:"required",minlength:"4",maxlength:"8",size:"8",modelValue:We.form.user.options.login.password,"onUpdate:modelValue":t[19]||(t[19]=function(e){return We.form.user.options.login.password=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(Ke,{name:"登入密碼",class:"invalid-feedback"})])]),Object(a["createVNode"])("div",Ne,[Object(a["createVNode"])("div",he,[Object(a["withDirectives"])(Object(a["createVNode"])("button",{type:"button",class:"btn btn-gray-light",onClick:t[20]||(t[20]=function(e){return Ze.changeStep("back")})}," 上一步 ",512),[[a["vShow"],We.formStep>1]]),Ie])])])]})),_:1},512)])):Object(a["createCommentVNode"])("",!0),3===We.formStep?(Object(a["openBlock"])(),Object(a["createBlock"])("div",ve,[Object(a["createVNode"])(Ye,{ref:"sendFormInfoForm3",onSubmit:Ze.processFormData},{default:Object(a["withCtx"])((function(e){var o=e.errors;return[_e,xe,Object(a["createVNode"])("div",ke,[Object(a["createVNode"])("div",Ce,[Object(a["createVNode"])("div",Be,[Se,Object(a["createVNode"])("div",Fe,[Object(a["createVNode"])("button",{class:"btn btn-gray-light border border-gray-line",type:"button",id:"button-addon2",onClick:t[22]||(t[22]=function(){return Ze.deleteNum&&Ze.deleteNum.apply(Ze,arguments)})}," - "),Object(a["createVNode"])(Ge,{id:"sendFormInfoAddJobsToken",name:"職位刊登額度",type:"number",class:["form-control border-gray-line text-center",{"is-invalid":o["職位刊登額度"]}],min:"1",modelValue:We.form.user.options.jobToken,"onUpdate:modelValue":t[23]||(t[23]=function(e){return We.form.user.options.jobToken=e}),modelModifiers:{number:!0},ref:"sendFormInfoAddJobsToken",rules:"required"},null,8,["class","modelValue"]),Object(a["createVNode"])("button",{class:"btn btn-gray-light border border-gray-line",type:"button",id:"button-addon2",onClick:t[24]||(t[24]=function(){return Ze.addNum&&Ze.addNum.apply(Ze,arguments)})}," + ")]),Object(a["createVNode"])(Ke,{name:"職位刊登額度",class:"invalid-feedback"}),we,Le,De])]),Object(a["createVNode"])("div",Te,[Object(a["createVNode"])("div",Ue,[Object(a["withDirectives"])(Object(a["createVNode"])("button",{type:"button",class:"btn btn-gray-light",onClick:t[25]||(t[25]=function(e){return Ze.changeStep("back")})}," 上一步 ",512),[[a["vShow"],We.formStep>1]]),Me])])])]})),_:1},8,["onSubmit"])])):Object(a["createCommentVNode"])("",!0),4===We.formStep?(Object(a["openBlock"])(),Object(a["createBlock"])("div",Pe,[Object(a["createVNode"])(Ye,{ref:"sendFormInfoForm4"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("div",Ae,[Object(a["createVNode"])("div",qe,[Ee,Je,$e,Re,Object(a["createVNode"])("div",ze,[Object(a["createVNode"])(et,{class:"btn btn-primary w-50",to:"/"},{default:Object(a["withCtx"])((function(){return[He]})),_:1})])])])]})),_:1},512)])):Object(a["createCommentVNode"])("",!0)])])]),Object(a["createVNode"])(tt,{onEmitSendImgData:Ze.getImg},null,8,["onEmitSendImgData"])],64)}o("ac1f"),o("5319"),o("9911"),o("99af");var We=o("e89f"),Ze=o("2aee"),Ge=o("2e20"),Ke=o("fb3d"),Xe=o.n(Ke),Ye={components:{ImageCropper:Ge["a"]},data:function(){return{form:{user:{name:"",email:"",tel:"",address:"",options:{formAction:"add-company",company:{companyName:"",industryCategory:"",companyAddressCity:"",companyAddressDetail:"",companyInfo:"",contactPosition:"",companyImagesUrl:[""],companyLogoUrl:""},jobToken:1,login:{password:""}},message:""}},formData:{},temImages:["","",""],temImageInputs:[{src:"",isUpDated:!1},{src:"",isUpDated:!1},{src:"",isUpDated:!1}],companyLogo:{src:"",isUpDated:!1},cartList:[],cartTotal:null,uploadImgState:"",formState:!0,formStep:1,editor:Xe.a,editorConfig:{toolbar:["heading","|","bold","italic","link"],language:"zh",placeholder:"請輸入...",heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"}]}},tempArticle:{tag:[""]},cropper:{}}},methods:{loadingImg:function(e){console.log(this.uploadImgState);var t=0;t="upLoadMutiImg"===this.uploadImgState?e.target.dataset.id:"",We["a"].emit("open-imageCropper",[e.target.files[0],t,this.uploadImgState])},getImg:function(e,t){console.log(e,t),"upLoadMutiImg"===this.uploadImgState?(console.log(e,t),this.temImageInputs[t].src=e,this.temImages[t]=e,console.log(this.temImageInputs[t])):"upLoadSingleImg"===this.uploadImgState&&(this.companyLogo.src=e)},clickInput:function(e,t){if(console.log(e.target.dataset.input),"upLoadMutiImg"===e.target.dataset.input){this.temImageInputs[t].isUpDated=!1;var o="sendFormInfoImgs".concat(t);this.$refs[o].click(),this.uploadImgState="upLoadMutiImg"}else"upLoadSingleImg"===e.target.dataset.input&&(this.companyLogo.src="",this.$refs.sendFormInfoCompanyLogo.click(),this.uploadImgState="upLoadSingleImg")},updateImg:function(e){var t=this;We["a"].emit("spinner-open");var o=e.target.dataset.id;this.uploadImgState=e.target.dataset.input;var a=null;"upLoadMutiImg"===this.uploadImgState?a=this.temImageInputs[o].src:"upLoadSingleImg"===this.uploadImgState&&(a=this.companyLogo.src);var c=a.replace("data:image/jpeg;base64,","");this.$http({method:"POST",url:"https://api.imgur.com/3/image",data:{image:c,type:"base64"},headers:{Authorization:"Client-ID ef6e862acf052df"}}).then((function(e){console.log("imagur:",e.data,o),console.log(t.uploadImgState),"upLoadMutiImg"===t.uploadImgState?(t.temImageInputs[o].isUpDated=!0,t.form.user.options.company.companyImagesUrl[o]=e.data.data.link,console.log(t.form.user.options.company.companyImagesUrl[o])):"upLoadSingleImg"===t.uploadImgState&&(t.companyLogo.isUpDated=!0,t.form.user.options.company.companyLogoUrl=e.data.data.link,console.log(t.form.user.options.company.companyLogoUrl)),We["a"].emit("spinner-close")})).catch((function(e){console.log(e)}))},processFormData:function(){We["a"].emit("delete-imageCropper");var e=this.form.user.options.company.companyAddressCity,t=this.form.user.options.company.companyAddressDetail;this.form.user.address=e+t,!1===this.companyLogo.isUpDated&&(this.this.formState=!1),!1===this.formState?(console.log("沒東西"),this.deleteCart()):this.addCart(this.form.user.options.jobToken)},addCart:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o="-MctDx8Qj8Tmw9eJoZqN",a={data:{product_id:o,qty:t}},c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/cart");this.$http.post(c,a).then((function(t){console.log("".concat(t.data.message,":").concat(o)),e.sendForm()})).catch((function(e){console.log(e)}))},sendForm:function(){var e=this;We["a"].emit("spinner-open");var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/order"),o={data:this.form};this.$http.post(t,o).then((function(t){console.log("".concat(t.data.message)),console.log(t),We["a"].emit("spinner-close"),t.data.success&&e.changeStep("next")})).catch((function(e){console.log(e),We["a"].emit("spinner-close")}))},changeStep:function(e){"back"===e&&this.formStep>0?this.formStep-=1:"next"===e&&(this.formStep+=1),document.documentElement.scrollTop=0,console.log(this.formStep)},deleteNum:function(){this.form.user.options.jobToken>1&&(this.form.user.options.jobToken-=1)},addNum:function(){this.form.user.options.jobToken+=1},deleteImgInput:function(e){this.temImages[e]="",this.temImageInputs[e].src="",this.temImageInputs[e].isUpDated=!1,this.form.user.options.company.companyImagesUrl[e]=""},getCart:function(){var e=this;We["a"].emit("spinner-open");var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/cart");this.$http.get(t).then((function(t){console.log(t),e.cartList=t.data.data.carts,We["a"].emit("spinner-close")})).catch((function(e){console.log(e)}))},deleteCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/carts");this.$http.delete(t).then((function(t){console.log("".concat(t.data.message)),e.getCart()})).catch((function(e){console.log(e)}))}},created:function(){this.deleteCart(),this.formData=Ze["a"]},mounted:function(){We["a"].emit("close-imageCropper")}};o("2814");Ye.render=Qe;t["default"]=Ye},f4eb:function(e,t,o){"use strict";o("296b")}}]);
//# sourceMappingURL=chunk-2782b0ec.90eaf797.js.map