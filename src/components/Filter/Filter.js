import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
          className={s.input}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
