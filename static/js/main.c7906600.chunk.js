(this["webpackJsonp2020-virus-map"]=this["webpackJsonp2020-virus-map"]||[]).push([[0],{20:function(t,e,a){t.exports=a(29)},25:function(t,e,a){},26:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),c=(a(25),a(26),a(13)),s=a(14),l=a(18),u=a(15),m=a(19),d=a(32),h=a(35),p=a(31),f=a(34),v=a(33),y=[30.58333,114.26667],E=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={data:null,nationIndex:0},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://lbj96347.github.io/2020-virus-map/virus-data.json").then((function(t){return t.json()})).then((function(e){return t.setState({data:e})}))}},{key:"componentWillUnmount",value:function(){}},{key:"handleFocusNation",value:function(t){this.setState({nationIndex:t})}},{key:"render",value:function(){var t=this;return this.state.data?o.a.createElement("div",null,o.a.createElement("div",{className:"item"},o.a.createElement("p",null,"\u65b0\u578b\u51a0\u72b6\u75c5\u6bd2\u5730\u56fe - \u6570\u636e\u6765\u6e90\u592e\u89c6\u65b0\u95fb\u6216\u8005\u5730\u65b9\u536b\u751f\u90e8\u95e8\u7f51\u7ad9"),o.a.createElement("p",null,"\u66f4\u65b0\u65f6\u95f4 Last update\uff1a",this.state.data.updateTimestamp),o.a.createElement("p",null,"\u56fd\u5bb6/\u5730\u533a\uff1a",this.state.data.data.map((function(e,a){return o.a.createElement("a",{href:"#",key:a,onClick:function(){return t.handleFocusNation(a)}},e.nation)})))),o.a.createElement(d.a,{noWrap:!0,scrollWheelZoom:!0,maxZoom:"18",className:"map-container",center:y,zoom:5},o.a.createElement(h.a,{noWrap:!0,url:"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FzaGxlZSIsImEiOiJjazVsdjcyejYwcXBqM2Vxa2E2aGQ2eHI2In0.Uhid4EEYMyB8iFarVody3A",id:"mapbox/streets-v11",attribution:'\xa9 <a href="http://osm.org/copyright">Mapbox</a>'}),this.state.data.data[this.state.nationIndex].sources.map((function(t,e){return o.a.createElement(p.a,{key:e,position:t.position},o.a.createElement(f.a,null," ",o.a.createElement("a",{href:t.news},t.city)," \u65b0\u578b\u51a0\u72b6\u75c5\u6bd2\u611f\u67d3\u4e2a\u6848\uff08\u542b\u6000\u7591\uff09\uff1a",t.number," "))})),this.state.data.data[this.state.nationIndex].sources.map((function(t,e){return o.a.createElement(v.a,{key:e,color:t.confirmed?"red":"yellow",fillColor:t.confirmed?"#f03":"#ffcf00",fillOpacity:"0.5",radius:t.number>20?20:t.number,center:t.position})})))):null}}]),e}(n.Component);var b=function(){return o.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.c7906600.chunk.js.map