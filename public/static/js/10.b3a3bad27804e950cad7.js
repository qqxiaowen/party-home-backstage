webpackJsonp([10],{PYjV:function(a,e){},UeFl:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={components:{Hearder:t("eUkZ").a},data:function(){return{findedata:""}},methods:{initmap:function(){this.map=new BMap.Map("container");var a=new BMap.Point(114.01277,33.016735),e=new BMap.Point(116.268087,40.147042);this.map.centerAndZoom(a,5),this.map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT})),this.map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT,offset:new BMap.Size(20,140)})),this.drawDot(a,e)},drawDot:function(a,e){var t=new BMap.Marker(a);this.map.addOverlay(t);var n=new BMap.Marker(e);this.map.addOverlay(n);var i={position:a,offset:new BMap.Size(10,-50)},o={position:a,offset:new BMap.Size(10,-30)},r={position:e,offset:new BMap.Size(10,-30)},p=new BMap.Label("信息工程学院学生党支部支部书记：杨鑫 电话：0396-2853187",i),s=new BMap.Label("信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032",o),d=new BMap.Label("信息工程学院学生流动党支部支部书记：高洋 电话：13526395586",r);this.map.addOverlay(p),this.map.addOverlay(s),this.map.addOverlay(d)}},mounted:function(){this.initmap()}},i={render:function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"findteam pt110"},[e("Hearder"),this._v(" "),e("div",{attrs:{id:"container"}})],1)},staticRenderFns:[]};var o=t("VU/8")(n,i,!1,function(a){t("PYjV")},"data-v-5e2070c6",null);e.default=o.exports}});
//# sourceMappingURL=10.b3a3bad27804e950cad7.js.map