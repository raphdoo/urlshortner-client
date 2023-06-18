import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearErrors, getUrlAnalytics } from '../../actions/urlAction';
import Loader from '../layouts/Loader';

const UrlAnalytics = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { urlAnalytics } = useSelector((state) => state.urlAnalytics);

  useEffect(() => {
    dispatch(getUrlAnalytics());
  }, [dispatch]);

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
            <h1 className="my-5">All Clicks</h1>

            {loading ? (
              <Loader />
            ) : (
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>url</th>
                      <th>location</th>
                      <th>Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {urlAnalytics &&
                      urlAnalytics.map((urlAnalytic) => (
                        <tr key={urlAnalytic.id}>
                          <td>{urlAnalytic.id}</td>
                          <td>{urlAnalytic.url}</td>
                          <td>{urlAnalytic.location}</td>
                          <td>{urlAnalytic.timestamp}</td>
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

export default UrlAnalytics;
