import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  logSwitch: {
    width: 180,
    margin: '0 10px',
    fontSize: 14,
    // alignSelf: 'flex-end',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  enabled: {
    color: theme.palette.text.textBlue,
    fontWeight: 500,
  },
}));
