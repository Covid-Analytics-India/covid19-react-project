import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Phone from '@material-ui/icons/Phone';
import NightsStay from '@material-ui/icons/NightsStay';
import WbSunny from '@material-ui/icons/WbSunny';
import {connect} from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';

import {styles} from './styles';
import {toggleTheme} from '../../services/actions';
import {toggleLang} from '../../services/actions';
import BinarySwitch from '../../modules/BinarySwitch';
import logo from '../../assets/logo.svg';
import {withRouter} from 'react-router-dom';

const headerHoc = (WrapComponent) => {
  class HocContent extends React.Component {
    constructor(props) {
      super(props);
    }

    handleChange = (checked) => {
      this.setState({...this.state, checked: checked});
      console.log(this.state.checked);
    };

    render() {
      const {
        classes,
        isHindi,
        toggleLang,
        isDarkTheme,
        toggleTheme,
        history,
      } = this.props;

      return (
        <>
          <AppBar position="sticky" className={classes.root}>
            <img
              src={logo}
              alt="logo"
              className={classes.logo}
              onClick={() => history.push('/')}
            />
            {/* Language Toggle */}
            <BinarySwitch
              className={classes.langToggle}
              leftVal="English"
              rightVal="Hindi"
              handleChange={toggleLang}
              rightChecked={isHindi}
            />
            <Toolbar>
              {/* Theme Toggle */}
              <IconButton
                className={classes.theme}
                edge="end"
                onClick={toggleTheme}
              >
                {isDarkTheme ? <NightsStay /> : <WbSunny />}
              </IconButton>
              <IconButton className={classes.phone} edge="end">
                <Phone />
              </IconButton>
            </Toolbar>
          </AppBar>

          <WrapComponent />
        </>
      );
    }
  }

  const mapStateToProps = (state) => ({
    isHindi: state.lang.isHindi,
    isDarkTheme: state.theme.isDarkTheme,
  });

  const mapDispatchToProps = (dispatch) => ({
    toggleTheme: () => dispatch(toggleTheme()),
    toggleLang: () => dispatch(toggleLang()),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(withRouter(HocContent)));
};

export default headerHoc;
