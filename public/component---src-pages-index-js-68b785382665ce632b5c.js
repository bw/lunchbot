(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{182:function(e,t,n){"use strict";n.r(t),n(88),n(51);var a=n(14),s=n.n(a),r=n(0),o=n.n(r),i=n(184),l=n.n(i),c=(n(185),["sweetgreen (salads)","Felipe's (burritos)","Zambrero (burrito bowls)","Shake Shack (burgers)","Crema Cafe (sandwiches)","b.good (burgers + salads)","Pokeworks (poke)","BONME (sandwiches)","Darwin's Ltd (sandwiches)","Flour Bakery (sandwiches)","Pinnochio's (pizza)","Clover (sandwiches)","Tatte Bakery (sandwiches + salads)"]),h=new Date,u=btoa(h.getFullYear()+"-"+h.getMonth()+"-"+h.getDate()).slice(0,10),p=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).state={seed:t.props.location.search?t.props.location.search.slice(1):u,isMoreShown:!1},t.onNewSeed=function(){var e=btoa(999999*Math.random()).slice(0,10);t.setState({seed:e,isMoreShown:!1})},t.onShowMore=function(){t.state.isMoreShown||t.setState({isMoreShown:!0})},t}return s()(t,e),t.prototype.render=function(){console.log(this.props);var e=this.props.location,t=this.state,n=t.seed,a=t.isMoreShown,s=e.origin+e.pathname+"?"+n,r=l.a.shuffle(c,n,!0);return o.a.createElement("div",{className:"LunchBot"},o.a.createElement("h1",{className:"pageTitle"},"I am the Lunchbot."),o.a.createElement("p",null,"Reducing the number of choices, one meal at a time."),o.a.createElement("hr",null),o.a.createElement("h3",null,"May I humbly suggest —"),o.a.createElement("ul",{className:"placesList"},r.slice(0,a?3:1).map(function(e,t){return o.a.createElement("li",{key:t},e)})),a?o.a.createElement("button",{key:1,className:"btn btn-outline-success",onClick:this.onNewSeed},"Give me new options…"):o.a.createElement("button",{key:2,className:"btn btn-outline-secondary",onClick:this.onShowMore},"I'm not feeling it…"),o.a.createElement("div",{className:"idempotent"},"This link will give someone else the same options:",o.a.createElement("a",{href:s},s)),o.a.createElement("footer",null,"A fun little thing by ",o.a.createElement("a",{href:"https://brandon.wang"},"Brandon Wang"),"."))},t}(o.a.Component);t.default=p},184:function(e,t,n){var a,s;s=this,void 0===(a=function(){return s.SeededShuffle=(e={strSeed:null,shuffle:function(e,t,n){if("Array"==this.getType(e)&&this.setSeed(t)){for(var a=n?e.slice(0):e,s=a.length,r=this.genMap(s),o=s-1;o>0;o--)a[o]=a.splice(r[s-1-o],1,a[o])[0];return a}return null},unshuffle:function(e,t,n){if("Array"==this.getType(e)&&this.setSeed(t)){for(var a=n?e.slice(0):e,s=a.length,r=this.genMap(s),o=1;o<s;o++)a[o]=a.splice(r[s-1-o],1,a[o])[0];return a}return null},genMap:function(e){for(var t=new Array(e),n=0;n<e;n++)t[n]=(this.__seed=(9301*this.__seed+49297)%233280)/233280*e|0;return t},setSeed:function(e){if(!/(number|string)/i.test(this.getType(e)))return!1;if(isNaN(e))e=String(this.strSeed=e).split("").map(function(e){return e.charCodeAt(0)}).join("");return this.__seed=this.seed=Number(e)},getType:function(e){return Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1]}},Object.create(e));var e}.apply(t,[]))||(e.exports=a)},185:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-68b785382665ce632b5c.js.map