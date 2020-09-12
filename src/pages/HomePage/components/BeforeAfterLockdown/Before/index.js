import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import {useTheme} from '@material-ui/core/styles';

function AfterLockdown(props) {
  const {data} = props;

  const [dx, setdx] = useState([...data.x]);
  const [dy] = useState([...data.y]);

  const theme = useTheme();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  useEffect(() => {
    const ddates = dx.map((timestamp) => {
      const date = new Date(timestamp * 1000);
      return date.getDate() + ' ' + months[date.getMonth()];
    });
    setdx(ddates);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    dx.length > 0 && (
      <Plot
        data={[
          {
            ...data,
            x: [...dx],
            y: [...dy],
            mode: 'bar',
            type: 'bar',
            line: {},
            name: 'Before Lockdown',
            marker: {
              color: theme.palette.stats.active,
            },
          },
        ]}
        layout={{
          title: 'Before Lockdown',
          yaxis: {
            gridcolor: theme.palette.graphLines.default,
            showline: true,
            tickfont: {
              color: theme.palette.text.secondary,
            },
            fixedrange: true,
            title: data.y_label,
          },
          xaxis: {
            nticks: 5,
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
            l: 50,
            r: 20,
            b: 40,
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
export default AfterLockdown;
