import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, Chip } from '@material-ui/core';

const styles = theme => ({
  value: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '6px 0 7px'
  },
  input: {
    border: 'none',
    flexGrow: 2,
    height: '28px',
    '&:focus': {
      outline: 'none'
    },
    '&::placeholder': {
      fontSize: '1rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      padding: 0,
      color: theme.palette.grey[500]
    }
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
});

const ENTER_KEYCODE = 13;
const BACK_SPACE_KEYNOTE = 8;

const InputWrapper = ({
  onDelete,
  placeholder,
  value,
  values,
  classes,
  setValue,
  onChange,
  onChipChange,
  onFocus,
  onBlur
}) => {
  const getPlaceholder = () => {
    return values.length === 0 ? placeholder || '' : '';
  };

  const onBlurHandler = e => {
    e.preventDefault();
    onBlur();
  };

  const onKeyDown = e => {
    if (e.keyCode === BACK_SPACE_KEYNOTE) {
      if (!value && values.length > 0) {
        e.preventDefault();
        const _values = [...values];
        const index = _values.length - 1;
        _values.splice(index, 1);
        onChipChange(_values);
      }
    }
  };

  const onKeyPress = e => {
    if (e.charCode === ENTER_KEYCODE) {
      e.preventDefault();
      if (value.length > 0) {
        onChipChange([...values, value]);
        setValue('');
      }
    }
  };

  return (
    <div className={classes.value}>
      {values &&
        values.map((chip, index) => (
          <Chip
            key={index}
            label={chip}
            onDelete={onDelete(index)}
            className={classes.chip}
          />
        ))}
      <input
        className={classes.input}
        value={value}
        placeholder={getPlaceholder()}
        type="text"
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlurHandler}
        autoComplete="off"
      />
    </div>
  );
};

InputWrapper.propTypes = {};

export default withStyles(styles)(InputWrapper);
