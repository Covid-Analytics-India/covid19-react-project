import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: 167,
    height: 203,
    background: theme.palette.background.card,
    boxShadow: theme.palette.shadows.card,
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
    position: 'relative',
    top: 89,
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
    color: theme.palette.text.secondary,
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

export const useCarouselStyles = makeStyles((theme) => ({
  card: {
    width: 340,
    height: 226,
    background: '#FFFFFF',
    boxShadow: theme.palette.shadows.card,
    borderRadius: 5,
    outline: 'none',
    border: 'none',
    overflow: 'hidden',
  },
  // CARD MEDIA
  cardMedia: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  vegIcon: {
    verticalAlign: 'text-top',
    position: 'relative',
    left: 16,
    top: 101,
  },
  // CARD CONTENT
  cardContent: {
    position: 'relative',
    top: 101,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 6,
    height: 75,
    color: 'white',
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  spaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: 16,
    color: 'white',
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
    color: 'white',
    marginBottom: 7,
  },
}));

export const useInlineStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: 72,
    background: theme.palette.background.card,
    boxShadow: theme.palette.shadows.card,
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  vegIcon: {
    verticalAlign: 'text-top',
    position: 'relative',
    left: 8,
    top: 45,
  },
  // CARD CONTENT
  cardContent: {
    position: 'relative',
    left: 45,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    height: 75,
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  spaceBetween: {
    position: 'relative',
    right: -10,
    bottom: 0,
    maxHeight: 52,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    fontSize: 14,
    color: theme.palette.text.primary,
  },
  title: {
    fontWeight: 500,
    fontSize: 14,
    color: theme.palette.text.primary,
    marginBottom: 16,
  },
}));

export const useInlineNoMediaStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: 72,
    background: theme.palette.background.card,
    boxShadow: theme.palette.shadows.card,
    borderRadius: 5,
    overflow: 'hidden',
  },
  // CARD MEDIA
  cardMedia: {
    width: '100%',
    height: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  vegIcon: {
    verticalAlign: 'text-top',
    position: 'relative',
    left: 8,
    top: 10,
  },
  // CARD CONTENT
  cardContent: {
    position: 'relative',
    left: 40,
    bottom: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 8,
    paddingTop: 0,
    height: 75,
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  spaceBetween: {
    position: 'relative',
    right: 40,
    bottom: 57,
    minHeight: 52,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    fontSize: 14,
    color: theme.palette.text.primary,
  },
  title: {
    fontWeight: 500,
    fontSize: 14,
    color: theme.palette.text.primary,
    marginBottom: 16,
  },
}));
