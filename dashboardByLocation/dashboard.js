function openUrl(href){
    $(".nextScreen iframe").attr("src", href);
    $(".divCentral").hide();
    $(".divRight").hide();
    $(".nextScreen").show();
    $(".nextScreenBack").show();
}

function closeNextScreen(){
    $(".divCentral").show();
    $(".divRight").show();
    $(".nextScreen").hide();
    $(".nextScreenBack").hide();
}

 // helper for returning the weekends in a period
function weekendAreas(axes) {
    var markings = [];
    var d = new Date(axes.xaxis.min);
    // go to the first Saturday
    d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7))
    d.setUTCSeconds(0);
    d.setUTCMinutes(0);
    d.setUTCHours(0);
    var i = d.getTime();
    do {
    	markings.push({ xaxis: { from: i- 12*60*60*1000, to: i + 2 * 24 * 60 * 60 * 1000 }, color:"rgba(0,0,0,0.05)"});
    	i += 7 * 24 * 60 * 60 * 1000;
    } while (i < axes.xaxis.max);

    return markings;
}
    
function allMarkings(axes){
	var markings = weekendAreas(axes);
	if ((validDateAsTime != null) && (validDateAsTime > axes.xaxis.min)){
		if (validDateAsTime < axes.xaxis.max){
			// Mark part of period
			markings.push({ xaxis: { from: axes.xaxis.min, to: validDateAsTime }, color:"rgba(100,0,0,0.25)"});
		} else {
			// Mark total period
			markings.push({ xaxis: { from: axes.xaxis.min, to: axes.xaxis.max }, color:"rgba(100,0,0,0.25)"});
		}
	}
	return markings;
}

 // helper for returning the weekends in a period
function weekendTicks(axis) {
   	var markings = [];
   	var d = new Date(axis.min);
   	// go to the first Saturday
   	d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7))
   	d.setUTCSeconds(0);
   	d.setUTCMinutes(0);
   	d.setUTCHours(0);
   	var i = d.getTime();
   	do {
   		markings.push(i);
   		i += 7 * 24 * 60 * 60 * 1000;
   	} while (i < axis.max);
   	
   	return markings;
}

function percentTickGenerator(axis) {
    var result = [];
    var i= Math.floor(axis.min);

    do {
      res.push([i, (i * 100).toFixed(0) + "%"]);
      ++i;
    } while (i < axis.max);

    return res;
}

function formatYAxis(val, axis){
  return (val * 100).toFixed(0) + "%";
}

function max(array){
	var maxD = 0;
	for(var j = 0; j < array.length;j++){
		var series = array[j];
		for(var i = 0; i < series.length; i++){
			if(series[i][1] != null){
				maxD = series[i][1] > maxD ? series[i][1] : maxD;
			}
		}
	}
	return maxD;
}

var validDateAsTime = null;
function plotGraph(element, lbData, validdatetime, color1, color2){
	validDateAsTime = validdatetime;
    
	if(!color1){
    	color1 = "rgba(200, 16, 137, 0.8)";
    }
    if(!color2){
    	color2 = "rgba(223, 16, 137, 0.15)";
    }

    var maxData = max(lbData);
    if(maxData < 1){
    	maxData = 1;
    }

    var options = {
        xaxis: {
    		mode: "time",
        	monthNames: ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        	timeformat: "%d %b",
        	ticks: weekendTicks
    	},
        yaxis: {
    		tickFormatter: formatYAxis,
    		min:0,
    		max:maxData
    	},
        grid: {
        	markings: allMarkings,borderWidth:1
        },
        colors: [color1],
        lines: {
            show:true,
            fill:true,
            fillColor: color2
        },
        points: {
            show:true
        }
    }
    
    $.plot(element, lbData, options);
}
