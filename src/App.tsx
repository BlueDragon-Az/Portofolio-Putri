// src/App.tsx
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import VOE from './pages/projects/VOE';
import Library from './pages/library';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path='/library' element={<Library />} />

      <Route path="/projects/vault-of-evidence" element={<VOE />} />
      
    </Routes>
  );
}

export default App;