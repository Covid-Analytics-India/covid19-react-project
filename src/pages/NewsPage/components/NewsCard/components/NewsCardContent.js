import React from 'react';

import {useStyles} from '../styles';

function CardContent(props) {
  // const {source, author, title, description, url, publishedAt, content} = props;
  // console.log(props);

  const classes = useStyles();

  return (
    <div className={classes.cardContent}>
      <div className={classes.title}>{this.props.title}</div>
      <div className={classes.description}>{this.props.description}</div>
    </div>
  );
}
export default CardContent;
