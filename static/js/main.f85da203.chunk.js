(this["webpackJsonpredux-tutorial"]=this["webpackJsonpredux-tutorial"]||[]).push([[0],{102:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=a(164),i=(a(102),a(27)),u=a(11),s=a(160),m=a(130),d=a(158),p=a(165),f=a(33),g=a(157),E=a(77),v=a.n(E),b=a(156),h=Object(b.a)((function(e){return{withChildren:{"& > div":{visibility:"initial",height:"100%",display:"grid",justifyItems:"center",alignContent:"center",gridRowGap:e.spacing(1)}}}})),y=Object(n.memo)((function(e){var t=e.src,a=e.alt,n=e.height,c=e.isLoading,o=e.isError,l=e.onLoad,i=e.onError,u=h();return r.a.createElement(r.a.Fragment,null,(c||o)&&r.a.createElement(g.a,{variant:"rect",width:"100%",height:n||"100%",animation:!o&&"pulse",classes:u},o&&r.a.createElement(m.a,{variant:"body1",color:"textSecondary",component:"div"},r.a.createElement(v.a,null),r.a.createElement("span",null,"No image"))),!o&&r.a.createElement("img",{style:{width:"100%",display:c?"none":"block",height:"100%",objectFit:"cover"},src:t,alt:a||"Movie poster",onLoad:l,onError:i}))})),j=function(e){var t=e.src,a=e.alt,c=e.height,o=Object(n.useState)(!0),l=Object(f.a)(o,2),i=l[0],u=l[1],s=Object(n.useState)(!1),m=Object(f.a)(s,2),d=m[0],p=m[1],g=Object(n.useCallback)((function(){u(!1),p(!1)}),[]),E=Object(n.useCallback)((function(){u(!1),p(!0)}),[]);return r.a.createElement(y,{src:t,alt:a,height:c,isLoading:i,isError:d,onLoad:g,onError:E})},O=Object(n.memo)((function(e){var t=e.entity;return r.a.createElement(p.a,{mb:2},r.a.createElement(m.a,{variant:"h4",gutterBottom:!0},t?t.Title:r.a.createElement(g.a,{width:"60%"})),r.a.createElement(m.a,{variant:"subtitle1",color:"textSecondary"},t?"".concat(t.Type.toUpperCase()," \u2022 ").concat(t.Year):r.a.createElement(g.a,{width:"20%"})))})),w=Object(n.memo)((function(e){var t=e.entity;return r.a.createElement(m.a,{variant:"body1"},t?t.Plot:r.a.createElement(r.a.Fragment,null,Array.from(new Array(3)).map((function(e,t){return r.a.createElement(g.a,{key:t})})),r.a.createElement(g.a,{width:"50%"})))})),x=function(e){var t=e.loading,a=e.label,n=e.value,c=e.first;return t||n?r.a.createElement(p.a,{mt:c?0:2},n?r.a.createElement(m.a,{variant:"body1"},r.a.createElement(p.a,{component:"span",display:"flex"},r.a.createElement(p.a,{component:"span",fontWeight:"fontWeightBold",mr:1.5},a,":"),r.a.createElement("span",null,n))):r.a.createElement(g.a,{width:"80%"})):null},C=function(e){var t=e.entity,a=e.loading;return r.a.createElement(p.a,{mt:3},r.a.createElement(x,{loading:a,label:"Director",value:null===t||void 0===t?void 0:t.Director,first:!0}),r.a.createElement(x,{loading:a,label:"Writer",value:null===t||void 0===t?void 0:t.Writer}),r.a.createElement(x,{loading:a,label:"Actors",value:null===t||void 0===t?void 0:t.Actors}))},k=a(159),R=Object(n.memo)((function(e){var t=e.entity;return r.a.createElement(d.a,{container:!0,spacing:3},(t?t.Ratings.slice(0,3):Array.from(new Array(3))).map((function(e,t){return r.a.createElement(r.a.Fragment,{key:(null===e||void 0===e?void 0:e.Source)||t},!!t&&r.a.createElement(k.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement(p.a,{py:2},r.a.createElement(m.a,{variant:"h5",gutterBottom:!0,component:"div"},r.a.createElement(p.a,{textAlign:"center"},e?e.Value:r.a.createElement(g.a,{width:"40%",style:{margin:"auto"}}))),r.a.createElement(m.a,{variant:"body1",component:"div"},r.a.createElement(p.a,{textAlign:"center"},e?e.Source:r.a.createElement(g.a,{width:"80%",style:{margin:"auto"}}))))))})))})),S=function(e){var t=e.entity,a=e.loading;return r.a.createElement(d.a,{container:!0,spacing:1},r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(x,{loading:a,label:"Awards",value:null===t||void 0===t?void 0:t.Awards,first:!0}),r.a.createElement(x,{loading:a,label:"Rating",value:null===t||void 0===t?void 0:t.Rated}),r.a.createElement(x,{loading:a,label:"Release Date",value:null===t||void 0===t?void 0:t.Released}),r.a.createElement(x,{loading:a,label:"Runtime",value:null===t||void 0===t?void 0:t.Runtime}),r.a.createElement(x,{loading:a,label:"Genre",value:null===t||void 0===t?void 0:t.Genre})),r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(x,{loading:a,label:"Language",value:null===t||void 0===t?void 0:t.Language,first:!0}),r.a.createElement(x,{loading:a,label:"Country",value:null===t||void 0===t?void 0:t.Country}),r.a.createElement(x,{loading:a,label:"DVD Release Date",value:null===t||void 0===t?void 0:t.DVD}),r.a.createElement(x,{loading:a,label:"Box Office Collection",value:null===t||void 0===t?void 0:t.BoxOffice}),r.a.createElement(x,{loading:a,label:"Production",value:null===t||void 0===t?void 0:t.Production})))},T=function(e){var t=e.entity,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{container:!0,spacing:5},r.a.createElement(d.a,{item:!0,xs:12,sm:5,md:3},r.a.createElement(j,{src:null===t||void 0===t?void 0:t.Poster,alt:null===t||void 0===t?void 0:t.Title,height:350})),r.a.createElement(d.a,{item:!0,xs:12,sm:7,md:9},r.a.createElement(O,{entity:t}),r.a.createElement(w,{entity:t}),r.a.createElement(C,{entity:t,loading:a}))),r.a.createElement(p.a,{my:7},r.a.createElement(R,{entity:t})),r.a.createElement(p.a,{mt:3},r.a.createElement(S,{entity:t,loading:a})))},F=Object(n.memo)((function(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),null})),B=function(e){var t=e.entity,a=e.error,n=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),r.a.createElement(s.a,null,a?r.a.createElement(m.a,{variant:"body1",color:"textSecondary"},a):r.a.createElement(T,{entity:t,loading:n})))},L=a(23),N=a.n(L),D=a(34),A=a(21),M=a(61),P=a(47),I=a.n(P);I.a.defaults.baseURL="https://www.omdbapi.com/",I.a.interceptors.request.use((function(e){return e.params=Object(A.a)({apikey:"e30c3fda"},e.params),e}),(function(e){return Promise.reject(e)}));var G,q=function(){return I.a.CancelToken.source()},W=I.a,V={fetchBySearch:function(){var e=Object(D.a)(N.a.mark((function e(){var t,a,n,r,c,o,l,i,u=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"",a=u.length>1&&void 0!==u[1]?u[1]:1,n=u.length>2&&void 0!==u[2]?u[2]:"",r=u.length>3?u[3]:void 0,e.next=6,W.get("/",{params:{s:t,page:a,type:n},cancelToken:r});case 6:if(c=e.sent,o=c.data,l=o.Response,o.Error,i=Object(M.a)(o,["Response","Error"]),"False"!==l){e.next=11;break}throw new Error("No results found");case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchByID:function(){var e=Object(D.a)(N.a.mark((function e(t,a){var n,r,c,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("/",{params:{i:t,plot:"full"},cancelToken:a});case 2:if(n=e.sent,r=n.data,c=r.Response,r.Error,o=Object(M.a)(r,["Response","Error"]),"False"!==c){e.next=7;break}throw new Error("No result found");case 7:return e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},U=function(e,t){switch(t.type){case"start":return{loading:!0,error:null,data:null};case"success":return Object(A.a)({},e,{loading:!1,data:t.payload});case"error":return Object(A.a)({},e,{loading:!1,error:t.payload});default:throw new Error("undefined action")}},_=function(){var e=function(e){var t=Object(n.useReducer)(U,{loading:!1,error:null,data:null}),a=Object(f.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){c({type:"start"});var t=q();return function(){var a=Object(D.a)(N.a.mark((function a(){var n;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,V.fetchByID(e,t.token);case 3:n=a.sent,c({type:"success",payload:n}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),W.isCancel(a.t0)||c({type:"error",payload:a.t0.message});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()(),function(){t.cancel()}}),[e]),r}(Object(u.h)().id),t=e.data,a=e.error,c=e.loading;return r.a.createElement(B,{entity:t,error:a,loading:c})},H=a(161),z=a(168),J=a(162),Y=a(78),Z=a.n(Y),$=a(169),K=Object(b.a)((function(e){return{root:{padding:"2px 4px 2px 10px",display:"flex",alignItems:"center",maxWidth:600},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}})),Q=Object(n.memo)((function(e){var t=e.inputRef,a=e.input,n=e.setInput,c=e.error,o=e.onSubmit,l=K();return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{component:"form",className:l.root,onSubmit:o},r.a.createElement(z.a,{inputRef:t,className:l.input,placeholder:"Search movies",inputProps:{"aria-label":"search movies"},value:a,onChange:function(e){return n(e.target.value)}}),r.a.createElement(k.a,{className:l.divider,orientation:"vertical"}),r.a.createElement(J.a,{className:l.iconButton,"aria-label":"search",type:"submit"},r.a.createElement(Z.a,null))),c&&r.a.createElement($.a,{error:!0},c))})),X=a(16),ee=function(){var e=Object(X.d)((function(e){return e.filter.searchTerm})),t=Object(n.useState)(""),a=Object(f.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(),i=Object(f.a)(l,2),s=i[0],m=i[1],d=Object(n.useRef)(null),p=Object(u.f)();Object(n.useEffect)((function(){o(e)}),[e]);var g=Object(n.useCallback)((function(t){t.preventDefault(),m(""),c.length<3?m("Minimum 3 chars"):(d.current&&d.current.blur(),c!==e&&p.push("/?search=".concat(c)))}),[p,c,e]);return r.a.createElement(Q,{inputRef:d,input:c,setInput:o,error:s,onSubmit:g})},te=Object(n.memo)((function(){return r.a.createElement(m.a,{variant:"subtitle1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt labore nihil non hic distinctio harum voluptas sequi quidem asperiores sunt dolorum, maiores maxime a nam tempora ipsum fugit nemo! Recusandae? Veritatis ex dolore magni atque quisquam voluptatem, delectus assumenda officiis nobis explicabo odio alias cupiditate sunt nesciunt labore autem. Iusto, quisquam.")})),ae=a(81),ne=a.n(ae),re=a(82),ce=a.n(re),oe=a(83),le=a.n(oe),ie=a(170),ue=function(e){var t=e.value,a=e.label,n=e.icon,c=e.type,o=e.onClick,l=e.onDelete;return r.a.createElement(ie.a,{label:a,icon:n,color:c===t?"secondary":"default",onClick:function(){return o(t)},onDelete:c===t?l:null})},se=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{marginRight:e.spacing(1)}}}})),me=Object(n.memo)((function(e){var t=e.type,a=e.onFilter,n=e.onResetFilter,c=se(),o=function(e){e!==t&&a(e)},l=function(){t&&n()};return r.a.createElement("div",{className:c.root},r.a.createElement(ue,{value:"movie",label:"Movie",icon:r.a.createElement(ne.a,null),type:t,onClick:o,onDelete:l}),r.a.createElement(ue,{value:"series",label:"Series",icon:r.a.createElement(ce.a,null),type:t,onClick:o,onDelete:l}),r.a.createElement(ue,{value:"episode",label:"Episode",icon:r.a.createElement(le.a,null),type:t,onClick:o,onDelete:l}))})),de=a(24),pe=a(39),fe=Object(de.b)("".concat("movie","/fetchMoviesBySearch"),function(){var e=Object(D.a)(N.a.mark((function e(t,a){var n,r,c,o,l,i,u,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,r=a.signal,c=q(),r.addEventListener("abort",(function(){return c.cancel()})),o=n().filter,l=o.searchTerm,i=o.page,u=o.type,e.next=6,V.fetchBySearch(l,i,u,c.token);case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ge=Object(de.c)({name:"movie",initialState:{entities:[],totalEntities:0,error:"",loading:!1},reducers:{resetMovies:function(e){return Object(A.a)({},e,{entities:[],totalEntities:0,error:""})}},extraReducers:(G={},Object(pe.a)(G,fe.pending,(function(e){e.loading=!0})),Object(pe.a)(G,fe.fulfilled,(function(e,t){e.entities=t.payload.Search,e.totalEntities=t.payload.totalResults,e.error="",e.loading=!1})),Object(pe.a)(G,fe.rejected,(function(e,t){e.entities=[],e.totalEntities=0,e.error=t.error.message,e.loading=!1})),G)}),Ee=ge.actions.resetMovies,ve=ge.reducer,be=Object(de.c)({name:"filter",initialState:{searchTerm:"",page:1,type:""},reducers:{setSearchTerm:function(e,t){return Object(A.a)({},e,{searchTerm:t.payload,page:1})},resetFilters:function(){return{searchTerm:"",page:1,type:""}},setPageState:function(e,t){return Object(A.a)({},e,{page:t.payload})},setTypeState:function(e,t){return Object(A.a)({},e,{type:t.payload,page:1})}}}),he=be.actions,ye=he.setSearchTerm,je=he.resetFilters,Oe=he.setPageState,we=he.setTypeState,xe=Object(de.b)("".concat("filter","/search"),(function(e,t){var a=t.dispatch;a(ye(e)),a(fe())})),Ce=Object(de.b)("".concat("filter","/resetSearch"),(function(e,t){var a=t.dispatch;a(je()),a(Ee())})),ke=Object(de.b)("".concat("filter","/setPage"),(function(e,t){var a=t.dispatch;a(Oe(e)),a(fe())})),Re=Object(de.b)("".concat("filter","/setType"),(function(e,t){var a=t.dispatch;a(we(e)),a(fe())})),Se=be.reducer,Te=function(){var e=Object(X.d)((function(e){return e.filter.type})),t=Object(X.c)(),a=Object(n.useRef)(),c=Object(n.useCallback)((function(e){a.current&&a.current.abort(),a.current=t(Re(e))}),[t]),o=Object(n.useCallback)((function(){a.current&&a.current.abort(),a.current=t(Re(""))}),[t]);return r.a.createElement(me,{type:e,onFilter:c,onResetFilter:o})},Fe=function(e){var t=e.totalEntities,a=e.error;return e.loading?r.a.createElement(g.a,{height:20,width:"25%"}):r.a.createElement(m.a,{variant:"body2",color:"textSecondary"},a||"".concat(t," results found"))},Be=a(132),Le=a(84),Ne=a.n(Le),De=Object(b.a)((function(e){return{root:{display:"grid",gridTemplateRows:"350px max-content auto",justifyContent:"normal",alignItems:"start",gridRowGap:e.spacing(1),"&:hover, &:focus":{backgroundColor:Ne.a[300]}}}})),Ae=function(e){var t=e.entity,a=De(),n=Object(u.f)();return r.a.createElement(Be.a,{className:a.root,onClick:t?function(){return e=t.imdbID,void n.push("/".concat(e));var e}:null},r.a.createElement(j,{src:null===t||void 0===t?void 0:t.Poster,alt:null===t||void 0===t?void 0:t.Title}),r.a.createElement(m.a,{component:"div"},r.a.createElement(p.a,{fontSize:17,lineHeight:"normal",mt:1,px:1},t?t.Title:r.a.createElement(g.a,null))),r.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"div"},r.a.createElement(p.a,{px:1,mb:2},t?"".concat(t.Type.toUpperCase()," \u2022 ").concat(t.Year):r.a.createElement(g.a,{width:"60%"}))))},Me=a(167),Pe=Object(b.a)((function(){return{ul:{justifyContent:"center"}}})),Ie=function(e){var t=e.count,a=e.page,n=e.onPageChange,c=Pe();return r.a.createElement(Me.a,{count:t,page:a,onChange:n,size:"large",showFirstButton:!0,showLastButton:!0,classes:c,color:"secondary"})},Ge=function(){var e=Object(X.d)((function(e){return e.filter.page})),t=Object(X.d)((function(e){return Math.ceil(e.movie.totalEntities/10)})),a=Object(X.c)(),c=Object(n.useRef)();return t>1&&r.a.createElement(Ie,{count:t,page:e,onPageChange:function(e,t){c.current&&c.current.abort(),c.current=a(ke(t)),window.scrollTo(0,0)}})},qe=Object(b.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr));",gridColumnGap:e.spacing(4),gridRowGap:e.spacing(8),marginBottom:e.spacing(8)}}})),We=function(e){var t=e.entities,a=e.loading,n=qe();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n.root},(a?Array.from(new Array(3)):t).map((function(e,t){return r.a.createElement(Ae,{entity:e,key:(null===e||void 0===e?void 0:e.imdbID)||t})}))),!a&&r.a.createElement(Ge,null))},Ve=function(e){var t=e.entities,a=e.totalEntities,n=e.error,c=e.loading,o=!(c||n||a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(ee,null)),o?r.a.createElement(s.a,null,r.a.createElement(p.a,{mt:3},r.a.createElement(te,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(p.a,{my:3},r.a.createElement(Te,null))),r.a.createElement(k.a,null),r.a.createElement(s.a,null,r.a.createElement(p.a,{mt:3,mb:5},r.a.createElement(Fe,{totalEntities:a,error:n,loading:c})),r.a.createElement(We,{entities:t,loading:c}))))},Ue=function(){var e=Object(X.d)((function(e){return e.movie}),X.b),t=e.entities,a=e.totalEntities,c=e.error,o=e.loading,l=Object(X.d)((function(e){return e.filter.searchTerm})),i=Object(X.c)(),s=function(){var e=Object(u.g)().search;return new URLSearchParams(e)}().get("search"),m=Object(n.useRef)();return Object(n.useEffect)((function(){s?s!==l&&(m.current&&m.current.abort(),m.current=i(xe(s))):i(Ce())}),[i,s,l]),r.a.createElement(Ve,{entities:t,totalEntities:a,error:c,loading:o})},_e=(a(127),function(e){var t=e.url,a=void 0===t?"https://github.com/batbrain9392":t,n=e.fill,c=void 0===n?"#24292e":n,o=e.color,l=void 0===o?"#fff":o;return r.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:"github-corner","aria-label":"View source on GitHub"},r.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:c,color:l},"aria-hidden":"true"},r.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",className:"octo-arm"}),r.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))}),He=a(163),ze=Object(n.memo)((function(e){var t=e.replace;return r.a.createElement(s.a,null,r.a.createElement(m.a,{variant:"h2"},r.a.createElement(He.a,{color:"inherit",underline:"none",component:i.b,to:"/",replace:t},r.a.createElement("span",{role:"img","aria-label":"popcorn emoji"},"\ud83c\udf7f"),"Movies")))})),Je=function(){var e=Object(u.g)().pathname;return r.a.createElement(ze,{replace:"/"===e})},Ye=a(86),Ze=a.n(Ye),$e=a(87),Ke=a.n($e),Qe=a(166),Xe=Object(b.a)((function(){return{img:{height:24,verticalAlign:"bottom"}}})),et=function(){var e=Xe();return r.a.createElement(s.a,null,r.a.createElement(m.a,{variant:"body1",className:e.root},"Made by"," ",r.a.createElement(Qe.a,{title:"Follow me on Twitter"},r.a.createElement(He.a,{href:"https://twitter.com/batbrain9392",target:"_blank",rel:"noopener noreferrer"},"@batbrain9392"))," ","with",r.a.createElement(Qe.a,{title:"Get started with React"},r.a.createElement(He.a,{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:Ze.a,alt:"React logo",className:e.img}))),r.a.createElement(Qe.a,{title:"Get started with Redux Toolkit"},r.a.createElement(He.a,{href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:Ke.a,alt:"Redux logo",className:e.img})))))},tt=Object(b.a)((function(e){return{root:{minHeight:"100vh",display:"grid",gridTemplateRows:"max-content auto max-content",gridRowGap:e.spacing(5),paddingTop:e.spacing(5),paddingBottom:e.spacing(3)},main:{paddingBottom:e.spacing(5)},footer:{textAlign:"center"}}})),at=function(){var e=tt();return r.a.createElement(r.a.Fragment,null,r.a.createElement(_e,{url:"https://github.com/batbrain9392/redux-tutorial"}),r.a.createElement(i.a,null,r.a.createElement("div",{className:e.root},r.a.createElement("header",null,r.a.createElement(Je,null)),r.a.createElement("main",{className:e.main},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/:id",component:_}),r.a.createElement(u.a,{path:"/",exact:!0,component:Ue}))),r.a.createElement("footer",{className:e.footer},r.a.createElement(et,null)))))},nt=Object(de.a)({reducer:{filter:Se,movie:ve}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null),r.a.createElement(X.a,{store:nt},r.a.createElement(at,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,a){e.exports=a.p+"static/media/react.05a3e30f.svg"},87:function(e,t,a){e.exports=a.p+"static/media/redux.5c7392a9.svg"},97:function(e,t,a){e.exports=a(128)}},[[97,1,2]]]);
//# sourceMappingURL=main.f85da203.chunk.js.map