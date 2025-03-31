import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../assets/resollect-logo.jpg';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="logo">
        <img src={logo} alt="Resollect Logo" className="logo-img" />
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? '◄' : '►'}
        </button>
      </div>
      <nav>
        <ul>
          <li className="active">
            <span>Portfolio</span>
          </li>
          <li>
            <span>Notifications</span>
          </li>
          <li>
            <span>Notices</span>
          </li>
          <li>
            <span>Auction</span>
          </li>
          <li>
            <span>Data Upload</span>
          </li>
          <li>
            <span>Control Panel</span>
          </li>
          <li>
            <span>User Management</span>
          </li>
          <li>
            <span>Permissions</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;