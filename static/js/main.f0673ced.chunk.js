(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={button:"Header_button__2v_O-"}},17:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),i=n(4),s=n.n(i),d=(n(17),n(18),n(3)),o=n(12),l=n(2);!function(e){e.SET_CARDS="cardsReducer/SET_CARDS",e.START_GAME="cardsReducer/START_GAME",e.OPEN_CARDS="cardsReducer/OPEN_CARDS",e.SET_WITH_PAIR="cardsReducer/SET_WITH_PAIR",e.RESET_OPEN_CARDS="cardsReducer/RESET_OPEN_CARDS"}(c||(c={}));var j="SCREEN_START",u="SCREEN_GAME",b={cards:[],delay:1e3,isRunning:!1,openCards:[],screen:j,time:5e3,totalClicks:0,totalPairs:0},O=function(e,t){return{type:c.OPEN_CARDS,card:e,open:t}},p=n(10),f=n.n(p),m=n(1),v=function(e){var t=e.screen,n=void 0===t?j:t,c=(e.time,e.totalClicks),r=void 0===c?0:c,a=e.totalPairs,i=void 0===a?0:a,s=e.startGame;return Object(m.jsxs)("div",{children:[n===j?Object(m.jsx)("button",{className:f.a.button,onClick:s,children:"Click to start"}):"SCREEN_END"===n?Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:"well down"})}):Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px",marginBottom:"100px",color:"white"},children:[Object(m.jsx)("div",{style:{marginRight:"50px"},children:"Time"}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsxs)("div",{children:["TOTAL MOVES: ",Object(m.jsx)("span",{children:r})]}),Object(m.jsxs)("div",{children:["FOUND PAIRS: ",Object(m.jsx)("span",{children:i})]})]})]}),Object(m.jsx)("div",{})]})},x=n(5),h=n.n(x),C=n(11),_=n.n(C),E=n.p+"static/media/obl.cc8e49c0.jpg",R=function(e){var t=e.name;return Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsx)("div",{children:t}),Object(m.jsx)("img",{src:E,alt:"",style:{width:"50px"}})]})},S=n.p+"static/media/tuz.051ec6cd.jpg",T=function(e){var t=e.name;return Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsx)("div",{children:t}),Object(m.jsx)("img",{src:S,alt:"",style:{width:"50px"}})]})},A=n(26),P=function(){var e=Object(d.c)((function(e){return e.cardsPage})),t=e.cards,n=(e.delay,e.isRunning,e.openCards),a=e.screen,i=e.time,s=e.totalClicks,o=e.totalPairs,j=Object(d.b)();Object(r.useEffect)((function(){var e,t,r,a;(n.length>2&&(j({type:c.RESET_OPEN_CARDS}),j(O(n[2],!0))),(null===(e=n[0])||void 0===e?void 0:e.name)===(null===(t=n[1])||void 0===t?void 0:t.name))&&j((a=null===(r=n[0])||void 0===r?void 0:r.name,{type:c.SET_WITH_PAIR,name:a}));console.log(n)}),[n.length]),Object(r.useEffect)((function(){a===u&&b()}),[a]);var b=function(){var e=function(e){return{type:c.SET_CARDS,cards:e}}(function(e){for(var t=[],n=0;n<e;n++)t.push({id:Object(A.a)(),name:"card_".concat(n),open:!1,withPair:!1});return(t=t.concat(t.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{id:Object(A.a)()})})))).sort((function(){return Math.random()-.5}))}(9));j(e)};return Object(m.jsx)("div",{className:h.a.container,children:Object(m.jsxs)("div",{children:[Object(m.jsx)(v,{startGame:function(){var e=function(e){return{type:c.START_GAME,screen:e}}(u);j(e)},screen:a,time:i,totalClicks:s,totalPairs:o}),Object(m.jsx)("div",{className:h.a.wrapperCards,children:t.map((function(e,t){return Object(m.jsx)("div",{className:h.a.container,children:Object(m.jsxs)(_.a,{isFlipped:e.open,flipDirection:"vertical",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(T,{name:e.name}),Object(m.jsx)("button",{onClick:function(){j(O(e,!0))},children:"Back to flip"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(R,{name:e.name}),Object(m.jsx)("button",{disabled:e.withPair,onClick:function(){j(O(e,!1))},children:"Front to flip"})]})]},e.id)})}))})]})})};var g=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(P,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},D=n(9),N=Object(D.a)({cardsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_CARDS:return Object(l.a)(Object(l.a)({},e),{},{totalClicks:0,totalPairs:0,cards:t.cards});case c.START_GAME:return Object(l.a)(Object(l.a)({},e),{},{screen:t.screen});case c.OPEN_CARDS:return Object(l.a)(Object(l.a)({},e),{},{openCards:function(){if(t.open)return e.openCards[0]&&e.openCards[0].id===t.card.id?e.openCards:[].concat(Object(o.a)(e.openCards),[t.card]);var n;if(!t.open&&(null===(n=e.openCards[0])||void 0===n?void 0:n.id)===t.card.id)return[];return e.openCards}(),cards:e.cards.map((function(e){return e.id===t.card.id?Object(l.a)(Object(l.a)({},e),{},{open:t.open}):e})),totalClicks:e.totalClicks+1});case c.SET_WITH_PAIR:return Object(l.a)(Object(l.a)({},e),{},{openCards:[],cards:e.cards.map((function(e){return e.name===t.name?Object(l.a)(Object(l.a)({},e),{},{withPair:!0}):e})),totalPairs:e.totalPairs+1});case c.RESET_OPEN_CARDS:return Object(l.a)(Object(l.a)({},e),{},{openCards:[],cards:e.cards.map((function(e){return e.withPair?e:e.open?Object(l.a)(Object(l.a)({},e),{},{open:!1}):e}))});default:return e}}}),w=Object(D.b)(N);s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(d.a,{store:w,children:Object(m.jsx)(g,{})})}),document.getElementById("root")),y()},5:function(e,t,n){e.exports={container:"Start_container__2JaU7",wrapperCards:"Start_wrapperCards__3REYt"}}},[[24,1,2]]]);
//# sourceMappingURL=main.f0673ced.chunk.js.map