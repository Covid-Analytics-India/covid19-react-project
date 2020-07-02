import React from 'react';
import Plot from 'react-plotly.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

function Histogram(props) {
  const {data, color, correlation} = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const colors = [...Object.values(theme.palette.stats)];
  const generalData = [
    {
      ...data,
      mode: 'histogram',
      marker: {
        color: color !== null ? colors[color] : theme.palette.text.primary,
      },
    },
  ];

  const correlationData =
    correlation &&
    Object.keys(data)
      .map(
        (d) =>
          Array.isArray(data[d]) && {x: data[d], type: 'histogram', name: d}
      )
      .filter((d) => d);

  return (
    <Plot
      data={correlation ? correlationData : generalData}
      layout={{
        barmode: 'stack',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        transition: {
          duration: 500,
          easing: 'cubic-in-out',
          ordering: 'traces first',
        },
        margin: {
          l: 10,
          r: 10,
          b: 30,
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
        width: Math.min(1200, window.innerWidth - 20),
        height: matches ? 503 : 340,
        legend: {orientation: 'h'},
      }}
      config={{
        responsive: true,
        displayModeBar: false,
      }}
    />
  );
}
export default Histogram;
