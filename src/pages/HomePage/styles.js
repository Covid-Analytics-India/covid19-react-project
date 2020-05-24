import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
    paddingTop: 80,
    position: 'absolute',
    top: 0,
  },
  compressor: {
    maxWidth: 1200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
  },
  flexCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  // Header Styles
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 18,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
  },
  headerImage: {
    height: 60,
    marginRight: 10,
    [theme.breakpoints.up('md')]: {
      marginRight: 0,
      height: 180,
    },
  },
  headerText: {
    fontSize: 14,
    fontWeight: 700,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      fontSize: 28,
    },
  },
  headerSubText: {
    fontSize: 10,
    fontWeight: 400,
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
    },
  },
}));
