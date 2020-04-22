import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import {useEffect} from 'react';
import {useTheme} from '@material-ui/core/styles';

function LineChartCard(props) {
  const {data, logScale} = props;
  const [x, setX] = useState([...props.data.x]);
  const [y, setY] = useState([...props.data.y]);
  const theme = useTheme();
  useEffect(() => {
    const dates = data.x.map((timestamp) => {
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
      const date = new Date(timestamp * 1000);
      return date.getDate() + ' ' + months[date.getMonth()];
    });
    setX(dates);
    setY(data.y);
  }, [data.x, data.y]);
  return (
    x.length > 0 && (
      <Plot
        data={[
          {
            x: [...x],
            y: [...y],
            mode: 'lines',
            line: {
              color: 'red',
            },
          },
        ]}
        layout={{
          yaxis: {
            type: logScale ? 'log' : 'linear',
            automargin: true,
            gridcolor: theme.palette.graphLines.default,
            showline: true,
          },
          xaxis: {
            nticks: 5,
            gridcolor: theme.palette.graphLines.default,
          },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          margin: {
            l: 0,
            r: 10,
            b: 20,
            t: 10,
            pad: 0,
          },
          width: Math.min(580, window.innerWidth - 20),
          height: Math.min(240, (window.innerWidth - 20) / 2),
        }}
        config={{
          responsive: true,
          displayModeBar: false,
        }}
      />
    )
  );
}
export default LineChartCard;
