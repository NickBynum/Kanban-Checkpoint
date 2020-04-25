(function(t){function e(e){for(var s,r,n=e[0],l=e[1],d=e[2],m=0,u=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(u.length)u.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"158c":function(t,e,a){"use strict";var s=a("ce1b"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"boards"}}},[t._v("My-Dashboard")])],1):t._e()]),t._v(" "),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),d=a.n(l);d.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var c={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),console.log("this.$auth.user: "),console.log(this.$auth.user)},logout(){this.$store.dispatch("resetBearer"),this.$auth.logout({returnTo:window.location.origin})}}},m=c,u=a("2877"),h=Object(u["a"])(m,r,n,!1,null,null,null),v=h.exports,p=a("335d"),b={name:"App",async beforeCreate(){try{await Object(p["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:v}},w=b,g=(a("5c0b"),Object(u["a"])(w,i,o,!1,null,null,null)),f=g.exports,C=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[t.$auth.isAuthenticated?a("div",[a("h1",{staticClass:"text-light"},[t._v("Welcome back, "+t._s(this.$store.state.user.name)+"!")])]):a("div",[a("h1",{staticClass:"text-light"},[t._v("Sign up now, or login to begin!")])])])])])},_=[],y={name:"home",data(){return{}},computed:{},methods:{},components:{}},B=y,x=Object(u["a"])(B,k,_,!1,null,"58a39d60",null),$=x.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boards "},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h2",{staticClass:"text-light m-3"},[t._v("Select your board to work with today")]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-secondary m-1",attrs:{type:"submit"}},[t._v("Create Board")])])])]),t._v(" "),a("div",{staticClass:"row flex-row justify-content-around mt-5"},t._l(t.boards,(function(t){return a("BoardComp",{key:t.id,attrs:{boardData:t}})})))])])},D=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board col-12 col-md-4 card m-1 p-2"},[a("h4",{staticClass:"text-dark"},[t._v(t._s(t.boardData.title))]),t._v(" "),a("p",{staticClass:"text-dark"},[t._v("Description: "+t._s(t.boardData.description))]),t._v(" "),a("button",{staticClass:"btn btn-secondary m-1",on:{click:function(e){t.selectBoard()}}},[t._v("Select Board")]),t._v(" "),a("button",{staticClass:"btn btn-danger m-1",on:{click:function(e){t.deleteBoard()}}},[t._v("Delete Board")])])},I=[],M={name:"board",props:["boardData"],data(){return{}},computed:{},methods:{selectBoard(){this.$store.commit("setActiveBoard",{}),this.$router.push({name:"board",params:{boardId:this.boardData.id}})},deleteBoard(){confirm("Are you sure?")&&this.$store.dispatch("deleteBoard",this.boardData)},editBoard(){this.$store.dispatch("editBoard",this.boardData),this.editing=!1}},components:{}},z=M,N=Object(u["a"])(z,T,I,!1,null,"777220bd",null),H=N.exports,O={name:"boards",mounted(){this.$store.dispatch("getBoards")},created(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}}},components:{BoardComp:H}},A=O,E=Object(u["a"])(A,L,D,!1,null,null,null),j=E.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("p",[t._v(t._s(t.board.title))])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"flex-row card bg-dark text-light flex-wrap",attrs:{id:"card-display"}},[t._l(t.lists,(function(t){return a("list",{key:t._id,attrs:{listData:t}})})),t._v(" "),a("div",{staticClass:"row ml-3"},[a("div",{staticClass:"col-12 col-md-6"},[a("form",{on:{submit:function(e){t.addNewList()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"bg-dark text-white input-group-sm border-0 w-100",attrs:{type:"text",placeholder:"New List"},domProps:{value:t.newList.title},on:{submit:function(e){t.addNewList()},input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-light",attrs:{type:"submit"}},[t._v("Submit")])])])])],2)])])])},V=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list col-12 col-md-6 col-lg-2 border rounded"},[t.editing?a("div",[a("form",{on:{submit:function(e){t.editList()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.listData.title,expression:"listData.title"}],attrs:{type:"text"},domProps:{value:t.listData.title},on:{input:function(e){e.target.composing||t.$set(t.listData,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn text-warning",attrs:{type:"submit"}},[t._v("Submit")])])]):a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"row justify-content-between"},[a("div",{staticClass:"col-8"},[t._v(t._s(t.listData.title))]),t._v(" "),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 p-0"},[a("button",{staticClass:"btn btn-sm text-warning p-0 m-0",on:{click:function(e){t.editing=!0}}},[a("svg",{staticClass:"bi bi-pencil",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z","clip-rule":"evenodd"}}),t._v(" "),a("path",{attrs:{"fill-rule":"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z","clip-rule":"evenodd"}})])]),t._v(" "),a("button",{staticClass:"btn btn-sm text-danger p-0 m-0",on:{click:function(e){t.deleteList()}}},[a("svg",{staticClass:"bi bi-trash",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"}}),t._v(" "),a("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z","clip-rule":"evenodd"}})])])])])])])])])]),t._v(" "),t._l(t.tasks,(function(t){return a("task",{key:t._id,attrs:{taskData:t}})})),t._v(" "),a("form",{on:{submit:function(e){t.addNewTask()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.title,expression:"newTask.title"}],staticClass:"bg-dark text-white m-0 p-0 w-100 border-0",attrs:{type:"text",placeholder:"Enter New Task"},domProps:{value:t.newTask.title},on:{input:function(e){e.target.composing||t.$set(t.newTask,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-sm btn-light",attrs:{type:"submit"}},[t._v("Submit Task")])])],2)},U=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task bg-light text-dark border border-primary rounded"},[t.editing?a("div",[a("form",{on:{submit:function(e){t.editTask()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskData.title,expression:"taskData.title"}],attrs:{type:"text"},domProps:{value:t.taskData.title},on:{input:function(e){e.target.composing||t.$set(t.taskData,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"submit"}},[t._v("OK")])])]):a("div",[a("li",{staticClass:"p-1",attrs:{type:"button","data-toggle":"modal","data-target":"#commentBodyModal"+t.taskData.id}},[t._v(t._s(t.taskData.title)+"\n    ")]),t._v(" "),a("div",[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn-sm btn-secondary",attrs:{type:"button",id:"dropdownMenu2","data-toggle":"dropdown"}},[a("svg",{staticClass:"bi bi-arrow-left-right",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M10.146 7.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 11l-2.647-2.646a.5.5 0 010-.708z","clip-rule":"evenodd"}}),t._v(" "),a("path",{attrs:{"fill-rule":"evenodd",d:"M2 11a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 11zm3.854-9.354a.5.5 0 010 .708L3.207 5l2.647 2.646a.5.5 0 11-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z","clip-rule":"evenodd"}}),t._v(" "),a("path",{attrs:{"fill-rule":"evenodd",d:"M2.5 5a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z","clip-rule":"evenodd"}})])]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu2"}},t._l(t.lists,(function(e){return a("li",{key:e._id,staticClass:"dropdown-item",attrs:{listData:e,type:"submit"},on:{click:function(a){t.moveTaskToDifList(e)}}},[t._v(t._s(e.title))])})))])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"commentBodyModal"+t.taskData.id,tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"commentModal"}},[t._v(t._s(t.taskData.title))]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal-body"},[t._l(t.comments,(function(t){return a("comment",{key:t._id,attrs:{commentData:t}})})),t._v(" "),a("div",[a("form",{on:{click:function(e){t.addNewComment()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.title,expression:"newComment.title"}],staticClass:"bg-dark text-white input-group-sm border-0 ml-5",attrs:{type:"text",placeholder:"New Comment"},domProps:{value:t.newComment.title},on:{input:function(e){e.target.composing||t.$set(t.newComment,"title",e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("submit")])])])],2)])])]),t._v(" "),a("button",{staticClass:"btn text-secondary",on:{click:function(e){t.editing=!0}}},[a("svg",{staticClass:"bi bi-pencil-square",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"}}),t._v(" "),a("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z","clip-rule":"evenodd"}})])]),t._v(" "),a("button",{staticClass:"btn text-secondary",on:{click:function(e){t.deleteTask()}}},[a("svg",{staticClass:"bi bi-trash2",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3.18 4l1.528 9.164a1 1 0 00.986.836h4.612a1 1 0 00.986-.836L12.82 4H3.18zm.541 9.329A2 2 0 005.694 15h4.612a2 2 0 001.973-1.671L14 3H2l1.721 10.329z","clip-rule":"evenodd"}}),t._v(" "),a("path",{attrs:{d:"M14 3c0 1.105-2.686 2-6 2s-6-.895-6-2 2.686-2 6-2 6 .895 6 2z"}}),t._v(" "),a("path",{attrs:{"fill-rule":"evenodd",d:"M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z","clip-rule":"evenodd"}})])])])])},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment mb-1"},[t.editing?a("div",[a("form",{on:{submit:function(e){t.editComment()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.commentData.title,expression:"commentData.title"}],attrs:{type:"text"},domProps:{value:t.commentData.title},on:{input:function(e){e.target.composing||t.$set(t.commentData,"title",e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn text-warning",attrs:{type:"submit"}},[t._v("submit")])])]):a("div",[a("p",{staticClass:"m-0"},[t._v(t._s(t.commentData.title))]),t._v(" "),a("button",{staticClass:"btn btn-sm text-warning",on:{click:function(e){t.editing=!0}}},[a("svg",{staticClass:"bi bi-pencil",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z","clip-rule":"evenodd"}}),t._v(" "),a("path",{attrs:{"fill-rule":"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z","clip-rule":"evenodd"}})])]),t._v(" "),a("button",{staticClass:"btn btn-sm text-danger",on:{click:function(e){t.deleteComment()}}},[a("svg",{staticClass:"bi bi-trash",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"}}),t._v(" "),a("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z","clip-rule":"evenodd"}})])])])])},J=[],W={name:"comment",props:["commentData"],data(){return{editing:!1}},computed:{profile(){return this.$store.state.user}},methods:{editComment(){this.$store.dispatch("editComment",this.commentData),this.editing=!1},deleteComment(){this.$store.dispatch("deleteComment",this.commentData)}},components:{}},F=W,Y=Object(u["a"])(F,q,J,!1,null,"c83bf41a",null),G=Y.exports,Q={name:"task",props:["taskData"],mounted(){this.$store.dispatch("getCommentByTaskId",this.taskData.id)},data(){return{editing:!1,newComment:{}}},computed:{profile(){return this.$store.state.user},comments(){return this.$store.state.comments[this.taskData.id]},lists(){return this.$store.state.lists}},methods:{addNewComment(){this.newComment.taskId=this.taskData.id,this.newComment.creatorEmail=this.taskData.creatorEmail,console.log("addNewComment",this.newComment.creatorEmail),this.$store.dispatch("addNewComment",this.newComment),this.newComment={}},deleteTask(){this.$store.dispatch("deleteTask",this.taskData)},editTask(){this.$store.dispatch("editTask",this.taskData),this.editing=!1},moveTaskToDifList(t){this.taskData.oldListId=this.taskData.listId,this.taskData.listId=t.id,this.$store.dispatch("moveTaskToDifList",this.taskData)}},components:{Comment:G}},X=Q,Z=Object(u["a"])(X,R,K,!1,null,"36835f9a",null),tt=Z.exports,et={name:"list",props:["listData"],mounted(){this.$store.dispatch("getTaskByListId",this.listData.id)},data(){return{editing:!1,newTask:{}}},computed:{profile(){return this.$store.state.user},tasks(){return this.$store.state.tasks[this.listData.id]}},methods:{addNewTask(){this.newTask.listId=this.listData.id,this.newTask.creatorEmail=this.listData.creatorEmail,console.log("addNewList",this.newTask.creatorEmail),this.$store.dispatch("addNewTask",this.newTask),this.newTask={}},deleteList(){this.$store.dispatch("deleteList",this.listData)},editList(){this.$store.dispatch("editList",this.listData),this.editing=!1}},components:{Task:tt}},at=et,st=Object(u["a"])(at,S,U,!1,null,"35754bb3",null),it=st.exports,ot={data(){return{newList:{}}},name:"board",props:["boardId"],async mounted(){await this.$store.dispatch("getProfile"),this.$store.dispatch("getBoard",this.$route.params.boardId),this.$store.dispatch("getListByBoardId",this.$route.params.boardId)},computed:{profile(){return this.$store.state.user},board(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},methods:{addNewList(){this.newList.boardId=this.$route.params.boardId,this.newList.creatorEmail=this.board.creatorEmail,console.log("addNewList",this.newList.creatorEmail),this.$store.dispatch("addNewList",this.newList),this.newList={}}},components:{List:it}},rt=ot,nt=(a("158c"),Object(u["a"])(rt,P,V,!1,null,null,null)),lt=nt.exports;s["a"].use(C["a"]);var dt=new C["a"]({routes:[{path:"/",name:"home",component:$},{path:"/boards",name:"boards",component:j,beforeEnter:p["b"]},{path:"/boards/:boardId",name:"board",component:lt,beforeEnter:p["b"]},{path:"*",redirect:"/"}]}),ct=a("2f62");s["a"].use(ct["a"]);let mt=window.location.host.includes("localhost")?"//localhost:3000/":"/",ut=d.a.create({baseURL:mt+"api/",timeout:1e4,withCredentials:!0});var ht=new ct["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setActiveList(t,e){t.lists=e},setActiveTask(t,e){s["a"].set(t.tasks,e.listId,e.tasks)},setActiveComment(t,e){s["a"].set(t.comments,e.taskId,e.comments)}},actions:{setBearer({},t){ut.defaults.headers.authorization=t},resetBearer(){ut.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await ut.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},getBoards({commit:t,dispatch:e}){ut.get("boards").then(e=>{t("setBoards",e.data)})},async getBoard({commit:t,dispatch:e},a){try{let e=await ut.get("boards/"+a);t("setActiveBoard",e.data)}catch(s){console.error(s)}},addBoard({commit:t,dispatch:e},a){ut.post("boards",a).then(t=>{e("getBoards")})},async getListByBoardId({commit:t,dispatch:e},a){try{let e=await ut.get("boards/"+a+"/list");t("setActiveList",e.data)}catch(s){console.error(s)}},async deleteBoard({commit:t,dispatch:e},a){try{await ut.delete("boards/"+a.id);e("getBoards")}catch(s){console.error(s)}},async addNewList({commit:t,dispatch:e},a){try{await ut.post("list",a);e("getBoard",a.boardId),e("getListByBoardId",a.boardId)}catch(s){console.error(s)}},async deleteList({commit:t,dispatch:e},a){try{await ut.delete("list/"+a.id);e("getBoard",a.boardId),e("getListByBoardId",a.boardId)}catch(s){console.error(s)}},async editList({commit:t,dispatch:e},a){try{await ut.put("list/"+a.id,a);e("getListByBoardId",a.boardId)}catch(s){console.error(s)}},async getTaskByListId({commit:t,dispatch:e},a){try{let e=await ut.get("list/"+a+"/task");t("setActiveTask",{listId:a,tasks:e.data})}catch(s){console.error(s)}},async addNewTask({commit:t,dispatch:e},a){try{console.log("addNewTask",a);await ut.post("task",a);e("getTaskByListId",a.listId)}catch(s){console.error(s)}},async editTask({commit:t,dispatch:e},a){try{await ut.put("task/"+a.id,a);e("getTaskByListId",a.listId)}catch(s){console.error(s)}},async deleteTask({commit:t,dispatch:e},a){try{await ut.delete("task/"+a.id);e("getTaskByListId",a.listId)}catch(s){console.error(s)}},async moveTaskToDifList({commit:t,dispatch:e},a){try{await ut.put("task/"+a.id,a);e("getTaskByListId",a.listId),e("getTaskByListId",a.oldListId)}catch(s){console.error(s)}},async getCommentByTaskId({commit:t,dispatch:e},a){try{let e=await ut.get("task/"+a+"/comment");t("setActiveComment",{taskId:a,comments:e.data})}catch(s){console.error(s)}},async addNewComment({commit:t,dispatch:e},a){try{await ut.post("comment",a);e("getCommentByTaskId",a.taskId)}catch(s){console.error(s)}},async editComment({commit:t,dispatch:e},a){try{await ut.put("comment/"+a.id,a);e("getCommentByTaskId",a.taskId)}catch(s){console.error(s)}},async deleteComment({commit:t,dispatch:e},a){try{await ut.delete("comment/"+a.id);e("getCommentByTaskId",a.taskId)}catch(s){console.error(s)}}}});const vt="dev-575577u4.auth0.com",pt="https://mypretendurl.com",bt="78hYA0eOOLbeBLR7A7N25oONOIUbF3KA";s["a"].use(p["a"],{domain:vt,clientId:bt,audience:pt,onRedirectCallback:t=>{dt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:dt,store:ht,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"9c0c":function(t,e,a){},ce1b:function(t,e,a){}});