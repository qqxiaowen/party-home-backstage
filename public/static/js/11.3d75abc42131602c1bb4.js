webpackJsonp([11],{DZcI:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={components:{Hearder:e("eUkZ").a},data:function(){return{summary:""}},methods:{getSummary:function(){var t=this,s=this.$route.params.id;this.$axios.get("/ddyj/summary/"+s).then(function(s){t.summary=s.data.contents})}},created:function(){this.getSummary()}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pt110"},[s("Hearder"),this._v(" "),s("div",{staticClass:"personsummary"},[s("span",[this._v("个人总结")]),this._v(" "),this._l(this.summary,function(t,e){return s("div",{key:e,staticClass:"item"},[s("img",{attrs:{src:t,alt:""}})])})],2)],1)},staticRenderFns:[]};var n=e("VU/8")(a,i,!1,function(t){e("ZiJI")},"data-v-57a0c1bf",null);s.default=n.exports},ZiJI:function(t,s){}});
//# sourceMappingURL=11.3d75abc42131602c1bb4.js.map