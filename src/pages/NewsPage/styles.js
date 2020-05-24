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
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  sortBy: {
    width: '100%',
    margin: '8px 0 16px 0px',
    color: theme.palette.text.primary,
    '& span': {
      cursor: 'pointer',
      marginLeft: 16,
      color: theme.palette.text.textBlue,
    },
    // Above tablet size
    [theme.breakpoints.up('md')]: {
      margin: '8px 0 16px 32px',
    },
  },
  loadingNews: {
    color: theme.palette.text.primary,
  },
}));
