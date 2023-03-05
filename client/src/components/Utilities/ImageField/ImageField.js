import './styles.css';
import FileBase from 'react-file-base64';
import PropTypes from 'prop-types';

const ImageField = ({ multiple, getFile }) => {
  return (
    <FileBase
      multiple={multiple}
      onDone={({base64}) => getFile(base64)}
    />
  );
};

ImageField.defaultProps = {
  multiple: 'false',
};

ImageField.propTypes = {
  multiple: PropTypes.bool.isRequired,
  getFile: PropTypes.func.isRequired,
};
export default ImageField;
