// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { SinglePost } from './pages/SinglePost';
import { SolutionComingSoon } from './pages/SolutionComingSoon';

export const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0F172A] selection:bg-[#38BDF8]/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/avances" element={<Blog />} />
            <Route path="/avances/:id" element={<SinglePost />} />
            <Route path="/solucion" element={<SolutionComingSoon />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App