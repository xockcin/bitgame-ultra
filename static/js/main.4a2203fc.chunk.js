(this["webpackJsonpbitgame-ultra"]=this["webpackJsonpbitgame-ultra"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(10),i=n.n(a),o=(n(83),n(68)),c=n(69),l=n(12),d=n(78),h=n(77),u=(n(84),n(48),n(122)),b=n(70),m=n(2);function j(e,t){return"dec"===t?e.toString(10):"hex"===t?e.toString(16):"ascii"===t?(n=e)<33?["NUL","SOH","STX","ETX","EOT","ENQ","ACK","BEL","BS","TAB","LF","VT","FF","CR","SO","SI","DLE","DC1","DC2","DC3","DC4","NAK","SYN","ETB","CAN","EM","SUB","ESC","FS","GS","RS","US","SP"][n]:127===n?"DEL":String.fromCharCode(n):void 0;var n}var f=function(e){var t=e.steps.map((function(t){return Object(m.jsx)("div",{className:"d-flex justify-content-around m-2",children:Object(m.jsxs)("h3",{className:"align-self-center",children:[Object(m.jsx)(u.a,{className:"m-1 border",variant:"danger",children:t.token}),Object(m.jsx)(u.a,{className:"border",variant:"primary",children:j(t.number,e.mode)})]})})}));return Object(m.jsx)("div",{className:"d-flex",children:t})},g=function(e){return Object(m.jsx)("div",{className:"bg-success text-white border rounded m-4 shadow",children:Object(m.jsx)("h1",{className:"p-1 m-0",children:j(e.origin,e.mode)})})},x=function(e){return Object(m.jsx)("div",{className:"bg-danger text-white border rounded m-4 shadow",onMouseEnter:e.hoverHandler,onMouseLeave:e.unhoverHandler,children:Object(m.jsx)("h1",{className:"p-1 m-0",children:j(e.goal,e.mode)})})},v=function(e){return Object(m.jsx)(b.a,{onClick:e.reset,className:"ml-4 border rounded-pill",size:"sm",variant:e.win?"success":"danger",children:e.win?"Play Again":"Try Again"})},O=function(e){var t=e.steps.map((function(t){return Object(m.jsx)("div",{className:"d-flex justify-content-around m-2",children:Object(m.jsx)("h3",{className:"align-self-center",children:Object(m.jsx)(u.a,{className:"m-0 border text-danger border border-danger",variant:e.win?"warning":"dark",children:t.token})})})}));return Object(m.jsxs)("div",{className:"d-flex border mt-3 p-4 rounded-pill text-white",children:[Object(m.jsx)(g,{origin:e.origin,mode:e.mode}),t,Object(m.jsx)(x,{goal:e.goal,mode:e.mode}),Object(m.jsx)(v,{reset:e.reset,win:e.win})]})},p=function(e){if(0===e.stepCount){var t=e.number===e.goal;return Object(m.jsx)(O,{reset:e.reset,steps:e.steps,origin:e.origin,goal:e.goal,mode:e.mode,win:t})}return Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsx)(g,{origin:e.origin,mode:e.mode}),Object(m.jsx)("div",{className:"d-flex",children:Object(m.jsx)(f,{steps:e.steps,mode:e.mode})}),Object(m.jsx)(x,{goal:e.goal,mode:e.mode,hoverHandler:e.hoverHandler,unhoverHandler:e.unhoverHandler})]})},y=n(71),N=function(e){var t=e.showGoal,n=(t?e.goal:e.byte).slice(0).reverse().map((function(e,t){return Object(m.jsx)(b.a,{className:"m-2 rounded",variant:e?"dark":"light",size:"sm",children:7-t})})),r="d-flex rounded-pill justify-content-around";return Object(m.jsx)("div",{className:t?"bg-danger "+r:"bg-info "+r,children:Object(m.jsx)(y.a,{className:"p-2",children:n})})},w=function(e){return Object(m.jsx)("div",{className:"container d-flex bg-success rounded-pill justify-content-around",children:Object(m.jsxs)(y.a,{children:[Object(m.jsx)(b.a,{onClick:e.increment,className:"btn m-2 mx-lg-5 border btn-danger rounded btn-lg",children:"+"}),Object(m.jsx)(b.a,{onClick:e.shiftLeft,className:"btn m-2 mx-lg-5 border btn-danger rounded btn-lg",children:"<"}),Object(m.jsx)(b.a,{onClick:e.complement,className:"btn m-2 mx-lg-5 border btn-danger rounded btn-lg",children:"~"}),Object(m.jsx)(b.a,{onClick:e.shiftRight,className:"btn m-2 mx-lg-5 border btn-danger rounded btn-lg",children:">"}),Object(m.jsx)(b.a,{onClick:e.decrement,className:"btn m-2 mx-lg-5 border btn-danger rounded btn-lg",children:"-"})]})})},k=function(e){return Object(m.jsxs)("div",{class:"container w-75 border rounded p-3 mt-2",children:[Object(m.jsx)(N,{byte:e.byte,goal:e.goal,showGoal:e.showGoal}),Object(m.jsx)("hr",{}),Object(m.jsx)(w,{complement:e.complement,shiftLeft:e.shiftLeft,shiftRight:e.shiftRight,increment:e.increment,decrement:e.decrement})]})},C=n(23),S=n(72),T=n.n(S),M=n(123),H=n(129),L=n(124),E=n(125),B=["3114440086","760607385","593527320","3810139166","2042603705","1276578151","2773626403","1863670411","1066916121","2469171939","3103314719","2901024697","3747112607","2826691254","516350195","3119063652","1251308296","384570924","3731629802","1879106311","3567456972","4228644844","4241148977","2287597717","571360365","370697788","1274532837","4264078350","1823832688","249810342","250563680"],P=B[Math.floor(Math.random()*B.length)],R=function(e){var t=Object(r.useState)(!1),n=Object(C.a)(t,2),s=n[0],a=n[1];return Object(m.jsxs)(M.a,{className:"d-flex p-3 justify-content-center border",children:[Object(m.jsxs)(H.a,{placement:"bottom",isOpen:s,target:"Popover1",children:[Object(m.jsx)(L.a,{children:"Popover Title"}),Object(m.jsx)(E.a,{children:"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."})]}),Object(m.jsx)(T.a,{onClick:function(){return a(!s)},BandcampPlayer:!0,album:P,bgcol:"blue",linkcol:"blue",size:"medium",width:"50%"})]})},A=n(75),G=function(e){var t=Object(r.useState)(!1),n=Object(C.a)(t,2),s=n[0],a=n[1];return Object(m.jsx)(A.Popover,{isOpen:s,positions:["top","bottom","left","right"],content:Object(m.jsx)("p",{children:e.cheat}),children:Object(m.jsx)("div",{className:"p-3",onClick:function(){return a(!s)},children:Object(m.jsx)("h1",{children:Object(m.jsx)(u.a,{className:"text-danger border border-danger",variant:"warning",children:e.stepCount})})})})},F=n(126),I=n(76),z=function(e){return Object(m.jsx)("div",{className:"p-3 mr-1",children:Object(m.jsx)("div",{children:Object(m.jsx)(F.a,{type:"radio",name:"modes",defaultValue:"dec",children:["dec","hex","ascii"].map((function(t){return Object(m.jsx)(I.a,{className:"border",type:"radio",name:"mode",value:t,checked:"dec"===t,onClick:function(){return e.setMode(t)},children:t})}))})})})},D=n(130),q=n(128),U=n(131),W=(n(127),["Welcome to BITGAME ULTRA","The byte is made up of eight bits.","Each bit can be either one or zero, either on or off.","The ~ button reverses the value of each bit, so every zero becomes a one and every one becomes a zero.","The < button shifts the bit values one position to the left...","...so every bit takes on the value of the bit to its right...","...the value of the rightmost bit becomes zero, and the value of the leftmost bit is lost.","The > button is the same except for right instead of left.","The + button increments the byte by one.","The - button...you get the idea.","The green number is your origin. The red number is your goal.","The object of the game is to transform the byte from the green number to the red number, using the five operators, in as few steps as possible.","There are two ways to approach the game:","The first is mathematically, treating the numbers as quantities, < and > as doubling and halving and ~ as distance from 255. In this case, it will be easier to use decimal mode.","The second is treating the numbers as binary configurations, in which case it will be easier to use hex mode.","Hover over the goal number to peek at its bit configuration.","If you want to be really hardcore, try a few rounds in ASCII mode.","While you play, enjoy a curated selection of my favorite albums to listen to while coding."]),J=function(){var e=W.map((function(e){return Object(m.jsx)(D.a.Item,{children:Object(m.jsx)("h3",{className:"m-3 text-center",children:e})})}));return Object(m.jsx)(D.a,{fade:!0,indicators:!1,interval:null,className:"p-4",children:e})},K=function(e){return Object(m.jsxs)(q.a,{show:e.show,onHide:e.handleClose,centered:!0,size:"lg",children:[Object(m.jsx)(q.a.Header,{className:"bg-warning text-danger",closeButton:!0,children:Object(m.jsx)(q.a.Title,{children:"How to Play"})}),Object(m.jsx)(q.a.Body,{className:"bg-warning",children:Object(m.jsx)(J,{})})]})},V=(U.a,U.a.Title,U.a.Content,function(){var e=Object(r.useState)(!0),t=Object(C.a)(e,2),n=t[0],s=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{id:"Popover1",className:"p-3",children:Object(m.jsx)("h1",{children:Object(m.jsx)(u.a,{type:"button",className:"text-danger border border-danger",variant:"warning",onClick:function(){return s(!0)},children:"?"})})}),Object(m.jsx)(K,{show:n,handleClose:function(){return s(!1)}})]})}),X=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={byte:[!1,!1,!1,!1,!1,!1,!1,!1],steps:[],origin:Math.floor(256*Math.random()),goal:Math.floor(256*Math.random()),mode:"dec",showGoal:!1,cheat:""},r.complement=r.complement.bind(Object(l.a)(r)),r.shiftLeft=r.shiftLeft.bind(Object(l.a)(r)),r.shiftRight=r.shiftRight.bind(Object(l.a)(r)),r.increment=r.increment.bind(Object(l.a)(r)),r.decrement=r.decrement.bind(Object(l.a)(r)),r.reset=r.reset.bind(Object(l.a)(r)),r.setMode=r.setMode.bind(Object(l.a)(r)),r.hoverHandler=r.hoverHandler.bind(Object(l.a)(r)),r.unhoverHandler=r.unhoverHandler.bind(Object(l.a)(r)),r.update=r.update.bind(Object(l.a)(r)),r.cheat=r.cheat.bind(Object(l.a)(r)),r}return Object(c.a)(n,[{key:"cheat",value:function(e,t){var n=this;fetch("https://raw.githubusercontent.com/xockcin/bitgame/main/pairchart.json").then((function(e){return e.json()})).then((function(r){n.setState({cheat:r[e][t].steps})}))}},{key:"update",value:function(e,t){var n={token:t,number:this.getNumber(e)};this.setState((function(t){return{byte:e,steps:t.steps.concat(n)}}))}},{key:"complement",value:function(){var e=this.state.byte.map((function(e){return!e}));this.update(e,"~")}},{key:"shiftLeft",value:function(){var e=[!1].concat(this.state.byte.slice(0,-1));this.update(e,"<")}},{key:"shiftRight",value:function(){var e=this.state.byte.slice(1).concat(!1);this.update(e,">")}},{key:"increment",value:function(){var e=this.getNumber(this.state.byte),t=this.fromNumber(e+1);this.update(t,"+")}},{key:"decrement",value:function(){var e=this.getNumber(this.state.byte),t=this.fromNumber(e-1);this.update(t,"-")}},{key:"fromNumber",value:function(e){for(var t=[],n=0;n<8;n++)t[n]=!!(e&1<<n);return t}},{key:"getNumber",value:function(e){for(var t=0,n=0;n<8;n++)t+=e[n]<<n;return t}},{key:"setMode",value:function(e){this.setState((function(t){return{mode:e}}))}},{key:"hoverHandler",value:function(){this.setState((function(e){return{showGoal:!0}}))}},{key:"unhoverHandler",value:function(){this.setState((function(e){return{showGoal:!1}}))}},{key:"reset",value:function(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());this.cheat(e,t);var n=[],r=this.fromNumber(e);this.setState((function(s){return{byte:r,origin:e,goal:t,steps:n}}))}},{key:"componentWillMount",value:function(){var e=this;this.setState((function(t){return{byte:e.fromNumber(e.state.origin)}})),this.cheat(this.state.origin,this.state.goal)}},{key:"render",value:function(){var e=this.getNumber(this.state.byte),t=e.toString(16);return Object(m.jsxs)("div",{className:"container p-2 my-5 border rounded",children:[Object(m.jsxs)("div",{className:"d-flex p-2 rounded-pill border",children:[Object(m.jsx)("h1",{className:"p-2 ml-3 text-white",children:"bitgame"}),Object(m.jsx)(z,{setMode:this.setMode,mode:this.state.mode})]}),Object(m.jsx)("div",{className:"container-flex d-flex flex-row justify-content-around rounded-pill m-2",children:Object(m.jsx)(p,{number:e,hex:t,origin:this.state.origin,goal:this.state.goal,steps:this.state.steps,reset:this.reset,mode:this.state.mode,hoverHandler:this.hoverHandler,unhoverHandler:this.unhoverHandler,stepCount:this.state.cheat.length-this.state.steps.length})}),Object(m.jsxs)("div",{className:"container d-inline-flex align-items-center",children:[Object(m.jsx)(V,{}),Object(m.jsx)(k,{byte:this.state.byte,complement:this.complement,shiftLeft:this.shiftLeft,shiftRight:this.shiftRight,increment:this.increment,decrement:this.decrement,goal:this.fromNumber(this.state.goal),showGoal:this.state.showGoal}),Object(m.jsx)(G,{className:"align-self-center ml-0",stepCount:this.state.cheat.length-this.state.steps.length,cheat:this.state.cheat})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"container-flex d-flex justify-content-center p-3",children:Object(m.jsx)(R,{})})]})}}]),n}(r.Component),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(X,{})}),document.getElementById("root")),Q()},48:function(e,t,n){},83:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.4a2203fc.chunk.js.map