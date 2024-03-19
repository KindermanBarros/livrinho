import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
