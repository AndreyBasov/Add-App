(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{28:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),r=n.n(l),c=n(20),u=n(11),i=n(22),m=n.n(i),s=function(){return o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(m.a,null),"Ads"))},d=function(){var e=(new Date).getFullYear();return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",null,"Andrey Basov \u24d2 ",e))},p=n(24),E=n.n(p),b=function(e){return o.a.createElement("div",{className:"note"},o.a.createElement("h1",null,e.title),o.a.createElement("p",null,e.content),o.a.createElement("p",null,o.a.createElement("b",null,"Phone:")," ",e.phone),o.a.createElement("p",null,o.a.createElement("b",null,"City:")," ",e.city),o.a.createElement("button",{className:"delete-button",onClick:function(t){e.onDelete(e.id),t.stopPropagation()}},o.a.createElement(E.a,null)))},h=[{title:"Selling Mobile Phones",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",phone:"+7-(993)-311-89-26",city:"Kazan"},{title:"Cheap Music",content:"Lorem ipsum dolor sit amet,  invidunt ut labore et dolore magna. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",phone:"+7-(993)-311-89-26",city:"Saint Petersburg"},{title:"McDonald\u2019s Meal",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",phone:"+7-(993)-311-89-26",city:"Nizhny Novgorod"},{title:"A new online shop",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",phone:"+7-(993)-311-89-26",city:"Moscow"}],g=n(12),f=n(19),v=n.n(f),y=n(51),j=n(52),k=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],r=n[1],c=function(){return r(!1)},i=Object(a.useState)({title:"",content:"",phone:"",city:""}),m=Object(u.a)(i,2),s=m[0],d=m[1],p=function(e){var t=e.target,n=t.name,a=t.value;d((function(e){return Object(g.a)(Object(g.a)({},e),{},{[n]:a})}))};return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){d({title:"",content:"",url:"",color:"#000"}),r(!0)},class:"btn btn-danger"},o.a.createElement(v.a,null)),o.a.createElement(y.a,{centered:!0,show:l,onHide:c},o.a.createElement(y.a.Body,null,o.a.createElement("p",{className:"form-title"},"Please, fill out the form"),o.a.createElement("form",{className:"create-note",onSubmit:function(t){e.onAdd(s),c(),t.preventDefault()}},o.a.createElement("input",{type:"text",name:"title",onChange:p,value:s.title,placeholder:"Title",autoComplete:"off",required:!0}),o.a.createElement("hr",null),o.a.createElement("textarea",{name:"content",onChange:p,value:s.content,placeholder:"Content",rows:"3"}),o.a.createElement("hr",null),o.a.createElement("input",{name:"phone",onChange:p,value:s.phone,placeholder:"Phone",autoComplete:"off",required:!0}),o.a.createElement("hr",null),o.a.createElement("p",null,"City: "),o.a.createElement(j.a.Control,{onChange:function(e){var t=e.target.value;d((function(e){return Object(g.a)(Object(g.a)({},e),{},{city:t})}))},as:"select"},o.a.createElement("option",null),o.a.createElement("option",null,"Moscow"),o.a.createElement("option",null,"Saint Petersburg"),o.a.createElement("option",null,"Kazan"),o.a.createElement("option",null,"Nizhny Novgorod")),o.a.createElement("button",{class:"add-button",type:"submit"},o.a.createElement(v.a,null))))))},C=function(){var e=Object(a.useState)(Object(c.a)(h)),t=Object(u.a)(e,2),n=t[0],l=t[1],r=function(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))};return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(k,{onAdd:function(e){e.title=e.title.slice(0,140),e.content=e.content.slice(0,300),l((function(t){return[e].concat(Object(c.a)(t))}))}}),o.a.createElement("div",{className:"banner-container"},n.map((function(e,t){return o.a.createElement(b,{key:t,id:t,title:e.title,content:e.content,phone:e.phone,city:e.city,onDelete:r})}))),o.a.createElement(d,null))};r.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.93199fc2.chunk.js.map