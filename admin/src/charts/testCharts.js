export function drawLine(domId){
      // 基于准备好的dom，初始化echarts实例
      var option = {
          series: [{
            name: '总计',
            type: 'gauge',
            center: ['50%', '30%'],    // 默认全局居中，，，
            radius: '50%',
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
                length: 5,        // 属性length控制线长
                lineStyle: {      // 属性lineStyle控制线条样式
                    color: '#5AE7FA'
                }
            },
            splitLine: {          // 分隔线
                length: 10,        // 属性length控制线长
                lineStyle: {      // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#5AE7FA'
                }
            },
            //刻度标签。
            axisLabel: {
              color: "#5AE7FA",
            },
            //仪表盘指针。
            pointer: {
              //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
              show: false,
              width: 0
            },
        },
        {
            name: '内侧线条',
            min: 0,
            max: 400,
            type: 'gauge',
            center: ['50%', '30%'],    // 默认全局居中
            //半径  
            radius: '25%',
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
        //这个show属性好像有问题，因为在这次开发中，需要去掉指正，我设置false的时候，还是显示指针，估计是BUG吧，我用的echarts-3.2.3；希望改进。最终，我把width属性设置为0，成功搞定！
        // show: false,
        // width: 0,
        width: 1,
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
          fontSize: 20,
          color: '#32D1E9',
          offsetCenter: [0, '100%'],
          formatter: '{value}A'
      },
      data: [{value: 245}]

        }
],

        };

      let myChart = echarts.init(document.getElementById(domId));

      myChart.setOption(option);

      }