import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  Title: {
    fontSize: 14,
    fontWeight: 600,
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
}));
