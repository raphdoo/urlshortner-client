import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearErrors, getUrlLinks } from '../../actions/urlAction';
import Loader from '../layouts/Loader';

const QrCode = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { userLinks } = useSelector((state) => state.userUrls);

  useEffect(() => {
    dispatch(getUrlLinks());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Urls</h1>

            {loading ? (
              <Loader />
            ) : (
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Email</th>
                      <th>Short URL</th>
                      <th>Long URL</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userLinks.map((userLink) => (
                      <tr key={userLink.id}>
                        <td>{userLink.id}</td>
                        <td>{user.user.email}</td>
                        <td>{userLink.shortUrl}</td>
                        <td>{userLink.longUrl}</td>
                        <td>
                          <Fragment>
                            <Link
                              to={`/qr/${userLink.id}`}
                              className="btn btn-primary py-1 px-2"
                            >
                              {/* <i className="fa fa-qrcode"></i> */}
                              Generate QR code
                            </Link>
                          </Fragment>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default QrCode;
