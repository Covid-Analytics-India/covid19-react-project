import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 0,
    width: '100%',
    color: theme.palette.text.primary,
    // Above tablet size
    [theme.breakpoints.up('md')]: {
      marginLeft: 32,
    },
  },
}));
