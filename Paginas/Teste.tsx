import React from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';

const GranulometriaChart = () => {
    const data = [
        { x: '50', y: 10 },
        { x: '38', y: 20 },
        { x: '25', y: 30 },
        { x: '19', y: 40 },
        { x: '9,5', y: 50 },
        { x: '4,8', y: 60 },
        { x: '2', y: 70 },
      ];
    
    return (
        <View>
            <VictoryChart
                theme={VictoryTheme.material}
                scale={{ x: 'log', y: 'linear' }}
            >
                <VictoryLine
                    data={data}
                    style={{
                        data: { stroke: '#FF6347' },
                    }}
                />
            </VictoryChart>
        </View>
    );
};

export default GranulometriaChart;
