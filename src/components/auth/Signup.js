import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layouts/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { signup, clearErrors, LoadUser } from '../../actions/userAction';
import store from '../../store';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      store.dispatch(LoadUser());
      Navigate('/');
    }
  }, [dispatch, isAuthenticated, Navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signup(email, password));
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="wrapper">
            <div className="">
              <form className="shadow-lg py-5" onSubmit={submitHandler}>
                <h1 className="mb-3 text-center">Signup</h1>
                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password_field">Password</label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && (
                  <div className="alert alert-danger">
                    <h4>Oooops...</h4>
                    <ul className="my-0">
                      {error.errors.map((err) => (
                        <li key={err.message}>{err.message}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                >
                  SIGNUP
                </button>

                <Link to="/signin" className="float-right mt-3">
                  Already Registered?
                </Link>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Signup;
