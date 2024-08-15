import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import LoginRedirectPage from '../pages/LoginRedirectPage';
import KSGPage from '../pages/KSGPage';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="__/auth/handler" element={<LoginRedirectPage />} />
        <Route path="ksg" element={<KSGPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
