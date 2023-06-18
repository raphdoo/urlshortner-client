import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const Navigate = useNavigate();

  return (
    <Fragment>
      <div className="container">
        <div className="page-container">
          <div className="page-content">
            <h2>URL Shortener</h2>

            <h1>Create customisable short links with a single click</h1>

            <h3>
              Explore URL shortening options, link analytics, QR code generation
              all in one platform efffortlessly
            </h3>
          </div>

          {isAuthenticated ? (
            <div className="button-container">
              <button onClick={() => Navigate('/dashboard')}>
                Go to Dashboard
              </button>
            </div>
          ) : (
            <div className="button-container">
              <button onClick={() => Navigate('/signin')}>Get Started</button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
