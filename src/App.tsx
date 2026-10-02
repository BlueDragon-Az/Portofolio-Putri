// src/App.tsx
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Library from './pages/library';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path='/library' element={<Library />} />
    </Routes>
  );
}

export default App;