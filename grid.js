function initializeData(numberColumnRow, width, height) {
	function gridData() {
		var data = new Array();
		var xpos = 1;
		var ypos = 1;
		var click = 0;
		
		for (var row = 0; row < numberColumnRow; row++) {
			data.push( new Array() );
			
			for (var column = 0; column < numberColumnRow; column++) {
				data[row].push({
					x: xpos,
					y: ypos,
					width: width,
					height: height,
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
					id: Math.trunc(xpos) + '_' + Math.trunc(ypos),
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

	return {
		gridData: gridData, 
		gridResult: gridResult
	}
}

var grids = initializeData(4, 50, 50);
drawBinaryImage(grids, 4, 50, 50);

d3.select('#remove').on('click', function(d) {
	var newData = d3.select('#size_list').node().value;
		var arraySize = newData.split('size_');
		arraySize.shift();
		numberColumnRow = arraySize[0];
		var width = 50;
		var height = 50;
		if (numberColumnRow > 10) {
			width = width / 1.5;
			height = height /1.5;
		}
		var grids = initializeData(numberColumnRow, width, height);
		drawBinaryImage(grids, numberColumnRow, width, height);
});

function drawBinaryImage(grids, numberColumnRow, width, height) {
	d3.select("#grid").selectAll("*").remove();
	d3.select("#result").selectAll("*").remove();

	var squareWith = numberColumnRow * width + 50;
	var squareHeight = numberColumnRow * height + 50;
	
	var grid = d3.select("#grid")
		.append("svg")
		.attr("width", squareWith)
		.attr("height", squareHeight);
		
	var row = grid.selectAll(".gridRow")
		.data(grids.gridData)
		.enter().append("g")
		.attr("class", "gridRow");
		
	row.selectAll(".square")
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
			   d3.select('#squareResult_' + Math.trunc(d.x) + '_' + Math.trunc(d.y))
			   .text('0');
			}
		   if ((d.click)%2 == 1 ) { 
			   d3.select(this).style("fill","#000");
			   d3.select('#squareResult_' + Math.trunc(d.x) + '_' + Math.trunc(d.y))
			   .text('1');
			}
		});
	
	var result = d3.select("#result")
		.append("svg")
		.attr("width", squareWith)
		.attr("height", squareHeight);
		
	var rowResult = result.selectAll(".rowResult")
		.data(grids.gridResult)
		.enter().append("g")
		.attr("class", "rowResult");
		
	rowResult.selectAll(".squareResult")
	.data(function(d) { return d; })
	.enter().append("g").append("text")
		.attr("class","squareResult")
		.attr("id",function(d) { return "squareResult_" + d.id; })
		.attr("x", function(d) { return d.x / 2; })
		.attr("y", function(d) { return d.y / 2; })
		.attr("width", function(d) { return d.width / 2; })
		.attr("height", function(d) { return d.height / 2; })
		.attr("dy", "1em")
		.text("0");
	
}

///// SELECT ////

var selectData = [{
	name: "4 x 4",
	id: "size_4"
  }, {
	name: "8 x 8",
	id: "size_8",
  }, {
	name: "16 x 16",
	id: "size_16"
}];

var dropDown = d3.select('#size_list')
	.on('change', function() {
		var newData = d3.select(this).property('value');
		var arraySize = newData.split('size_');
		arraySize.shift();
		numberColumnRow = arraySize[0];
		var width = 50;
		var height = 50;
		if (numberColumnRow > 10) {
			width = width / 1.5;
			height = height /1.5;
		}
		var grids = initializeData(numberColumnRow, width, height);
		drawBinaryImage(grids, numberColumnRow, width, height);
	});
  
  
var options = dropDown.selectAll('option')
	.data(selectData)
	.enter()
	.append('option')
	.text(function(d) {
		return d.name;
	})
	.attr('value', function(d) {
		return d.id;
	});