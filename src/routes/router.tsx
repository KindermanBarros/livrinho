import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          (Todo: Create Routes for the app) (Route path="blogs" element=)
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
