export const styles = (theme) => ({
  header: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.shadows[0],
  },
  logo: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  langToggle: {
    flexGrow: 1,
  },
  langLable: {
    margin: `0 8px`,
  },
  theme: {
    color: theme.palette.secondary.buttonTheme,
  },
  phone: {
    color: theme.palette.secondary.main,
  },
});
