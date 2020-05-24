import React, {useState} from 'react';
import {useStyles} from './styles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LineCharts from '../LineCharts';
import BinarySwitch from '../../../../modules/BinarySwitch';
import Divider from '@material-ui/core/Divider';

function GraphGroup(props) {
  const {group, title} = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [logChecked, setLogChecked] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.GraphGroup}>
      <div className={classes.title}>{title}</div>
      {matches ? (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            classes={
              (value === 0 && {indicator: classes.indicator0}) ||
              (value === 1 && {indicator: classes.indicator1}) ||
              (value === 2 && {indicator: classes.indicator2}) ||
              (value === 3 && {indicator: classes.indicator3})
            }
          >
            {group.map((data, idx) => (
              <Tab
                key={idx}
                label={data.title}
                classes={{wrapper: classes.tabs}}
              />
            ))}
          </Tabs>
          {/* CUMMULATIVE */}
          {group.map(
            (data, idx) =>
              value === idx && (
                <LineCharts
                  data={data.data}
                  type={idx}
                  title={data.title}
                  logChecked={logChecked}
                />
              )
          )}
        </>
      ) : (
        <div className={classes.flexCol}>
          {/* CUMMULATIVE / Logarithmic */}
          <LineCharts
            data={group[0].data}
            title={group[0].title}
            type={0}
            logChecked={logChecked}
          />
          <Divider light variant="middle" flexItem style={{height: 1}} />
          {/* Day Wise */}
          <LineCharts
            data={group[1].data}
            title={group[1].title}
            type={1}
            logChecked={logChecked}
          />
        </div>
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
