import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormControl, withStyles, InputAdornment, Icon, Input } from '@material-ui/core';

import InputWrapper from './input';

const styles = theme => ({
  formControl: {
    display: 'flex',
    marginTop: theme.spacing.unit * 4
  },
  icon: {
    color: theme.palette.grey[500],
    marginRight: theme.spacing.unit * 2,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary[500]
    }
  }
});

class TextInput extends Component {
  state = {
    value: '',
    values: []
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      values: []
    };

    if (props.values) {
      this.state.values = props.values;
    }
  }

  _setValue = value => {
    this.setState({ value });
  };

  _handleChange = values => {
    const { onChange } = this.props;
    this.setState({ values });
    onChange(values);
  };

  _textFieldOnChangeValue = e => {
    const value = e.target.value;
    this.setState({ value });
  };

  _onClearChips = () => {
    this._handleChange([]);
  };

  _onChipDelete = index => e => {
    const { values } = this.state;
    e.preventDefault();
    const _values = [...values];
    _values.splice(index, 1);
    this._handleChange(_values);
  };

  render() {
    const { name, placeholder, classes } = this.props;
    const { values, value } = this.state;

    const adorment = values.length > 0 && (
      <InputAdornment position="end">
        <Icon onClick={this._onClearChips} className={classes.icon}>
          clear
        </Icon>
      </InputAdornment>
    );

    return (
      <FormControl aria-describedby={`${name}-text-input`} className={classes.formControl}>
        <Input
          fullWidth
          endAdornment={adorment}
          inputComponent={InputWrapper}
          inputProps={{
            value: value,
            placeholder: placeholder || '',
            values: values,
            onDelete: this._onChipDelete,
            onChange: this._textFieldOnChangeValue,
            onChipChange: this._handleChange,
            setValue: this._setValue
          }}
        />
      </FormControl>
    );
  }
}

TextInput.propTypes = {
  classes: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default withStyles(styles)(TextInput);
