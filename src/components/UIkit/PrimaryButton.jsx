import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  "button": {
    fontSize: 16 
  }
})

const PrimaryButton = props => {
  const classes = useStyles()
  return (
    <Button className={classes.button} variant="contained" color="primary" onClick={() => props.onClick()}>
      { props.label }
    </Button>
  )
}

export default PrimaryButton;