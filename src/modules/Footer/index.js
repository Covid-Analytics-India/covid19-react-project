import React from 'react';
import {useStyles} from './styles';
import Divider from '@material-ui/core/Divider';
import logo from '../../assets/logo.svg';

const Footer = (props) => {
  const classes = useStyles();
  return (
    <footer>
      <h1>Go Corona!</h1>
      <Divider light variant="middle" flexItem style={{height: 1}} />
      <br />
      <img alt="" src={logo} className={classes.footerImage} />
    </footer>
  );
};

export default Footer;
