import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    width: '100%'
  }
}));

const SelectBox = (props) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        required={props.required}
        value={props.value}
        onChange={event => props.select(event.target.value)}
      >
        { props.items.map(item => (<MenuItem key={item.id} value={item.id}>{item.value}</MenuItem> ))}
      </Select>
    </FormControl>
  )
}

export default SelectBox;