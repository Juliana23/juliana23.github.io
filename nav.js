d3.select('#buttonLearn').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.selectAll('.section-content').style('display','none');
	d3.select('#buttonLearn').classed('active', true);
	d3.select('#learn').style('display','block');
});

d3.select('#buttonHome').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.selectAll('.section-content').style('display','none');
	d3.select('#buttonHome').classed('active', true);
	d3.select('#home').style('display','block');
});

d3.select('#buttonAbout').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.selectAll('.section-content').style('display','none');
	d3.select('#buttonAbout').classed('active', true);
	d3.select('#about').style('display','block');
});

d3.select('#buttonWorkshop').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.selectAll('.section-content').style('display','none');
	d3.select('#buttonWorkshop').classed('active', true);
	d3.select('#workshop').style('display','block');
});

d3.select('#buttonMeet').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.selectAll('.section-content').style('display','none');
	d3.select('#buttonMeet').classed('active', true);
	d3.select('#meet').style('display','block');
});