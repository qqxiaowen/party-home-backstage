webpackJsonp([11],{"4z1I":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("bOdI"),l=a.n(n),r={data:function(){return l()({formData:[],count:"",page:{pn:1,size:4}},"count",1)},methods:{pageing:function(t){this.page.pn=t,this.getdata()},getdata:function(){var t=this;this.$axios.get("/admin/user",this.page).then(function(e){t.formData=e.data,t.count=e.count})},handlelook:function(t){this.$router.push("/layout/reviseadmin/"+t)},handledel:function(t){var e=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.delete("/admin/user/"+t).then(function(t){200==t.code&&(e.$message.success(t.msg),e.getdata())})}).catch(function(){e.$message.info("已取消删除")})}},created:function(){this.getdata()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{staticClass:"mb30",attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/layout/home"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("管理员列表")])],1),t._v(" "),a("el-card",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.formData,stripe:"",align:"center"}},[a("el-table-column",{attrs:{prop:"username",label:"用户名",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nicheng",label:"昵称",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"头像",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"avatar-item",attrs:{src:t.row.avatar,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"性别",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(0==e.row.sex?"女":"男")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"job",label:"工作",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"电话",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handlelook(e.row._id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.handledel(e.row._id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"page-ys",attrs:{background:"",layout:"prev, pager, next","page-size":t.page.size,total:t.count},on:{"current-change":t.pageing}})],1)],1)},staticRenderFns:[]};var o=a("VU/8")(r,i,!1,function(t){a("zv7X")},"data-v-4357051e",null);e.default=o.exports},zv7X:function(t,e){}});
//# sourceMappingURL=11.afceec8b2b86d6d5cf67.js.map