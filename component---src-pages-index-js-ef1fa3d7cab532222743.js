(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{182:function(e,n,t){"use strict";t.r(n),t(88);var a=t(14),o=t.n(a),s=t(0),r=t.n(s),c=t(184),i=t.n(c),l=(t(187),["sweetgreen (salads)","Felipe's (burritos)","Zambrero (burrito bowls)","Shake Shack (burgers)","Crema Cafe (sandwiches)","b.good (burgers + salads)","Pokeworks (poke)","BONME (sandwiches)","Darwin's Ltd (sandwiches)","Flour Bakery (sandwiches)","Pinnochio's (pizza)","Clover (sandwiches)","Tatte Bakery (sandwiches + salads)"]),h=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))||this).state={isMoreShown:!1,selection:[]},n.onNewBatch=function(){n.setState({isMoreShown:!1,selection:i.a.sampleSize(l,3)})},n.onShowMore=function(){n.state.isMoreShown||n.setState({isMoreShown:!0})},n}o()(n,e);var t=n.prototype;return t.componentDidMount=function(){this.onNewBatch()},t.render=function(){var e=this.state,n=e.selection,t=e.isMoreShown;return r.a.createElement("div",{className:"LunchBot"},r.a.createElement("h1",{className:"pageTitle"},"I am the Lunchbot."),r.a.createElement("p",null,"Reducing the number of choices, one meal at a time."),r.a.createElement("hr",null),r.a.createElement("h3",null,"May I humbly suggest —"),r.a.createElement("ul",{className:"placesList"},n.slice(0,t?3:1).map(function(e,n){return r.a.createElement("li",{key:n},e)})),t?r.a.createElement("button",{key:1,className:"btn btn-outline-success",onClick:this.onNewBatch},"Give me new options…"):r.a.createElement("button",{key:2,className:"btn btn-outline-secondary",onClick:this.onShowMore},"I'm not feeling it…"),r.a.createElement("hr",null),r.a.createElement("footer",null,"A fun little thing by ",r.a.createElement("a",{href:"https://brandon.wang"},"Brandon Wang"),"."))},n}(r.a.Component);n.default=h},187:function(e,n,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-ef1fa3d7cab532222743.js.map