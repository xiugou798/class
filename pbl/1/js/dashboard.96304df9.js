import{c as a,l as s,m as e,n as t,a as l,o as d,j as o,p as i,q as r,r as n}from"./element-plus.36e45b6b.js";import{S as u,_ as c}from"./vue-schart.0551e26b.js";import{a as p}from"../assets/index.fcbdc036.js";import{I as f,a0 as g,c as m,X as h,Q as v,o as b,a as _,u as j,W as w,K as x,V as y,a4 as V,b9 as I,b8 as S}from"./@vue.40d2997d.js";import"./lodash-es.94e8499d.js";import"./@vueuse.78e2c1a2.js";import"./@element-plus.47203029.js";import"./@ctrl.9375a141.js";import"./dayjs.e2ec7736.js";import"./axios.9e083738.js";import"./async-validator.73a10b83.js";import"./memoize-one.c87f6fc8.js";import"./escape-html.86960cf8.js";import"./normalize-wheel-es.e2b4fa49.js";import"./@floating-ui.6065d27f.js";import"./schart.js.0e13c3e2.js";import"./pinia.32000647.js";import"./vue-demi.6c8f9b0a.js";import"./vue-router.3da43013.js";const z=a=>(I("data-v-16da9380"),a=a(),S(),a),U={class:"user-info"},C={class:"user-info-cont"},R={class:"user-info-name"},q=z((()=>_("div",{class:"user-info-list"},[
y(" 上次登录时间： "),
_("span",null,"2022-10-01")],-1))),D=z((()=>_("div",{class:"user-info-list"},[
y(" 上次登录地点： "),
_("span",null,"成都")],-1))),G=z((()=>_("div",{class:"clearfix"},[
_("span",null,"语言详情")],-1))),H=y(" Vue "),J=y("JavaScript "),K=y("CSS "),L=y("HTML "),M={class:"grid-content grid-con-1"},Q=z((()=>_("div",{class:"grid-cont-right"},[
_("div",{class:"grid-num"},"1234"),
_("div",null,"用户访问量")],-1))),T={class:"grid-content grid-con-2"},W=z((()=>_("div",{class:"grid-cont-right"},[
_("div",{class:"grid-num"},"321"),
_("div",null,"系统消息")],-1))),X={class:"grid-content grid-con-3"},k=z((()=>_("div",{class:"grid-cont-right"},[
_("div",{class:"grid-num"},"5000"),
_("div",null,"商品数量")],-1))),A={class:"clearfix"},B=z((()=>_("span",null,"待办事项",-1))),E=y("添加"),F=c(f({__name:"dashboard",setup(c){const f=localStorage.getItem("ms_username"),y="admin"===f?"超级管理员":"普通用户",I={type:"bar",title:{text:"最近一周各品类销售图"},xRorate:25,labels:["周一","周二","周三","周四","周五"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,190,135,160]},{label:"食品",data:[144,198,150,235,120]}]},S={type:"line",title:{text:"最近几个月各品类销售趋势图"},labels:["6月","7月","8月","9月","10月"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,150,135,160]},{label:"食品",data:[74,118,200,235,90]}]},z=g([{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要写100行代码加几个bug吧",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!0},{title:"今天要写100行代码加几个bug吧",status:!0}]);return(c,g)=>{const F=a,N=s,O=e,P=t,Y=V("User"),Z=l,$=V("ChatDotRound"),aa=V("Goods"),sa=d,ea=o,ta=i,la=r,da=n;return b(),m("div",null,[h(sa,{gutter:20},{default:v((()=>[h(P,{span:8},{default:v((()=>[h(N,{shadow:"hover",class:"mgb20",style:{height:"252px"}},{default:v((()=>[_("div",U,[h(F,{size:120,src:j(p)},null,8,["src"]),_("div",C,[_("div",R,w(j(f)),1),_("div",null,w(j(y)),1)])]),q,D])),_:1}),h(N,{shadow:"hover",style:{height:"252px"}},{header:v((()=>[G])),default:v((()=>[H,h(O,{percentage:71.3,color:"#42b983"},null,8,["percentage"]),J,h(O,{percentage:24.1,color:"#f1e05a"},null,8,["percentage"]),K,h(O,{percentage:13.7},null,8,["percentage"]),L,h(O,{percentage:5.9,color:"#f56c6c"},null,8,["percentage"])])),_:1})])),_:1}),h(P,{span:16},{default:v((()=>[h(sa,{gutter:20,class:"mgb20"},{default:v((()=>[h(P,{span:8},{default:v((()=>[h(N,{shadow:"hover","body-style":{padding:"0px"}},{default:v((()=>[_("div",M,[h(Z,{class:"grid-con-icon"},{default:v((()=>[h(Y)])),_:1}),Q])])),_:1})])),_:1}),h(P,{span:8},{default:v((()=>[h(N,{shadow:"hover","body-style":{padding:"0px"}},{default:v((()=>[_("div",T,[h(Z,{class:"grid-con-icon"},{default:v((()=>[h($)])),_:1}),W])])),_:1})])),_:1}),h(P,{span:8},{default:v((()=>[h(N,{shadow:"hover","body-style":{padding:"0px"}},{default:v((()=>[_("div",X,[h(Z,{class:"grid-con-icon"},{default:v((()=>[h(aa)])),_:1}),k])])),_:1})])),_:1})])),_:1}),h(N,{shadow:"hover",style:{height:"403px"}},{header:v((()=>[_("div",A,[B,h(ea,{style:{float:"right",padding:"3px 0"},text:""},{default:v((()=>[E])),_:1})])])),default:v((()=>[h(da,{"show-header":!1,data:z,style:{width:"100%"}},{default:v((()=>[h(la,{width:"40"},{default:v((a=>[h(ta,{modelValue:a.row.status,"onUpdate:modelValue":s=>a.row.status=s},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),h(la,null,{default:v((a=>[_("div",{class:x(["todo-item",{"todo-item-del":a.row.status}])},w(a.row.title),3)])),_:1})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1}),h(sa,{gutter:20},{default:v((()=>[h(P,{span:12},{default:v((()=>[h(N,{shadow:"hover"},{default:v((()=>[h(j(u),{ref:"bar",class:"schart",canvasId:"bar",options:I},null,512)])),_:1})])),_:1}),h(P,{span:12},{default:v((()=>[h(N,{shadow:"hover"},{default:v((()=>[h(j(u),{ref:"line",class:"schart",canvasId:"line",options:S},null,512)])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-16da9380"]]);export{F as default};