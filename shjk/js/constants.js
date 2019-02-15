/**
 * @file 定义图表的类型以及各类型的基础样式。
 */

var TCharts_OPTIONS = {
    
    HORIZONTAL_CAPSULE_BAR: {
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'none'
            },
        },
        legend: {
            bottom: '0',
            borderRadius: 2,
            itemWidth: 24,

        },
        xAxis: {
            show: true,
            axisLine: {
                show: false
            },
            nameTextStyle: {
                padding: [29, 0, 0, 0]
            }

        },
        yAxis: [{
            show: true,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {},
        }, {
            show: false

        }],
        series: [{
            type: 'bar',
            yAxisIndex: 0,
            barWidth: 16,
            stack: null,
            itemStyle: {
                borderWidth: 4,
                borderColor: '#081a3e',
                barBorderRadius: 20,
            },
            label: {
                show: false
            },
        }, {
            type: 'bar',
            barGap: '-100%',
            yAxisIndex: 1,
            stack: null,
            tooltip: {
                show: false,
            },
            barWidth: 16,
            itemStyle: {
                color: 'none',
                borderColor: '#b5bec3',
                borderWidth: 1,
                barBorderRadius: 15,
            }
        }]
    },
    BROKEN_LINE_BAR: {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            bottom: '0',
            borderRadius: 2,
            itemWidth: 24,
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: true
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: true,
            },
            axisLabel: {
                inside: false,
            },
        },
        yAxis: [{
            type: 'value',
            axisTick: {
                show: true
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: true,
            },

        }, {
            type: 'value',
            axisTick: {
                show: true
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },

        }],
        series:
            [
                {
                    type: 'bar',
                    yAxisIndex: 0,
                    stack: null,
                    barWidth: 14,
                    itemStyle: {
                        barBorderRadius: 30,
                    },
                },
                {
                    type: 'bar',
                    yAxisIndex: 0,
                    stack: null,
                    barWidth: 14,
                    itemStyle: {
                        barBorderRadius: 30,
                    },
                },
                {
                    type: 'line',
                    yAxisIndex: 1,
                    smooth: true
                }

            ]
    },
    VERTICAL_CAPSULE_BAR: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
        },
        legend: {
            bottom: '0',
            borderRadius: 2,
            itemWidth: 24,
        },
        xAxis: [{
            show: true,
            axisLine: {
                show: true,
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }, {
            show: false,
            data: [],
        }],
        yAxis: {
            show: true,
            axisLine: {
                show: true,

            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        },
        series: []
    },
    VERTICAL_BASIC_BAR: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
        },
        legend: {
            bottom: 0,
            left: 'center',

        },
        xAxis: [{
            show: true,
            axisLine: {
                show: true,
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }],
        yAxis: {
            show: true,
            axisLine: {
                show: true,

            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },


        },
        series: [{
            type: 'bar',
            stack: 1,
            barWidth: 18,
            itemStyle: {
                barBorderRadius: 0,
            },
            label: {
                show: false
            },
        }, {
            type: 'bar',
            stack: 1,
            barGap: '-100%',
            barWidth: 18,
            itemStyle: {
                barBorderRadius: 0,
            },
            label: {
                show: false
            },
        }, {
            type: 'bar',
            stack: 1,
            barGap: '-100%',
            barWidth: 18,
            itemStyle: {
                barBorderRadius: 0,
            },
            label: {
                show: false
            },
        }]
    }
};

var TCHARTS_TYPE = {
    TRAPEZOID_BAR: "TRAPEZOID_BAR",
    HORIZONTAL_CAPSULE_BAR: "HORIZONTAL_CAPSULE_BAR",
    BROKEN_LINE_BAR: "BROKEN_LINE_BAR",
    VERTICAL_CAPSULE_BAR: "VERTICAL_CAPSULE_BAR",
    VERTICAL_BASIC_BAR: "VERTICAL_BASIC_BAR"

};