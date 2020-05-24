import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import {useEffect} from 'react';
import {useTheme} from '@material-ui/core/styles';

function LineChartCummulative(props) {
  const {data, logScale} = props;

  const [cx, setcx] = useState([...data.day_wise_confirmed.x]);
  const [rx, setrx] = useState([...data.recovered_cumulative.x]);
  const [dx, setdx] = useState([...data.deaths_cumulative.x]);

  const [cy] = useState([...data.day_wise_confirmed.y]);
  const [ry] = useState([...data.recovered_cumulative.y]);
  const [dy] = useState([...data.deaths_cumulative.y]);

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
    const cdates = cx.map((timestamp) => {
      const date = new Date(timestamp * 1000);
      return date.getDate() + ' ' + months[date.getMonth()];
    });
    setcx(cdates);

    const rdates = rx.map((timestamp) => {
      const date = new Date(timestamp * 1000);
      return date.getDate() + ' ' + months[date.getMonth()];
    });
    setrx(rdates);

    const ddates = dx.map((timestamp) => {
      const date = new Date(timestamp * 1000);
      return date.getDate() + ' ' + months[date.getMonth()];
    });
    setdx(ddates);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    cx.length > 0 && (
      <Plot
        data={[
          {
            x: [...cx],
            y: [...cy],
            mode: 'lines',
            line: {
              color: 'red',
            },
            name: 'Confirmed',
          },
          {
            x: [...rx],
            y: [...ry],
            mode: 'lines',
            line: {
              color: 'green',
            },
            name: 'Recovered',
          },
          {
            x: [...dx],
            y: [...dy],
            mode: 'lines',
            line: {
              color: 'orange',
            },
            name: 'Deceased',
          },
        ]}
        layout={{
          yaxis: {
            type: logScale ? 'log' : 'linear',
            gridcolor: theme.palette.graphLines.default,
            showline: true,
            tickfont: {
              color: theme.palette.text.secondary,
            },
            fixedrange: true,
          },
          xaxis: {
            nticks: 5,
            gridcolor: theme.palette.graphLines.default,
            tickfont: {
              color: theme.palette.text.secondary,
            },
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
            l: 40,
            r: 20,
            b: 30,
            t: 10,
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
export default LineChartCummulative;
