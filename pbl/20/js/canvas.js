function canvas() {
	document.writeln("<!DOCTYPE html>");
	document.writeln("<html>");
	document.writeln("	<head>");
	document.writeln("		<meta charset=\'utf-8\' />");
	document.writeln("		<title></title>");
	document.writeln("		<style type=\'text/css\'>");
	document.writeln("			html,");
	document.writeln("			body,");
	document.writeln("			.tb {");
	document.writeln("				width: 100%;");
	document.writeln("				height: 100%;");
	document.writeln("				padding: 0;");
	document.writeln("				margin: 0;");
	document.writeln("			}");
	document.writeln("");
	document.writeln("			.tb {");
	document.writeln("");
	document.writeln("				display: grid;");
	document.writeln("				grid-definition-columns: 1fr 1fr 1fr 1fr;");
	document.writeln("				/* 			grid-definition-rows: 1fr 1fr; */");
	document.writeln("");
	document.writeln("			}");
	document.writeln("");
	document.writeln("");
	document.writeln("			canvas {");
	document.writeln("				background-color: darksalmon;");
	document.writeln("				border: 1px solid black;");
	document.writeln("			}");
	document.writeln("");
	document.writeln("			.tu {");
	document.writeln("				width: 100%;");
	document.writeln("				height: 100%;");
	document.writeln("				position: absolute;");
	document.writeln("");
	document.writeln("				display: flex;");
	document.writeln("				grid-definition-columns: 1fr 1fr 1fr 1fr;");
	document.writeln("				text-align: center;");
	document.writeln("				/* 水平方向居中 */");
	document.writeln("				justify-content: center;");
	document.writeln("				/* 弹性盒子当中横轴方向居中 */");
	document.writeln("			}");
	document.writeln("			a{");
	document.writeln("				width: 0px;");
	document.writeln("				height: 0px;");
	document.writeln("				");
	document.writeln("			}");
	document.writeln("		</style>");
	document.writeln("	</head>");
	document.writeln("	<body>");
	document.writeln("");
	document.writeln("		<div class=\'tu\'>");
	document.writeln("");
	document.writeln("			<div style=\'margin-right:2px;\'>");
	document.writeln("				<div>");
	document.writeln("					<canvas id=\'sx\'></canvas>");
	document.writeln("				</div>");
	document.writeln("				<div>");
	document.writeln("");
	document.writeln("					<canvas id=\'zh\'></canvas>");
	document.writeln("				</div>");
	document.writeln("			</div>");
	document.writeln("			<div>");
	document.writeln("				<div>");
	document.writeln("");
	document.writeln("					<canvas id=\'sd\'></canvas>");
	document.writeln("				</div>");
	document.writeln("				<div>");
	document.writeln("					<canvas id=\'zx\'></canvas>");
	document.writeln("				</div>");
	document.writeln("			</div>");
	document.writeln(
		"			<a href=\'index.html\' style=\'background-color: aqua;align-items: center;text-align: center;\'>");
	document.writeln("				<button>点击返回</button>");
	document.writeln("			</a>");
	document.writeln("		</div>");
	document.writeln("");
	document.writeln("");
	document.writeln("		<script type=\'text/javascript\'>");
	document.writeln("			var sdxy = [{");
	document.writeln("				x: 10,");
	document.writeln("				y: 20");
	document.writeln("			}, {");
	document.writeln("				x: 40,");
	document.writeln("				y: 40");
	document.writeln("			}, {");
	document.writeln("				x: 280,");
	document.writeln("				y: 140");
	document.writeln("			}, {");
	document.writeln("				x: 280,");
	document.writeln("				y: 10");
	document.writeln("			}, {");
	document.writeln("				x: 0,");
	document.writeln("				y: 0");
	document.writeln("			}]");
	document.writeln("");
	document.writeln("");
	document.writeln("			var sd = document.getElementById(\'sd\').getContext(\'2d\');");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("			for (let i = 0; i < sdxy.length - 1; i++) {");
	document.writeln("				sd.beginPath();");
	document.writeln("");
	document.writeln("				sd.fillStyle = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("				sd.arc(sdxy[i].x, sdxy[i].y, 10, 0, Math.PI * 2, true);");
	document.writeln("				let x = sdxy[i + 1].x;");
	document.writeln("				let y = sdxy[i + 1].y;");
	document.writeln("				sd.moveTo(x, y);");
	document.writeln("				sd.fill();");
	document.writeln("");
	document.writeln("			}");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("			var zht = [100, 200, 50, 70]");
	document.writeln("			var zh = document.getElementById(\'zh\').getContext(\'2d\');");
	document.writeln("");
	document.writeln("			for (let i = 0; i < zht.length; i++) {");
	document.writeln("				zh.fillStyle = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;");
	document.writeln("");
	document.writeln("				zh.fillRect(i * 10, 150 - zht[i], 10, zht[i]);");
	document.writeln("");
	document.writeln("			}");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("			var sxs = [100, 200, 50, 50]; //");
	document.writeln("			var colors = [\'red\', \'orange\', \'yellow\', \'blue\'];");
	document.writeln("			var fm = 0;");
	document.writeln("			for (let i = 0; i < sxs.length; i++) {");
	document.writeln("				fm = fm + sxs[i];");
	document.writeln("			}");
	document.writeln("");
	document.writeln("			var sx = document.getElementById(\'sx\').getContext(\'2d\');");
	document.writeln("");
	document.writeln("			// sx.beginPath();");
	document.writeln("			// sx.moveTo(150,75);");
	document.writeln("			// sx.arc(150,75,75,0,Math.PI*0.25,false);");
	document.writeln("			// sx.fill();");
	document.writeln("			var beginange = 0");
	document.writeln("			var endange = 0;");
	document.writeln("			for (let i = 0; i < sxs.length; i++) {");
	document.writeln("");
	document.writeln("");
	document.writeln("				endange = endange + sxs[i] / fm;");
	document.writeln("");
	document.writeln("");
	document.writeln("				sx.beginPath();");
	document.writeln("");
	document.writeln("				sx.fillStyle = colors[i];");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("				if (i == 2) {");
	document.writeln("					sx.moveTo(152, 70); //移动到152，70");
	document.writeln("					sx.arc(152, 70, 65, 2 * Math.PI * beginange, 2 * Math.PI * endange, false);");
	document.writeln("					sx.lineTo(152, 70)");
	document.writeln("				} else {");
	document.writeln("");
	document.writeln("					sx.moveTo(150, 75);");
	document.writeln("					console.log(beginange)");
	document.writeln("					console.log(endange)");
	document.writeln("");
	document.writeln("					sx.arc(150, 75, 65, 2 * Math.PI * beginange, 2 * Math.PI * endange, false);");
	document.writeln("");
	document.writeln("					sx.fill();");
	document.writeln("");
	document.writeln("					sx.lineTo(150, 75)");
	document.writeln("");
	document.writeln("				}");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("				sx.strokeStyle = \'black\';");
	document.writeln("				sx.stroke();");
	document.writeln("");
	document.writeln("");
	document.writeln("");
	document.writeln("				beginange = endange;");
	document.writeln("");
	document.writeln("");
	document.writeln("				//	 endange = endange+beginange;");
	document.writeln("");
	document.writeln("");
	document.writeln("				console.log(\'--------------------\')");
	document.writeln("");
	document.writeln("");
	document.writeln("			}");
	document.writeln("		</script>");
	document.writeln("");
	document.writeln("	</body>");
	document.writeln("</html>");
	document.writeln("");
}
