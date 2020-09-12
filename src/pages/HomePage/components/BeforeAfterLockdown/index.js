import React from 'react';
import After from './After';
import {useStyles} from './styles';
import Before from './Before';

function BeforeAfterLockdown(props) {
  const {title, data} = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.Title}>{title}</div>
      <div className={`${classes.BeforeAfterLockdown} ${classes.GraphGroup}`}>
        <Before data={data.before} />
        <br />
        <After data={data.after} />
      </div>
    </>
  );
}
export default BeforeAfterLockdown;
