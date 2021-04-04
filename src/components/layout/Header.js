import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as Icon } from '../../assets/twitter.svg';
import './Header.css';
import Button from '../shared/Button';
import { logout } from '../../api/auth';

const Header = ({ isLogged, onLogout, ...props }) => {

    const handleLogoutClick = () => {
        logout().then(onLogout);
      };
    
  return (
    <header className='header' {...props}>
      <Link to="/">
      <div className="header-logo">
        
      </div>
      </Link>
      <nav className="header-nav">
        <Button
          as={Link}
          to="/adverts"
          variant="primary"
          className="header-button"
        >
          Add
        </Button>
        {isLogged ? (
          <Button
            className="header-button"
            onClick={handleLogoutClick}
          >
            Log out
          </Button>
        ) : (
          <Button
            as={Link}
            to="/login"
            className="header-button"
          >
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
