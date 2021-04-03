(this["webpackJsonpit-logger-redux"]=this["webpackJsonpit-logger-redux"]||[]).push([[0],{32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(11),s=a.n(n),r=a(3),l=a(8),i=a(20),o=a(21),d=a(13),u=a(2),j="GET_LOGS",h="ADD_LOG",b="DELETE_LOG",O="SET_CURRENT",p="CLEAR_CURRENT",m="UPDATE_LOG",f="SET_LOADING",x="LOGS_ERROR",g="SEARCH_LOGS",v="GET_TECHS",y="ADD_TECH",N="DELETE_TECH",w="TECHS_ERROR",T={logs:null,current:null,loading:!1,error:null},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{logs:t.payload,loading:!1});case h:return Object(u.a)(Object(u.a)({},e),{},{logs:[].concat(Object(d.a)(e.logs),[t.payload]),loading:!1});case b:return Object(u.a)(Object(u.a)({},e),{},{logs:e.logs.filter((function(e){return e.id!==t.payload})),loading:!1});case O:return Object(u.a)(Object(u.a)({},e),{},{current:t.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{current:null});case m:return Object(u.a)(Object(u.a)({},e),{},{logs:e.logs.map((function(e){return e.id===t.payload.id?t.payload:e})),loading:!1});case g:return Object(u.a)(Object(u.a)({},e),{},{logs:t.payload,loading:!1});case f:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case x:return console.log(t.payload),Object(u.a)(Object(u.a)({},e),{},{error:t.payload,loading:!1});default:return e}},E={techs:null,loading:!1,error:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(u.a)(Object(u.a)({},e),{},{techs:t.payload,loading:!1});case y:return Object(u.a)(Object(u.a)({},e),{},{techs:[].concat(Object(d.a)(e.techs),[t.payload]),loading:!1});case N:return Object(u.a)(Object(u.a)({},e),{},{techs:e.techs.filter((function(e){return e.id!==t.payload})),loading:!1});case f:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case w:return console.error(t.payload),Object(u.a)(Object(u.a)({},e),{},{error:t.payload,loading:!1});default:return Object(u.a)({},e)}},C=Object(l.combineReducers)({logs:L,techs:k}),S=[o.a],R=Object(l.createStore)(C,{},Object(i.composeWithDevTools)(l.applyMiddleware.apply(void 0,S))),D=(a(31),a(5)),_=a.n(D),A=(a(32),a(4)),G=a.n(A),F=a(7),P=function(){return{type:f}},q=(a(34),a(0)),M=Object(r.b)(null,{searchLogs:function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a){var c,n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,P(),t.next=4,fetch("/logs?q=".concat(e));case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:g,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:x,payload:t.t0});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchLogs,a=Object(c.useRef)("");return Object(q.jsx)("nav",{className:"navbar blue",children:Object(q.jsx)("div",{className:"nav-wrapper",children:Object(q.jsx)("form",{children:Object(q.jsxs)("div",{className:"input-field",children:[Object(q.jsx)("input",{id:"search",type:"search",placeholder:"Search Logs..",ref:a,onChange:function(e){t(a.current.value)}}),Object(q.jsx)("label",{className:"label-icon",htmlFor:"search",children:Object(q.jsx)("i",{className:"material-icons",children:"search"})}),Object(q.jsx)("i",{className:"material-icons",children:"close"})]})})})})})),H=a.p+"static/media/loading.b78c4790.gif",J=(a(36),function(){return Object(q.jsx)("img",{src:H,className:"loading horizontal-middle-align",alt:"Loading.."})}),I=a(9),U=a.n(I),Y=a(22),z=a.n(Y),B=function(e){var t=e.log,a=e.deleteLog,c=e.setCurrent;return Object(q.jsx)("li",{className:"collection-item",children:Object(q.jsxs)("div",{children:[Object(q.jsx)("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return c(t)},children:t.message}),Object(q.jsx)("br",{}),Object(q.jsxs)("span",{className:"grey-text",children:[Object(q.jsxs)("span",{className:"black-text",children:["ID #",t.id]})," last updated by",Object(q.jsxs)("span",{className:"black-text",children:[" ",t.tech]})," on"," ",Object(q.jsx)(z.a,{format:"MMMM Do YYYY,\r h:mm:ss a",children:t.date})]}),Object(q.jsx)("a",{href:"#!",className:"secondary-content",onClick:function(){a(t.id),_.a.toast({html:"Log deleted"})},children:Object(q.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})};B.protoType={log:U.a.object.isRequired,deleteLog:U.a.func.isRequired,setCurrent:U.a.func.isRequired};var W=Object(r.b)(null,{deleteLog:function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,P(),t.next=4,fetch("/logs/".concat(e),{method:"delete"});case 4:a({type:b,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:x,payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:O,payload:e}}})(B),K=function(e){var t=e.reducerLog,a=t.logs,n=t.loading,s=e.getLogs;return Object(c.useEffect)((function(){s()}),[]),n||null===a?Object(q.jsx)(J,{}):Object(q.jsxs)("ul",{className:"collection with-header",children:[Object(q.jsx)("li",{className:"collection-header",children:Object(q.jsx)("h4",{className:"center",children:"System Logs"})}),0===a.length?Object(q.jsx)("p",{className:"center",children:"No Logs to show..."}):a.map((function(e){return Object(q.jsx)(W,{log:e},e.id)}))]})};K.propType={log:U.a.object.isRequired,getLogs:U.a.func.isRequired};var Q=Object(r.b)((function(e){return{reducerLog:e.logs}}),{getLogs:function(){return function(){var e=Object(F.a)(G.a.mark((function e(t){var a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(),e.next=4,fetch("/logs");case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,t({type:j,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:x,payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})(K),V=function(){return Object(q.jsxs)("div",{className:"fixed-action-btn",children:[Object(q.jsx)("a",{href:"#add-log-modal",className:"btn-floating btn-large blue darken-2 modal-trigger",children:Object(q.jsx)("i",{className:"large material-icons",children:"add"})}),Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger",children:Object(q.jsx)("i",{className:"material-icons",children:"person"})})}),Object(q.jsx)("li",{children:Object(q.jsx)("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger",children:Object(q.jsx)("i",{className:"material-icons",children:"person_add"})})})]})]})},X=a(6),Z=function(){return function(){var e=Object(F.a)(G.a.mark((function e(t){var a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,$(),e.next=4,fetch("/techs");case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,t({type:v,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:w,payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},$=function(){return{type:f}},ee=Object(r.b)((function(e){return{techs:e.techs}}),{getTechs:Z})((function(e){var t=e.getTechs,a=e.techs,n=a.techs,s=a.loading;return Object(c.useEffect)((function(){t()}),[]),!s&&n&&n.map((function(e){return Object(q.jsxs)("option",{value:"".concat(e.firstName," ").concat(e.lastName),children:[e.firstName," ",e.lastName]},e.id)}))})),te={width:"75%",height:"75%"},ae=Object(r.b)(null,{addLog:function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a){var c,n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,P(),t.next=4,fetch("/logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:h,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:x,payload:t.t0});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addLog,a=Object(c.useState)(""),n=Object(X.a)(a,2),s=n[0],r=n[1],l=Object(c.useState)(!1),i=Object(X.a)(l,2),o=i[0],d=i[1],u=Object(c.useState)(""),j=Object(X.a)(u,2),h=j[0],b=j[1];return Object(q.jsxs)("div",{id:"add-log-modal",className:"modal",style:te,children:[Object(q.jsxs)("div",{className:"modal-content",children:[Object(q.jsx)("h4",{children:"Enter System Log"}),Object(q.jsx)("div",{className:"row",children:Object(q.jsxs)("div",{className:"input-field",children:[Object(q.jsx)("input",{type:"text",name:"message",value:s,onChange:function(e){return r(e.target.value)}}),Object(q.jsx)("label",{htmlFor:"message",className:"active",children:"Log Message"})]})}),Object(q.jsx)("div",{className:"row",children:Object(q.jsx)("div",{className:"input-field",children:Object(q.jsxs)("select",{name:"tect",value:h,className:"browser-default",onChange:function(e){return b(e.target.value)},children:[Object(q.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(q.jsx)(ee,{})]})})}),Object(q.jsx)("div",{className:"row",children:Object(q.jsx)("div",{className:"input-field",children:Object(q.jsx)("p",{children:Object(q.jsxs)("label",{children:[Object(q.jsx)("input",{type:"checkbox",className:"filled-in",checked:o,value:o,onChange:function(e){return d(!o)}}),Object(q.jsx)("span",{children:"Needs Attentions"})]})})})})]}),Object(q.jsx)("div",{className:"modal-footer",children:Object(q.jsx)("a",{href:"#!",onClick:function(){if(s&&h){var e={message:s,attention:o,tech:h,date:new Date};t(e),_.a.toast({html:"Log added by ".concat(h)}),r(""),b(""),d(!1)}else _.a.toast({html:"Please enter a message and Tech"})},className:"modal-close waves-effect blue waves-light btn",children:"Enter"})})]})})),ce={width:"75%",height:"75%"},ne=Object(r.b)((function(e){return{current:e.logs.current}}),{updateLog:function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a){var c,n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,P(),t.next=4,fetch("/logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:m,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:x,payload:t.t0});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.current,a=e.updateLog,n=Object(c.useState)(""),s=Object(X.a)(n,2),r=s[0],l=s[1],i=Object(c.useState)(!1),o=Object(X.a)(i,2),d=o[0],u=o[1],j=Object(c.useState)(""),h=Object(X.a)(j,2),b=h[0],O=h[1];Object(c.useEffect)((function(){t&&(l(t.message),u(t.attention),O(t.tech))}),[t]);return Object(q.jsxs)("div",{id:"edit-log-modal",className:"modal",style:ce,children:[Object(q.jsxs)("div",{className:"modal-content",children:[Object(q.jsx)("h4",{children:"Enter System Log"}),Object(q.jsx)("div",{className:"row",children:Object(q.jsx)("div",{className:"input-field",children:Object(q.jsx)("input",{type:"text",name:"message",value:r,onChange:function(e){return l(e.target.value)}})})}),Object(q.jsx)("div",{className:"row",children:Object(q.jsx)("div",{className:"input-field",children:Object(q.jsxs)("select",{name:"tect",value:b,className:"browser-default",onChange:function(e){return O(e.target.value)},children:[Object(q.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(q.jsx)(ee,{})]})})}),Object(q.jsx)("div",{className:"row",children:Object(q.jsx)("div",{className:"input-field",children:Object(q.jsx)("p",{children:Object(q.jsxs)("label",{children:[Object(q.jsx)("input",{type:"checkbox",className:"filled-in",checked:d,value:d,onChange:function(e){return u(!d)}}),Object(q.jsx)("span",{children:"Needs Attentions"})]})})})})]}),Object(q.jsx)("div",{className:"modal-footer",children:Object(q.jsx)("a",{href:"#!",onClick:function(){if(r&&b){var e={id:t.id,message:r,attention:d,tech:b,date:new Date};a(e),_.a.toast({html:"Log updated by ".concat(b)}),l(""),O(""),u(!1)}else _.a.toast({html:"Please enter a message and Tech"})},className:"modal-close waves-effect blue waves-light btn",children:"Enter"})})]})})),se=Object(r.b)(null,{addTech:function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a){var c,n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,$(),t.next=4,fetch("/techs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,a({type:y,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:w,payload:t.t0});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addTech,a=Object(c.useState)(""),n=Object(X.a)(a,2),s=n[0],r=n[1],l=Object(c.useState)(""),i=Object(X.a)(l,2),o=i[0],d=i[1];return Object(q.jsxs)("div",{id:"add-tech-modal",className:"modal",children:[Object(q.jsxs)("div",{className:"modal-content",children:[Object(q.jsx)("h4",{children:"New Technician"}),Object(q.jsx)("div",{className:"row",children:Object(q.jsxs)("div",{className:"input-field",children:[Object(q.jsx)("input",{type:"text",name:"firstName",value:s,onChange:function(e){return r(e.target.value)}}),Object(q.jsx)("label",{htmlFor:"firstName",className:"active",children:"First Name"})]})}),Object(q.jsx)("div",{className:"row",children:Object(q.jsxs)("div",{className:"input-field",children:[Object(q.jsx)("input",{type:"text",name:"lastName",value:o,onChange:function(e){return d(e.target.value)}}),Object(q.jsx)("label",{htmlFor:"lastName",className:"active",children:"Last Name"})]})})]}),Object(q.jsx)("div",{className:"modal-footer",children:Object(q.jsx)("a",{href:"#!",onClick:function(){s&&o?(t({firstName:s,lastName:o}),_.a.toast({html:"".concat(s," ").concat(o," was added as a tech")}),r(""),d("")):_.a.toast({html:"Please enter the first and last name"})},className:"modal-close waves-effect blue waves-light btn",children:"Enter"})})]})})),re=Object(r.b)(null,{deleteTech:function(e){return function(){var t=Object(F.a)(G.a.mark((function t(a){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,$(),t.next=4,fetch("/techs/".concat(e),{method:"DELETE"});case 4:a({type:N,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:w,payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.tech,a=t.firstName,c=t.lastName,n=t.id,s=e.deleteTech;return Object(q.jsx)("li",{className:"collection-item",children:Object(q.jsxs)("div",{children:[a," ",c,Object(q.jsx)("a",{href:"#!",className:"secondary-content",onClick:function(){s(n),_.a.toast({html:"Technician Deleted"})},children:Object(q.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),le=Object(r.b)((function(e){return{techs:e.techs}}),{getTechs:Z})((function(e){var t=e.techs,a=t.techs,n=t.loading,s=e.getTechs;return Object(c.useEffect)((function(){s()}),[]),Object(q.jsx)(c.Fragment,{children:Object(q.jsx)("div",{id:"tech-list-modal",className:"modal",children:Object(q.jsxs)("div",{className:"modal-content",children:[Object(q.jsx)("h4",{children:"Technician List"}),Object(q.jsx)("ul",{className:"collection",children:!n&&a&&a.map((function(e){return Object(q.jsx)(re,{tech:e},e.id)}))})]})})})})),ie=function(){return Object(c.useEffect)((function(){_.a.AutoInit()})),Object(q.jsx)(r.a,{store:R,children:Object(q.jsxs)(c.Fragment,{children:[Object(q.jsx)(M,{}),Object(q.jsxs)("div",{className:"container",children:[Object(q.jsx)(V,{}),Object(q.jsx)(ae,{}),Object(q.jsx)(ne,{}),Object(q.jsx)(se,{}),Object(q.jsx)(le,{}),Object(q.jsx)(Q,{})]})]})})};s.a.render(Object(q.jsx)(ie,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8e081978.chunk.js.map