
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import LandingPage from './pages/LandingPage';
import Browse from './components/Browse';
import Game from './components/GAMES/Game';
import Creative from './components/CREATIVE/Creative';
import Esports from './components/ESPORTS/Esports';
import Music from './components/MUSIC/Music';
import Irl from './components/IRL/Irl';

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/authentication" element={<Login/>}/>
    <Route path="/browse" element={<Browse/>}/>
    <Route path="/game" element={<Game/>}/>
    <Route path="/creative" element={<Creative/>}/>
    <Route path="/esports" element={<Esports/>}/>
    <Route path="/music" element={<Music/>}/>
    <Route path="/irl" element={<Irl/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
