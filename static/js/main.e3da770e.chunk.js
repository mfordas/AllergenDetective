(this.webpackJsonpproductdetective=this.webpackJsonpproductdetective||[]).push([[0],{127:function(e,t,a){e.exports=a(233)},233:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(123),o=a.n(c),u=a(40),d=a(3),l=(a(126),a(30),a(32)),i=a.n(l),s=a(51),m=a(41),p=a(72),f=a(52),E=a(125),v=a.n(E),g=function(e){var t=e.grade,a=e.color,r=e.productGrade;return n.a.createElement("div",{className:"nutriscoreGrade",style:Object(f.a)({backgroundColor:"".concat(a)},function(){if(t.toLowerCase()===r){return{transform:"scale(2)",flexGrow:4}}}())},t)},b=function(e){var t=e.barcode,a=Object(r.useState)({data:{status:0}}),c=Object(m.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://world.openfoodfacts.org/api/v0/product/".concat(t,".json"));case 2:a=e.sent,console.log(a),u(Object(f.a)({},a));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),n.a.createElement("div",null,n.a.createElement("div",null,1===o.data.status?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,o.data.product.product_name),n.a.createElement("div",{className:"nutriscoreBar"},n.a.createElement(g,{grade:"A",color:"green",productGrade:"".concat(o.data.product.nutriscore_grade)}),n.a.createElement(g,{grade:"B",color:"lightgreen",productGrade:"".concat(o.data.product.nutriscore_grade)}),n.a.createElement(g,{grade:"C",color:"yellow",productGrade:"".concat(o.data.product.nutriscore_grade)}),n.a.createElement(g,{grade:"D",color:"orange",productGrade:"".concat(o.data.product.nutriscore_grade)}),n.a.createElement(g,{grade:"E",color:"red",productGrade:"".concat(o.data.product.nutriscore_grade)}))):n.a.createElement(n.a.Fragment,null)))},h=new p.BrowserBarcodeReader,j=function(){var e=Object(r.useState)("5900242001610"),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)([]),u=Object(m.a)(o,2),d=u[0];u[1];return Object(r.useEffect)((function(){}),[d]),Object(r.useEffect)((function(){h.decodeOnceFromVideoDevice(void 0,"video").then((function(e){c(e.text)})).catch((function(e){return console.error(e)}))})),n.a.createElement("div",{className:"mainWindow"},n.a.createElement("video",{id:"video",width:"300",height:"200"}),a,n.a.createElement(b,{barcode:a}))},O=function(){return n.a.createElement(j,null)},w=function(){return n.a.createElement("div",{className:"AppContainer"},n.a.createElement(u.a,null,n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/productscanner",component:O}),n.a.createElement(d.b,{path:"/",component:O}),n.a.createElement(d.b,{render:function(){return n.a.createElement(d.a,{to:"/"})}}))),n.a.createElement("div",{className:"footer"},"Footer"))};var G=function(){return n.a.createElement(w,null)};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root"))},30:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.e3da770e.chunk.js.map