import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import NavBar from '../shared/components/navbar';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
};

export default AppRouter;
