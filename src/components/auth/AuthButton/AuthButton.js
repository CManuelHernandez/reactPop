import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../../shared';
import { logout } from '../../../api/auth';

const AuthButton = ({ isLogged, onLogout }) => {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };

  const props = isLogged
    ? { onClick: handleLogoutClick, children: 'Log out' }
    : {
        as: Link,
        to: '/login',
        children: 'Log in',
      };

  return <Button {...props} />;
};

AuthButton.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  onLogout: PropTypes.func.isRequired,
};

AuthButton.defaultProps = {
  isLogged: false,
};

export default AuthButton;
