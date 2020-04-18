import React from 'react';
import Plot from 'react-plotly.js';

function BarGraph(props) {
  const {data} = props;
  return (
    <Plot
      data={[
        {
          ...data,
          x: [...data.x],
          y: [...data.y],
          mode: 'lines',
          marker: {
            color: 'black',
          },
        },
      ]}
      layout={{
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        margin: {
          l: 70,
          r: 10,
          b: 20,
          t: 10,
          pad: 0,
        },
        yaxis: {
          tickfont: {
            size: 6,
          },
          automargin: true,
        },
        width: window.innerWidth - 20,
        height: 340,
      }}
      config={{
        responsive: true,
        displayModeBar: false,
      }}
    />
  );
}
export default BarGraph;
