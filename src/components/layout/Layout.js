import React from 'react';

import Header from './Header';
import './Layout.css';

function Layout({ children, title, ...props }) {
  return (
    <div className="layout">
      <Header className="layout-header bordered" {...props} />
      <hr/>
      <main className="layout-main bordered">
        <h2 className="layout-title bordered">{title}</h2>
        <section className="layout-content">{children}</section>
      </main>
      <hr/>
      <footer className="layout-footer bordered">Footer</footer>
    </div>
  );
}

export default Layout;
