import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Phone from '@material-ui/icons/Phone';
import NightsStay from '@material-ui/icons/NightsStay';
import Grid from '@material-ui/core/Grid';
import AntSwitch from '../../modules/AntSwitch';

import {styles} from './styles';

const headerHoc = (WrapComponent) => {
  class HocContent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        checked: true,
      };
    }

    handleChange = (event) => {
      this.setState({...this.state, checked: event.target.checked});
      console.log(this.state.checked);
    };

    render() {
      const {classes} = this.props;
      return (
        <>
          <AppBar position="fixed" className={classes.header}>
            <Toolbar>
              <Typography variant="h6" className={classes.logo}>
                LOGO
              </Typography>
              {/* Language Toggle */}
              <Grid className={classes.langToggle} component="div">
                <Grid
                  component="label"
                  container
                  alignItems="center"
                  spacing={1}
                >
                  <Grid className={classes.langLable} item>
                    English
                  </Grid>
                  <Grid item>
                    <AntSwitch
                      checked={this.state.checked}
                      onChange={this.handleChange}
                      name="langToggle"
                    />
                  </Grid>
                  <Grid className={classes.langLable} item>
                    Hindi
                  </Grid>
                </Grid>
              </Grid>
              <IconButton className={classes.theme} edge="end">
                <NightsStay />
              </IconButton>
              <IconButton className={classes.phone} edge="end">
                <Phone />
              </IconButton>
            </Toolbar>
            {/* <div className="logo">LOGO</div>
            <div className="langToggle">toggle</div>
            <div className="switchMode">switch mode</div>
            <div className="helpline">Helpline</div> */}
          </AppBar>

          <WrapComponent />
        </>
      );
    }
  }
  return withStyles(styles)(HocContent);
};

export default headerHoc;
