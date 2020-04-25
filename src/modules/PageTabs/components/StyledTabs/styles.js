export const styles = (theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.textBlue,
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      backgroundColor: theme.palette.text.textBlue,
      maxWidth: 30,
      width: '100%',
    },
  },
});
