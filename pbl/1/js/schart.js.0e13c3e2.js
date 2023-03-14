import{c as t}from"./axios.9e083738.js";var i={exports:{}};const e=i.exports=function(){function t(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var e=window.devicePixelRatio||1,a=10*e,s=a/2;return function(){function o(t,i){var h,l,n,r;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,o),this.canvas=(h=t,l=document.getElementById(h),n=l.parentNode.clientWidth,r=l.parentNode.clientHeight,l.style.width=n+"px",l.style.height=r+"px",l.width=n*e,l.height=r*e,l),this.ctx=this.canvas.getContext("2d"),this.type="bar",this.showValue=!0,this.showGrid=!0,this.topPadding=60*e,this.leftPadding=50*e,this.rightPadding=10*e,this.bottomPadding=50*e,this.yEqual=5,this.yLength=0,this.xLength=0,this.ySpace=0,this.xRorate=0,this.yRorate=0,this.xRotate=0,this.yRotate=0,this.bgColor="#fff",this.axisColor="#666",this.gridColor="#eee",this.title={text:"",color:"#666",position:"top",font:"bold "+18*e+"px Arial",top:a,bottom:s},this.legend={display:!0,position:"top",color:"#666",font:14*e+"px Arial",top:45*e,bottom:15*e,textWidth:0},this.radius=100*e,this.innerRadius=60*e,this.colorList=["#4A90E2","#F5A623","#ff5858","#5e64ff","#2AC766","#743ee2","#b554ff","#199475"],this.init(i)}return function(i,e,a){e&&t(i.prototype,e),a&&t(i,a)}(o,[{key:"init",value:function(t){if(t.title=Object.assign({},this.title,t.title),t.legend=Object.assign({},this.legend,t.legend),Object.assign(this,t),!t.labels||!t.labels.length)throw new Error("缺少主要参数labels");if(!t.datasets||!t.datasets.length)throw new Error("缺少主要参数datasets");this.drawBackground(),"bar"===this.type||"line"===this.type?this.renderBarChart():this.renderPieChart(),this.drawLegend()}},{key:"renderBarChart",value:function(){this.yLength=Math.floor((this.canvas.height-this.topPadding-this.bottomPadding-a)/this.yEqual),this.xLength=Math.floor((this.canvas.width-this.leftPadding-this.rightPadding-a)/this.labels.length),this.ySpace=function(t,e){var a=t.map((function(t){return t.data.reduce((function(t,i){return i<t?t:i}))})),s=Math.ceil(Math.max.apply(Math,i(a))/e),o=s.toString().length-1;return o=2<o?2:o,Math.ceil(s/Math.pow(10,o))*Math.pow(10,o)}(this.datasets,this.yEqual),this.drawXAxis(),this.drawYAxis(),this.drawBarContent()}},{key:"drawBarContent",value:function(){var t=this.ctx,i=this.datasets.length;t.beginPath();for(var o=0;o<i;o++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.datasets[o].label).width),t.fillStyle=t.strokeStyle=this.datasets[o].fillColor||this.colorList[o];for(var h=this.datasets[o].data,l=0;l<h.length;l++)if(!(l>this.labels.length-1)){var n=this.xLength/(i+1),r=this.yLength/this.ySpace,d=this.leftPadding+this.xLength*l+n*(o+.5),c=d+n,g=this.canvas.height-this.bottomPadding,f=g-h[l]*r;if("bar"===this.type)t.fillRect(d,f,c-d,g-f),this.drawValue(h[l],d+n/2,f-s);else if("line"===this.type){var v=this.leftPadding+this.xLength*(l+.5);t.beginPath(),t.arc(v,f,3*e,0,2*Math.PI,!0),t.fill(),0!==l&&(t.beginPath(),t.strokeStyle=this.datasets[o].fillColor||this.colorList[o],t.lineWidth=2*e,t.moveTo(v-this.xLength,g-h[l-1]*r),t.lineTo(v,f),t.stroke(),t.lineWidth=1*e),this.drawValue(h[l],v,f-a)}}}t.stroke()}},{key:"renderPieChart",value:function(){for(var t=this.ctx,i=this.labels.length,e=this.datasets[0],a=e.data,s=a.reduce((function(t,i){return t+i})),o=-Math.PI/2,h=this.canvas.width/2,l=this.canvas.height/2,n=0;n<i;n++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.labels[n]).width),t.beginPath(),t.strokeStyle=t.fillStyle=e.colorList&&e.colorList[n]||this.colorList[n],t.moveTo(h,l);var r=o,d=o+=a[n]/s*2*Math.PI;t.arc(h,l,this.radius,r,d),t.closePath(),t.fill();var c=(r+d)/2;this.drawPieValue(a[n],c)}"ring"===this.type&&(t.beginPath(),t.fillStyle=this.bgColor,t.arc(h,l,this.innerRadius,0,2*Math.PI),t.closePath(),t.fill())}},{key:"drawValue",value:function(t,i,a){var s=this.ctx;this.showValue&&(s.textBaseline="middle",s.font=12*e+"px Arial",s.textAlign="center",s.fillText(t,i,a))}},{key:"drawPieValue",value:function(t,i){var e=this.ctx;if(this.showValue){var s=this.canvas.width/2,o=this.canvas.height/2,h=Math.ceil(Math.abs(this.radius*Math.cos(i))),l=Math.floor(Math.abs(this.radius*Math.sin(i)));e.textBaseline="middle",this.showValue&&(i<=0?(e.textAlign="left",e.moveTo(s+h,o-l),e.lineTo(s+h+a,o-l-a),e.moveTo(s+h+a,o-l-a),e.lineTo(s+h+3*a,o-l-a),e.stroke(),e.fillText(t,s+h+3.5*a,o-l-a)):0<i&&i<=Math.PI/2?(e.textAlign="left",e.moveTo(s+h,o+l),e.lineTo(s+h+a,o+l+a),e.moveTo(s+h+a,o+l+a),e.lineTo(s+h+3*a,o+l+a),e.stroke(),e.fillText(t,s+h+3.5*a,o+l+a)):i>Math.PI/2&&i<Math.PI?(e.textAlign="right",e.moveTo(s-h,o+l),e.lineTo(s-h-a,o+l+a),e.moveTo(s-h-a,o+l+a),e.lineTo(s-h-3*a,o+l+a),e.stroke(),e.fillText(t,s-h-3.5*a,o+l+a)):(e.textAlign="right",e.moveTo(s-h,o-l),e.lineTo(s-h-a,o-l-a),e.moveTo(s-h-a,o-l-a),e.lineTo(s-h-3*a,o-l-a),e.stroke(),e.fillText(t,s-h-3.5*a,o-l-a)))}}},{key:"drawBackground",value:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawTitle()}},{key:"drawTitle",value:function(){var t=this.title;if(t.text){var i=this.ctx;i.beginPath(),i.font=t.font,i.textAlign="center",i.fillStyle=t.color,"top"===t.position?(i.textBaseline="top",i.fillText(t.text,this.canvas.width/2,t.top)):(i.textBaseline="bottom",i.fillText(t.text,this.canvas.width/2,this.canvas.height-t.bottom))}}},{key:"drawXAxis",value:function(){var t=this.ctx,i=this.canvas.height-this.bottomPadding+.5;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding,i),t.lineTo(this.canvas.width-this.rightPadding,i),t.stroke(),this.drawXPoint()}},{key:"drawXPoint",value:function(){var t=this.ctx;t.beginPath(),t.font=12*e+"px Microsoft YaHei",t.textAlign=this.xRorate||this.xRotate?"right":"center",t.textBaseline="top",t.fillStyle=this.axisColor;for(var i=0;i<this.labels.length;i++){var o=this.labels[i],h=this.leftPadding+this.xLength*(i+1)+.5,l=this.canvas.height-this.bottomPadding;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(h,l),t.lineTo(h,this.topPadding+a)):(t.moveTo(h,l),t.lineTo(h,l-s)),t.stroke(),t.save(),t.translate(h-this.xLength/2,l+s),this.xRorate?t.rotate(-this.xRorate*Math.PI/180):t.rotate(-this.xRotate*Math.PI/180),t.fillText(o,0,0),t.restore()}}},{key:"drawYAxis",value:function(){var t=this.ctx;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding-.5,this.canvas.height-this.bottomPadding+.5),t.lineTo(this.leftPadding-.5,this.topPadding+.5),t.stroke(),this.drawYPoint()}},{key:"drawYPoint",value:function(){var t=this.ctx;t.font=12*e+"px Microsoft YaHei",t.textAlign="right",t.textBaseline="middle",t.beginPath();for(var i=0;i<this.yEqual;i++){var o=this.leftPadding,h=this.canvas.height-this.bottomPadding-this.yLength*(i+1)+.5;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(o,h),t.lineTo(this.canvas.width-this.rightPadding-a,h)):(t.strokeStyle=this.axisColor,t.moveTo(o-s,h),t.lineTo(o,h)),t.stroke(),t.save(),t.fillStyle=this.axisColor,t.translate(o-a,h),this.yRorate?t.rotate(-this.yRorate*Math.PI/180):t.rotate(-this.yRotate*Math.PI/180),t.fillText(this.ySpace*(i+1),0,0),t.restore()}}},{key:"drawLegend",value:function(){var t=this.legend;if(t.display){var i=this.ctx,e="pie"===this.type||"ring"===this.type;i.beginPath(),i.font=t.font,i.textAlign="left",i.textBaseline="middle";for(var o=e?this.labels.length:this.datasets.length,h=(this.canvas.width-(this.legend.textWidth+(5*o-2)*a))/2,l=0,n=0;n<o;n++){var r=e?this.datasets[0]:this.datasets[n],d=(e?this.labels[n]:r.label)||"";i.fillStyle=r.colorList&&r.colorList[n]||r.fillColor||this.colorList[n],"top"===t.position?(this.drawLegendIcon(h+5*a*n+l,t.top-s,2*a,a),i.fillStyle=t.color,i.fillText(d,h+(5*n+3)*a+l,t.top)):"bottom"===t.position?(this.drawLegendIcon(h+5*a*n+l,this.canvas.height-t.bottom-s,2*a,a),i.fillStyle=t.color,i.fillText(d,h+(5*n+3)*a+l,this.canvas.height-t.bottom)):(i.fillRect(a,t.top+2*a*n,2*a,a),i.fillStyle=t.color,i.fillText(d,4*a,t.top+2*a*n+.5*a)),l+=Math.ceil(i.measureText(d).width)}}}},{key:"drawLegendIcon",value:function(t,i,o,h){var l=this.ctx;"line"===this.type?(l.beginPath(),l.strokeStyle=l.fillStyle,l.lineWidth=2*e,l.moveTo(t,i+s),l.lineTo(t+2*a,i+s),l.stroke(),l.lineWidth=1*e,l.arc(t+a,i+s,3*e,0,2*Math.PI,!0),l.fill()):l.fillRect(t,i,o,h)}}]),o}()}();export{e as S};