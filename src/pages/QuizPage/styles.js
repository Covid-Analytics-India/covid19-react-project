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
    [theme.breakpoints.up('sm')]: {
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
  flexColStart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexRowStart: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexRowSpace: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 800,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  flexRowSpaceStart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: 800,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  PieContent: {
    padding: '0 100px',
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
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
    },
  },
  headerImage: {
    height: 60,
    marginRight: 10,
    [theme.breakpoints.up('sm')]: {
      marginRight: 0,
      height: 180,
    },
  },
  headerImageSmall: {
    height: 30,
    marginRight: 10,
    [theme.breakpoints.up('sm')]: {
      marginRight: 40,
      height: 90,
    },
  },
  headerText: {
    fontSize: 14,
    fontWeight: 700,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
    },
  },
  headerSubText: {
    fontSize: 10,
    fontWeight: 400,
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
    },
  },
  headCompress: {
    maxWidth: 600,
  },

  // QUIZ Styles
  startBtn: {
    background: theme.palette.secondary.buttonTheme,
  },
  QuizContainer: {
    width: 800,
    minHeight: 600,
    whiteSpace: 'pre-wrap',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  option: {
    height: 40,
    width: 500,
    margin: 15,
    padding: 25,
    borderRadius: 8,
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '50vw',
      minWidth: '50vw',
      padding: 8,
      margin: 5,
      fontSize: 16,
    },
  },
  progress: {
    width: 'inherit',
  },
}));
