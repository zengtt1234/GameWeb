//运行情况——存车取车
export function initAccessCarChart(config){
    var domId = config.domId;
    // var xData = config.xData;
    // var yData = config.yData;

    var dom = document.getElementById(domId);
    var myChart = echarts.init(dom);
    //this.charts.AccessCarChart = myChart;
    myChart.setOption({
        title: [
            {
                text: "浏览量",
                top: '0%',
                left: 0,
                textStyle:{
                    color:'#7d858d',
                    fontWeight:'400',
                    fontFamily:'sans-serif',
            　　　　 fontSize: 12
                }
            }],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            
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
        grid:{
            top: '15%',
            left: '0%',
            right: '0%',
            bottom: '10%',
            containLabel: true
        },
        xAxis:{
        type:'category',
        data:['12:00','12:10','12:20','12:30','12:40','12:50','13:00'],
        //设置轴线的属性
        axisLine:{
            lineStyle:{
                //color:'rgba(15, 215, 255, 1)',
                color:'#7d858d'
                //color:"rgba(45, 77, 102, 1)"
            }
        } ,
        axisLabel: {  
            fontSize: 8
        },
        axisTick:{ //轴刻度线
            show: false
        },
        },
        yAxis:{
            type:'value',
            splitLine :{    //网格线
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                },
                show:false //隐藏或显示
            },
            //设置轴线的属性
            axisLine:{
                show: true,
                lineStyle:{
                    //color:'rgba(15, 215, 255, 1)',
                    color:'#7d858d'
                    // color:"rgba(45, 77, 102, 1)"
                }
            } ,
            axisLabel: {  
                fontSize: 8,
                formatter:function (value, index) { if(value<0){ return -value; }else{return value}}
            },
            axisTick:{ //y轴刻度线
                show: false,
                inside: true
            },
        },
        series:[
        {
            name:"浏览量",
            type:'bar',
            barWidth : 18,//柱图宽度
            stack:'车',
            data:[1000,800,500,910,680,1200,900],
           // 平均值的配置
    //         markLine : {
    //             symbol:"none",   //该线无样式
    //             //silent:true,    //true 去掉鼠标悬浮该线上的动画
    //             data : [　{type : 'average'},　],
    //             itemStyle:{
    //                 normal:{
    //                     lineStyle:{
    //                         type: 'dashed',
    //                         height: 3,
    //                         //color:'rgba(255, 38, 38, 1)'
    //                         color:'rgba(15, 215, 255, 1)'
    //                     },
    //                 label:{
    //                     show: false,
    //                     //position:'middle',
    //                 }
    //                 }
    //             },
    // 　　　   },
            itemStyle: {
                normal: {
                    //color:'rgba(15, 215, 255, 1)'
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(139, 168, 255, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(96, 122, 254, 1)'
                        }
                    ]),
                }
            },
            label: {
                show: true,
                color: 'rgba(255, 255, 255, 1)',
                position:"top",
                fontSize: 8
            }, 
        },
        ]
    })
    window.addEventListener("resize",function(){
        myChart.resize();
    })
  return myChart;
};