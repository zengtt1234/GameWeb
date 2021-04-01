//环境监测-噪声
export function initNoiseChart(config){
    var domId = config.domId;
    // var xData = config.xData;
    // var yData = config.yData;
    
    var dom  = document.getElementById(domId);
    var myChart = echarts.init(dom);
    //this.charts.NoiseChart = myChart;
    myChart.setOption({
        tooltip: {
            trigger: 'axis',
            backgroundColor:'rgba(0, 0, 0, 0.8)',//通过设置rgba调节背景颜色与透明度
            textStyle:{
                color:'rgba(255, 255, 255, 1)',
            },
            borderWidth: "0", //边框宽度设置
            formatter:function(params){
                return  params[0].axisValue + '<br>' + 
                        params[0].marker+params[0].seriesName + "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>" + params[0].data +'<br>' +
                        params[1].marker+params[1].seriesName + '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>' + params[1].data +'<br>' +
                        params[2].marker+params[2].seriesName + '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>' + params[2].data +'<br>' +
                        params[3].marker+params[3].seriesName + '<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>' + params[3].data ;                        
            },
        },
        grid: {
            top: "15%",
            left: '3%',
            right: '10%',
            bottom: '0%',
            containLabel: true
        },
        // legend: {
        //     data: ['A库', 'B库','C库','D库',],
        //     textStyle:{
        //         fontSize: 8,
        //         color: '#ffffff'
        //     },
        //     itemWidth: 8,
        //     itemHeight: 8,
        //     itemGap: 5,
        //     symbolKeepAspect: true,
        //     right: 0,
        //     top: "5%"
        // },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        title: [
            {
                text: "噪声(dB)",
                top: '0%',
                textStyle:{
                    color:'#fff',
                    fontWeight:'400',
                    fontFamily:'sans-serif',
            　　　　 fontSize: 10
                }
            }],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['12:00', '12:01', '12:02', '12:03', '12:04', '12:05', '12:06', '12:07', '12:08'],
            //设置轴线的属性
            axisLine:{
                show: true,
                lineStyle:{
                    color:'rgba(50, 201, 255, 0.4)'
                }
            } ,
            axisTick:{ //轴刻度线
                show: false
            },
            axisLabel: {  
                // margin: 15,
                fontSize: 8
            },

            splitLine :{    //网格线
                lineStyle:{
                    type:'solid',    //设置网格线类型 dotted：虚线   solid:实线
                    color:'rgba(50, 201, 255, 0.1)'
                    // color:"rgba(45, 77, 102, 1)"
                },
                show:true //隐藏或显示
            }
        },
        yAxis: {
            type: 'value',
            // splitNumber: 4,
            //设置轴线的属性
            axisLine:{
                show: true,
                lineStyle:{
                    color:'rgba(50, 201, 255, 0.4)'
                }
            } ,
            axisTick:{ //轴刻度线
                show: false
            },
            axisLabel: {  
                fontSize: 8
            },
            splitLine :{    //网格线
                lineStyle:{
                    type:'solid',    //设置网格线类型 dotted：虚线   solid:实线
                    color:'rgba(50, 201, 255, 0.1)'
                    // color:"rgba(45, 77, 102, 1)"
                },
                show:true //隐藏或显示
            }   
        },
        series: [
            {
                name: 'A库',
                type: 'line',
                //smooth: true,
                data: [50, 58, 70, 65, 69, 53, 61, 73, 51],
                itemStyle:{
                normal:{
                    color:"rgba(0, 213, 255, 1)",
                    lineStyle: {
                      width:1
                    }
                }
                }
            },
            {
                name: 'B库',
                type: 'line',
                //smooth: true,
                data: [60, 54, 64, 62, 69, 75, 53, 71, 63],
                itemStyle:{
                normal:{
                    color:"rgba(255, 202, 44, 1)",
                    lineStyle: {
                      width:1
                    }
                }
                }
            },
            {
                name: 'C库',
                type: 'line',
                //smooth: true,
                data: [ 53, 61, 73, 60, 52, 70, 64, 59,71],
                itemStyle:{
                normal:{
                    color:"rgba(0, 191, 143, 1)",
                    lineStyle: {
                      width:1
                    }
                }
                }
            },
            {
                name: 'D库',
                type: 'line',
                //smooth: true,
                data: [60, 52, 55, 53, 61, 72, 50, 63, 70],
                itemStyle:{
                    normal:{
                        color:"rgba(222, 69, 73, 1)",
                        lineStyle: {
                              width:1
                         }                        
                    }
                }
            },
        ]
    
    })
    window.addEventListener("resize",function(){
        myChart.resize();
    })
    return myChart;
};