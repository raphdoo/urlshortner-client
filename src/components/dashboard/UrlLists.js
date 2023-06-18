import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearErrors, deleteUrl, getUrlLinks } from '../../actions/urlAction';
import Loader from '../layouts/Loader';
import { DELETE_URLLINK_RESET } from '../../constants/urlConstant';

const UrlLists = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { user, loading } = useSelector((state) => state.auth);
  const { userLinks } = useSelector((state) => state.userUrls);
  const { isDeleted } = useSelector((state) => state.urlLink);

  useEffect(() => {
    dispatch(getUrlLinks());

    if (isDeleted) {
      Navigate('/urls');
      dispatch({ type: DELETE_URLLINK_RESET });
    }
  }, [dispatch, Navigate, isDeleted, console]);

  const deleteUrlHandler = (id) => {
    dispatch(deleteUrl(id));
  };

  // const setUrls = () => {
  //   const data = {
  //     columns: [
  //       {
  //         label: 'ID',
  //         field: 'id',
  //         sort: 'asc',
  //         width: 50,
  //       },
  //       {
  //         label: 'Email',
  //         field: 'email',
  //         sort: 'asc',
  //         width: 150,
  //       },
  //       {
  //         label: 'short Url',
  //         field: 'short_url',
  //         sort: 'asc',
  //         width: 200,
  //       },
  //       {
  //         label: 'Long Url',
  //         field: 'long_url',
  //         sort: 'asc',
  //         width: 200,
  //       },
  //       {
  //         label: 'Actions',
  //         field: 'actions',
  //         width: 200,
  //       },
  //     ],
  //     rows: [],
  //   };

  //   userLinks.forEach((userLink) => {
  //     data.rows.push({
  //       id: userLink.id,
  //       email: user.user.email,
  //       short_url: userLink.shortUrl,
  //       long_url: userLink.longUrl,
  //       actions: (
  //         <Fragment>
  //           <Link
  //             to={`/api/user/${userLink.id}`}
  //             className="btn btn-primary py-1 px-2"
  //           >
  //             <i className="fa fa-pencil"></i>
  //           </Link>
  //           <button
  //             className="btn btn-danger py-1 px-2 ml-2"
  //             // onClick={() => deleteProductHandler(product._id)}
  //           >
  //             <i className="fa fa-trash"></i>
  //           </button>
  //         </Fragment>
  //       ),
  //     });
  //   });

  //   return data;
  // };

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
                            <div className="d-flex flex-row">
                              <button
                                className="btn btn-danger py-1 px-2 ml-2"
                                onClick={() => deleteUrlHandler(userLink.id)}
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                            </div>
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

export default UrlLists;
