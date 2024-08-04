import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
