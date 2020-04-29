import React from 'react';
import {useStyles} from './styles';

const PageTitle = (props) => {
  const classes = useStyles();
  return <h1 className={classes.root}>{props.children.toUpperCase()}</h1>;
};

export default PageTitle;
