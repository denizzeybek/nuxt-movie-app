(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{276:function(e,t,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(110).default)("732ff976",content,!0,{sourceMap:!1})},277:function(e,t,n){"use strict";n(276)},278:function(e,t,n){var o=n(109)(!1);o.push([e.i,".loading[data-v-1a49ec1a]{height:100vh;width:100%;display:flex;justify-content:center;align-items:center}@-webkit-keyframes circle-loading-data-v-1a49ec1a{to{transform:rotate(1turn)}}@keyframes circle-loading-data-v-1a49ec1a{to{transform:rotate(1turn)}}.loading span[data-v-1a49ec1a]{display:block;width:70px;height:70px;border-radius:50%;border:2px solid transparent;border-top-color:#fff;-webkit-animation:circle-loading-data-v-1a49ec1a 1.2s ease infinite;animation:circle-loading-data-v-1a49ec1a 1.2s ease infinite}",""]),e.exports=o},280:function(e,t,n){"use strict";n.r(t);var o={},r=(n(277),n(53)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loading"},[t("span")])}],!1,null,"1a49ec1a",null);t.default=component.exports},284:function(e,t,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(110).default)("57b288e7",content,!0,{sourceMap:!1})},287:function(e,t,n){"use strict";n(284)},288:function(e,t,n){var o=n(109)(!1);o.push([e.i,".single-movie{color:#fff;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:32px 16px}.single-movie .button{align-self:flex-start;margin-bottom:32px}.single-movie .movie-info{display:flex;flex-direction:column;align-items:center;grid-gap:32px;gap:32px;color:#fff}@media(min-width:800px){.single-movie .movie-info{flex-direction:row;align-items:flex-start}}.single-movie .movie-info .movie-img img{max-height:500px;width:100%}@media(min-width:800px){.single-movie .movie-info .movie-img img{max-height:700px;width:auto}}.single-movie .movie-info .movie-content h1{font-size:56px;font-weight:400}.single-movie .movie-info .movie-content .movie-fact{margin-top:12px;font-size:20px;line-height:1.5}.single-movie .movie-info .movie-content .movie-fact span{font-weight:600;text-decoration:underline}.single-movie .movie-info .movie-content .tagline{font-style:italic}.single-movie .movie-info .movie-content .tagline span{font-style:normal}",""]),e.exports=o},291:function(e,t,n){"use strict";n.r(t);n(42),n(30),n(41),n(11),n(66),n(31),n(67);var o=n(28),r=n(8),c=(n(40),n(52),n(51));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v={name:"singleMovie",fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSingleMovieFunc();case 2:case"end":return t.stop()}}),t)})))()},fetchDelay:1e3,head:function(){return{title:this.movie.title}},data:function(){return{movie:""}},methods:{getSingleMovieFunc:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e.$route.params.movieid,"?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US"),t.next=3,e.$store.dispatch("getSingleMovieAction",n);case 3:e.movie=e.getSingleMovie;case 4:case"end":return t.stop()}}),t)})))()}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)(["getSingleMovie"]))},f=v,m=(n(287),n(53)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$fetchState.pending?n("Loading"):n("div",{staticClass:"single-movie container"},[n("NuxtLink",{staticClass:"button",attrs:{to:{name:"index"}}},[e._v(" Back ")]),e._v(" "),n("div",{staticClass:"movie-info"},[n("div",{staticClass:"movie-img"},[n("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+e.movie.poster_path,alt:""}})]),e._v(" "),n("div",{staticClass:"movie-content"},[n("h1",[e._v("Title: "+e._s(e.movie.title))]),e._v(" "),n("p",{staticClass:"movie-fact tagline"},[n("span",[e._v("Tagline:")]),e._v(' "'+e._s(e.movie.tagline)+'"\n            ')]),e._v(" "),n("p",{staticClass:"movie-fact"},[n("span",[e._v("Duration:")]),e._v(" "+e._s(e.movie.runtime)+" minutes\n            ")]),e._v(" "),n("p",{staticClass:"movie-fact"},[n("span",[e._v("Revenue:")]),e._v("\n                "+e._s(e.movie.revenue.toLocaleString("en-us",{style:"currency",currency:"USD"}))+"\n            ")]),e._v(" "),n("p",{staticClass:"movie-fact"},[n("span",[e._v("Overview:")]),e._v(" "+e._s(e.movie.overview))])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:n(280).default})}}]);