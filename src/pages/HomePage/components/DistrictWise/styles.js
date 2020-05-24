import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  DistrictWise: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  Title: {
    fontSize: 14,
    fontWeight: 600,
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
  Content: {
    maxHeight: 340,
    [theme.breakpoints.up('md')]: {
      maxHeight: 535,
      height: 535,
    },
  },
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
    fontSize: 10,
    fontWeight: 600,
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
