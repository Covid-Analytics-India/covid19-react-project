import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: 167,
    height: 203,
    background: '#FFFFFF',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.09)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  // CARD MEDIA
  cardMedia: {
    width: '100%',
    height: 106,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  vegIcon: {
    verticalAlign: 'text-top',
    position: 'relative',
    left: 8,
    top: 79,
  },
  // CARD CONTENT
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 8,
    height: 75,
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 12,
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
