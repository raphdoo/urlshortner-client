import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import Loader from '../layouts/Loader';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        {user ? (
          <div className="col-12 col-md-10">
            <h1 className="my-4">Dashboard</h1>

            <Fragment>
              <div className="row pr-4">
                <div className="col-xl-12 col-sm-12 mb-3">
                  <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="text-center card-font-size">
                        Welcome
                        <br /> <b>{user.user.email}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pr-4">
                <div className="col-xl-6 col-sm-6 mb-3">
                  <div className="card text-white bg-success o-hidden h-100">
                    <div className="card-body">
                      <div className="text-center card-font-size">
                        Total Urls
                        <br /> <b>{user.totalUrls}</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-white clearfix small z-1"
                      to="/urls"
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-6 col-sm-6 mb-3">
                  <div className="card text-white bg-danger o-hidden h-100">
                    <div className="card-body">
                      <div className="text-center card-font-size">
                        Total Clicks
                        <br /> <b>{user.totalClicks}</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-white clearfix small z-1"
                      to="/analytics"
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </Fragment>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </Fragment>
  );
};

export default Dashboard;
