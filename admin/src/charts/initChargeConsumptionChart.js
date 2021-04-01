//充电信息-充电功率
export function initChargeConsumptionChart(config){
    var domId = config.domId;
    // var xData = config.xData;
    // var yData = config.yData;

    var dom = document.getElementById(domId);
    var myChart = echarts.init(dom);
    //this.charts.ChargeConsumptionChart = myChart;
    myChart.setOption({
    grid: {
        top: "10%",
        left: '-5%',
        right: 0,
        bottom: '0%',
        containLabel: true
    },
    tooltip: {
        //trigger: 'item',
        trigger: 'axis',
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
    xAxis: {
        type: 'category',
        boundaryGap: false,
        show:false,
        data: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
    },
    yAxis: {
        type: 'value',
        show:false
    },
    series: [{
        name:"充电功率",
        data: [34, 29, 102, 85, 104, 13, 90, 74, 29, 10],
        type: 'line',
        smooth:true,
        symbol: "none",
        itemStyle:{
            normal:{
                color: "rgba(79, 214, 244, 1)"             
            },

        },
        areaStyle: {
            color:"rgba(45, 77, 102, 1)"
        },
        lineStyle:{
            color:"rgba(15, 215, 255, 1)"
        }
    }]
    })
    window.addEventListener("resize",function(){
        myChart.resize();
    })    
    return myChart;
}