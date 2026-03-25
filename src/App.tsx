import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/shared';
import { Home, Pakketten, FAQ, Contact } from './pages';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pakketten" element={<Pakketten />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
