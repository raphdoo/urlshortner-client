import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/">
              <i className="fa fa-tachometer"></i> Dashboard
            </Link>
          </li>

          <li>
            <a
              href="#urlSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-link"></i> Urls
            </a>
            <ul className="collapse list-unstyled" id="urlSubmenu">
              <li>
                <Link to="/urls">
                  <i className="fa fa-clipboard"></i> All
                </Link>
              </li>

              <li>
                <Link to="/create">
                  <i className="fa fa-plus"></i> Create
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/qrcode">
              <i className="fa fa-qrcode"></i> QR Code
            </Link>
          </li>

          <li>
            <Link to="/customurl">
              <i className="fa fa-link"></i> Custom Url
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
