import React from 'react';
import Plot from 'react-plotly.js';

function PieChart(props) {
  const {data} = props;
  const newLabels = data.labels[0].map((label) =>
    label === 'Travelled from Delhi' ? label : label.slice(15)
  );
  return (
    <Plot
      data={[
        {
          ...data,
          values: [...data.values[0]],
          labels: [...newLabels],
          marker: {
            color: 'black',
          },
          hoverinfo: 'label+percent',
          textinfo: 'label+percent',
          textposition: 'inside',
          automargin: true,
          title: '',
        },
      ]}
      layout={{
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        autosize: true,
        margin: {
          l: 10,
          r: 10,
          b: 10,
          t: 10,
          pad: 0,
        },
        width: Math.min(480, window.innerWidth - 20),
        height: Math.min(480, window.innerWidth - 20),
        showlegend: false,
      }}
      config={{
        responsive: true,
        displayModeBar: false,
      }}
    />
  );
}
export default PieChart;
