import React, {useState} from 'react';
import Plot from 'react-plotly.js';
import {useEffect} from 'react';
import {getGraphDataConfirmed} from '../../services/actions/thunks';
import {useDispatch} from 'react-redux';

// import Card from './components/Card';
// import CardMedia from './components/CardMedia';
// import CardContent from './components/CardContent';

function LineChartCard(props) {
  const dispatch = useDispatch();
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  useEffect(() => {
    dispatch(getGraphDataConfirmed).then((res) => {
      console.log(res);
      const dates = res.x
        // .filter((timestamp) => new Date(timestamp * 1000).getDate() % 2 === 0)
        .map((timestamp) => {
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
          console.log('DATE: ', date);
          return date.getDate() + ' ' + months[date.getMonth()];
        });
      console.log(dates);
      setX(dates);
      setY(res.y);
    });
  }, [dispatch]);
  return (
    x.length > 0 && (
      <Plot
        data={[
          {
            x: [...x],
            y: [...y],
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={{
          xaxis: {
            nticks: 5,
          },
        }}
        config={{responsive: true}}
      />
    )
  );
}
export default LineChartCard;
