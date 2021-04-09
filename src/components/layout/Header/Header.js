import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Icon } from '../../../assets/home-icon.svg';
import Button from '../../shared/Button';
import AuthButton from '../../auth/AuthButton';
import './Header.css';

const Header = ({ isLogged, onLogout, ...props }) => {
  return (
    <header className='header-logo' {...props}>
      <Link to="/">
        <div className="header-logo">
          <Icon width="32" height="32" />
        </div>
      </Link>
      <nav className="header-nav">
        <Button
          as={NavLink}
          activeClassName="active"
          to="/advert/new"
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
