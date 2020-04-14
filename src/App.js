import React, {lazy} from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route} from 'react-router';
import suspenseHoc from './hoc/suspenseHoc';
import headerHoc from './hoc/headerHoc';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import './App.scss';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {main: '#212A39'},
      secondary: {main: 'rgba(33, 42, 57, 0.36)'},
      background: {
        default: '#FFFFFF',
        card: '#FFFFFF',
        header: '#FFFFFF',
      },
      text: {
        primary: 'rgba(33, 42, 57, 0.87)',
        secondary: 'rgba(33, 42, 57, 0.36)',
        themeRed: '#f53b57',
      },
      border: {
        default: 'rgba(255, 255, 255, 0.57)',
      },
      shadows: {
        card: '0px 1px 2px rgba(0, 0, 0, 0.09)',
        header: '0px 1px 2px rgba(0, 0, 0, 0.09)',
      },
    },
    spacing: 2,
    typography: {
      fontFamily: ['Inter'].join(','),
    },
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {main: 'rgba(255,255,255, 0.87)'},
      secondary: {main: 'rgba(255,255,255, 0.36)'},
      background: {
        default: '#121212',
        card: '#212121',
        header: '#212121',
      },
      text: {
        primary: 'rgba(255, 255, 255, 0.87)',
        secondary: 'rgba(255, 255, 255, 0.36)',
        themeRed: '#f53b57',
      },
      border: {
        default: 'rgba(255, 255, 255, 0.17)',
      },
      shadows: {
        card: '0px 1px 2px rgba(0, 0, 0, 0.79)',
        header: '0px 1px 2px rgba(0, 0, 0, 0.79)',
      },
    },
    spacing: 2,
    typography: {
      fontFamily: ['Inter'].join(','),
    },
  });

  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="pageStyle">
        <Switch>
          <Route exact path="/" component={suspenseHoc(LandingPage)} />
          <Route
            exact
            path="/home"
            component={suspenseHoc(headerHoc(HomePage))}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
