function drawBarGraph(e,g,c,f,a,d,b){$(document).ready(function(){if(b==undefined){b="rgba(223, 16, 137, 1.0)";}var o=0.5;var m=4;var p=o+m;var r=a-p*2+2;if(f!=0){o=0;}var t=$(document.getElementById(e));var j=document.createElement("canvas");jcanvas=$(j);jcanvas.attr("width",t.attr("width"));jcanvas.attr("height",t.attr("height"));jcanvas.attr("id",t.id+"_canvas");t.append(j);if(!j.getContext){j=G_vmlCanvasManager.initElement(j);}var s=j.getContext("2d");var u=d-2-(m*2);s.lineWidth=1;var n=0;for(n=0;n<m;n++){var l=0+(n/(m-1))*0.13;s.strokeStyle="rgba(0, 0, 0, "+l+")";s.strokeRect(n+1,n+o,d-2*n-0.5,a-o-n*2+0.5);}s.fillStyle=b;var q=Math.round(u*c);s.fillRect(m,p-0.5,q,r);var k=Math.round(d*f)-2.5;if(g=="dashed"){s.lineCap="butt";s.strokeStyle="rgb(0, 0, 0)";s.lineWidth=1;s.beginPath();var h=6;for(n=0;n<a;n+=h){s.moveTo(k,n);s.lineTo(k,(n+(h/2)));s.stroke();}if(n>a){s.moveTo(k,(n-h));s.lineTo(k,n);s.stroke();}}else{s.lineCap="round";s.strokeStyle="rgba(239, 135,196,1.0)";s.lineWidth=4;s.beginPath();s.moveTo(k,2);s.lineTo(k,a-2);s.stroke();}});}