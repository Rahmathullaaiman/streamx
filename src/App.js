
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import LandingPage from './pages/LandingPage';
import Browse from './components/Browse';

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/authentication" element={<Login/>}/>
    <Route path="/browse" element={<Browse/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
