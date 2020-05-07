import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {main: '#FFFFFF'},
    secondary: {main: '#17E820', buttonTheme: '#FFE600'},
    background: {
      default: '#e4e7ee',
      paper: '#FFFFFF',
    },
    text: {
      disabled: 'rgba(0, 0, 0, 0.54)',
      hint: 'rgba(0, 0, 0, 0.54)',
      secondary: 'rgba(0, 0, 0, 0.75)',
      textBlue: '#0156FF',
      textBlueDisabled: '#78A5FF',
    },
    border: {
      default: 'rgba(255, 255, 255, 0.57)',
    },
    shadows: {
      paper: '0px 1px 2px rgba(0, 0, 0, 0.09)',
      header: '0px 1px 2px rgba(0, 0, 0, 0.09)',
    },
    graphLines: {
      default: 'rgba(127, 127, 127, 0.27)',
    },
  },
  spacing: 2,
  typography: {
    fontFamily: ['Bitter'].join(','),
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {main: '#323232'},
    secondary: {main: '#17E820', buttonTheme: '#0185FF'},
    background: {
      default: '#121212',
      paper: '#2C2C2C',
    },
    text: {
      disabled: 'rgba(255, 255, 255, 0.54)',
      hint: 'rgba(255, 255, 255, 0.54)',
      secondary: 'rgba(255, 255, 255, 0.75)',
      textBlue: '#0185FF',
      textBlueDisabled: '#78A5FF',
    },
    border: {
      default: 'rgba(255, 255, 255, 0.17)',
    },
    shadows: {
      paper: '0px 1px 2px rgba(0, 0, 0, 0.79)',
      header: '0px 1px 2px rgba(0, 0, 0, 0.79)',
    },
    graphLines: {
      default: 'rgba(255, 255, 255, 0.07)',
    },
  },
  spacing: 2,
  typography: {
    fontFamily: ['Bitter'].join(','),
  },
  overrides: {
    MuiTabs: {
      text: {
        color: 'primary',
      },
      indicator: {
        color: 'primary',
      },
    },
  },
});
