webpackJsonp([6],{EuAN:function(t,e){},I3kw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("bOdI"),l=a.n(n),o={data:function(){return l()({formData:[],count:"",page:{pn:1,size:4}},"count",1)},methods:{pageing:function(t){this.page.pn=t,this.getdata()},getdata:function(){var t=this;this.$axios.get("/ddyj/topic",this.page).then(function(e){t.formData=e.data,t.count=e.count})},handlelook:function(t){this.$router.push("/layout/topicdetail/"+t)},handledel:function(t){var e=this;this.$confirm("此操作将永久删除该主题, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.delete("/ddyj/topic/"+t).then(function(t){200==t.code&&(e.$message.success(t.msg),e.getdata())})}).catch(function(){e.$message.info("已取消删除")})}},created:function(){this.getdata()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{staticClass:"mb30",attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/layout/home"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("主题列表页")])],1),t._v(" "),a("el-card",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.formData,stripe:"",align:"center"}},[a("el-table-column",{attrs:{prop:"user.username",label:"创建者帐号",width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"user.nicheng",label:"创建者昵称",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"创建者头像",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticClass:"avatar-item",attrs:{src:t.row.user.avatar,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"主题名称",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"table-content-ys",domProps:{textContent:t._s(e.row.content)}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"common.length",label:"主题下评论数",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handlelook(e.row._id)}}},[t._v("查看详情")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.handledel(e.row._id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"page-ys",attrs:{background:"",layout:"prev, pager, next","page-size":t.page.size,total:t.count},on:{"current-change":t.pageing}})],1)],1)},staticRenderFns:[]};var i=a("VU/8")(o,r,!1,function(t){a("EuAN")},"data-v-c79ef2a2",null);e.default=i.exports}});
//# sourceMappingURL=6.97ecf0ac582f4d76348d.js.map