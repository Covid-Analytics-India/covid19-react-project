import {makeStyles} from '@material-ui/core/styles';
import bkg from '../../assets/bkg3.svg';
export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    background: `url(${bkg}) center center no-repeat`,
    backgroundSize: 'cover',
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
  /* BottomLayer */
  bottomContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    Right: 0,
    width: 'calc(100% - 20px)',
    marginRight: 10,
    marginLeft: 10,
  },
}));
