import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  CREATE_CUSTOMLINK_RESET,
  GENERATE_QR_RESET,
} from '../../constants/urlConstant';
import { createCustomUrl, generateQr } from '../../actions/urlAction';
import Loader from '../layouts/Loader';
import Sidebar from './Sidebar';

const QrGenerator = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const params = useParams();

  const { loading, isCreated, qrcode } = useSelector((state) => state.urlLink);

  const urlId = params.id;

  useEffect(() => {
    dispatch(generateQr(urlId));

    if (isCreated) {
    }
  }, [dispatch, isCreated]);

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              <div className="wrapper ">
                <div className="mt-5 ">
                  {qrcode && (
                    <img src={qrcode} alt="qrcode" className="w-100 h-80" />
                  )}
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default QrGenerator;
