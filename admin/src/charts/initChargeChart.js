//充电信息-充电桩
export function initChargeChart(config){
    var domId = config.domId;
    // var xData = config.xData;
    // var yData = config.yData;

    var dom  = document.getElementById(domId);
    var myChart = echarts.init(dom);
    //this.charts.ChargeChart = myChart;
    var dataArray = [
                        {value: 88, name: '满意'},
                        {value: 12, name: '不满意'},
                    ];
    var total = 0;
    dataArray.forEach((res) => {
        total += parseInt(res.value);
    });
    myChart.setOption({
        legend: {
            data: ['满意', '不满意'],
            textStyle:{
                color: '#7d858d'
            },
            right: 0,
            top: "5%"
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)",
            backgroundColor:'rgba(0, 0, 0, 0.8)',//通过设置rgba调节背景颜色与透明度
            textStyle:{
                color:'rgba(255, 255, 255, 1)',
            },
            borderWidth: "0", //边框宽度设置
            formatter: function(params) {
            　　var result = ''
        　　　　result += params.name + "</br>" + params.marker + params.value +"("+ params.percent+"%)"
            　　return result
            }                      
        },
        title: [
        {
            text: `用户满意度`,
            textStyle:{
            color:'#7d858d',
            fontSize: 14
            },
            x: 'center',
            y: 'center',
        }
        ],

        series: [
          {
              name: '用户满意度',
              type: 'pie',
              radius: ['55%', '70%'],
              center:["50%","50%"],
              avoidLabelOverlap: false,
              //hoverAnimation: false,
              label: {
                  show: false,
              },
              color:[
                    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(129, 202, 244, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(52, 153, 249, 1)'
                    }]),
                //   new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //         offset: 0,
                //         color: 'rgba(46, 179, 209, 1)'
                //     }, {
                //         offset: 1,
                //         color: 'rgba(90, 218, 235, 1)'
                //     }]),
                    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 164, 248, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(81, 107, 238, 1)'
                    }])
                ],
              // itemStyle: {
              //   borderColor: '#fff',
              //   borderWidth: 1
              // },
              // labelLine: {
              //     show: false
              // },
              data: dataArray
          }
        ]
    })
    window.addEventListener("resize",function(){
        myChart.resize();
    })
    return myChart;
};
