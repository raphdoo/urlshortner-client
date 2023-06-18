import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NEW_URLLINK_RESET } from '../../constants/urlConstant';
import { createUrl } from '../../actions/urlAction';
import Loader from '../layouts/Loader';
import Sidebar from './Sidebar';

const NewUrl = () => {
  const [longUrl, setlongUrl] = useState('');
  const [customUrl, setcustomUrl] = useState('');

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.url);

  useEffect(() => {
    if (success) {
      Navigate('/urls');

      dispatch({ type: NEW_URLLINK_RESET });
    }
  }, [dispatch, success, Navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createUrl(longUrl, customUrl));
  };

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
                <div className="mt-5">
                  <form className="shadow-lg py-5 " onSubmit={submitHandler}>
                    <h1 className="mb-3 text-center">Create a Shortened Url</h1>
                    <div className="form-group">
                      <label htmlFor="email_field">Url</label>
                      <input
                        type="string"
                        id="longUrl"
                        className="form-control"
                        value={longUrl}
                        onChange={(e) => setlongUrl(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password_field">Custom Domain</label>
                      <input
                        type="string"
                        id="customUrl"
                        className="form-control"
                        value={customUrl}
                        onChange={(e) => setcustomUrl(e.target.value)}
                      />
                    </div>

                    <button
                      id="login_button"
                      type="submit"
                      className="btn btn-block py-3"
                    >
                      CREATE SHORT LINK
                    </button>
                  </form>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default NewUrl;
