d3.selectAll('.buttonLearn').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.selectAll('.section-content').style('display','none');
	d3.select('#navLearn').classed('active', true);
	d3.select('#learn').style('display','block');
});

d3.selectAll('.buttonHome').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.selectAll('.section-content').style('display','none');
	d3.select('#navHome').classed('active', true);
	d3.select('#home').style('display','block');
});

d3.selectAll('.buttonAbout').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.selectAll('.section-content').style('display','none');
	d3.select('#navAbout').classed('active', true);
	d3.select('#about').style('display','block');
});

d3.selectAll('.buttonWorkshop').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.selectAll('.section-content').style('display','none');
	d3.select('#navWorkshop').classed('active', true);
	d3.select('#workshop').style('display','block');
});

d3.selectAll('.buttonMeet').on('click', function(d) {
	d3.selectAll('.nav-link').classed('active', false);
	d3.selectAll('.section-content').style('display','none');
	d3.select('#navMeet').classed('active', true);
	d3.select('#meet').style('display','block');
});