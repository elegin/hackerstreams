(this.webpackJsonphackerstreams=this.webpackJsonphackerstreams||[]).push([[0],{38:function(e,t,a){e.exports=a(65)},43:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),s=(a(43),a(21)),i=a.n(s),l=a(32),u=a(35),m=a(33),h=a.n(m),p=a(86),d=a(88),f=a(92),k=a(90),w=a(89),b=a(93),v=a(91),g=Object(p.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"gray"},icon:{color:"rgba(255, 255, 255, 0.54)"}}})),E=function(e){e.users;var t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],c=a[1],s=g();return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({method:"GET",url:"https://api.twitch.tv/kraken/users",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"38kka8u16jpo72tpdefcp6f5nm86kk"},params:{login:"1o57,secondorderchaos,synshop,lpnoway,hackwithbourbon,alkalinered,hackingdave,lordsaibat"}});case 2:t=e.sent,c(t.data.users);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:s.root},r.a.createElement(d.a,{cellHeight:500,className:s.gridList},r.a.createElement(f.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(w.a,{component:"div"},"HackerStreams")),o.map((function(e,t){return r.a.createElement(f.a,{key:t},r.a.createElement("img",{src:e.logo,alt:e.name}),r.a.createElement(k.a,{title:e.name,subtitle:r.a.createElement("span",null,"by: ",e.bio),actionIcon:r.a.createElement(v.a,{"aria-label":"Go to ".concat(e.name),className:s.icon},r.a.createElement(b.a,{href:"https://www.twitch.tv/".concat(e.name),target:"_blank",rel:"noopener noreferrer"},"GO"))}))}))))},y=function(e){return r.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.52b1887b.chunk.js.map