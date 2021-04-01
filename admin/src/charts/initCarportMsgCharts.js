//车库信息
export function initCarportMsgCharts(config) {
    var domId = config.domId;
    // var xData = config.xData;
    // var yData = config.yData;

    var dom = document.getElementById(domId);
    var myChart = echarts.init(dom);
    //this.charts.CarportInformationChart = myChart;
    // 绘制图表
    myChart.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {            
                type: 'shadow'        
            },
            backgroundColor:'rgba(0, 0, 0, 0.8)',//通过设置rgba调节背景颜色与透明度
            textStyle:{
                color:'rgba(255, 255, 255, 1)',
            },
            borderWidth: "0", //边框宽度设置
            // formatter: '{a0}: {c0}<br />{a1}: {c1}'
            formatter:function(params){
                // console.log(params);
                return  params[0].axisValue + '<br>' + 
                        params[0].marker+params[0].seriesName + '<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>' + params[0].data +'<br>' +
                        params[1].marker+params[1].seriesName + '<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>' + params[1].data +'<br>' +
                        params[2].marker+params[2].seriesName + '<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>' + params[2].data;                        
            },
        },
        legend: {
            data: ['运行中', '空闲', '故障'],
            textStyle:{
                        // fontSize: 14,
                        color: '#ffffff'
                    },
            right: '3%',
            top: "5%",
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: 0,
            top: "20%",
            containLabel: true
        },
        xAxis: {
            show: true,
            type: 'value',
            splitLine :{    //网格线
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                },
                show: false //隐藏或显示
            },
            //设置轴线的属性
            axisLine:{
                show: true,
                lineStyle:{
                    //color:'rgba(15, 215, 255, 1)',
                    color:'#fff'
                }
            } ,
            axisTick:{ //轴刻度线
                show: true,
                inside: true
            },

        },
        yAxis: {
            axisLine: {show:false},
            axisTick: {show:false},
            show: true,
            type: 'category',
            //设置轴线的属性
            axisLine:{
                lineStyle:{
                    //color:'rgba(15, 215, 255, 1)',
                    color:'#fff'
                }
            } ,
            data: ['A库', 'B库', 'C库', 'D库'],
            //设置轴线的属性
            axisLine:{
                lineStyle:{
                    //color:'rgba(15, 215, 255, 1)',
                    color:'#fff'
                }
            } ,
            axisTick:{ //轴刻度线
                show: true,
                inside: true
            },
        },
        series:[
        {
            name: '运行中',
            type: 'bar',
            stack: 'total',
            barWidth : 14,//柱图宽度
            itemStyle: {
            normal: {
                //color:'rgba(15, 215, 255, 1)'
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#5ADAEB'
                        }, {
                            offset: 1,
                            color: '#33B6D4'
                        }]),
                }
            },
            label: {
                show: true,
                color: 'rgba(4, 11, 26, 1)',
                position:"insideRight",
                fontSize: 8
            },
            data: [38, 38, 38, 38]
        },
        {
            name: '空闲',
            type: 'bar',
            stack: 'total',
            barWidth : 14,//柱图宽度
            // itemStyle: {normal: {color:'rgba(255, 87, 51, 1)'}},
            itemStyle: {
            normal: {
                //color:'#ff5733'
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#82b6ff'
                }, {
                    offset: 1,
                    color: '#1579f1'
                }]),
            }
            },
            label: {
                show: true,
                color: 'rgba(4, 11, 26, 1)',
                position:"insideRight",
                fontSize: 8
            },
            data: [15, 15, 15, 15]
        },
        {
            name: '故障',
            type: 'bar',
            stack: 'total',
            barWidth : 14,//柱图宽度
            itemStyle: {
            normal: {
                //color:'rgba(42, 130, 228, 1)'
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#8F96FF'
                }, {
                    offset: 1,
                    color: '#516BEE'
                }]),
            }
            },
            label: {
                show: true,
                color: 'rgba(4, 11, 26, 1)',
                position:"insideRight",
                fontSize: 8
            },
            // emphasis: {
            //     focus: 'series'
            // },
            data: [15, 15, 15, 15]
        },
        ]
    });
    window.addEventListener("resize",function(){
        myChart.resize();
    })
    return myChart;
}

  