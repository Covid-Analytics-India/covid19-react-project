import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
function MortalityRates(props) {
  const {data} = props;

  const [dx] = useState([...data.x]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    dx.length > 0 && (
      <Plot
        data={[
          {
            ...data,
            mode: 'bar',
            type: 'bar',
            name: 'Mortality Rates',
            marker: {
              color: theme.palette.stats.confirmed,
            },
          },
        ]}
        layout={{
          title: {
            text: data.title,
            xref: 'container',
          },
          yaxis: {
            gridcolor: theme.palette.graphLines.default,
            showline: true,
            tickfont: {
              size: matches ? 12 : 10,
              color: theme.palette.text.secondary,
            },
            fixedrange: true,
          },
          xaxis: {
            gridcolor: theme.palette.graphLines.default,
            tickfont: {
              color: theme.palette.text.secondary,
            },
            title: data.x_label,
            fixedrange: true,
          },
          transition: {
            duration: 500,
            easing: 'cubic-in-out',
            ordering: 'traces first',
          },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          margin: {
            l: 120,
            r: 20,
            b: 35,
            t: 25,
            pad: 0,
          },
          width: Math.min(580, window.innerWidth - 20),
          height: Math.min(240, (window.innerWidth - 20) / 2),
          legend: {orientation: 'h'},
        }}
        config={{
          responsive: true,
          displayModeBar: false,
        }}
      />
    )
  );
}
export default MortalityRates;
