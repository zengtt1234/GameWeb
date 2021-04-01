//运行情况-功耗
export function initConsumptionChart(config){
    var domId = config.domId;
    // var xData = config.xData;
    // var yData = config.yData;

    var dom = document.getElementById(domId);
    var myChart = echarts.init(dom);
    //this.charts.ConsumptionChart = myChart;
    myChart.setOption({
        grid:{
        top: '15%',
        left: '1%',
        right: '0%',
        bottom: '5%',
        containLabel: true
        },
        title: [
            {
                text: "用户活跃度",
                top: '0%',
                left: 0,
                textStyle:{
                    color:'#7d858d',
                    fontWeight:'400',
                    fontFamily:'sans-serif',
            　　　　 fontSize: 14
                }
            }],
        tooltip: {
            //trigger: 'item',
            trigger: 'axis',
            axisPointer: {            
                //type: 'shadow'
                type: 'line'              
            },
            backgroundColor:'rgba(0, 0, 0, 0.8)',//通过设置rgba调节背景颜色与透明度
            textStyle:{
                color:'rgba(255, 255, 255, 1)',
            },
            borderWidth: "0", //边框宽度设置
            formatter:function(params){
                // console.log(params);
                return  params[0].axisValue + '<br>' +
                        params[0].marker+params[0].seriesName + "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>" +params[0].value                 
            },
        },
        xAxis:{
            type:'category',
            data:['2020/06','2020/07','2020/08','2020/09','2020/10','2020/11','2020/12','2021/1','2021/2','2021/3','2021/4'],
            //设置轴线的属性
            axisLine:{
                show: false,
                lineStyle:{
                    //color:'rgba(15, 215, 255, 1)',
                    color:'#000000'
                    // color:"rgba(45, 77, 102, 1)"
                }
            } ,
            axisLabel: {  
                // interval:0,  
                // rotate:-55,
                fontSize: 8,
                color:"#7d858d"
            },
            axisTick:{ //轴刻度线
                show: false,
                inside: true,
            }, 
        },
        yAxis:{
            type:'value',
            splitLine :{    //网格线
                lineStyle:{
                    type:'solid',    //设置网格线类型 dotted：虚线   solid:实线
                    color:'#000000'
                    // color:"rgba(45, 77, 102, 1)"
                },
                show: false //隐藏或显示
            },
            //设置轴线的属性
            axisLine:{
                show: false,
                lineStyle:{
                    //color:'rgba(15, 215, 255, 1)',
                    color:'#000000'
                    // color:"rgba(45, 77, 102, 1)"
                }
            } ,
            axisLabel: {  
                // interval:0,  
                // rotate:-55,
                fontSize: 8,
                color:"#7d858d"
            },
            axisTick:{ //轴刻度线
                show: false,
                inside: true,
            },
        },
        series:[
        {
            name:'用户活跃度',
            type:'line',
            smooth: true,
            data:["80","75","85","90","70","95","82","75","66","88","78"],
            itemStyle:{
                normal:{
                    color: "rgba(79, 214, 244, 1)"             
                },

            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            // 折线图颜色渐变
                            offset: 0,
                            color: 'rgba(46, 191, 223, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 225, 194, 0)'
                        }
                    ])
                }
            },
        }
        ]

    });
    window.addEventListener('resize', function(){
        myChart.resize();
    })
    return myChart;
};