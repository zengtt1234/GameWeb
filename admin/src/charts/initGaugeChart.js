//运行情况-仪表盘
export function initGaugeChart(config){
    var domId = config.domId;
      // 基于准备好的dom，初始化echarts实例
      var option = {
          series: [
          {
                name: '总计',
                type: 'gauge',
    //             center: ['50%', '30%'],    // 默认全局居中，，，
                radius: '90%',
                min: 0,
                max: 400,
                axisLine: {            // 坐标轴线
                  lineStyle: { // 属性lineStyle控制线条样式
                                color: [
    //                                 [0.09, '#1e90ff'],
    //                                 [0.82, '#1e90ff'],
                                    [1, '#5AE7FA']

                                ],
                                width: 1,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                  }
                  },
                axisTick: {            // 坐标轴小标记
                    length: 2,        // 属性length控制线长
                    distance:3,
                    lineStyle: {      // 属性lineStyle控制线条样式
                        color: '#5AE7FA'
                    },
                      show: true
                },
                splitLine: {          // 分隔线
                    length: 5,        // 属性length控制线长
                    distance:3,
                    lineStyle: {      // 属性lineStyle（详见lineStyle）控制线条样式
                        color: '#5AE7FA',
                        width: 1,
                    },
                      show: true
                },
                //刻度标签。
                axisLabel: {
                  color: "#5AE7FA",
                  distance:5,
                  fontSize: 5
                },
                //仪表盘指针。
                pointer: {
                  //这个show属性好像有问题，把width属性设置为0
                show: false,
                width: 0
                },
          },
          {
                name: '内侧线条',
                min: 0,
                max: 400,
                type: 'gauge',
    //             center: ['50%', '30%'],    // 默认全局居中
                //半径  
                radius: '50%',
                itemStyle: {
                      color: '#5AE7FA',
                },
                //仪表盘轴线相关配置。
                axisLine: {            // 坐标轴线
                  show: false,
                          lineStyle: {      // 属性lineStyle控制线条样式
                              width: 1,
                          },
                      },
                //分隔线样式。
                splitLine: {
                  show: false,
                },
                //刻度样式
                axisTick: {
                  show: false,
                },
                //刻度标签。
                axisLabel: {
                  show:false,
                },
                //仪表盘指针。
                pointer: {
                      // show: false,
                      // width: 0,
                      width: 2,
                      length:'85%',
                },
                //仪表盘标题。
                title: {
                   show: false
                },
                progress: {
                      show: true,
                      roundCap: true,
                      width: 1,
                      itemStyle:{
                      color:" #5AE7FA"
                      }
                },
                detail: {
                      valueAnimation: true,
                      fontSize: 14,
                      color: 'rgba(50, 209, 233, 1)',
                      offsetCenter: [0, '150%'],
                      formatter: '{value}A'
                },
                data: [{value: 245}]
          }
    ],
      };
      var myChart = echarts.init(document.getElementById(domId));
      myChart.setOption(option);
    window.addEventListener("resize",function(){
          myChart.resize();
    })    
    return myChart;
}