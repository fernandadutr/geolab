import React from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryScatter, VictoryTheme } from 'victory-native';
import { useResultsContext } from '../Context/ResultsContext';

const GranulometriaChart = () => {
  const { resultados } = useResultsContext();

  const dataPoints = resultados.map((resultado) => ({
    x: resultado.id, 
    y: parseFloat(resultado.resultado), 
  }));

  const fixedXValues = [0.0100, 0.1000, 1.0000, 10.0000, 100.0000];

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
