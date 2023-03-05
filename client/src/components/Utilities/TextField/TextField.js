import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const TextField = (props) => {
  const { value, label, type, placeHolder, onChange } = props;
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div>
      {type === 'textarea' ? (
        <div className='wrapper'>
          <textarea
            rows='4'
            maxLength='150'
            type={type}
            value={value}
            className='textField-ta'
            placeholder={placeHolder}
            onChange={handleChange}></textarea>
          <span className='placeHolder-ta'>{label}</span>
        </div>
      ) : (
        <div className='wrapper'>
          <input
            maxLength='50'
            type={type}
            value={value}
            className='textField'
            placeholder={placeHolder}
            onChange={handleChange}
          />
          <span className='placeHolder'>{label}</span>
        </div>
      )}
    </div>
  );
};

TextField.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
TextField.defaultProps = {
  value: '',
  placeHolder: ' ',
  type: 'text',
  label: 'Creator',
};

export default TextField;
