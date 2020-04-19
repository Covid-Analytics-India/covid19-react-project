import React from 'react';

import {useStyles} from '../styles';

function CardContent(props) {
  const {source, author, title, description, publishedAt} = props;
  // console.log(props);

  const classes = useStyles();

  return (
    <div className={classes.cardContent}>
      <div className={classes.newsInfo}>
        <span className={classes.source}>{source.name}</span>
        <span className={classes.dot} />
        <span className={classes.author}>{author}</span>
      </div>
      <div className={classes.date}>{new Date(publishedAt).toUTCString()}</div>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.readMore}>READ MORE ---&gt;</div>
    </div>
  );
}
export default CardContent;
