import { useEffect } from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importing components
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

import { LoadUser } from './actions/userAction';
import store from './store';
import Dashboard from './components/dashboard/Dashboard';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/routes/ProtectedRoute';
import UrlLists from './components/dashboard/UrlLists';
import NewUrl from './components/dashboard/NewUrl';
import UrlAnalytics from './components/dashboard/UrlAnalytics';
import QrCode from './components/dashboard/qrCode';
import CustomUrl from './components/dashboard/CustomUrl';
import CreateCustomUrl from './components/dashboard/createCustomUrl';
import QrGenerator from './components/dashboard/qrGenerator';
import Loader from './components/layouts/Loader';

// import { LoadUserAnalytics } from './actions/urlAction';

function App() {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    store.dispatch(LoadUser());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {loading && <Loader />}
          {!isAuthenticated ? (
            <Route path="/" element={<Home />} exact />
          ) : (
            <Route path="/" element={<Dashboard />} exact />
          )}
          <Route path="/signin" element={<Login />} exact />
          <Route path="/signup" element={<Signup />} exact />

          <Route
            path="/urls"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UrlLists />
              </ProtectedRoute>
            }
            exact
          />

          <Route
            path="/analytics"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UrlAnalytics />
              </ProtectedRoute>
            }
            exact
          />

          <Route
            path="/create"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <NewUrl />
              </ProtectedRoute>
            }
            exact
          />

          <Route
            path="/qrcode"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <QrCode />
              </ProtectedRoute>
            }
            exact
          />

          <Route
            path="/customurl"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CustomUrl />
              </ProtectedRoute>
            }
            exact
          />

          <Route
            path="/customurl/:id"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CreateCustomUrl />
              </ProtectedRoute>
            }
            exact
          />

          <Route
            path="/qr/:id"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <QrGenerator />
              </ProtectedRoute>
            }
            exact
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
