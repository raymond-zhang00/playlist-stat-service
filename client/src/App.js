import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NavBar from './components/NavBar';
import PlaylistPage from './pages/Playlist';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header className="app-header">
          <NavBar />
        </header>
        <main>
          <div id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/playlist" element={<PlaylistPage />} />
          </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
