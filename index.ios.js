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
  View
} from 'react-native';
import Echarts from 'native-echarts';

export default class EchartsDemo extends Component {
  render() {

    let dataML = [
        [5,5,5,5,5,5]
    ];

    let dataJC = [
        [5,5,2,2,4,4]
    ];

    let lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };

    const option = {
        backgroundColor: 'rgba(178,123,122,0.3)',
        title: {
            text: '马龙 VS 吉村真晴 战力图',
            left: 'center',
            textStyle: {
                color: '#000',
                fontSize: 16
            },
            top: 5
        },
        legend: {
            bottom: 5,
            data: ['马龙', '吉村真晴'],
            itemGap: 20,
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
    return (
      <View style={{flex:1,top:64}}>
          <Echarts option={option} height={500} />
      </View>
      
    );
  }
}

AppRegistry.registerComponent('EchartsDemo', () => EchartsDemo);
