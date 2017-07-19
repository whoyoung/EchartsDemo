/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Echarts from 'native-echarts';

const chartsTitle = '马龙 VS 吉村真晴 战力图';
const dataML = [ [5,5,5,5,5,5] ];
const dataJC = [ [5,5,2,2,4,4] ];
const lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};
const xData = ['发球', '速度', '经验', '防守', '力量', '技术'];
const radarOption = {
    backgroundColor: 'rgba(178,123,122,0.3)',
    title: {
        text: chartsTitle,
        left: 'center',
        textStyle: {
            color: '#000',
            fontSize: 16
        },
        top:5
    },
    legend: {
        bottom: 5,
        left: 'center',
        data: ['马龙', '吉村真晴'],
        itemGap: 10,
        textStyle: {
            color: '#000',
            fontSize: 16
        },
        selectedMode: 'single',
        inactiveColor: '#777'
    },
    
    radar: {
        indicator: [                
            {name: '发球', max: 5},
            {name: '速度', max: 5},
            {name: '经验', max: 5},
            {name: '防守', max: 5},
            {name: '力量', max: 5},
            {name: '技术', max: 5}
        ],
        radius: '60%',
        shape: 'polygon',
        splitNumber: 5,
        name: {
            textStyle: {
                color: '#000',
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: 'white'
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(210,177,203,0.5)','rgba(210,177,203,0.5)']
            }
        },
        axisLine: {
            lineStyle: {
                color: 'white'
            }
        }
    },
    series: [
        {
            name: '马龙',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataML,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#6a7bb8'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.7
                }
            }
        },
        {
            name: '吉村真晴',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataJC,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#6a7bb8'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.7
                }
            }
        }
    ]
};

const barOption = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : xData,
            axisTick: {
                alignWithLabel: true
            },
            name: '战力',
            nameLocation: 'end',
            nameGap: 5
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    legend: {
        top: 20,
        data: ['马龙', '吉村真晴'],
        itemGap: 20,
        textStyle: {
            color: '#000',
            fontSize: 16
        },
        selectedMode: 'multiple',
    },
    series : [
        {
            name:'马龙',
            type:'bar',
            barWidth: '30%',
            data:[5,5,5,5,5,5],
            barGap: '30%',
            itemStyle: {
              normal: {
                color: 'red'
              }
            }
        },
        {
            name:'吉村真晴',
            type:'bar',
            barWidth: '30%',
            data:[5,5,2,2,4,4]
        }
    ]
};

const lineOption = {
    title: {
        text: chartsTitle,
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: xData
    },
    yAxis: {
        splitLine: {
            show: false
        }
    },
    toolbox: {
        left: 'right',
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: [{
        startValue: '发球'
    }, {
        type: 'inside'
    }],
    visualMap: {
        top: 30,
        left: 'center',
        orient: 'horizontal',
        pieces: [{
            gt: 0,
            lte: 1,
            color: '#096'
        }, {
            gt: 1,
            lte: 2,
            color: '#ffde33'
        }, {
            gt: 2,
            lte: 3,
            color: '#ff9933'
        }, {
            gt: 3,
            lte: 4,
            color: '#cc0033'
        }, {
            gt: 4,
            lte: 5,
            color: '#660099'
        }],
        outOfRange: {
            color: '#999'
        }
    },
    series : [
        {
          name:'马龙',
          type:'line',
          data:[5,5,5,5,5,5],
          itemStyle: {
            normal: {
              color: 'red'
            }
          },
          markLine: {
            silent: true,
            data: [{
                yAxis: 1
            }, {
                yAxis: 2
            }, {
                yAxis: 3
            }, {
                yAxis: 4
            }]
          }
        },
        {
          name:'吉村真晴',
          type:'line',
          data:[5,5,2,2,4,4]
        }
    ]
};

export default class EchartsDemo extends Component {  
  render() {
    return (
      <ScrollView contentContainerStyle={{top:20,paddingBottom:20}}>
          <Echarts option={radarOption} height={300} />
          <Echarts option={barOption} height={300} />
          <Echarts option={lineOption} height={300} />
      </ScrollView>
      
    );
  }
}

AppRegistry.registerComponent('EchartsDemo', () => EchartsDemo);
