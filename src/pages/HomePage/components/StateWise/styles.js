import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  StateWise: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  Title: {
    fontSize: 14,
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    },
  },
  Content: {
    maxHeight: 340,
    [theme.breakpoints.up('sm')]: {
      maxHeight: 535,
      height: 535,
    },
  },
}));
