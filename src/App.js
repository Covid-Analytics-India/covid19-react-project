import React, {lazy} from 'react';
import {Switch, Route} from 'react-router';
import suspenseHoc from './hoc/suspenseHoc';
import headerHoc from './hoc/headerHoc';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import './App.scss';

const NewsPage = lazy(() => import('./pages/NewsPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {main: '#FFFFFF'},
      secondary: {main: '#17E820', buttonTheme: '#FFE600'},
      background: {
        default: '#F4F7FD',
        paper: '#FFFFFF',
      },
      text: {
        disabled: 'rgba(0, 0, 0, 0.54)',
        hint: 'rgba(0, 0, 0, 0.54)',
        secondary: 'rgba(0, 0, 0, 0.75)',
        textBlue: '#0156FF',
        textBlueDisabled: '#78A5FF',
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
      primary: {main: '#323232'},
      secondary: {main: '#17E820', buttonTheme: '#0156FF'},
      background: {
        default: '#121212',
        paper: '#2C2C2C',
      },
      text: {
        disabled: 'rgba(255, 255, 255, 0.54)',
        hint: 'rgba(255, 255, 255, 0.54)',
        secondary: 'rgba(255, 255, 255, 0.75)',
        textBlue: '#0156FF',
        textBlueDisabled: '#78A5FF',
      },
    },
    spacing: 2,
    typography: {
      fontFamily: ['Inter'].join(','),
    },
  });

  const theme = 'dark';
  console.log(lightTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="pageStyle">
        <Switch>
          <Route
            exact
            path="/"
            component={suspenseHoc(headerHoc(LandingPage))}
          />
          <Route
            exact
            path="/news"
            component={suspenseHoc(headerHoc(NewsPage))}
          />
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
