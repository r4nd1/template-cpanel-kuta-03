$(document).ready(function() {
	initBase();
	initHorizontalBarChart();
	initVerticalBarChart();
	initDonutChart();
	initPieChart();
	initLineChart();
	initAreaChart();
	initKutaRedactor();
	selectizeRegular();
	initCustomForms();
});
function initBase(){
	$('.bottom_tooltip').tooltip({
		placement: 'bottom'
	});
	$('.left_tooltip').tooltip({
		placement: 'left'
	});
	$('.right_tooltip').tooltip({
		placement: 'right'
	});
	$('.top_tooltip').tooltip();
	
	$('.dropdown-menu').click(function(event){
		event.stopPropagation();
	});
	$('a.dropdown-toggle, .dropdown-menu a').on('touchstart', function(event) {
		event.stopPropagation();
	});
	$('.carousel').carousel();
}
function initHorizontalBarChart(){
	if (document.getElementById('horizontal-bar-div')) {
		var nilai = eval($('#horizontal-bar-div').attr('data-value'));
		var warna = eval($('#horizontal-bar-div').attr('data-colors'));
		var penanda = eval($('#horizontal-bar-div').attr('data-labels'));
		var show_legend;
		if($('#horizontal-bar-div').attr('data-legend') == 'true'){
			show_legend = true;
		}else{
			show_legend = false;
		}
		
		var plot2 = $.jqplot('horizontal-bar-div', nilai, {			
			seriesColors: warna,
			seriesDefaults: {
				renderer:$.jqplot.BarRenderer,
				pointLabels: { show: true, location: 'e', edgeTolerance: -15 },	
				rendererOptions: {						
					barPadding: 0,
					barMargin: 10,
					barDirection: 'horizontal',
					barWidth: null,
					shadowOffset: 0,
					shadowDepth: 3,
					shadowAlpha: 0.6
				}
			},
			series:penanda,
			grid: {
				borderWidth: 0,
				gridLineColor: 'rgba(0,0,0,0.2)',
				background: 'transparent',
				shadow: false
			},
			legend: {
				show: show_legend,
				placement: 'insideGrid',
				location: 'ne'
			},
			axes: {
				yaxis: {
					renderer: $.jqplot.CategoryAxisRenderer
				}
			}
		});
		$(window).resize(function() {
			if (plot2) {
				$.each(plot2.series, function(index, series) {
					series.barWidth = undefined;
				});
				plot2.replot();
			}
		});
	}
}
function initVerticalBarChart(){
	if (document.getElementById('vertical-bar-div')) {
		var s1 = eval($('#vertical-bar-div').attr('data-value'));
		var ticks = eval($('#vertical-bar-div').attr('data-ticks'));
		var warna = eval($('#vertical-bar-div').attr('data-colors'));
		var penanda = eval($('#vertical-bar-div').attr('data-labels'));
		var show_legend;
		if($('#vertical-bar-div').attr('data-legend') == 'true'){
			show_legend = true;
		}else{
			show_legend = false;
		}
		 
		var plot1 = $.jqplot('vertical-bar-div', s1, {
			seriesColors: warna,
			seriesDefaults:{
				renderer:$.jqplot.BarRenderer,
				rendererOptions: {
					fillToZero: true,
					barPadding: 0,
					barMargin: 10,
					barWidth: null,
					shadowOffset: 0,
					shadowDepth: 3,
					shadowAlpha: 0.6
				}
			},
			series:penanda,
			grid: {
				borderWidth: 0,
				gridLineColor: 'rgba(0,0,0,0.2)',
				background: 'transparent',
				shadow: false
			},
			legend: {
				show: show_legend,
				placement: 'insideGrid',
				location: 'nw'
			},
			axes: {
				xaxis: {
					renderer: $.jqplot.CategoryAxisRenderer,
					ticks: ticks
				},
				yaxis: {
					pad: 1.05,
					tickOptions: {formatString: '$%d'}
				}
			}
		});
		$(window).resize(function() {
			if (plot1) {
				$.each(plot1.series, function(index, series) {
					series.barWidth = undefined;
				});
				plot1.replot();
			}
		});
	}
}
function initDonutChart(){
	if (document.getElementById('donut-pie-div')) {
	  var s1 = eval($('#donut-pie-div').attr('data-value'));
	  var s2 = eval($('#donut-pie-div').attr('data-value2'));
	  var warna = eval($('#donut-pie-div').attr('data-colors'));
	  var show_legend;
	  if($('#donut-pie-div').attr('data-legend') == 'true'){
		show_legend = true;
	  }else{
		show_legend = false;
	  }
	   
	  var plot3 = $.jqplot('donut-pie-div', [s1,s2], {
		seriesColors: warna,
		seriesDefaults: {
			renderer:$.jqplot.DonutRenderer,
			rendererOptions:{
				sliceMargin: 0,
				innerDiameter: 60,
				startAngle: -180,
				showDataLabels: true,
				shadowOffset: 3,
				shadowDepth: 1,
				shadowAlpha: 0.049,
				dataLabels: 'value'
			}
		},
		grid: {
			borderWidth: 0,
			gridLineColor: '#cdcdcd',
			background: 'transparent',
			shadow: false		
		},
		legend: {
			show: show_legend
		}
	  });
		$(window).resize(function() {
			if (plot3) {
				plot3.replot();
			}
		});
	}
}
function initPieChart(){
	if (document.getElementById('pie-div')) {
		var data = eval($('#pie-div').attr('data-content'));
		var dataColors = eval($('#pie-div').attr('data-colors'));
		var show_legend;
		if($('#pie-div').attr('data-legend') == 'true'){
			show_legend = true;
		}else{
			show_legend = false;
		}
		
		var plot1 = jQuery.jqplot ('pie-div', [data], 
		{
		seriesColors: dataColors,
		  seriesDefaults: {
			renderer: jQuery.jqplot.PieRenderer, 
			rendererOptions: {
			  showDataLabels: true
			}
		  }, 
		  legend: { show:show_legend, placement: 'insideGrid', location: 'e' },
			grid: {
				borderWidth: 0,
				gridLineColor: '#cdcdcd',
				background: 'rgba(255,255,255,0.1)',
				shadow: false		
			}
		}
	  );
	}
}
function initLineChart(){
	if (document.getElementById('line-chart-div')) {
		var cosPoints = eval($('#line-chart-div').attr('data-content'));
		var judul = $('#line-chart-div').attr('data-title');
		var warna = eval($('#line-chart-div').attr('data-colors'));
		var show_legend;
		if($('#line-chart-div').attr('data-legend') == 'true'){
			show_legend = true;
		}else{
			show_legend = false;
		}
	 
	  var plot3 = $.jqplot('line-chart-div', cosPoints, 
		{ 
		  title:judul,
			grid: {
				borderWidth: 0,
				gridLineColor: '#cdcdcd',
				background: 'rgba(255,255,255,0.1)',
				shadow: false		
			},
			seriesColors: warna,
			legend: {
				show: show_legend,
				placement: 'insideGrid',
				location: 'nw'
			}
		}
	  );
    }
}
function initAreaChart(){
	if (document.getElementById('area-chart-div')) {
		var ab = eval($('#area-chart-div').attr('data-content'));
		var warna = eval($('#area-chart-div').attr('data-colors'));
		var dataFill = $('#area-chart-div').attr('data-fill').split('|');
		var dataFillColor = $('#area-chart-div').attr('data-fill-color');
		var show_legend;
		if($('#area-chart-div').attr('data-legend') == 'true'){
			show_legend = true;
		}else{
			show_legend = false;
		}
		 
		var plot1 = $.jqplot("area-chart-div", ab, {
			axesDefaults: {
				pad: 1.05
			},
			fillBetween: {
				series1: Number(dataFill[0]),
				series2: Number(dataFill[1]),
				color: dataFillColor,
				baseSeries: Number(dataFill[2]),
				fill: true
			},
			grid: {
				borderWidth: 0,
				gridLineColor: '#cdcdcd',
				background: 'rgba(255,255,255,0.1)',
				shadow: false		
			},
			seriesColors: warna,
			seriesDefaults: {
				rendererOptions: {
					smooth: true
				}
			},
			legend: {
				show: show_legend,
				placement: 'insideGrid',
				location: 'nw'
			}
		});
	}
}

function initKutaRedactor(){
	$( ".fullRedactor" ).each(function(){
		$(this).redactor();
	});
	$( ".statusRedactor" ).each(function(){
		$(this).redactor({
			buttons: ['image', 'video', 'file', 'link']
		});
	});
	$( ".commentRedactor" ).each(function(){
		$(this).redactor({
			buttons: ['bold', 'italic']
		});
	});
}
function selectizeRegular(){
	$('.selectize-tags').selectize({
		delimiter: ',',
		persist: false,
		create: function(input) {
			return {
				value: input,
				text: input
			}
		}
	});
	$('.selectize-single').selectize({
		create: true,
		sortField: 'text'
	});
	$('.selectize-multiple').selectize();
}
function initCustomForms(){
	$('.icheck.icheck-default > label > input').iCheck({
		checkboxClass: 'icheckbox_square',
		radioClass: 'iradio_square'
	});
	$('.icheck.icheck-aero > label > input').iCheck({
		checkboxClass: 'icheckbox_square-aero',
		radioClass: 'iradio_square-aero'
	});
	$('.icheck.icheck-blue > label > input').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue'
	});
	$('.icheck.icheck-green > label > input').iCheck({
		checkboxClass: 'icheckbox_square-green',
		radioClass: 'iradio_square-green'
	});
	$('.icheck.icheck-grey > label > input').iCheck({
		checkboxClass: 'icheckbox_square-grey',
		radioClass: 'iradio_square-grey'
	});
	$('.icheck.icheck-orange > label > input').iCheck({
		checkboxClass: 'icheckbox_square-orange',
		radioClass: 'iradio_square-orange'
	});
	$('.icheck.icheck-pink > label > input').iCheck({
		checkboxClass: 'icheckbox_square-pink',
		radioClass: 'iradio_square-pink'
	});
	$('.icheck.icheck-purple > label > input').iCheck({
		checkboxClass: 'icheckbox_square-purple',
		radioClass: 'iradio_square-purple'
	});
	$('.icheck.icheck-red > label > input').iCheck({
		checkboxClass: 'icheckbox_square-red',
		radioClass: 'iradio_square-red'
	});
	$('.icheck.icheck-yellow > label > input').iCheck({
		checkboxClass: 'icheckbox_square-yellow',
		radioClass: 'iradio_square-yellow'
	});
	$(".kuta-slider").ionRangeSlider();
	$('.datepicker').each(function(){
		$(this).pikaday({
			firstDay: 1,
			minDate: new Date('2000-01-01'),
			maxDate: new Date('2050-12-31'),
			yearRange: [2000,2050],
			format: $(this).attr('data-dateformat')
		});
	});
	$(".niceFileInput").niceFileInput({    
		'margin' : '14'
	});
}