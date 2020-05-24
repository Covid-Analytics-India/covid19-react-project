import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  footerImage: {
    height: 60,
    width: '100%',
    marginRight: 10,
    [theme.breakpoints.up('md')]: {
      marginRight: 0,
      height: 180,
    },
  },
}));
