(this.webpackJsonphackerstreams=this.webpackJsonphackerstreams||[]).push([[0],{43:function(e,t,a){e.exports=a(69)},48:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(48),a(22)),i=a(83),s=a(85),u=a(89),m=a(87),h=a(86),p=a(90),d=a(88),f=a(15),k=a.n(f),v=function(){return k()({method:"GET",url:"https://api.twitch.tv/kraken/users",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"38kka8u16jpo72tpdefcp6f5nm86kk"},params:{login:"elkentaro,1o57,secondorderchaos,synshop,lpnoway,hackwithbourbon,alkalinered,hackingdave,lordsaibat"}}).then((function(e){return e.data.users}))},E=Object(i.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"gray"},icon:{color:"rgba(255, 255, 255, 0.54)"}}})),b=function(e){e.users;var t=Object(n.useState)([]),a=Object(l.a)(t,2),o=a[0],c=a[1],i=E();return Object(n.useEffect)((function(){v().then((function(e){c(e)})),setInterval((function(){v().then((function(e){console.log(e),c(e)}))}),1e4)}),[]),r.a.createElement("div",{className:i.root},r.a.createElement(s.a,{cellHeight:500,className:i.gridList},r.a.createElement(u.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(h.a,{component:"div"},"HackerStreams")),o.map((function(e,t){return r.a.createElement(u.a,{key:t},r.a.createElement("img",{src:e.logo,alt:e.name}),r.a.createElement(m.a,{title:e.name,subtitle:r.a.createElement("span",null,"by: ",e.bio),actionIcon:r.a.createElement(d.a,{"aria-label":"Go to ".concat(e.name),className:i.icon},r.a.createElement(p.a,{href:"https://www.twitch.tv/".concat(e.name),target:"_blank",rel:"noopener noreferrer"},"GO"))}))}))))},w=function(){return k()({method:"GET",url:"https://api.twitch.tv/kraken/users",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"38kka8u16jpo72tpdefcp6f5nm86kk"},params:{login:"elkentaro,1o57,secondorderchaos,synshop,lpnoway,hackwithbourbon,alkalinered,hackingdave,lordsaibat"}}).then((function(e){var t=e.data.users.map((function(e){return e._id}));return k()({method:"GET",url:"https://api.twitch.tv/kraken/streams",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":"38kka8u16jpo72tpdefcp6f5nm86kk"},params:{channel:t.toString()}}).then((function(e){return e.data.streams}))}))},g=Object(i.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"gray"},icon:{color:"rgba(255, 255, 255, 0.54)"}}})),y=function(e){e.users;var t=Object(n.useState)([]),a=Object(l.a)(t,2),o=a[0],c=a[1],i=g();return Object(n.useEffect)((function(){w().then((function(e){c(e)}))}),[]),r.a.createElement("div",{className:i.root},r.a.createElement(s.a,{cellHeight:500,className:i.gridList},r.a.createElement(u.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(h.a,{component:"div"},"LIVE #HackerStreams ")),o.map((function(e,t){return r.a.createElement(u.a,{key:t},r.a.createElement("img",{src:e.preview.medium,alt:e.channel.name}),r.a.createElement(m.a,{title:e.name,subtitle:r.a.createElement("span",null,"by: ",e.channel.description),actionIcon:r.a.createElement(d.a,{"aria-label":"Go to ".concat(e.channel.name),className:i.icon},r.a.createElement(p.a,{href:"https://www.twitch.tv/".concat(e.channel.name),target:"_blank",rel:"noopener noreferrer"},"GO"))}))}))))},j=function(e){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.75ec3db5.chunk.js.map