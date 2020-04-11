import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  quantityRocker: {
    padding: '0px 4px',
    display: 'inline-flex',
    justifyContent: 'start',
    borderRadius: 4,
    flexShrink: 0,
    float: 'right',
    alignItems: 'center',
    border: '1px solid lightgrey',
    maxHeight: 25,
    zIndex: 2,
  },
  qty: {
    padding: '4px 10px',
    zIndex: 1,
    fontSize: 12,
    fontWeight: 600,
    color: theme.palette.text.themeRed,
    background: '#FFF8E2',
  },
  iconButton: {
    padding: 0,
    display: 'flex',
    alignSelf: 'center',
    width: 23,
    height: 23,
  },
  addButton: {
    padding: '0px 16px',
    border: '1px solid lightgrey',
    borderRadius: 4,
    height: 25,
  },
  addText: {
    fontSize: 13,
    fontWeight: 500,
    verticalAlign: 'middle',
    color: theme.palette.text.themeRed,
    marginTop: -1,
  },
}));
