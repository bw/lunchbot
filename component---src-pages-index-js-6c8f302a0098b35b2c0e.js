(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{182:function(e,t,a){"use strict";a.r(t),a(92),a(187),a(55);var n=a(14),r=a.n(n),o=(a(188),a(194),a(196),a(0)),s=a.n(o),i=a(197),l=a.n(i),c=a(206),m=a.n(c),h=a(207),u=a.n(h),p=(a(208),["Flour Bakery (sandwiches)","Tatte Bakery (sandwiches, salads)","sweetgreen (salads)","Felipe's (Mexican) (burritos)","Shake Shack (burgers)","Black Sheep Bagel Cafe (bagels)","El Jefe's (Mexican)","Clover (sandwiches) (veg)","Pokeworks (poke)","b.good (burgers, bowls, salads)","Darwin's Ltd (sandwiches)","Cafe Pamplona (Mediterranean) (paninis)","Zinnekin's (waffles)","Petsi's Pies (breakfast, sandwiches)","Pavement Coffeehouse (bagels)","Bon Me (sandwiches, noodles)","Saloniki (Greek, pita, salads)","Whole Heart Provisions (veg)"]),d=new Date,w=Number(""+d.getFullYear()+d.getMonth()+d.getDate()).toString(36),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={seed:t.props.location.search?t.props.location.search.slice(1):w,isMoreShown:!1},t.onNewSeed=function(){var e=Date.now().toString(36).slice(0,10);t.setState({seed:e,isMoreShown:!1})},t.onShowMore=function(){t.state.isMoreShown||t.setState({isMoreShown:!0})},t}return r()(t,e),t.prototype.render=function(){console.log(this.props);var e=this.props.location,t=this.state,a=t.seed,n=t.isMoreShown,r=e.origin+e.pathname+"?"+a,o=m.a.shuffle(p,a,!0),i="The Harvard Square Lunchbot",c='Answering "where should we eat" in Harvard Square. A tiny side project by Brandon Wang.';return s.a.createElement("div",{className:"LunchBot"},s.a.createElement(l.a,null,s.a.createElement("meta",{property:"og:type",content:"website"}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:site",content:"@bradr"}),s.a.createElement("meta",{name:"twitter:creator",content:"@bradr"}),s.a.createElement("meta",{property:"og:site_name",content:"The Lunchbot"}),s.a.createElement("title",null,i),s.a.createElement("meta",{property:"og:title",content:i}),s.a.createElement("meta",{property:"twitter:title",content:i}),s.a.createElement("meta",{name:"description",content:c}),s.a.createElement("meta",{property:"og:description",content:c}),s.a.createElement("meta",{name:"twitter:description",content:c}),s.a.createElement("meta",{property:"og:image",content:"https://bw.github.io"+u.a}),s.a.createElement("meta",{name:"twitter:image",content:"https://bw.github.io"+u.a})),s.a.createElement("h1",{className:"pageTitle"},"I am the Lunchbot."),s.a.createElement("p",null,s.a.createElement("span",null,"Reducing the number of choices,")," ",s.a.createElement("span",null,"one meal at a time.")),s.a.createElement("hr",null),s.a.createElement("h3",null,"May I humbly suggest —"),s.a.createElement("ul",{className:"placesList"},o.slice(0,n?3:1).map(function(e,t){return s.a.createElement("li",{key:t},e)})),n?s.a.createElement("button",{key:1,className:"btn btn-outline-success",onClick:this.onNewSeed},"Give me new options…"):s.a.createElement("button",{key:2,className:"btn btn-outline-secondary",onClick:this.onShowMore},"I'm not feeling it…"),w!==a&&s.a.createElement("div",{className:"idempotent"},"This link gives others your new options:",s.a.createElement("a",{href:r},r)),s.a.createElement("footer",null,w===a&&s.a.createElement(s.a.Fragment,null,"The Lunchbot makes a new fast-casual Harvard Square suggestion every day or on demand.",s.a.createElement("br",null)),"A fun little thing by ",s.a.createElement("a",{href:"https://brandon.wang"},"Brandon Wang"),"."))},t}(s.a.Component);t.default=g},207:function(e,t,a){e.exports=a.p+"static/OpenGraph-425fac2248e3c66fc7411a5e9b2656d2.png"},208:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-6c8f302a0098b35b2c0e.js.map