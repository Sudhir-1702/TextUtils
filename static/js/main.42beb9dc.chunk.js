(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(13),r=a.n(n),o=(a(21),a(9)),l=(a(22),a(0));function i(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:"About us"}),Object(l.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(l.jsx)("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(l.jsx)("strong",{children:"Analyze Your text "})})}),Object(l.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"})})]}),Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(l.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(l.jsx)("strong",{children:"Free to use "})})}),Object(l.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."})})]}),Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(l.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(l.jsx)("strong",{children:"Browser Compatible "})})}),Object(l.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."})})]})]})]})}function d(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:s,style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},onChange:function(e){n(e.target.value)},id:"myBox",rows:"8"})}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toUpperCase();n(t),e.showAlert(" Converted to Uppercase!","success")},children:"Convert to UpperCase"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toLowerCase();n(t),e.showAlert(" Converted to Lowercase!","success")},children:"Convert to LowerCase"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){n(""),e.showAlert(" Text is cleared","success")},children:"Clear Text"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert(" Copied to clipboard!","success")},children:"Copy Text"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.split(/[ ]+/);n(t.join(" ")),e.showAlert(" Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h2",{children:"Your Text Summary"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:s.split(" ").filter((function(e){return 0!==e.length})).length})," words, ",Object(l.jsx)("b",{children:s.length})," characters"]}),Object(l.jsxs)("p",{children:[.008*s.split(" ").filter((function(e){return 0!==e.length})).length," Minutes read "]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:s.length>0?s:"Enter Something in the textbox to Preview here"})]})]})}var h=function(e){return Object(l.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})})},j=a(14),m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),r=Object(o.a)(n,2),u=r[0],x=r[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(d,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",p(" Dark mode hads been enabled","success"),document.title="Textutils - Dark mode"):(s("light"),document.body.style.backgroundColor="white",p(" Light mode hads been enabled","success"),document.title="Textutils - Light mode")}}),Object(l.jsx)(h,{alert:u}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{exact:!0,path:"/about",children:Object(l.jsx)(i,{mode:a})}),Object(l.jsx)(m.a,{exact:!0,path:"/",children:Object(l.jsx)(b,{showAlert:p,heading:"Enter the text to analyze",mode:a})})]})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),x()}},[[32,1,2]]]);
//# sourceMappingURL=main.42beb9dc.chunk.js.map