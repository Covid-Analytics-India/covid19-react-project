import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import {useTheme} from '@material-ui/core/styles';

function AfterLockdown(props) {
  const {data} = props;
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

  const ddates = data.x.map((timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.getDate() + ' ' + months[date.getMonth()];
  });

  const [dx] = useState([...ddates]);
  const [dy] = useState([...data.y]);

  const parsedShapes = data.shapes.map((shape) => {
    const date0 = new Date(shape.x0 * 1000);
    const date1 = new Date(shape.x1 * 1000);
    return {
      ...shape,
      fillcolor: theme.palette.stats.confirmed,
      line: {
        ...shape.line,
        color: theme.palette.stats.confirmed,
      },
      x0: date0.getDate() + ' ' + months[date0.getMonth()],
      x1: date1.getDate() + ' ' + months[date1.getMonth()],
    };
  });

  const [shapes] = useState([...parsedShapes]);

  return (
    dx.length >= 0 && (
      <Plot
        data={[
          {
            x: [...dx],
            y: [...dy],
            type: 'bar',
            name: 'After Lockdown',
            marker: {
              color: theme.palette.stats.active,
            },
          },
        ]}
        layout={{
          shapes: [...shapes],
          title: 'After/During Lockdown(s)',
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
