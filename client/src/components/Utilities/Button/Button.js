import './styles.css';
import PropTypes from 'prop-types';

const Button = ({ value, type, className, onClick }) => {
  return (
    <div>
      <button
        className={className}
        type={type}
        onClick={(event) => onClick(event)}>
        {value}
      </button>
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
