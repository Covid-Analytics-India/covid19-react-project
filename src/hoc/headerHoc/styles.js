export const styles = (theme) => ({
  root: {
    width: '100%',
    background: theme.palette.primary.main,
    boxShadow: theme.palette.shadows.header,
    color: theme.palette.text.primary,
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
