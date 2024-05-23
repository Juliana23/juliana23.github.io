var numberColumnRow = 4;
var width = 50;
var height = 50;
function gridData() {
    var data = new Array();
    var result = new Array();
	var xpos = 1;
	var ypos = 1;
    var click = 0;
	
	for (var row = 0; row < numberColumnRow; row++) {
        data.push( new Array() );
        result.push( new Array() );
		
		for (var column = 0; column < numberColumnRow; column++) {
			data[row].push({
				x: xpos,
				y: ypos,
				width: width,
				height: height,
				click: click
            });
            result[row].push({
				x: xpos,
				y: ypos,
				width: width,
                height: height,
                id: xpos + '_' + ypos,
				click: click
            });
			xpos += width;
		}
		xpos = 1;
		ypos += height;	
	}
	return data;
}
function gridResult() {
    var result = new Array();
	var xpos = 1;
	var ypos = 1;
    var value = 0;
    var click = 0;
	
	for (var row = 0; row < numberColumnRow; row++) {
        result.push( new Array() );
		
		for (var column = 0; column < numberColumnRow; column++) {
            result[row].push({
				x: xpos,
				y: ypos,
				width: width,
                height: height,
                id: xpos + '_' + ypos,
                value: value,
				click: click
            });
			xpos += width;
		}
		xpos = 1;
		ypos += height;	
	}
	return result;
}

var gridData = gridData();	
var gridResult = gridResult();	
var squareWith = numberColumnRow * width + 100;
var squareHeight = numberColumnRow * height + 100;

var grid = d3.select("#grid")
	.append("svg")
	.attr("width", squareWith)
	.attr("height", squareHeight);
	
var row = grid.selectAll(".row")
	.data(gridResult)
	.enter().append("g")
	.attr("class", "row");
	
var column = row.selectAll(".square")
	.data(function(d) { return d; })
	.enter().append("rect")
    .attr("class","square")
    .attr("class", function(d) { return d.class; })
	.attr("x", function(d) { return d.x; })
	.attr("y", function(d) { return d.y; })
	.attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; })
    .style("fill", "#fff")
    .style("stroke", "#222")
	.on('click', function(d) {
       d.click ++;
       if ((d.click)%2 == 0 ) {
           d3.select(this).style("fill","#fff");
           d3.select('#squareResult_' + d.id)
           .text('0');
        }
	   if ((d.click)%2 == 1 ) { 
           d3.select(this).style("fill","#000");
           d3.select('#squareResult_' + d.id)
           .text('1');
        }
    });

var result = d3.select("#result")
	.append("svg")
	.attr("width", squareWith)
	.attr("height", squareHeight);
	
var rowResult = result.selectAll(".rowResult")
	.data(gridResult)
	.enter().append("g")
    .attr("class", "rowResult");
    
var columnResultG = rowResult.selectAll(".squareResult")
.data(function(d) { return d; })
.enter().append("g").append("text")
    .attr("class","squareResult")
    .attr("id",function(d) { return "squareResult_" + d.id; })
    .attr("x", function(d) { return d.x / 2; })
	.attr("y", function(d) { return d.y / 2; })
	.attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; })
    .attr("dy", "1em")
    .text("0");