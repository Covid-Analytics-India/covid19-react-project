import React from 'react';
import {useTranslation} from 'react-i18next';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import {useStyles} from './styles';

function QuantityRocker(props) {
  const classes = useStyles();
  const [t] = useTranslation();
  const {value, handleMinus, handlePlus} = props;

  return value === 0 ? (
    <>
      <Button
        variant="text"
        color="primary"
        className={classes.addButton}
        onClick={handlePlus}
      >
        <span className={classes.addText}>{t('add')}</span>
      </Button>
    </>
  ) : (
    <div className={classes.quantityRocker}>
      <IconButton className={classes.iconButton} onClick={handleMinus}>
        {value === 1 ? (
          <DeleteIcon style={{width: 12, height: 12}} />
        ) : (
          <RemoveIcon style={{width: 12, height: 12}} />
        )}
      </IconButton>
      <div className={classes.qty}>{value}</div>
      <IconButton className={classes.iconButton} onClick={handlePlus}>
        <AddIcon style={{width: 12, height: 12, color: '#fd2a2a'}} />
      </IconButton>
    </div>
  );
}
export default QuantityRocker;
