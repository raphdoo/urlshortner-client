import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CREATE_CUSTOMLINK_RESET } from '../../constants/urlConstant';
import { createCustomUrl } from '../../actions/urlAction';
import Loader from '../layouts/Loader';
import Sidebar from './Sidebar';

const CreateCustomUrl = () => {
  const [customUrl, setcustomUrl] = useState('');

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const params = useParams();

  const { loading, isUpdated } = useSelector((state) => state.urlLink);

  const urlId = params.id;

  useEffect(() => {
    if (isUpdated) {
      Navigate('/customurl');
      dispatch({ type: CREATE_CUSTOMLINK_RESET });
    }
  }, [dispatch, isUpdated, Navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createCustomUrl(urlId, customUrl));
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
                    <h1 className="mb-3 text-center">Create a Custom Url</h1>

                    <div className="form-group">
                      <label htmlFor="customurl_field">Custom Domain</label>
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

export default CreateCustomUrl;
