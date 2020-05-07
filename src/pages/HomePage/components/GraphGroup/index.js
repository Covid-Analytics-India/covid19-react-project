import React, {useState} from 'react';
import {useStyles} from './styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LineCharts from '../LineCharts';
import BinarySwitch from '../../../../modules/BinarySwitch';

function GraphGroup(props) {
  const {group, title} = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [logChecked, setLogChecked] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.GraphGroup}>
      <div className={classes.title}>{title}</div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        {group.map((data, idx) => (
          <Tab key={idx} label={data.title} classes={{wrapper: classes.tabs}} />
        ))}
      </Tabs>
      {/* CUMMULATIVE */}
      {group.map(
        (data, idx) =>
          value === idx && (
            <LineCharts
              data={data.data}
              title={data.title}
              logChecked={logChecked}
            />
          )
      )}
      <BinarySwitch
        leftVal="Linear"
        rightVal="Logarithmic"
        handleChange={setLogChecked}
        rightChecked={logChecked}
      />
    </div>
  );
}
export default GraphGroup;
