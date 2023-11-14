import React from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryScatter, VictoryTheme } from 'victory-native';

const GranulometriaChart = () => {
    // Valores fixos para x (logarítmico)
    const fixedXValues = [0.0100, 0.1000, 1.0000, 10.0000, 100.0000];

    // Pontos de dados para a curva granulométrica
    const dataPoints = [
        { x: 0.6, y: 92.16 },
        { x: 1.2, y: 94.68 },
        { x: 2, y: 96.76 },
        { x: 4.76, y: 99.94 },
        { x: 19.1, y: 100 },
        { x: 25.4, y: 100 },
        { x: 38.1, y: 100 },
        { x: 50.81, y: 100 },
        { x: 76.2, y: 100 },
    ];

    return (
        <View>
            <VictoryChart
                theme={VictoryTheme.material}
                scale={{ x: 'log', y: 'linear' }}
            >
                <VictoryAxis
                    tickValues={fixedXValues}
                    tickFormat={(tick) => `${tick}`}
                    tickCount={5}
                    style={{
                        axis: { stroke: '#555' },
                        ticks: { stroke: 'transparent' },
                        tickLabels: { fill: '#555', padding: 5 },
                    }}
                />

                <VictoryAxis
                    dependentAxis
                    tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                    tickFormat={(tick) => `${tick}%`}
                    style={{
                        axis: { stroke: '#555' },
                        ticks: { stroke: 'transparent' },
                        tickLabels: { fill: '#555', padding: 5 },
                    }}
                />

                <VictoryLine
                    data={dataPoints}
                    style={{
                        data: { stroke: '#FF6347' },
                    }}
                />

                <VictoryScatter
                    data={dataPoints}
                    size={5}
                    style={{
                        data: { fill: '#FF6347' },
                    }}
                />
            </VictoryChart>
        </View>
    );
};

export default GranulometriaChart;
