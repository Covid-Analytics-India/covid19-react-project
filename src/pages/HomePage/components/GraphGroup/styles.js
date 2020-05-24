import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  GraphGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, .05)',
    backdropFilter: 'blur(5px)',
    padding: '10px 0',
    [theme.breakpoints.up('md')]: {
      padding: 10,
    },
  },
  tabs: {
    fontSize: 14,
    fontWeight: 700,
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
  indicator0: {
    backgroundColor: theme.palette.stats.confirmed,
  },
  indicator1: {
    backgroundColor: theme.palette.stats.active,
  },
  indicator2: {
    backgroundColor: theme.palette.stats.recovered,
  },
  indicator3: {
    backgroundColor: theme.palette.stats.deceased,
  },
}));
