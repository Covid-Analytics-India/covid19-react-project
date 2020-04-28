import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    maxWidth: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    // Above tablet size
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  heading: {
    marginLeft: 32,
    width: '100%',
  },
  sortBy: {
    width: '100%',
    margin: '8px 0 16px 32px',
    '& span': {
      cursor: 'pointer',
      marginLeft: 16,
      color: theme.palette.text.textBlue,
    },
  },
  loadingNews: {
    color: theme.palette.text.primary,
  },
}));
