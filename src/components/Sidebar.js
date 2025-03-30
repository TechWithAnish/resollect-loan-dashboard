import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Resollect</div>
      <nav>
        <ul>
          <li className="active">Portfolio</li>
          <li>Notifications</li>
          <li>Notices</li>
          <li>Auction</li>
          <li>Data Upload</li>
          <li>Control Panel</li>
          <li>User Management</li>
          <li>Permissions</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;