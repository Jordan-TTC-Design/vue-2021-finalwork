(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7b53bae"],{"33a7":function(t,o,e){},5530:function(t,o,e){"use strict";e.d(o,"a",(function(){return n}));e("b64b"),e("a4d3"),e("4de4"),e("e439"),e("159b"),e("dbb4");function a(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}function c(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,a)}return e}function n(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?c(Object(e),!0).forEach((function(o){a(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}},"67b0":function(t,o,e){"use strict";e("c51c")},"6c8b":function(t,o,e){"use strict";e.r(o);var a=e("7a23"),c={class:"container"},n={class:"d-flex btn-group"},l={key:0,class:"row"},i={class:"listBox row"},s={class:"col-6 d-flex align-items-center"},r={class:"input-group d-flex justify-content-end col-6 w-auto"},d={class:"me-4"},b={key:1,class:"row"},p={class:"listBox row"},m={class:"col-6 d-flex align-items-center"},u={class:"input-group d-flex justify-content-end col-6 w-auto"},j={class:"me-4"};function h(t,o,e,h,O,y){var f=Object(a["y"])("DeleteProductModal"),g=Object(a["y"])("EditProductModal");return Object(a["t"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(f,{ref:"DeleteProductModal","tem-product":O.temProduct,onDeltetProduct:y.deleteProduct},null,8,["tem-product","onDeltetProduct"]),Object(a["h"])(g,{ref:"EditProductModal",onUpdateProduct:y.updateProduct},null,8,["onUpdateProduct"]),Object(a["h"])("div",c,[Object(a["h"])("ul",n,[(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(O.productCategory,(function(t,o){return Object(a["t"])(),Object(a["d"])("li",{key:o},[Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(o){return O.productCategorySelected=t.value}},Object(a["B"])(t.value),9,["onClick"])])})),128))]),"企業"===O.productCategorySelected?(Object(a["t"])(),Object(a["d"])("ul",l,[(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(O.companiesList,(function(e,c){return Object(a["t"])(),Object(a["d"])("li",{class:"col-12",key:e.id},[Object(a["h"])("div",i,[Object(a["h"])("div",s,[Object(a["h"])("img",{class:"listBox__logo",src:e.imageUrl,alt:""},null,8,["src"]),Object(a["h"])("p",null,Object(a["B"])(c+1)+" "+Object(a["B"])(e.title)+Object(a["B"])(e.id),1)]),Object(a["h"])("div",r,[Object(a["h"])("p",d,Object(a["B"])(t.$filters.date(e.options.create)),1),Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-action":"editCompany","data-id":e.id,onClick:o[1]||(o[1]=function(t){return y.editItemModal(t)})}," 編輯 ",8,["data-id"]),Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-action":"deleteItem","data-id":e.id,onClick:function(t){return y.openModal(t,e)}}," 刪除 ",8,["data-id","onClick"])])])])})),128))])):Object(a["e"])("",!0),"職位"===O.productCategorySelected?(Object(a["t"])(),Object(a["d"])("ul",b,[(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(O.jobsList,(function(e,c){return Object(a["t"])(),Object(a["d"])("li",{class:"col-12",key:c},[Object(a["h"])("div",p,[Object(a["h"])("div",m,[Object(a["h"])("img",{class:"listBox__logo",src:e.imageUrl||t.tempImgUrl,alt:""},null,8,["src"]),Object(a["h"])("p",null,Object(a["B"])(c+1)+" "+Object(a["B"])(e.options.company.companyName)+" -",1),Object(a["h"])("p",null,Object(a["B"])(e.title)+Object(a["B"])(e.id),1)]),Object(a["h"])("div",u,[Object(a["h"])("p",j,Object(a["B"])(t.$filters.date(e.options.job.create)),1),Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-action":"editJob","data-id":e.id,onClick:o[2]||(o[2]=function(t){return y.editItemModal(t)})}," 編輯 ",8,["data-id"]),Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-action":"deleteItem","data-id":e.id,onClick:function(t){return y.openModal(t,e)}}," 刪除 ",8,["data-id","onClick"])])])])})),128))])):Object(a["e"])("",!0)])],64)}var O=e("5530"),y=(e("4de4"),e("99af"),e("159b"),e("a4d3"),e("e01a"),e("d81d"),e("b64b"),{ref:"editItemModal",class:"modal fade",tabindex:"-1","aria-labelledby":"editItemModalLabel"}),f={class:"modal-dialog modal-xl"},g={class:"modal-content border-0"},v={key:0,class:"editCompany"},D=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{id:"editCompanyModalLabel",class:"modal-title"},[Object(a["h"])("span",null,"編輯企業")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),k={class:"modal-body"},w={class:"row"},U={class:"col-12"},C={class:"form-group"},P=Object(a["h"])("label",{for:"title"},"公司名稱",-1),x={class:"col-4"},L={class:"form-group"},A=Object(a["h"])("label",{for:"companyContact"},"企業聯絡人",-1),V={class:"col-4"},I={class:"form-group"},T=Object(a["h"])("label",{for:"companyTel"},"聯絡電話",-1),M={class:"col-4"},E={class:"form-group"},B=Object(a["h"])("label",{for:"companyEmail"},"聯絡Email",-1),H={class:"col-4"},N={class:"form-group"},J=Object(a["h"])("label",{for:"contactPosition"},"聯絡人職位",-1),S={class:"col-4"},_={class:"form-group"},$=Object(a["h"])("label",{for:"logoImageUrl"},"公司Logo",-1),q={class:"col-12 mb-3"},R={key:0,class:"row "},F={class:"form-group"},G={for:"imageUrl"},z={class:"col-12"},K={class:"row"},Q={class:"form-group col-md-6"},W=Object(a["h"])("label",{for:"公司行業類別"},"行業類別",-1),X={class:"form-group col-md-6"},Y=Object(a["h"])("label",{for:"unit"},"職位額度",-1),Z={class:"row"},tt={class:"col-6"},ot={class:"form-group"},et=Object(a["h"])("label",{for:"companyAddressCity"},"縣市",-1),at={class:"col-6"},ct={class:"form-group"},nt=Object(a["h"])("label",{for:"companyAddressDetail"},"詳細地址",-1),lt={class:"col-12"},it={class:"form-group"},st=Object(a["h"])("label",{for:"description"},"公司簡介",-1),rt={class:"modal-footer"},dt=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),bt={key:1,class:"editJob"},pt=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{id:"newJobModalLabel",class:"modal-title"},[Object(a["h"])("span",null,"編輯職位")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),mt={class:"modal-body"},ut={class:"row"},jt={class:"col-12"},ht={class:"form-group"},Ot=Object(a["h"])("label",{for:"title"},"職位名稱",-1),yt={class:"col-4"},ft={class:"form-group"},gt=Object(a["h"])("label",{for:"companyContact"},"企業聯絡人",-1),vt={class:"col-4"},Dt={class:"form-group"},kt=Object(a["h"])("label",{for:"companyTel"},"聯絡電話",-1),wt={class:"col-4"},Ut={class:"form-group"},Ct=Object(a["h"])("label",{for:"companyEmail"},"聯絡Email",-1),Pt={class:"col-4"},xt={class:"form-group"},Lt=Object(a["h"])("label",{for:"contactPosition"},"聯絡人職位",-1),At={class:"col-4"},Vt={class:"form-group"},It=Object(a["h"])("label",{for:"companyLogoUrl"},"公司Logo",-1),Tt={class:"col-4"},Mt={class:"form-group"},Et=Object(a["h"])("label",{for:"jobImage"},"職位圖片",-1),Bt={class:"col-6"},Ht=Object(a["h"])("label",{for:"jobSalary",class:"form-label"},"薪資",-1),Nt={class:"d-flex align-items-center"},Jt={class:"flex-grow-1 me-2"},St={class:"form-check"},_t=Object(a["h"])("label",{class:"form-check-label",for:"jobSalaryInterView"}," 面議 ",-1),$t={class:"col-6"},qt=Object(a["h"])("label",{class:"form-label d-block"},"上班時段",-1),Rt={class:"btn-group",role:"group"},Ft={class:"col-6"},Gt=Object(a["h"])("label",{class:"form-label d-block"},"工作性質",-1),zt={class:"btn-group",role:"group"},Kt={class:"col-4"},Qt={class:"form-group"},Wt=Object(a["h"])("label",{for:"needPerson"},"需求人數",-1),Xt={class:"col-12"},Yt={class:"row"},Zt={class:"form-group col-md-6"},to=Object(a["h"])("label",{for:"公司職位類別"},"職位類別",-1),oo={class:"form-group col-6"},eo=Object(a["h"])("label",{class:"form-label d-block",for:"jobLevel"},"是否要升級成為付費推廣職位",-1),ao={class:"form-check form-switch"},co={class:"form-check-label",for:"jobLevel"},no={class:"col-12"},lo={class:"form-group"},io=Object(a["h"])("label",{for:"jobContent"},"職位簡介",-1),so={class:"col-6"},ro=Object(a["h"])("label",{class:"form-label d-block"},"工作經驗",-1),bo={class:"btn-group",role:"group"},po={class:"col-6"},mo=Object(a["h"])("label",{class:"form-label d-block"},"學歷要求",-1),uo={class:"btn-group",role:"group"},jo={class:"col-12"},ho={class:"form-group"},Oo=Object(a["h"])("label",{for:"otherRequirement"},"其他申請條件",-1),yo={class:"row"},fo={class:"col-4"},go={class:"form-group"},vo=Object(a["h"])("label",{for:"companyName"},"公司名稱",-1),Do={class:"col-6"},ko={class:"form-group"},wo=Object(a["h"])("label",{for:"companyAddressCity"},"縣市",-1),Uo={class:"col-6"},Co={class:"form-group"},Po=Object(a["h"])("label",{for:"companyAddressDetail"},"詳細地址",-1),xo={class:"col-12"},Lo={class:"form-group"},Ao=Object(a["h"])("label",{for:"jobApplyOther"},"申請備註",-1),Vo={class:"modal-footer"},Io=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function To(t,o,e,c,n,l){return Object(a["t"])(),Object(a["d"])("div",y,[Object(a["h"])("div",f,[Object(a["h"])("div",g,["editCompany"===n.modalName?(Object(a["t"])(),Object(a["d"])("div",v,[D,Object(a["h"])("div",k,[Object(a["h"])("div",w,[Object(a["h"])("div",U,[Object(a["h"])("div",C,[P,Object(a["L"])(Object(a["h"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入公司名稱","onUpdate:modelValue":o[1]||(o[1]=function(t){return n.companyData.title=t})},null,512),[[a["H"],n.companyData.title]])])]),Object(a["h"])("div",x,[Object(a["h"])("div",L,[A,Object(a["L"])(Object(a["h"])("input",{id:"companyContact",type:"text",class:"form-control",placeholder:"企業聯絡人","onUpdate:modelValue":o[2]||(o[2]=function(t){return n.companyData.options.companyContact=t})},null,512),[[a["H"],n.companyData.options.companyContact]])])]),Object(a["h"])("div",V,[Object(a["h"])("div",I,[T,Object(a["L"])(Object(a["h"])("input",{id:"companyTel",type:"text",class:"form-control",placeholder:"聯絡電話","onUpdate:modelValue":o[3]||(o[3]=function(t){return n.companyData.options.companyTel=t})},null,512),[[a["H"],n.companyData.options.companyTel]])])]),Object(a["h"])("div",M,[Object(a["h"])("div",E,[B,Object(a["L"])(Object(a["h"])("input",{id:"companyEmail",type:"text",class:"form-control",placeholder:"聯絡Email","onUpdate:modelValue":o[4]||(o[4]=function(t){return n.companyData.options.companyEmail=t})},null,512),[[a["H"],n.companyData.options.companyEmail]])])]),Object(a["h"])("div",H,[Object(a["h"])("div",N,[J,Object(a["L"])(Object(a["h"])("input",{id:"contactPosition",type:"text",class:"form-control",placeholder:"聯絡人職位","onUpdate:modelValue":o[5]||(o[5]=function(t){return n.companyData.options.companyContactPosition=t})},null,512),[[a["H"],n.companyData.options.companyContactPosition]])])]),Object(a["h"])("div",S,[Object(a["h"])("div",_,[$,Object(a["L"])(Object(a["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[6]||(o[6]=function(t){return n.companyData.imageUrl=t})},null,512),[[a["H"],n.companyData.imageUrl]])]),Object(a["h"])("img",{class:"img-fluid",alt:"",src:n.companyData.imageUrl},null,8,["src"])]),Object(a["h"])("div",q,[n.companyData.imagesUrl.length>0?(Object(a["t"])(),Object(a["d"])("div",R,[(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.companyData.imagesUrl,(function(t,o){return Object(a["t"])(),Object(a["d"])("div",{key:o,class:"col-4"},[Object(a["h"])("div",F,[Object(a["h"])("label",G,"輸入第 "+Object(a["B"])(o+1)+" 張企業圖片",1),Object(a["L"])(Object(a["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":function(t){return n.companyData.imagesUrl[o]=t}},null,8,["onUpdate:modelValue"]),[[a["H"],n.companyData.imagesUrl[o]]])]),Object(a["h"])("img",{class:"img-fluid",alt:"",src:t},null,8,["src"])])})),128))])):Object(a["e"])("",!0)]),Object(a["h"])("div",z,[Object(a["h"])("div",K,[Object(a["h"])("div",Q,[W,Object(a["L"])(Object(a["h"])("select",{name:"公司行業類別",id:"newCompanyIndustryCategory",class:"form-control form-select","onUpdate:modelValue":o[7]||(o[7]=function(t){return n.companyData.category=t})},[Object(a["h"])("option",{value:n.companyData.category,selected:""},Object(a["B"])(n.companyData.category),9,["value"]),(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.formData.industryCategory,(function(t){return Object(a["t"])(),Object(a["d"])("option",{value:t,key:t},Object(a["B"])(t),9,["value"])})),128))],512),[[a["G"],n.companyData.category]])]),Object(a["h"])("div",X,[Y,Object(a["L"])(Object(a["h"])("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入職位額度","onUpdate:modelValue":o[8]||(o[8]=function(t){return n.companyData.options.companyJobToken=t})},null,512),[[a["H"],n.companyData.options.companyJobToken]])])]),Object(a["h"])("div",Z,[Object(a["h"])("div",tt,[Object(a["h"])("div",ot,[et,Object(a["L"])(Object(a["h"])("select",{name:"公司地址縣市",id:"companyAddressCity",class:"form-control form-select","onUpdate:modelValue":o[9]||(o[9]=function(t){return n.companyData.options.companyAddressCity=t}),ref:"companyAddressCity"},[Object(a["h"])("option",{value:n.companyData.options.companyAddressCity,selected:""},Object(a["B"])(n.companyData.options.companyAddressCity),9,["value"]),(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.formData.city,(function(t){return Object(a["t"])(),Object(a["d"])("option",{value:t,key:t},Object(a["B"])(t),9,["value"])})),128))],512),[[a["G"],n.companyData.options.companyAddressCity]])])]),Object(a["h"])("div",at,[Object(a["h"])("div",ct,[nt,Object(a["L"])(Object(a["h"])("input",{type:"text",id:"companyAddressDetail",class:"form-control",placeholder:"請輸入詳細地址","onUpdate:modelValue":o[10]||(o[10]=function(t){return n.companyData.options.companyAddressDetail=t})},null,512),[[a["H"],n.companyData.options.companyAddressDetail]])])]),Object(a["h"])("div",lt,[Object(a["h"])("div",it,[st,Object(a["L"])(Object(a["h"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入公司簡介","onUpdate:modelValue":o[11]||(o[11]=function(t){return n.companyData.content=t}),cols:"30",rows:"10"},"\n                      ",512),[[a["H"],n.companyData.content]])])])])])])]),Object(a["h"])("div",rt,[dt,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:o[12]||(o[12]=function(){return l.processCompanyData&&l.processCompanyData.apply(l,arguments)})}," 確認 ")])])):Object(a["e"])("",!0),"editJob"===n.modalName?(Object(a["t"])(),Object(a["d"])("div",bt,[pt,Object(a["h"])("div",mt,[Object(a["h"])("div",ut,[Object(a["h"])("div",jt,[Object(a["h"])("div",ht,[Ot,Object(a["L"])(Object(a["h"])("input",{id:"title",type:"text",class:"form-control",placeholder:"職位名稱","onUpdate:modelValue":o[13]||(o[13]=function(t){return n.jobData.title=t})},null,512),[[a["H"],n.jobData.title]])])]),Object(a["h"])("div",yt,[Object(a["h"])("div",ft,[gt,Object(a["L"])(Object(a["h"])("input",{id:"companyContact",type:"text",class:"form-control",placeholder:"企業聯絡人","onUpdate:modelValue":o[14]||(o[14]=function(t){return n.jobData.options.company.companyContact=t})},null,512),[[a["H"],n.jobData.options.company.companyContact]])])]),Object(a["h"])("div",vt,[Object(a["h"])("div",Dt,[kt,Object(a["L"])(Object(a["h"])("input",{id:"companyTel",type:"text",class:"form-control",placeholder:"聯絡電話","onUpdate:modelValue":o[15]||(o[15]=function(t){return n.jobData.options.company.companyTel=t})},null,512),[[a["H"],n.jobData.options.company.companyTel]])])]),Object(a["h"])("div",wt,[Object(a["h"])("div",Ut,[Ct,Object(a["L"])(Object(a["h"])("input",{id:"companyEmail",type:"text",class:"form-control",placeholder:"聯絡Email","onUpdate:modelValue":o[16]||(o[16]=function(t){return n.jobData.options.company.companyEmail=t})},null,512),[[a["H"],n.jobData.options.company.companyEmail]])])]),Object(a["h"])("div",Pt,[Object(a["h"])("div",xt,[Lt,Object(a["L"])(Object(a["h"])("input",{id:"contactPosition",type:"text",class:"form-control",placeholder:"聯絡人職位","onUpdate:modelValue":o[17]||(o[17]=function(t){return n.jobData.options.company.contactPosition=t})},null,512),[[a["H"],n.jobData.options.company.contactPosition]])])]),Object(a["h"])("div",At,[Object(a["h"])("div",Vt,[It,Object(a["L"])(Object(a["h"])("input",{id:"companyLogoUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[18]||(o[18]=function(t){return n.jobData.options.company.companyLogoUrl=t})},null,512),[[a["H"],n.jobData.options.company.companyLogoUrl]])]),Object(a["h"])("img",{class:"img-fluid",alt:"",src:n.jobData.options.company.companyLogoUrl},null,8,["src"])]),Object(a["h"])("div",Tt,[Object(a["h"])("div",Mt,[Et,Object(a["L"])(Object(a["h"])("input",{id:"jobImage",type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[19]||(o[19]=function(t){return n.jobData.imageUrl=t})},null,512),[[a["H"],n.jobData.imageUrl]])]),Object(a["h"])("img",{class:"img-fluid",alt:"",src:n.jobData.imageUrl},null,8,["src"])]),Object(a["h"])("div",Bt,[Ht,Object(a["h"])("div",Nt,[Object(a["h"])("div",Jt,[Object(a["L"])(Object(a["h"])("input",{id:"jobSalary",ref:"jobSalary",name:"薪資",type:"number",placeholder:n.jobData.options.job.salaryInterView?"面議薪資勿低於 40,000 ":"請輸入",class:"form-control",min:"0","onUpdate:modelValue":o[20]||(o[20]=function(t){return n.jobData.price=t}),disabled:n.jobData.options.job.salaryInterView},null,8,["placeholder","disabled"]),[[a["H"],n.jobData.price,void 0,{number:!0}]])]),Object(a["h"])("div",St,[Object(a["L"])(Object(a["h"])("input",{id:"jobSalaryInterView",ref:"jobSalaryInterView",name:"薪資",class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[21]||(o[21]=function(t){return n.jobData.options.job.salaryInterView=t})},null,512),[[a["E"],n.jobData.options.job.salaryInterView]]),_t])])]),Object(a["h"])("div",$t,[qt,Object(a["h"])("div",Rt,[(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.formData.workTime,(function(t,e){return Object(a["t"])(),Object(a["d"])("div",{class:"form-check",key:"workTime"+e},[Object(a["L"])(Object(a["h"])("input",{class:"form-check-input",type:"radio",value:t,id:"workTime"+e,name:"上班時段","onUpdate:modelValue":o[22]||(o[22]=function(t){return n.jobData.options.job.workTime=t})},null,8,["value","id"]),[[a["F"],n.jobData.options.job.workTime]]),Object(a["h"])("label",{class:"form-check-label",for:"workTime"+e},Object(a["B"])(t),9,["for"])])})),128))])]),Object(a["h"])("div",Ft,[Gt,Object(a["h"])("div",zt,[(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.formData.workType,(function(t,e){return Object(a["t"])(),Object(a["d"])("div",{class:"form-check",key:"workType"+e},[Object(a["L"])(Object(a["h"])("input",{class:"form-check-input",type:"radio",value:t,id:"workType"+e,name:"工作性質","onUpdate:modelValue":o[23]||(o[23]=function(t){return n.jobData.options.job.workType=t})},null,8,["value","id"]),[[a["F"],n.jobData.options.job.workType]]),Object(a["h"])("label",{class:"form-check-label",for:"workType"+e},Object(a["B"])(t),9,["for"])])})),128))])]),Object(a["h"])("div",Kt,[Object(a["h"])("div",Qt,[Wt,Object(a["L"])(Object(a["h"])("input",{id:"needPerson",type:"number",class:"form-control",placeholder:"聯絡電話","onUpdate:modelValue":o[24]||(o[24]=function(t){return n.jobData.num=t})},null,512),[[a["H"],n.jobData.num,void 0,{number:!0}]])])]),Object(a["h"])("div",Xt,[Object(a["h"])("div",Yt,[Object(a["h"])("div",Zt,[to,Object(a["L"])(Object(a["h"])("select",{name:"公司職位類別",id:"jobCategory",class:"form-control form-select","onUpdate:modelValue":o[25]||(o[25]=function(t){return n.jobData.category=t})},[Object(a["h"])("option",{value:n.jobData.category,selected:""},Object(a["B"])(n.jobData.category),9,["value"]),(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.formData.jobCategory,(function(t){return Object(a["t"])(),Object(a["d"])("option",{value:t,key:t},Object(a["B"])(t),9,["value"])})),128))],512),[[a["G"],n.jobData.category]])]),Object(a["h"])("div",oo,[eo,Object(a["h"])("div",ao,[Object(a["h"])("input",{type:"checkbox",class:"form-check-input","data-action":"changeProductState","data-id":"${item.id}",checked:n.jobData.options.job.promote>0,onChange:o[26]||(o[26]=function(){return l.changeProductState&&l.changeProductState.apply(l,arguments)}),name:"jobLevel",id:"jobLevel"},null,40,["checked"]),Object(a["h"])("label",co,Object(a["B"])(n.jobData.options.job.promote>0?"付費推廣(時效七天)":"免費職位刊登"),1),Object(a["h"])("p",null,"剩餘職位刊登額度："+Object(a["B"])(n.jobData.options.company.companyJobToken),1)])]),Object(a["h"])("div",no,[Object(a["h"])("div",lo,[io,Object(a["L"])(Object(a["h"])("textarea",{id:"jobContent",type:"text",class:"form-control",placeholder:"請輸入職位簡介","onUpdate:modelValue":o[27]||(o[27]=function(t){return n.jobData.content=t}),cols:"30",rows:"10"},"\n                      ",512),[[a["H"],n.jobData.content]])])]),Object(a["h"])("div",so,[ro,Object(a["h"])("div",bo,[(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.formData.workExp,(function(t,e){return Object(a["t"])(),Object(a["d"])("div",{class:"form-check",key:"workExp"+e},[Object(a["L"])(Object(a["h"])("input",{class:"form-check-input",type:"radio",value:t,id:"workExp"+e,name:"工作經驗","onUpdate:modelValue":o[28]||(o[28]=function(t){return n.jobData.options.job.workExp=t})},null,8,["value","id"]),[[a["F"],n.jobData.options.job.workExp]]),Object(a["h"])("label",{class:"form-check-label",for:"workExp"+e},Object(a["B"])(t),9,["for"])])})),128))])]),Object(a["h"])("div",po,[mo,Object(a["h"])("div",uo,[(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.formData.education,(function(t,e){return Object(a["t"])(),Object(a["d"])("div",{class:"form-check",key:"education"+e},[Object(a["L"])(Object(a["h"])("input",{class:"form-check-input",type:"radio",value:t,id:"education"+e,name:"學歷要求","onUpdate:modelValue":o[29]||(o[29]=function(t){return n.jobData.options.job.education=t})},null,8,["value","id"]),[[a["F"],n.jobData.options.job.education]]),Object(a["h"])("label",{class:"form-check-label",for:"education"+e},Object(a["B"])(t),9,["for"])])})),128))])]),Object(a["h"])("div",jo,[Object(a["h"])("div",ho,[Oo,Object(a["L"])(Object(a["h"])("textarea",{id:"otherRequirement",type:"text",class:"form-control",placeholder:"其他申請條件","onUpdate:modelValue":o[30]||(o[30]=function(t){return n.jobData.options.job.otherRequirement=t}),cols:"30",rows:"10"},"\n                      ",512),[[a["H"],n.jobData.options.job.otherRequirement]])])])]),Object(a["h"])("div",yo,[Object(a["h"])("div",fo,[Object(a["h"])("div",go,[vo,Object(a["L"])(Object(a["h"])("input",{id:"companyName",type:"text",class:"form-control",placeholder:"公司名稱","onUpdate:modelValue":o[31]||(o[31]=function(t){return n.jobData.options.company.companyName=t})},null,512),[[a["H"],n.jobData.options.company.companyName]])])]),Object(a["h"])("div",Do,[Object(a["h"])("div",ko,[wo,Object(a["L"])(Object(a["h"])("select",{name:"公司地址縣市",id:"companyAddressCity",class:"form-control form-select","onUpdate:modelValue":o[32]||(o[32]=function(t){return n.jobData.options.company.companyAddressCity=t}),ref:"companyAddressCity"},[Object(a["h"])("option",{value:n.jobData.options.company.companyAddressCity,selected:""},Object(a["B"])(n.jobData.options.company.companyAddressCity),9,["value"]),(Object(a["t"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(n.formData.city,(function(t){return Object(a["t"])(),Object(a["d"])("option",{value:t,key:t},Object(a["B"])(t),9,["value"])})),128))],512),[[a["G"],n.jobData.options.company.companyAddressCity]])])]),Object(a["h"])("div",Uo,[Object(a["h"])("div",Co,[Po,Object(a["L"])(Object(a["h"])("input",{type:"text",id:"companyAddressDetail",class:"form-control",placeholder:"請輸入詳細地址","onUpdate:modelValue":o[33]||(o[33]=function(t){return n.jobData.options.company.companyAddressDetail=t})},null,512),[[a["H"],n.jobData.options.company.companyAddressDetail]])])]),Object(a["h"])("div",xo,[Object(a["h"])("div",Lo,[Ao,Object(a["L"])(Object(a["h"])("textarea",{id:"jobApplyOther",type:"text",class:"form-control",placeholder:"請輸入申請備註","onUpdate:modelValue":o[34]||(o[34]=function(t){return n.jobData.options.job.jobApplyOther=t}),cols:"30",rows:"10"},"\n                      ",512),[[a["H"],n.jobData.options.job.jobApplyOther]])])])])])])]),Object(a["h"])("div",Vo,[Io,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:o[35]||(o[35]=function(){return l.processJobData&&l.processJobData.apply(l,arguments)})}," 確認 ")])])):Object(a["e"])("",!0)])])],512)}var Mo=e("3835"),Eo=e("e89f"),Bo=e("2aee"),Ho=e("7b17"),No={data:function(){return{editmodal:{},formData:{},temItem:{},companyData:{},jobData:{options:{company:{companyLogoUrl:[]},job:{jobApplyOther:""}}},modalName:""}},methods:{addImageUrl:function(){this.companyData.options.company.companyImagesUrl.push("")},deleteImageUrl:function(){this.companyData.options.company.companyImagesUrl.pop()},processCompanyData:function(){var t=this.companyData,o={data:{title:t.title,id:t.id,category:t.category,origin_price:0,price:0,unit:t.unit,description:t.description,content:t.content,is_enabled:t.is_enabled,imageUrl:t.imageUrl,imagesUrl:t.imagesUrl,options:{companyAddressCity:t.options.companyAddressCity,companyAddressDetail:t.options.companyAddressDetail,companyContact:t.options.companyContact,companyContactPosition:t.options.companyContactPosition,companyTel:t.options.companyTel,companyEmail:t.options.companyEmail,companyJobToken:t.options.companyJobToken,create:Math.floor(Date.now()/1e3)}}};console.log(o),this.$emit("update-product",o),this.closeModal()},changeProductState:function(){this.jobData.options.job.promote>0?(this.jobData.options.job.promote=0,this.jobData.options.company.companyJobToken+=1):(this.jobData.options.job.promote=1,this.jobData.options.company.companyJobToken-=1)},processJobData:function(){var t=this.jobData,o={data:{title:t.title,category:t.category,origin_price:t.origin_price,price:t.price,unit:t.unit,description:t.description,content:t.content,is_enabled:t.is_enabled,imageUrl:t.imageUrl,imagesUrl:[],num:t.num,id:t.id,options:{company:{companyName:t.options.company.companyName,industryCategory:t.options.company.industryCategory,companyLogoUrl:t.options.company.companyLogoUrl,companyImagesUrl:t.options.company.companyImagesUrl,companyAddressCity:t.options.company.companyAddressCity,companyAddressDetail:t.options.company.companyAddressDetail,companyAddress:t.options.company.companyAddressCity+t.options.company.companyAddressDetail,companyContact:t.options.company.companyName,contactPosition:t.options.company.contactPosition,companyTel:t.options.company.companyTel,companyEmail:t.options.company.companyEmail},job:{otherRequirement:t.options.job.otherRequirement,jobApplyOther:t.options.job.jobApplyOther,workExp:t.options.job.workExp,workType:t.options.job.workType,workTime:t.options.job.workTime,education:t.options.job.education,salaryInterView:t.options.job.salaryInterView,promote:t.options.job.promote,create:Math.floor(Date.now()/1e3)}}}};console.log(o),this.$emit("update-product",o),this.closeModal()},cleanData:function(){this.companyData={},this.jobData={options:{company:{companyLogoUrl:[]},job:{jobApplyOther:""}}}},openModal:function(){this.editmodal.show()},closeModal:function(){this.editmodal.hide(),this.cleanData()}},watch:{},created:function(){var t=this;this.formData=Bo["a"],Eo["a"].on("close-edit-company",(function(){t.closeModal()})),Eo["a"].on("open-edit-company",(function(o){t.openModal(),console.log(o);var e=Object(Mo["a"])(o,1);if(t.temItem=e[0],t.modalName=o[1],console.log(t.modalName),"editCompany"===t.modalName){var a=Object(Mo["a"])(t.temItem,1);t.companyData=a[0],console.log(t.companyData,t.modalName)}else if("editJob"===t.modalName){var c=Object(Mo["a"])(t.temItem,1);t.jobData=c[0],console.log(t.jobData,t.modalName)}}))},mounted:function(){this.editmodal=new Ho["a"](this.$refs.editItemModal)}};e("9d80");No.render=To;var Jo=No,So={ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},_o={class:"modal-dialog"},$o={class:"modal-content border-0"},qo=Object(a["h"])("div",{class:"modal-header bg-danger text-white"},[Object(a["h"])("h5",{id:"delProductModalLabel",class:"modal-title"},[Object(a["h"])("span",null,"刪除產品")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ro={class:"modal-body"},Fo=Object(a["g"])(" 是否刪除 "),Go={class:"text-danger"},zo=Object(a["g"])(" 商品(刪除後將無法恢復)。 "),Ko={class:"modal-footer"},Qo=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Wo(t,o,e,c,n,l){return Object(a["t"])(),Object(a["d"])("div",So,[Object(a["h"])("div",_o,[Object(a["h"])("div",$o,[qo,Object(a["h"])("div",Ro,[Fo,Object(a["h"])("strong",Go,Object(a["B"])(e.temProduct.title),1),zo]),Object(a["h"])("div",Ko,[Qo,Object(a["h"])("button",{type:"button",class:"btn btn-danger",onClick:o[1]||(o[1]=function(o){return t.$emit("deltet-product")})}," 確認刪除 ")])])])],512)}var Xo={props:["temProduct"],data:function(){return{modal:"",modalTemProduct:{}}},methods:{openModal:function(){this.modal.show()},closeModal:function(){this.modal.hide()}},temProduct:{deep:!0,handler:function(t){this.modalTemProduct=t}},created:function(){var t=this;Eo["a"].on("close-product-delete",(function(){t.closeModal()})),Eo["a"].on("open-product-delete",(function(){t.openModal()})),console.log(this.temProduct),this.modalTemProduct=this.temProduct},mounted:function(){this.modal=new Ho["a"](this.$refs.delProductModal),console.log(Ho["a"])}};Xo.render=Wo;var Yo=Xo,Zo={components:{EditProductModal:Jo,DeleteProductModal:Yo},data:function(){return{products:[],apiToken:"",pagination:{},jobsList:[],companiesList:[],systemList:[],productCategory:[{value:"企業",action:"企業"},{value:"職位",action:"職位"},{value:"系統",action:"系統"}],productCategorySelected:"企業",editItem:{},editAction:"",temJob:{},modalName:"",nowAction:"",temProduct:{title:"",imageUrl:null,imagesUrl:[],category:"",content:"",description:"",id:"",is_enabled:null,num:null,origin_price:null,price:null,unit:""}}},watch:{productCategorySelected:function(t){console.log(t)}},methods:{editItemModal:function(t){var o=t.target.dataset.id,e=t.target.dataset.action;console.log(e,o),"editCompany"===e?(this.modalName="editCompany",this.editItem=this.companiesList.filter((function(t){return t.id===o})),console.log(this.editItem),Eo["a"].emit("open-edit-company",[this.editItem,this.modalName])):"editJob"===e&&(this.modalName="editJob",this.editItem=this.jobsList.filter((function(t){return t.id===o})),console.log(this.editItem),Eo["a"].emit("open-edit-company",[this.editItem,this.modalName]))},updateProduct:function(t){console.log(t),Eo["a"].emit("spinner-open");var o=t.data.id,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/admin/product/").concat(o);this.$http.put(e,t).then((function(t){console.log(t.data),Eo["a"].emit("spinner-close"),t.data.success})).catch((function(t){console.log(t)}))},classifyProduct:function(){var t=this;this.companiesList=[],this.jobsList=[],this.products.forEach((function(o){"企業"===o.description?t.companiesList.push(o):"職位"===o.description?t.jobsList.push(o):"系統"===o.description&&t.systemList.push(o)})),console.log(this.companiesList)},getProductData:function(){var t=this;Eo["a"].emit("spinner-open");var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/admin/products/all");this.$http.get(o).then((function(o){console.log(o),t.products=Object.keys(o.data.products).map((function(t){return o.data.products[t]})),console.log(t.products),t.pagination=o.data.pagination,t.classifyProduct(),Eo["a"].emit("spinner-close")})).catch((function(t){console.log(t)}))},openModal:function(t,o){console.log(t.target.dataset.action);var e=t.target.dataset.action;"newProduct"===e?(this.nowAction=t.target.dataset.action,this.temProduct={imagesUrl:[]},Eo["a"].emit("open-product-detail")):"editProduct"===e?(this.nowAction=t.target.dataset.action,console.log(o),o.imagesUrl?this.temProduct=Object(O["a"])({},o):this.temProduct=Object(O["a"])(Object(O["a"])({},o),{},{imagesUrl:[]}),Eo["a"].emit("open-product-detail")):"deleteItem"===e&&(this.nowAction=t.target.dataset.action,console.log(o),o.imagesUrl?this.temProduct=Object(O["a"])({},o):this.temProduct=Object(O["a"])(Object(O["a"])({},o),{},{imagesUrl:[]}),Eo["a"].emit("open-product-delete"))},deleteProduct:function(){var t=this;Eo["a"].emit("spinner-open");var o=this.temProduct.id,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/admin/product/").concat(o);this.$http.delete(e).then((function(o){console.log(o),t.getProductData(),Eo["a"].emit("close-product-delete"),Eo["a"].emit("spinner-close")})).catch((function(t){console.log(t)}))},changeProductState:function(t){var o=this,e={};this.products.forEach((function(o){var a=o;a.id===t&&(a.is_enabled>0?a.is_enabled=0:a.is_enabled=1,e.data=a)})),Eo["a"].emit("spinner-open");var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/admin/product/").concat(t);this.$http.put(a,e).then((function(t){console.log(t),o.getProductData(),Eo["a"].emit("spinner-close")})).catch((function(t){console.log(t)}))}},created:function(){this.getProductData()},mounted:function(){}};e("67b0");Zo.render=h;o["default"]=Zo},"9d80":function(t,o,e){"use strict";e("33a7")},b64b:function(t,o,e){var a=e("23e7"),c=e("7b0b"),n=e("df75"),l=e("d039"),i=l((function(){n(1)}));a({target:"Object",stat:!0,forced:i},{keys:function(t){return n(c(t))}})},c51c:function(t,o,e){},d81d:function(t,o,e){"use strict";var a=e("23e7"),c=e("b727").map,n=e("1dde"),l=n("map");a({target:"Array",proto:!0,forced:!l},{map:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,o,e){var a=e("23e7"),c=e("83ab"),n=e("56ef"),l=e("fc6a"),i=e("06cf"),s=e("8418");a({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var o,e,a=l(t),c=i.f,r=n(a),d={},b=0;while(r.length>b)e=c(a,o=r[b++]),void 0!==e&&s(d,o,e);return d}})},e439:function(t,o,e){var a=e("23e7"),c=e("d039"),n=e("fc6a"),l=e("06cf").f,i=e("83ab"),s=c((function(){l(1)})),r=!i||s;a({target:"Object",stat:!0,forced:r,sham:!i},{getOwnPropertyDescriptor:function(t,o){return l(n(t),o)}})}}]);
//# sourceMappingURL=chunk-b7b53bae.0311b2c4.js.map