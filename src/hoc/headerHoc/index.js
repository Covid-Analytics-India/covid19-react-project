import React from 'react';
import {toggleTheme} from '../../services/actions';
import IconButton from '@material-ui/core/IconButton';
import BrightnessMedium from '@material-ui/icons/BrightnessMedium';
import {connect} from 'react-redux';
import {styles} from './styles';
import withStyles from '@material-ui/core/styles/withStyles';

const headerHoc = (WrapComponent) => {
  class HocContent extends React.Component {
    render() {
      return (
        <>
          <div className={this.props.classes.root}>
            ---------------- header ---------------
            <IconButton color="primary" onClick={this.props.toggleTheme}>
              <BrightnessMedium />
            </IconButton>
          </div>

          <WrapComponent />
        </>
      );
    }
  }

  const mapStateToProps = (state) => {};

  const mapDispatchToProps = (dispatch) => {
    return {
      toggleTheme: () => dispatch(toggleTheme()),
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(HocContent));
};

export default headerHoc;
