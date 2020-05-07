export const styles = (theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    zIndex: 1100,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    background: theme.palette.primary.main,
    boxShadow: theme.palette.shadows.header,
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
    alingItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  logo: {
    marginRight: theme.spacing(2),
    width: 50,
    marginLeft: 8,
  },
  langToggle: {
    flexGrow: 1,
  },
  theme: {
    color: theme.palette.secondary.buttonTheme,
  },
  phone: {
    color: theme.palette.secondary.main,
  },
});
