import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  GenderAgeCorrelation: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  Title: {
    fontSize: 14,
    fontWeight: 600,
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
}));
