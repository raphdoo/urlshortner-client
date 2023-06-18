import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Signout } from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(Signout());

    console.log('signout successful');
  };

  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <Link to="/">
          <p className="navbar-brand">Url shortener</p>
        </Link>

        <div className="d-flex justify-content-end">
          <ul className="nav">
            {isAuthenticated ? (
              <div className="d-flex align-items-center">
                <li className="nav-item" onClick={logoutHandler}>
                  <Link to="/">
                    <p className="nav-link">Sign out</p>
                  </Link>
                </li>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <li className="nav-item">
                  <Link to="/signin">
                    <p className="nav-link">Signin</p>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/signup">
                    <p className="nav-link">Signup</p>
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
