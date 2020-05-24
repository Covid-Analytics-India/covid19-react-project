import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    background: theme.palette.background.paper,
    boxShadow: theme.palette.shadows.paper,
    borderRadius: 8,
    overflow: 'hidden',
    margin: '8px 4px',
    padding: '4px 8px 12px 8px',
    // Above tablet size
    [theme.breakpoints.up('md')]: {
      width: 380,
      height: 230,
      padding: '4px 8px 8px 8px',
    },
  },
  // CARD MEDIA
  cardMedia: {
    maxWidth: 120,
    float: 'left',
    marginTop: 47,
    shapeOutside: 'border-box',
    padding: '4px 10px 2px 10px',
  },
  // CARD CONTENT
  cardContent: {
    position: 'relative',
    padding: 8,
    color: theme.palette.text.primary,
  },
  title: {
    fontWeight: 600,
    fontSize: 14,
    color: theme.palette.text.textBlue,
    marginBottom: 12,
  },
  description: {
    fontSize: 12,
    textAlign: 'justify',
    marginBottom: 12,
  },
  newsInfo: {
    fontStyle: 'italic',
    fontSize: 10,
    marginBottom: 4,
  },
  source: {
    fontSize: 11,
    fontWeight: 900,
  },
  date: {
    fontSize: 10,
    marginBottom: 8,
  },
  dot: {
    display: 'inline-block',
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: theme.palette.text.textBlue,
    margin: '0 8px',
  },
  readMore: {
    fontWeight: 900,
    fontSize: 13,
    float: 'right',
  },
}));
