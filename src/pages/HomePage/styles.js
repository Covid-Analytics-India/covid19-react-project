import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  enabled: {
    color: theme.palette.secondary.main,
  },
  logSwitch: {
    width: 180,
    marginRight: 10,
    fontSize: 14,
    alignSelf: 'flex-end',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
}));
