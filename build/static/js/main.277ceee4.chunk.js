(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},65:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=65},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(12),r=n.n(o),s=(n(38),n(21)),i=n(3),l=n(16),d=n(15),p=n(19),j=(n(39),n(40),n(32)),u=n.n(j),b=n(18),f=n.n(b),g=n(2);var h=function(e){var t=Object(i.f)(),a=Object(c.useState)(null),o=Object(d.a)(a,2),r=o[0],s=o[1],j=Object(c.useState)(!1),b=Object(d.a)(j,2),h=b[0],O=b[1],m=Object(c.useState)(!1),x=Object(d.a)(m,2),v=x[0],y=x[1],w=Object(c.useState)(!1),N=Object(d.a)(w,2),k=N[0],D=N[1],S=Object(c.useState)(!1),T=Object(d.a)(S,2),C=T[0],P=T[1];return console.log(r),Object(g.jsxs)("div",{className:"upload-container",children:[Object(g.jsx)("h1",{children:"JPG to PDF Converter"}),h?Object(g.jsx)("div",{className:"progress-bar"}):Object(g.jsx)(g.Fragment,{}),Object(g.jsx)("div",{className:"col-md-6",children:h?Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(p.a,{onDragEnd:function(e){if(e.destination){var t=Array.from(r),n=t.splice(e.source.index,1),c=Object(d.a)(n,1)[0];t.splice(e.destination.index,0,c),s(t)}},children:Object(g.jsx)(p.c,{droppableId:"droppable",direction:"horizontal",children:function(e,t){return Object(g.jsxs)("div",Object(l.a)(Object(l.a)({ref:e.innerRef,style:(c=t.isDraggingOver,{background:c?"lightblue":"lightgrey",height:"350px",display:"flex",padding:8,overflow:"auto"})},e.droppableProps),{},{className:"list",children:[Array.from(r).map((function(e,t){return Object(g.jsx)(p.b,{draggableId:e.name,index:t,children:function(t,c){return Object(g.jsxs)("div",Object(l.a)(Object(l.a)(Object(l.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:(c.isDragging,a=t.draggableProps.style,Object(l.a)({width:"250px",height:"250x",userSelect:"none",padding:16,margin:"20px ".concat(8,"px 20px ").concat(8,"px")},a)),children:[C?Object(g.jsx)("img",{src:n(65)("./".concat(e.name)).default,alt:"",width:"200px",height:"150px"}):Object(g.jsx)(u.a,{}),Object(g.jsx)("p",{className:"p",children:e.name})]}));var a}},e.name)})),e.placeholder]}));var c}})})}),v?Object(g.jsx)("button",{onClick:function(){f.a.get("https://pdf-converter-js.herokuapp.com/download",{responseType:"arraybuffer"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data],{type:"application/pdf"})),n=document.createElement("a");n.href=t,n.setAttribute("download","output.pdf"),document.body.appendChild(n),n.click()})),O(!1)},className:"btn merge-btn",children:"Download"}):Object(g.jsx)("button",{onClick:function(){var e=new FormData;console.log(r);for(var t=0;t<r.length;t++)e.append("files",r[t]);f.a.post("https://pdf-converter-js.herokuapp.com/merge",e).then((function(e){500===e.status&&alert("png/jpg/jpeg files only, please upload the correct files"),console.log(e.statusText),console.log(e)})),D(!0),setTimeout((function(){y(!0)}),4e3)},className:"btn merge-btn",disabled:k||!C,children:k?"Merging...":"Merge"})]}):Object(g.jsx)("form",{id:"#",action:"/merge",method:"post",encType:"multipart/form-data",children:Object(g.jsx)("div",{className:"files",children:Object(g.jsx)("input",{type:"file",id:"file-input",name:"files",className:"form-control",multiple:!0,onChange:function(e){var n=new FormData;console.log(e.target.files);for(var c=0;c<e.target.files.length;c++)n.append("files",e.target.files[c]);f.a.post("https://pdf-converter-js.herokuapp.com/merge",n).then((function(e){500===e.status&&alert("png/jpg/jpeg files only, please upload the correct files"),console.log(e.statusText),console.log(e)})).catch((function(e){200!==e.response.status&&(t.push("/"),alert("png/jpg/jpeg files only, please upload the correct files"))})),console.log(e.target.files[0].name),s(e.target.files),O(!0),setTimeout((function(){P(!0)}),4e3)}})})})})]})};n(70);var O=function(){return Object(g.jsx)(s.a,{children:Object(g.jsx)(i.c,{children:Object(g.jsx)(i.a,{exact:!0,path:"/",component:h})})})};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.277ceee4.chunk.js.map