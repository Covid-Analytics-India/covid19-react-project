import React from 'react';
import Plot from 'react-plotly.js';
import useTheme from '@material-ui/core/styles/useTheme';
import {darken} from '@material-ui/core/styles';

function PieChart(props) {
  const {data, travelHistory} = props;
  const theme = useTheme();
  const newLabels =
    travelHistory &&
    data.labels[0].map((label) =>
      label === 'Travelled from Delhi' ? label : label.slice(15)
    );

  return (
    <Plot
      data={[
        {
          ...data,
          values: [...(travelHistory ? data.values[0] : data.values)],
          labels: [...(travelHistory ? newLabels : data.labels)],
          marker: {
            colors: [
              darken(theme.palette.stats.active, 0.85),
              darken(theme.palette.stats.confirmed, 0.75),
              darken(theme.palette.stats.active, 0.75),
              darken(theme.palette.stats.confirmed, 0.85),
              darken(theme.palette.stats.active, 0.65),
              darken(theme.palette.stats.confirmed, 0.65),
              darken(theme.palette.stats.active, 0.55),
              darken(theme.palette.stats.active, 0.45),
            ],
            gradient: {
              type: 'radial',
              color: '#FFFFFF',
            },
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
        staticPlot: true,
      }}
    />
  );
}
export default PieChart;
