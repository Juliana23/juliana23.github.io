d3.select('#buttonLearn').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	console.log();
	d3.select('#buttonLearn').classed('active', true);
	d3.select('#learn').style('display','block');
	d3.select('#home').style('display','none');
});

d3.select('#buttonHome').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.select('#buttonHome').classed('active', true);
	d3.select('#learn').style('display','none');
	d3.select('#home').style('display','block');
});