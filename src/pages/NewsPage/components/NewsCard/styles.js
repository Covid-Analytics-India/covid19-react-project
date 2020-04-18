import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: 203,
    background: theme.palette.background.paper,
    boxShadow: theme.palette.shadows.paper,
    borderRadius: 5,
    overflow: 'hidden',
  },
  // CARD MEDIA
  cardMedia: {
    width: 65,
    height: 72,
    backgroundSize: 'auto 72px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // CARD CONTENT
  cardContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 8,
    height: 75,
  },
  spaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 14,
    color: theme.palette.text.primary,
  },
  title: {
    fontWeight: 500,
    fontSize: 14,
    color: theme.palette.text.primary,
    marginBottom: 7,
  },
}));
