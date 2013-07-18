function drawBarGraph(bar, barType, value1, target, height, width, color) {
    $(document).ready(function() {

       if(color == undefined){
         color = "rgba(223, 16, 137, 1.0)";
       }

        var shadowTop = 0.5;
        var shadowWidth = 4;
        var barTop = shadowTop + shadowWidth;
        var barHeight = height - barTop * 2+2;
        if(target != 0){
            shadowTop = 0;
            }


    //create the canvas
        var canvas_container = $(document.getElementById(bar));
        var canvas = document.createElement('canvas');//create the DOM element
          /*We have tow ways of setting the width and height becuase of some browser differences*/
          jcanvas = $(canvas);
      jcanvas.attr('width', canvas_container.attr('width'));
      jcanvas.attr('height', canvas_container.attr('height'));

      jcanvas.attr('id', canvas_container.id + '_canvas');//Set the unique id for the canvas element.
      canvas_container.append(canvas);
        if(!canvas.getContext){
          canvas = G_vmlCanvasManager.initElement(canvas);
        }
        var ctx = canvas.getContext("2d");

        var barWidth = width - 2 - (shadowWidth * 2);

    //draw the shadow
        ctx.lineWidth = 1;
        var i = 0;
        for (i = 0; i < shadowWidth; i++) {
            var alpha = 0.0 + (i / (shadowWidth - 1)) * 0.13;
            ctx.strokeStyle = "rgba(0, 0, 0, " + alpha + ")";
            ctx.strokeRect(i+1, i + shadowTop, width - 2 * i-0.5, height-shadowTop - i * 2+0.5);
        }

        ctx.fillStyle = color;
        var w = Math.round(barWidth * value1);
        ctx.fillRect(shadowWidth, barTop-0.5, w, barHeight);

        var begin = Math.round(width * target) - 2.5;

        if (barType == "dashed") {
            ctx.lineCap = 'butt';
            ctx.strokeStyle = "rgb(0, 0, 0)"
            ctx.lineWidth = 1;

            ctx.beginPath();

            var dashWidth = 6;

            for (i = 0; i < height; i += dashWidth) {
                ctx.moveTo(begin, i);
                ctx.lineTo(begin, (i + (dashWidth / 2)));
                ctx.stroke();
            }
            if (i > height) {
                ctx.moveTo(begin, (i - dashWidth));
                ctx.lineTo(begin, i);
                ctx.stroke();
            }

        } else {
            ctx.lineCap = 'round';
            ctx.strokeStyle = "rgba(239, 135,196,1.0)";
            ctx.lineWidth = 4;

            ctx.beginPath();
            ctx.moveTo(begin, 2);
            ctx.lineTo(begin, height - 2);
            ctx.stroke();
        }
    });
}
