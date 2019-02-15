/**
 * @file 图表API。
 */

function TCharts() {
    //ECharts实例
    this._echart = null;

    /**
     * 创建一个 TCharts 实例，不能在单个容器上初始化多个 TCharts 实例。
     * @param dom 实例容器或其ID
     * @param theme 应用的主题
     * @returns {tchartsInstance} TCharts实例
     */
    this.init = function (dom, theme) {
        var trueDOM = $.type(dom) === "string" ? document.getElementById(dom) : dom;
        var trueTheme = theme === undefined ? "theme1" : theme;
        this._echart = echarts.init(trueDOM, theme);
        return this;
    };

    /**
     * 设置图表实例的配置项以及数据
     * @param option 图表的配置项和数据
     * @param chartType 图表类型
     */
    this.setOption = function (option, chartType) {
        var curOption = $.extend(true, TCharts_OPTIONS[chartType], option);

        // 增加胶囊图外框的样式
        if (chartType === 'VERTICAL_CAPSULE_BAR') {
            var tempObj = {
                type: 'bar',
                name: '外框',
                barGap: '-100%',
                xAxisIndex: 1,
                stack: null,
                tooltip: {
                    show: false,
                },
                data: curOption.series[curOption.series.length - 1].data,
                barWidth: 20,
                itemStyle: {
                    color: 'none',
                    borderColor: '#b5bec3',
                    borderWidth: 1,
                    barBorderRadius: 15,
                }
            };
            curOption.series[curOption.series.length - 1] = tempObj;
        }
        this._echart.setOption(curOption);
    }
}

var tcharts = new TCharts();