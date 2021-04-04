import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// import { ReactComponent as Icon } from '../../assets/twitter.svg';
import './Header.css';
import Button from '../shared/Button';
import AuthButton from '../auth/AuthButton';

const Header = ({ isLogged, onLogout, ...props }) => {
  return (
    <header className='header' {...props}>
      <Link to="/">
        <div className="header-logo">
          {/* logo */}
        </div>
      </Link>
      <nav className="header-nav">
        <Button
          as={NavLink}
          activeClassName="active"
          to="/advert"
          variant="primary"
          className="header-button"
        >
          Create New Add
        </Button>
        <AuthButton
          className="header-button"
          isLogged={isLogged}
          onLogout={onLogout}
        />
      </nav>
    </header>
  );
};

export default Header;
