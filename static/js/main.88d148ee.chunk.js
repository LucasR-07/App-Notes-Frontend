(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),c=a.n(s),o=(a(102),a(29)),l=a(9),u=(a(103),a(104),a(20)),i=a(21),m=a(23),d=a(22),p=a(194),h=a(193),f=a(195),b=(a(105),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(h.a,null,r.a.createElement(o.b,{to:"/notes-app-frontend"},r.a.createElement(p.a.Brand,null,"Notes App")),r.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(f.a,{className:"ml-auto"},r.a.createElement(o.b,{to:"/notes-app-frontend"},r.a.createElement("button",{className:"btn btn-outline-danger border-0 rounded-pill text-light navBoton mr-3"},"Notes")),r.a.createElement(o.b,{to:"/notes-app-frontend/create"},r.a.createElement("button",{className:"btn btn-outline-danger border-0 rounded-pill text-light navBoton mr-3"},"Create Note")),r.a.createElement(o.b,{to:"/notes-app-frontend/user"},r.a.createElement("button",{className:"btn btn-outline-danger border-0 rounded-pill text-light navBoton"},"Create User"))))))}}]),a}(n.Component)),v=a(6),g=a.n(v),E=a(13),N=a(14),k=a.n(N),y=a(96);var x=function(){return r.a.createElement("div",{className:"d-flex justify-content-center spinner-border-lg mt-5"},r.a.createElement("div",{className:"spinner-border text-light mr-4",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("h3",{className:"text-white"},r.a.createElement("b",null,"Loading...")))},w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={notes:[],loading:!1},e.deleteNote=function(){var t=Object(E.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.delete("https://appnotes-backend.herokuapp.com/api/notes/"+a);case 2:e.getNotes();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getNotes()}},{key:"getNotes",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,k.a.get("https://appnotes-backend.herokuapp.com/api/notes");case 3:t=e.sent,this.setState({notes:t.data,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement(x,null):r.a.createElement("div",{className:"row"},this.state.notes.map((function(t){return r.a.createElement("div",{key:t._id,className:"col-md-4 p-2"},r.a.createElement("div",{className:"card bg-dark text-light shadow-lg border-0"},r.a.createElement("div",{className:"card-header d-flex justify-content-between"},r.a.createElement("h5",null,r.a.createElement("b",null,t.title)),r.a.createElement(o.b,{className:"btn btn-danger text-light rounded-pill",to:"/notes-app-frontend/notes/"+t._id},"Edit")),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,t.content),r.a.createElement("p",null,"User: ",r.a.createElement("b",null,t.author)),r.a.createElement("p",null,Object(y.a)(t.date))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-danger text-light",onClick:function(){return e.deleteNote(t._id)}},"Delete"))))})))}}]),a}(n.Component),j=a(44),C=a(45),O=a.n(C),S=(a(78),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={_id:"",users:[],userSelected:"",title:"",content:"",date:new Date},e.handleSubmit=function(){var t=Object(E.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={title:e.state.title,content:e.state.content,date:e.state.date,author:e.state.userSelected},t.next=4,k.a.post("https://appnotes-backend.herokuapp.com/api/notes",n);case 4:window.location.href="/notes-app-frontend";case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleDate=function(t){e.setState({date:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://appnotes-backend.herokuapp.com/api/users");case 2:t=e.sent,this.setState({users:t.data,userSelected:t.data[0].username});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card card-body bg-dark text-light"},r.a.createElement("h4",null,"Create a Note"),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",name:"userSelected",value:this.state.userSelected,onChange:this.handleChange},this.state.users.map((function(e){return r.a.createElement("option",{key:e._id,value:e.username},e.username)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",value:this.state.title,required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{name:"content",value:this.state.content,className:"form-control",placeholder:"Content",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement(O.a,{className:"form-control",selected:this.state.date,onChange:this.handleDate})),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Save"))))}}]),a}(n.Component)),D=(a(185),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],username:""},e.getUsers=Object(E.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://appnotes-backend.herokuapp.com/api/users");case 2:a=t.sent,e.setState({users:a.data});case 4:case"end":return t.stop()}}),t)}))),e.handleSubmit=function(){var t=Object(E.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,k.a.post("https://appnotes-backend.herokuapp.com/api/users",{username:e.state.username});case 3:e.setState({username:""}),e.getUsers();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState({username:t.target.value})},e.deleteUser=function(){var t=Object(E.a)(g.a.mark((function t(a){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.delete("https://appnotes-backend.herokuapp.com/api/users/"+a);case 2:e.getUsers();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card bg-dark text-light card-body mb-3"},r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",value:this.state.username,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Save")))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"list-group"},r.a.createElement("div",{className:"list-group-item bg-dark text-light"},r.a.createElement("h4",null,r.a.createElement("b",null,"Usuarios creados:"))),this.state.users.map((function(t){return r.a.createElement("div",{className:"list-group-item list-group-item-action bg-dark text-light d-flex justify-content-between",key:t._id,onDoubleClick:function(){return e.deleteUser(t._id)}},t.username,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteUser(t._id)}},"X"))})))))}}]),a}(n.Component)),_=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={_id:"",users:[],userSelected:"",title:"",content:"",date:new Date,author:""},e.handleSubmit=function(){var t=Object(E.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={title:e.state.title,content:e.state.content,date:e.state.date,author:e.state.author},t.next=4,k.a.put("https://appnotes-backend.herokuapp.com/api/notes/"+e.state._id,n);case 4:window.location.href="/notes-app-frontend";case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleDate=function(t){e.setState({date:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://appnotes-backend.herokuapp.com/api/users");case 2:if(t=e.sent,this.setState({users:t.data,userSelected:t.data[0].username}),!this.props.match.params.id){e.next=9;break}return e.next=7,k.a.get("https://appnotes-backend.herokuapp.com/api/notes/"+this.props.match.params.id);case 7:a=e.sent,this.setState({title:a.data.title,content:a.data.content,date:new Date(a.data.date),author:a.data.author,_id:this.props.match.params.id});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card card-body bg-dark text-light"},r.a.createElement("h4",null,"Edit Note"),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",name:"author",value:this.state.author,onChange:this.handleChange},this.state.users.map((function(e){return r.a.createElement("option",{key:e._id,value:e.username},e.username)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",value:this.state.title,required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{name:"content",value:this.state.content,className:"form-control",placeholder:"Content",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement(O.a,{className:"form-control",selected:this.state.date,onChange:this.handleDate})),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Save"))))}}]),a}(n.Component);var U=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:"container p-4"},r.a.createElement(l.a,{path:"/notes-app-frontend",exact:!0,component:w}),r.a.createElement(l.a,{path:"/notes-app-frontend/notes/:id",component:_}),r.a.createElement(l.a,{path:"/notes-app-frontend/create",component:S}),r.a.createElement(l.a,{path:"/notes-app-frontend/user",component:D}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))},97:function(e,t,a){e.exports=a(186)}},[[97,1,2]]]);
//# sourceMappingURL=main.88d148ee.chunk.js.map