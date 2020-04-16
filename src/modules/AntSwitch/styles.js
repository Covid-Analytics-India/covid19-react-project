export const styles = (theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.primary.main,
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.primary.main,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.contrastText,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.primary.contrastText,
  },
  checked: {},
});
