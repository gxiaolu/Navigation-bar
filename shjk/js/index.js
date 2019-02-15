/*
 * 导航下的tab切换 
 * */
$('.header-p span.tab-btn').click(function() {
	$(this).addClass('active').siblings('.tab-btn').removeClass('active');
})

/*
 * 数字变化效果
 * */
var numObj = {
	"width": 32,
	"height": 41
}
$("#test").runNum(00000000, numObj);
//水平胶囊柱图
$.getJSON('./json/horizontalCapsuleBar.json', function(data) {

	function getMax(data) {
		var max = data[0].value;
		for(var i = 1; i < data.length; i++) {
			var temp = data[i].value;
			if(temp > max) {
				max = temp;
			}
		}
		return max;
	}

	var interval = 100;
	// 背景图值
	var maxValue = getMax(data.proOne);
	var maxArr = [],
		yAxisData = [],
		seriesData = [];
	for(let k = 0, len = data.proOne.length; k < len; k++) {
		maxArr.push(maxValue);
		yAxisData.push(data.proOne[k].area);
		seriesData.push(data.proOne[k].value);
	}

	//初始化图表
	var chart = tcharts.init('horizontalCapsuleBar', "theme1");
	//添加数据
	chart.setOption({
		legend: {
			data: ['我是图例一'] //设置图例
		},
		grid:{
			top:10,
			bottom:50,
			left:"10%"
		},
		xAxis: {
			name: '单位',
			max: maxValue,

		},
		yAxis: [{
				data: yAxisData,
			},
			{
				data: seriesData
			}
		],
		series: [{
				name: '我是图例一',
				data: seriesData,
				
			}, //第一根柱子数据 ，name要和图例名称对应
			{
				data: maxArr
			} //第二根柱子数据
		]
	}, TCHARTS_TYPE.HORIZONTAL_CAPSULE_BAR);
});