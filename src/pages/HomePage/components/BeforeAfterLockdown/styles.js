import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  BeforeAfterLockdown: {
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
  GraphGroup: {
    boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .2)',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, .05)',
    backdropFilter: 'blur(5px)',
    padding: '10px 0',
    paddingLeft: 4,
    [theme.breakpoints.up('md')]: {
      padding: 10,
    },
  },
}));
