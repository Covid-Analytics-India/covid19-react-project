import React from 'react';
import Plot from 'react-plotly.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

function BarGraph(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
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
            color: theme.palette.text.primary,
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
            size: matches ? 12 : 6,
            color: theme.palette.text.secondary,
          },
          automargin: true,
          fixedrange: true,
        },
        xaxis: {
          tickfont: {
            color: theme.palette.text.secondary,
          },
          fixedrange: true,
        },
        width: Math.min(600, window.innerWidth - 20),
        height: matches ? 503 : 340,
      }}
      config={{
        responsive: true,
        displayModeBar: false,
      }}
    />
  );
}
export default BarGraph;
