import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  TravelHistory: {
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
      fontSize: 30,
      marginTop: 20,
    },
  },
}));
