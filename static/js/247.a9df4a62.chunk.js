"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(t,n,e){e.r(n);var c=e(439),a=e(919),i=e.n(a),o=e(791),r=e(390),u=e(689),f=e(184);function s(){var t=(0,u.UO)().movieId,n=(0,o.useState)([]),e=(0,c.Z)(n,2),a=e[0],s=e[1],h=(0,o.useState)(!1),p=(0,c.Z)(h,2),d=p[0],m=p[1];return(0,o.useEffect)((function(){(0,r.zv)(t).then((function(t){t.data.cast[0]||m(!0),s(t.data.cast)})).catch((function(){i().Notify.failure("Happened ERROR, TRY AGAIN IN SOME TIME"),m(!0)}))}),[t]),(0,f.jsxs)(f.Fragment,{children:[a[0]&&(0,f.jsx)("ul",{children:a.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{style:{width:200},src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):"http://dummyimage.com/150x60/99cccc.gif&text=The+image!",alt:t.name}),(0,f.jsx)("p",{children:t.name}),(0,f.jsx)("p",{children:t.character})]},t.id)}))}),d&&(0,f.jsx)("p",{children:"Cast not found!"})]})}n.default=(0,o.memo)(s)},390:function(t,n,e){e.d(n,{HI:function(){return s},Hg:function(){return o},TP:function(){return r},tx:function(){return f},zv:function(){return u}});var c=e(243),a="https://api.themoviedb.org/",i="c83afea588f6df33499ccee027813248";function o(){return c.Z.get("".concat(a,"3/trending/all/day?api_key=").concat(i))}function r(t){return c.Z.get("".concat(a,"3/movie/").concat(t,"?api_key=").concat(i))}function u(t){return c.Z.get("".concat(a,"3/movie/").concat(t,"/credits?api_key=").concat(i))}function f(t){return c.Z.get("".concat(a,"3/movie/").concat(t,"/reviews?api_key=").concat(i))}function s(t){return c.Z.get("".concat(a,"3/search/movie?query=").concat(t,"&api_key=").concat(i))}}}]);
//# sourceMappingURL=247.a9df4a62.chunk.js.map