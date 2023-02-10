import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

const Home = lazy(() => import('./pages/home/Home'));
const Hotels = lazy(() => import('./pages/hotels/Hotels'));
const Hotel = lazy(() => import('./pages/hotel/Hotel'));
const Login = lazy(() => import('./pages/login/Login'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
