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
    heatmap: {
      high: '#063771',
      low: '#F2F1FF',
      border: '#44444442',
    },
    stats: {
      confirmed: '#FD2A3A',
      active: '#007AFB',
      recovered: '#27A645',
      deceased: '#6D757D',
    },
  },
  spacing: 2,
  typography: {
    fontFamily: ['Ubuntu'].join(','),
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
    heatmap: {
      high: '#FF6242',
      low: '#2D1D25',
      border: '#ff666642',
    },
    stats: {
      confirmed: '#FD2A3A',
      active: '#007AFB',
      recovered: '#27A645',
      deceased: '#6D757D',
    },
  },
  spacing: 2,
  typography: {
    fontFamily: ['Ubuntu'].join(','),
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
