(this["webpackJsonpnewapp-client"]=this["webpackJsonpnewapp-client"]||[]).push([[0],{137:function(e,t,c){},161:function(e,t,c){},164:function(e,t,c){},278:function(e,t,c){},279:function(e,t,c){},280:function(e,t,c){},281:function(e,t,c){},282:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(54),r=c.n(n),o=(c(137),c(2)),l=c(8),i=c(4),u=(c(84),c(0)),b=function(e){e.user;var t=Object(a.useState)(!1),c=Object(o.a)(t,2),s=(c[0],c[1],Object(a.useState)("")),n=Object(o.a)(s,2),r=n[0],l=n[1],b=Object(a.useState)(""),j=Object(o.a)(b,2),h=j[0],d=j[1];function m(){l(""===r?"show":""),d(""===h?"show-x":"")}return Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.b,{to:"/",className:"homeLogo",children:"Best Reads"}),Object(u.jsxs)("button",{onClick:m,id:"burger",className:"burger ".concat(h),children:[Object(u.jsx)("div",{class:"bar"}),Object(u.jsx)("div",{class:"bar"})]}),Object(u.jsx)("ul",{className:r,children:e.user?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/",activeClassName:"homebutton",onClick:m,children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/search",activeClassName:"active-link",onClick:m,children:"Searchbook"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/user/publicBookshelf",activeClassName:"authLink",onClick:m,children:"My public bookshelf"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/user/privateBookshelf",activeClassName:"authLink",onClick:m,children:"My private bookshelf"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/ebook/create",activeClassName:"authLink",onClick:m,children:"Create an eBook"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{className:"nav-logoutbtn",onClick:e.handleLogout,children:"Logout"})})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/",className:"authLink",onClick:m,children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/auth/signup",activeClassName:"authLink",onClick:m,children:"Signup"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/auth/login",className:"authLink",onClick:m,children:"Log In"})})]})})]})},j=c(10),h=c(3),d=c(56),m=(c(143),c(12)),O=c.n(m);function p(e){return{status:!1,errorMessage:"Internal server error. Please check your server"}}function v(e){return{status:!0,data:e.data}}var x=O.a.create({baseURL:"".concat("https://mm-best-reads.herokuapp.com/api","/ebook")});var f=c.p+"static/media/default.b508dd32.jpeg";c(59);function g(e){return{status:!1,errorMessage:"Internal server error. Please check your server"}}function k(e){return console.log("shelves services success!",e),{status:!0,data:e.data}}var N=O.a.create({baseURL:"".concat("https://mm-best-reads.herokuapp.com/api","/public-shelves"),withCredentials:!0}),y=O.a.create({baseURL:"".concat("https://mm-best-reads.herokuapp.com/api","/private-shelves"),withCredentials:!0});function S(e,t){var c={shelf:e,book:t};return N.put("addBook",c).then(k).catch(g)}var w=function(e){var t=e.bookshelf.shelves,c=e.book,a=e.updateUser;function s(t,c,a){var s,n,r=a.bookId;return console.log(c),"public"===t?"delete"===c?function(e,t){return N.put("/deleteBook",{shelfId:e,bookId:t}).then(k).catch(g)}(e.shelf,r):(n=a,N.put("/moveBook",n).then(k).catch(g)):"delete"===c?(s=r,x.delete("/delete/".concat(s)).then(v).catch(p)):"edit"!==c?function(e){return console.log("service: ",e),y.put("/moveBook",e).then(k).catch(g)}(a):void console.log("edit")}function n(e){return{backgroundImage:"url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}function r(e){if(e.ebookUrl)return Object(u.jsx)(i.b,{to:"/reader/".concat(e._id),target:"blank",className:"link-tag",style:{position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",height:"100%"}})}return Object(u.jsxs)("div",{className:"book",children:[Object(u.jsxs)("div",{className:"book-top",children:[function(e){return e.ebookUrl?Object(u.jsx)("div",{className:"flip-card",children:Object(u.jsxs)("div",{className:"flip-card-inner",children:[Object(u.jsx)("div",{className:"book-cover flip-card-front",style:e.coverUrl?n(e.coverUrl):n(f),alt:"book cover"},e.coverUrl),Object(u.jsx)("div",{className:"flip-card-back",children:r(e)})]})}):Object(u.jsx)("div",{className:"book-cover",style:e.coverUrl?n(e.coverUrl):n(f),alt:"book cover"})}(c),Object(u.jsx)("div",{className:"book-shelf-changer",children:Object(u.jsxs)("select",{className:"book-shelf-changer-select",onChange:function(t){return s(e.bsType,t.target.value,{shelfFrom:e.shelf,shelfTo:t.target.value,bookId:c._id}).then((function(e){return!0===e.status?a():console.log("the mover says: ",e)}))},children:[Object(u.jsx)("option",{selected:!0,disabled:!0,label:"Move to:"}),t.map((function(e){return Object(u.jsx)("option",{value:e._id,children:e.name})})),Object(u.jsx)("optgroup",{label:"--------"}),Object(u.jsx)("option",{value:"delete",children:"Delete"}),"private"===e.bsType&&Object(u.jsx)("option",{value:"edit",children:"Edit"})]})})]}),Object(u.jsx)("div",{className:"book-title",children:c.title},c.title)]},c._id)};var C=function(e){var t=e.user,c=t.privateBookshelf.shelves.find((function(e){return"Main shelf"===e.name})),s={title:"",author:"",coverUrl:"",ebookUrl:"",owner:t._id,shelf:c._id},n=Object(a.useState)(s),r=Object(o.a)(n,2),l=r[0],i=r[1];function b(e,t){"success"===e?d.b.warning(t,{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):d.b.error(t,{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}function m(e){var t=e.target,c=t.name,a=t.value;i(Object(h.a)(Object(h.a)({},l),{},Object(j.a)({},c,a)))}return console.log("test: ",l),Object(u.jsx)("div",{className:"searchPageMain",children:Object(u.jsxs)("div",{className:"searchPage",children:[Object(u.jsx)(d.a,{}),Object(u.jsx)("h1",{className:"ebook-create-title",children:"Create Your Ebook "}),Object(u.jsx)("div",{className:"searchFormContainer",children:Object(u.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),(t=l,x.post("/create",t).then(v).catch(p)).then((function(e){return!0===e.status?(i(s),void b("success","Your Ebook was added to your bookshelf!")):b("error","There was an issue creating your Ebook")}))},className:"advLoginForm createEbookForm",children:[Object(u.jsxs)("div",{className:"inputsSearch create-ebook-form",children:[Object(u.jsx)("label",{htmlFor:"input-title",children:"Title "}),Object(u.jsx)("input",{type:"text",name:"title",placeholder:"Your Ebook Title",onChange:m,value:l.title,required:!0})]}),Object(u.jsxs)("div",{className:"inputsSearch create-ebook-form",children:[Object(u.jsx)("label",{htmlFor:"input-author",children:"Author "}),Object(u.jsx)("input",{type:"text",onChange:m,name:"author",placeholder:"Name",value:l.author})]}),Object(u.jsxs)("div",{className:"inputsSearch create-ebook-form",children:[Object(u.jsx)("label",{htmlFor:"input-cover",children:"Cover"}),Object(u.jsx)("input",{type:"button",className:"cloudinary-button",onClick:function(e){window.cloudinary.createUploadWidget({cloudName:"best-reads",uploadPreset:"bestReads-bookCovers",cropping:!0},(function(e,t){!function(e){"success"===e.event&&i(Object(h.a)(Object(h.a)({},l),{},{coverUrl:e.info.secure_url}))}(t)})).open()},value:"Add a cover"})]}),Object(u.jsxs)("div",{className:"inputsSearch create-ebook-form",children:[Object(u.jsx)("label",{htmlFor:"input-ebook",children:"Epub file"}),Object(u.jsx)("input",{type:"button",className:"cloudinary-button",onClick:function(e){window.cloudinary.createUploadWidget({cloudName:"best-reads",uploadPreset:"bestReads-ebooks"},(function(e,t){!function(e){"success"===e.event&&i(Object(h.a)(Object(h.a)({},l),{},{ebookUrl:e.info.secure_url}))}(t)})).open()},value:"Add an epub file"})]}),Object(u.jsxs)("div",{className:"inputsSearch create-ebook-form",children:[Object(u.jsx)("label",{htmlFor:"input-bookshelf",children:"Add to "}),Object(u.jsx)("select",{onChange:function(e){return i(Object(h.a)(Object(h.a)({},l),{},{shelf:e.target.value}))},children:t.privateBookshelf.shelves.map((function(e){return Object(u.jsx)("option",{name:"shelf",value:e._id,children:e.name})}))})]}),Object(u.jsx)("div",{className:"inputsSearch create-ebook-form",children:Object(u.jsx)("button",{type:"submit",children:"Submit"})})]})})]})})},I="access_token",U="newapp";U[0].toUpperCase(),U.slice(1).toLowerCase();function _(e){return{status:!1,errorMessage:"Internal server error. Please check your server"}}function L(e){return console.log("success: ",e),{status:!0,data:e.data}}var E=O.a.create({baseURL:"".concat("https://mm-best-reads.herokuapp.com/api","/auth")});function F(){return E.get("/session",{headers:{Authorization:localStorage.getItem(I)}}).then(L).catch(_)}c(161),c(40);var A=function(){return Object(u.jsx)("div",{className:"home",children:Object(u.jsxs)("div",{className:"home-img-container",children:[Object(u.jsx)("img",{src:"https://64.media.tumblr.com/11e061c672d56b817484963145163de9/912682de92279e4a-1a/s640x960/24725567374df17623ffe72b92965a9a711bd229.gifv",alt:"",className:"img-home"}),Object(u.jsxs)("div",{className:"home-headings",children:[Object(u.jsx)(i.b,{to:"/search",className:"tag center",children:"A NOVEL IDEA"}),Object(u.jsx)("p",{className:"quote center",children:'"At least we\'re not Amazon"'})]})]})})};var B=function(e){var t=Object(a.useState)({username:"",email:"",password:"",imageUrl:""}),c=Object(o.a)(t,2),s=c[0],n=c[1],r=function(e){var t=e.target,c=t.name,a=t.value;n(Object(h.a)(Object(h.a)({},s),{},Object(j.a)({},c,a)))};return Object(u.jsxs)("div",{className:"page-container",children:[Object(u.jsx)(A,{}),Object(u.jsxs)("div",{className:"signup-form-container",children:[Object(u.jsx)("h1",{children:"Sign Up"}),Object(u.jsxs)("p",{className:"account",children:["Account? ",Object(u.jsx)(i.b,{to:"/auth/login",className:"account",children:"Log In"})]}),Object(u.jsxs)("form",{onSubmit:function(t){var c;t.preventDefault(),(c=s,E.post("/signup",c).then(L).catch(_)).then((function(t){t.data?(localStorage.setItem(I,t.data.accessToken),e.authenticate(t.data.user),e.history.push("/")):console.log("error")}))},className:"login-form",children:[Object(u.jsxs)("div",{className:"inputs",children:[Object(u.jsx)("label",{htmlFor:"login-form-text",children:"Username"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"Username",value:s.username,onChange:r,required:!0})]}),Object(u.jsxs)("div",{className:"inputs",children:[Object(u.jsx)("label",{htmlFor:"login-form-text",children:"Email"}),Object(u.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:s.email,onChange:r,required:!0})]}),Object(u.jsxs)("div",{className:"inputs",children:[Object(u.jsx)("label",{htmlFor:"login-form-text",children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:s.password,onChange:r,required:!0,minLength:"8"})]}),Object(u.jsx)("div",{className:"inputs",children:Object(u.jsx)("button",{className:"button__submit",type:"submit",children:"Submit"})})]})]})]})};var P=function(e){var t=e.authenticate;e.user&&e.user._id&&e.history.push("/");var c=Object(a.useState)({username:"",password:""}),s=Object(o.a)(c,2),n=s[0],r=s[1],l=function(e){var t=e.target,c=t.name,a=t.value;r(Object(h.a)(Object(h.a)({},n),{},Object(j.a)({},c,a)))};return Object(u.jsxs)("div",{className:"page-container",children:[Object(u.jsx)(A,{}),Object(u.jsxs)("div",{className:"login-form-container",children:[Object(u.jsx)("h1",{children:"Log In"}),Object(u.jsxs)("p",{className:"account",children:["No account? ",Object(u.jsx)(i.b,{to:"/auth/signup",className:"account",children:"Sign Up"})]}),Object(u.jsxs)("form",{onSubmit:function(c){c.preventDefault(),function(e){return E.post("/login",e).then(L).catch(_)}({username:n.username,password:n.password}).then((function(c){c.data?(localStorage.setItem(I,c.data.accessToken),t(c.data.user),e.history.push("/")):console.log("error",c)}))},className:"login-form",children:[Object(u.jsxs)("div",{className:"inputs",children:[Object(u.jsx)("label",{htmlFor:"login-form-text",children:"Username"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"Username",value:n.username,onChange:l,required:!0})]}),Object(u.jsxs)("div",{className:"inputs",children:[Object(u.jsx)("label",{htmlFor:"login-form-text",children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:n.password,onChange:l,required:!0,minLength:"8"})]}),Object(u.jsx)("div",{className:"inputs",children:Object(u.jsx)("button",{className:"login-form-text",type:"submit",children:"Submit"})})]})]})]})},R=(c(60),c(163)),T=new R("https://openlibrary.org/search.json{?q*}&limit=50");new R("https://openlibrary.org/search/{subSearch}.json{?q*}"),O.a.create({baseURL:"https://openlibrary.org"});function q(e){return{status:!1,errorMessage:"Error while querying the API. Please check your server"}}function M(e){return{data:e.data}}function D(e){var t=Object.entries(e).filter((function(e){var t=Object(o.a)(e,2);t[0];return""!==t[1]})),c=Object.fromEntries(t);return O.a.get(function(e){var t=T.expand({q:Object(h.a)({},e)});return console.log("url is:",t),t}(c)).then(M).catch(q)}function H(e){var t=e.user,c=e.book,a=(e.search,e.type,t.publicBookshelf.shelves);return Object(u.jsx)("div",{className:"book-shelf-changer",children:Object(u.jsxs)("select",{onChange:function(e){return S(e.target.value,c)},children:[Object(u.jsx)("option",{selected:!0,disabled:!0,children:"Save to: "}),a.map((function(e){return Object(u.jsx)("option",{value:e._id,children:e.name})}))]})})}function z(e){var t=e.results;console.log("props: ",t);var c=e.user;c.publicBookshelf.shelves;function a(e){return{backgroundImage:"url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}return console.log("these are the results",t),console.log("user from search results: ",e.user),Object(u.jsx)("div",{className:"bookshelf",children:Object(u.jsx)("div",{className:"bookshelf-books",children:Object(u.jsx)("ol",{className:"books-grid",children:t.map((function(e){return Object(u.jsxs)("div",{className:"book",children:[Object(u.jsxs)("div",{className:"book-top",children:[(t=e,Object(u.jsx)("div",{className:"flip-card",children:Object(u.jsxs)("div",{className:"flip-card-inner",children:[Object(u.jsx)("div",{className:"book-cover flip-card-front",style:t.coverUrl?a(t.coverUrl):a(f),alt:"book cover"},t.coverUrl),Object(u.jsx)("div",{className:"flip-card-back",children:Object(u.jsx)(i.b,{to:{pathname:"/details/".concat(t._id),query:{book:t,user:c}},className:"link-tag",style:{position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",height:"100%"}})})]})})),Object(u.jsx)(H,{book:e,user:c,search:!0,type:"book"})]}),Object(u.jsx)("div",{className:"book-title",children:e.title},e.title),Object(u.jsx)("div",{className:"book-author",children:e.author},e.author)]},e._id);var t}))})})})}c(164);var W=function(){return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsxs)("div",{className:"spinner",children:[Object(u.jsx)("div",{className:"bounce1"}),Object(u.jsx)("div",{className:"bounce2"}),Object(u.jsx)("div",{className:"bounce3"})]})})};var Y=function(e){var t=Object(a.useState)({q:"",title:"",author:"",subject:"",place:"",person:"",language:"",publisher:""}),c=Object(o.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(!1),l=Object(o.a)(r,2),i=l[0],b=l[1],d=Object(a.useState)(!1),m=Object(o.a)(d,2),O=m[0],p=m[1],v=Object(a.useState)([]),x=Object(o.a)(v,2),f=x[0],g=x[1];function k(e){var t=e.target,c=t.name,a=t.value;n(Object(h.a)(Object(h.a)({},s),{},Object(j.a)({},c,a)))}function N(e){console.log("test"),e.preventDefault(),p(!0),D(s).then((function(e){g(e.data.docs.map((function(e){var t={author:e.author_name,title:e.title,_id:e.key.replace("/works/",""),olLink:"https://openlibrary.org".concat(e.key)};return e.cover_edition_key&&(t.coverUrl="https://covers.openlibrary.org/b/olid/".concat(e.cover_edition_key,"-M.jpg")),t}))),p(!1)})).catch((function(e){return console.log(e)}))}return console.log("user from main search: ",e.user),Object(u.jsx)("div",{className:"searchPageMain",children:Object(u.jsxs)("div",{className:"searchPage",children:[Object(u.jsxs)("form",{onSubmit:N,className:"searchForm",children:[Object(u.jsx)("label",{for:"searchbar-label"}),Object(u.jsx)("input",{className:"searchbarInput",type:"search",pattern:".*\\S.*",required:!0,onChange:k,name:"q",value:s.q}),Object(u.jsx)("span",{className:"caret"})]}),Object(u.jsxs)("div",{className:"searchFormContainer",children:[Object(u.jsx)("a",{href:"#",onClick:function(e){return b(!i)},children:" Advanced search"}),i&&Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){N(e),b(!i)},className:"advLoginForm",children:[Object(u.jsxs)("div",{className:"inputsSearch",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title "}),Object(u.jsx)("input",{type:"text",onChange:k,name:"title",value:s.title})]}),Object(u.jsxs)("div",{className:"inputsSearch",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Author "}),Object(u.jsx)("input",{type:"text",onChange:k,name:"author",value:s.author})]}),Object(u.jsxs)("div",{className:"inputsSearch",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Subject "}),Object(u.jsx)("input",{type:"text",onChange:k,name:"subject",value:s.subject})]}),Object(u.jsxs)("div",{className:"inputsSearch",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Place "}),Object(u.jsx)("input",{type:"text",onChange:k,name:"place",value:s.place})]}),Object(u.jsxs)("div",{className:"inputsSearch",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Person "}),Object(u.jsx)("input",{type:"text",onChange:k,name:"person",value:s.person})]}),Object(u.jsxs)("div",{className:"inputsSearch",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Language "}),Object(u.jsx)("input",{type:"text",onChange:k,name:"language",value:s.language})]}),Object(u.jsxs)("div",{className:"inputsSearch",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Publisher "}),Object(u.jsx)("input",{type:"text",onChange:k,name:"publisher",value:s.publisher})]}),Object(u.jsx)("div",{className:"inputsSearch",children:Object(u.jsx)("button",{type:"submit",children:"Search"})})]})}),O?Object(u.jsx)(W,{}):Object(u.jsx)(z,{results:f,user:e.user})]})]})})},J=c(55),G=["exact","to","path","component"],V=function(e){var t=e.exact,c=e.to,a=e.path,s=e.component,n=Object(J.a)(e,G),r=s;return Object(u.jsx)(l.b,{exact:t,path:a||c,render:function(e){return Object(u.jsx)(r,Object(h.a)(Object(h.a)({},n),e))}})},K=["user","exact","to","path","component"],Q=function(e){var t=e.user,c=e.exact,a=e.to,s=e.path,n=e.component,r=Object(J.a)(e,K),o=n;return t?Object(u.jsx)(l.b,{exact:c,path:s||a,render:function(e){return Object(u.jsx)(o,Object(h.a)(Object(h.a)(Object(h.a)({},r),e),{},{user:t}))}}):Object(u.jsx)(l.a,{to:"/auth/login"})};var X=c(81);var Z=function(e){var t=e.match.params.ebookId;console.log("eBookId",t);var c=Object(a.useState)(""),s=Object(o.a)(c,2),n=s[0],r=s[1];return Object(a.useEffect)((function(){(function(e){return x.get("/getBook/".concat(e)).then(v).catch(p)})(t).then((function(e){console.log(e.data),r(e.data)}))}),[]),Object(u.jsx)("div",{style:{height:"100vh"},children:Object(u.jsxs)("div",{style:{position:"relative",height:"100%"},children:[" ",Object(u.jsx)(X.ReactReader,{url:n.ebookUrl,title:n.title,location:"epubcfi(/6/2[cover]!/6)",locationChanged:function(e){return console.log(e)}})]})})};function $(e){return{status:!1,errorMessage:"Internal server error. Please check your server"}}function ee(e){return{status:!0,data:e.data}}var te=O.a.create({baseURL:"".concat("https://mm-best-reads.herokuapp.com/api","/reviews")});c(278);var ce=function(e){var t=e.user,c=e.bookId,s={owner:t&&t._id,comment:"",bookId:c,rating:null},n=Object(a.useState)(s),r=Object(o.a)(n,2),l=r[0],i=r[1];function b(e){i(Object(h.a)(Object(h.a)({},l),{},{rating:e.target.value}))}return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),function(e){var t=e.bookId,c=e.owner,a=e.comment,s=e.rating;return te.post("/".concat(t,"/new-review"),{owner:c,comment:a,rating:s}).then(ee).catch($)}(l).then((function(e){return console.log("review submitted: ",e)})).catch((function(e){return console.log(e)}))},className:"row",children:[Object(u.jsxs)("div",{id:"like",class:"rating",children:[Object(u.jsx)("input",{onClick:b,type:"radio",id:"heart_5",name:"like",value:"5"}),Object(u.jsx)("label",{for:"heart_5",title:"Five",children:"\u2764"}),Object(u.jsx)("input",{onClick:b,type:"radio",id:"heart_4",name:"like",value:"4"}),Object(u.jsx)("label",{for:"heart_4",title:"Four",children:"\u2764"}),Object(u.jsx)("input",{onClick:b,type:"radio",id:"heart_3",name:"like",value:"3"}),Object(u.jsx)("label",{for:"heart_3",title:"Three",children:"\u2764"}),Object(u.jsx)("input",{onClick:b,type:"radio",id:"heart_2",name:"like",value:"2"}),Object(u.jsx)("label",{for:"heart_2",title:"Two",children:"\u2764"}),Object(u.jsx)("input",{onClick:b,type:"radio",id:"heart_1",name:"like",value:"1"}),Object(u.jsx)("label",{for:"heart_1",title:"One",children:"\u2764"})]}),Object(u.jsxs)("div",{className:"review-section",children:[Object(u.jsx)("h3",{children:"Review this book "}),Object(u.jsx)("textarea",{value:l.comment,name:"comment",onChange:function(e){var t=e.target,c=t.name,a=t.value;i(Object(h.a)(Object(h.a)({},l),{},Object(j.a)({},c,a)))},required:!0,className:"form-control",cols:"32",rows:"6",placeholder:"What did you think?"}),Object(u.jsx)("button",{type:"submit",children:"Review"})]})]})})};c(279);var ae=function(e){var t=e.match.params.bookId,c=e.user,s=Object(a.useState)({}),n=Object(o.a)(s,2),r=n[0],l=n[1],i=Object(a.useState)([]),b=Object(o.a)(i,2),j=b[0],h=b[1];return Object(a.useEffect)((function(){var e;(e=t,O.a.get("https://openlibrary.org/search.json?q=".concat(e,"&limit=50")).then(M).catch(q)).then((function(e){return l(function(e){var t={author:e.author_name,title:e.title,_id:e.key.replace("/works/",""),olLink:"https://openlibrary.org".concat(e.key)};return e.cover_edition_key&&(t.coverUrl="https://covers.openlibrary.org/b/olid/".concat(e.cover_edition_key,"-L.jpg")),t}(e.data.docs[0]))})),function(e){return te.get("/".concat(e,"/reviews")).then(ee).catch($)}(t).then((function(e){return h(e.data)}))}),[t]),Object(u.jsxs)("div",{className:"details-page-container",children:[Object(u.jsxs)("div",{className:"details-main",children:[Object(u.jsx)("h2",{children:r.title}),Object(u.jsx)("img",{src:r.coverUrl,alt:""}),Object(u.jsx)("a",{href:r.olLink,target:"blank",children:"See Open Library page"}),Object(u.jsx)(ce,{user:c,bookId:t})]}),Object(u.jsx)("div",{className:"details-reviews",children:j.map((function(e){return Object(u.jsxs)("div",{className:"review-comments",children:[Object(u.jsxs)("h6",{children:[e.rating," \u2764"]}),Object(u.jsxs)("p",{children:['"',e.comment,'"']})]})}))})]})};var se=function(e){var t=e.user,c=(e.setUser,Object(a.useState)(t.username)),s=Object(o.a)(c,2),n=(s[0],s[1],Object(a.useState)(t.privateBookshelf)),r=Object(o.a)(n,2),l=r[0],b=r[1],j=Object(a.useState)(),h=Object(o.a)(j,2),d=(h[0],h[1]);function m(){localStorage.getItem(I);F().then((function(e){e.data?(b(e.data.user.privateBookshelf),d(e.data.user.privateBookshelf.shelves)):console.log("RES IN CASE OF FAILURE",e)}))}var O=Object(a.useState)(l),p=Object(o.a)(O,2),v=p[0],x=p[1];return Object(a.useEffect)((function(){x(l)}),[l]),Object(a.useEffect)((function(){m()}),[]),Object(u.jsxs)("div",{className:"bookshelf-main-page",children:[Object(u.jsx)("div",{className:"bookshelf-name",children:Object(u.jsxs)("h1",{class:"cloud-text",children:[t.username,"'s private bookshelf"]})}),Object(u.jsx)("div",{className:"list-books-title",children:Object(u.jsxs)("div",{className:"link-to-create-card",children:[Object(u.jsx)("div",{className:"library-gif"}),Object(u.jsxs)("div",{class:"product-details",children:[Object(u.jsx)("h1",{children:"Your own library, always with you."}),Object(u.jsx)("p",{children:"Add your own ebooks, organize your collection in personalized shelves, and read online."}),Object(u.jsxs)("div",{className:"buttons-div-bs",children:[Object(u.jsx)(i.b,{className:"create-ebook-button",to:"/ebook/create",children:"Add an ebook"}),Object(u.jsx)(i.b,{className:"create-shelf-button",children:"Create a new shelf"})]})]})]})}),v&&v.shelves&&v.shelves.length>0&&v.shelves.map((function(t){return Object(u.jsxs)("div",{className:"bookshelf",children:[Object(u.jsx)("h3",{className:"cloud-title",children:t.name}),Object(u.jsx)("div",{className:"bookshelf-books",children:Object(u.jsx)("ol",{className:"books-grid",children:t.ebooks&&t.ebooks.map((function(c){return Object(u.jsx)(w,{book:c,user:e.user,bsType:"private",bookshelf:l,shelf:t._id,updateUser:m})}))})})]},t._id)}))]})};c(280);var ne=function(e){var t=e.user,c=(e.setUser,Object(a.useState)(t.username)),s=Object(o.a)(c,2),n=(s[0],s[1],Object(a.useState)(t.publicBookshelf)),r=Object(o.a)(n,2),l=r[0],i=r[1],b=Object(a.useState)(),j=Object(o.a)(b,2),h=(j[0],j[1]);function d(){localStorage.getItem(I);F().then((function(e){e.data?(i(e.data.user.publicBookshelf),h(e.data.user.publicBookshelf.shelves)):console.log("RES IN CASE OF FAILURE",e)}))}console.log(l);var m=Object(a.useState)(l),O=Object(o.a)(m,2),p=O[0],v=O[1];return Object(a.useEffect)((function(){v(l)}),[l]),Object(a.useEffect)((function(){d()}),[]),Object(u.jsxs)("div",{className:"bookshelf-main-page",children:[Object(u.jsx)("div",{className:"bookshelf-name",children:Object(u.jsxs)("h1",{class:"cloud-text",children:[t.username,"'s public bookshelf"]})}),Object(u.jsx)("div",{className:"list-books-shelf",children:p&&p.shelves&&p.shelves.length>0&&p.shelves.map((function(t){return Object(u.jsxs)("div",{className:"bookshelf",children:[Object(u.jsx)("h3",{className:"cloud-title",children:t.name}),Object(u.jsx)("div",{className:"bookshelf-books",children:Object(u.jsx)("ol",{className:"books-grid",children:t.books&&t.books.map((function(c){return Object(u.jsx)(w,{book:c,user:e.user,bsType:"public",updateUser:d,bookshelf:l,shelf:t._id})}))})})]},t._id)}))})]})};c(281);var re=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){var e=localStorage.getItem(I);e||s(null),F().then((function(e){e.data?s(e.data.user):(console.log("RES IN CASE OF FAILURE",e),s(null))}))}),[]);var n=function(e){console.log(e),s(e)};return console.log("user from app: ",c),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{handleLogout:function(){var e=localStorage.getItem(I);e||s(null),E.delete("/logout",{headers:{Authorization:localStorage.getItem(I)}}).then(L).catch(_).then((function(e){e.status||console.error("\ud83d\udca1 SOMETHING HAPPENED THAT HAS TO DEALT WITH",e),localStorage.removeItem(I),s(null)}))},component:b,user:c}),Object(u.jsxs)(l.d,{children:[Object(u.jsx)(V,{exact:!0,path:"/",authenticate:n,component:A}),Object(u.jsx)(V,{exact:!0,path:"/",user:c,authenticate:n,component:A}),Object(u.jsx)(V,{exact:!0,path:"/auth/signup",user:c,authenticate:n,component:B}),Object(u.jsx)(V,{exact:!0,path:"/auth/login",user:c,authenticate:n,component:P}),Object(u.jsx)(V,{exact:!0,path:"/details/:bookId",user:c,component:ae}),Object(u.jsx)(Q,{exact:!0,path:"/review/:bookId",user:c,component:ce}),Object(u.jsx)(Q,{exact:!0,path:"/search",component:Y,user:c}),Object(u.jsx)(Q,{exact:!0,path:"/user/privateBookshelf",component:se,user:c,setUser:s}),Object(u.jsx)(Q,{exact:!0,path:"/user/publicBookshelf",component:ne,user:c,setUser:s}),Object(u.jsx)(Q,{exact:!0,path:"/ebook/create",component:C,user:c})]})]})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/reader/:ebookId",component:Z}),Object(u.jsx)(re,{})]})})}),document.getElementById("root"))},40:function(e,t,c){},59:function(e,t,c){},84:function(e,t,c){}},[[282,1,2]]]);
//# sourceMappingURL=main.1ca0eef2.chunk.js.map