(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd795"],{"2bc2":function(t,a,e){"use strict";e.r(a);var c=e("7a23"),n={class:"bg-light"},o={class:"container"},l={class:"navbar navbar-expand-lg navbar-light bg-light"},s={class:"container-fluid"},r=Object(c["f"])("Navbar"),i=Object(c["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarNav"},d={class:"navbar-nav position-reative"},u={class:"nav-item"},g=Object(c["f"])("首頁"),j={class:"nav-item"},O=Object(c["f"])("全部產品"),p={class:"nav-item"},f=Object(c["f"])("申請職位"),h={class:"nav-item"},v=Object(c["f"])("新建企業"),m={class:"nav-item"},C=Object(c["f"])("新建職位"),y={class:"position-absolute end-0"},k={class:"main py-4"};function x(t,a,e,x,w,J){var _=Object(c["x"])("Cart"),L=Object(c["x"])("router-link"),S=Object(c["x"])("router-view");return Object(c["s"])(),Object(c["d"])(c["a"],null,[Object(c["g"])(_),Object(c["g"])("header",n,[Object(c["g"])("div",o,[Object(c["g"])("nav",l,[Object(c["g"])("div",s,[Object(c["g"])(L,{class:"navbar-brand",to:"/"},{default:Object(c["J"])((function(){return[r]})),_:1}),i,Object(c["g"])("div",b,[Object(c["g"])("ul",d,[Object(c["g"])("li",u,[Object(c["g"])(L,{class:"nav-link","aria-current":"page",to:"/"},{default:Object(c["J"])((function(){return[g]})),_:1})]),Object(c["g"])("li",j,[Object(c["g"])(L,{class:"nav-link",to:"/products-list"},{default:Object(c["J"])((function(){return[O]})),_:1})]),Object(c["g"])("li",p,[Object(c["g"])(L,{class:"nav-link",to:"/apply-job"},{default:Object(c["J"])((function(){return[f]})),_:1})]),Object(c["g"])("li",h,[Object(c["g"])(L,{class:"nav-link",to:"/add-company"},{default:Object(c["J"])((function(){return[v]})),_:1})]),Object(c["g"])("li",m,[Object(c["g"])(L,{class:"nav-link",to:"/add-job"},{default:Object(c["J"])((function(){return[C]})),_:1})]),Object(c["g"])("li",y,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:a[1]||(a[1]=function(){return J.openCart&&J.openCart.apply(J,arguments)})}," 購物車 ")])])])])])])]),Object(c["g"])("div",k,[Object(c["g"])(S)])],64)}var w={class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"cartModal"},J={class:"modal-dialog modal-lg"},_={class:"modal-content"},L=Object(c["g"])("div",{class:"modal-header"},[Object(c["g"])("h5",{class:"modal-title",id:"exampleModalLabel"},"購物車"),Object(c["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),S={class:"modal-body"},q={class:"cartbox"},$={class:"table table-striped"},M=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",{scope:"col"},"產品名稱"),Object(c["g"])("th",{scope:"col"},"產品數量"),Object(c["g"])("th",{scope:"col"},"產品價格"),Object(c["g"])("th",{scope:"col"},"動作")])],-1),N={class:"d-flex"},T={class:"btn-group",role:"group"},A={key:1},P=Object(c["g"])("td",{colspan:"4"},"目前購物車沒東西～",-1),U={class:"modal-footer"},V=Object(c["f"])(" 結帳 ");function G(t,a,e,n,o,l){var s=Object(c["x"])("router-link");return Object(c["s"])(),Object(c["d"])("div",w,[Object(c["g"])("div",J,[Object(c["g"])("div",_,[L,Object(c["g"])("div",S,[Object(c["g"])("div",q,[Object(c["g"])("table",$,[M,Object(c["g"])("tbody",null,[o.cartList?(Object(c["s"])(!0),Object(c["d"])(c["a"],{key:0},Object(c["w"])(o.cartList,(function(t){return Object(c["s"])(),Object(c["d"])("tr",{key:t.id},[Object(c["g"])("td",null,Object(c["A"])(t.product.title),1),Object(c["g"])("td",N,[Object(c["K"])(Object(c["g"])("input",{type:"number",class:"form-control w-auto me-1","onUpdate:modelValue":function(a){return t.qty=a},min:"1"},null,8,["onUpdate:modelValue"]),[[c["G"],t.qty,void 0,{number:!0}]]),Object(c["g"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(a){return l.updateCart(t)}}," 更新購物車 ",8,["onClick"])]),Object(c["g"])("td",null,Object(c["A"])(t.product.price*t.qty)+" 元",1),Object(c["g"])("td",null,[Object(c["g"])("div",T,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-primary",onClick:function(a){return l.deleteCartProduct(t.id)}}," 移除 ",8,["onClick"])])])])})),128)):(Object(c["s"])(),Object(c["d"])("tr",A,[P]))]),Object(c["g"])("tfoot",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",null,"總共 "+Object(c["A"])(o.cartTotal)+" 元",1)])])])])]),Object(c["g"])("div",U,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-primary",onClick:a[1]||(a[1]=function(){return l.deleteCart&&l.deleteCart.apply(l,arguments)})}," 清空購物車 "),Object(c["g"])(s,{to:"/cart-checkout",type:"button",class:"btn btn-outline-primary",onClick:l.closeCart},{default:Object(c["J"])((function(){return[V]})),_:1},8,["onClick"])])])])],512)}e("99af");var K=e("e89f"),z=e("7b17"),B={data:function(){return{modal:{},cartList:[],cartTotal:null,cartState:!1}},methods:{getCart:function(){var t=this,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/cart");this.$http.get(a).then((function(a){t.cartList=a.data.data.carts,t.cartTotal=a.data.data.final_total})).catch((function(t){console.log(t)}))},deleteCartProduct:function(t){var a=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/cart/").concat(t);this.$http.delete(e).then((function(t){console.log("".concat(t.data.message)),a.getCart()})).catch((function(t){console.log(t)}))},deleteCart:function(){var t=this,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/carts");this.$http.delete(a).then((function(a){console.log("".concat(a.data.message)),t.getCart()})).catch((function(t){console.log(t)}))},updateCart:function(t){var a=this,e={data:{product_id:t.product.id,qty:t.qty}},c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("jordanttcdesign","/cart/").concat(t.id);this.$http.put(c,e).then((function(t){console.log("".concat(t.data.message)),a.getCart()})).catch((function(t){console.log(t)}))},closeCart:function(){this.modal.hide()},openCart:function(){this.modal.show()}},watch:{carts:function(){this.carts.length>0?this.cartState=!0:this.cartState=!1,console.log(this.cartState),K["a"].emit("sendCartState",this.cartState)}},created:function(){var t=this;K["a"].on("get-cart",(function(){t.getCart()})),K["a"].on("close-cart",(function(){t.closeCart()})),K["a"].on("open-cart",(function(){t.openCart()}))},mounted:function(){this.getCart(),this.modal=new z["a"](this.$refs.cartModal)}};B.render=G;var D=B,E={components:{Cart:D},methods:{openCart:function(){K["a"].emit("open-cart")}},created:function(){}};E.render=x;a["default"]=E}}]);
//# sourceMappingURL=chunk-2d0bd795.7bced5b8.js.map