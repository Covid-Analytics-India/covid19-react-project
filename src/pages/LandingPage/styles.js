import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    position: 'relative',
  },
  /* TopLayer */
  contactUS: {
    position: 'absolute',
    left: theme.spacing(5),
    top: theme.spacing(5),
  },
  account: {
    position: 'absolute',
    right: theme.spacing(5),
    top: theme.spacing(5),
  },
  buttonIcon: {
    padding: theme.spacing(0),
  },
  /* MainLayer */
  midContainer: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: '20vh',
    textAlign: 'center',
  },
  imgLogo: {
    width: 200,
    height: 200,
    maxWidth: 200,
    maxHeight: 200,
    display: 'block',
    margin: '0 auto',
    filter: 'drop-shadow(0 0 0.75rem grey)',
  },
}));
