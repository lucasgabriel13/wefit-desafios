import { Routes, Route } from 'react-router-dom';

import { Cart } from '../pages/Cart';
import { Finished } from '../pages/Finished';
import { Home } from '../pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/finished" element={<Finished />} />
    </Routes>
  );
}