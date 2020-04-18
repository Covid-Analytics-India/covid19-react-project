import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
  enabled: {
    color: theme.palette.secondary.main,
  },
}));
