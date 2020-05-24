import React, {useState} from 'react';
import {useStyles} from './styles';
import BarGraph from './components/BarGraph';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function DistrictWise(props) {
  const {title, group} = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);
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
        classes={
          (value === 0 && {indicator: classes.indicator0}) ||
          (value === 1 && {indicator: classes.indicator1}) ||
          (value === 2 && {indicator: classes.indicator2}) ||
          (value === 3 && {indicator: classes.indicator3})
        }
      >
        {group.map((data, idx) => (
          <Tab key={idx} label={data.title} classes={{wrapper: classes.tabs}} />
        ))}
      </Tabs>
      {/* CUMMULATIVE */}
      <div className={classes.DistrictWise}>
        {/* <div className={classes.Title}>{title}</div> */}
        <div className={classes.Content}>
          <BarGraph data={group[value].data} color={value} />
        </div>
      </div>
    </div>
  );
}
export default DistrictWise;
