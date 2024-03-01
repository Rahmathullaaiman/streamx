
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/authentication" element={<Login/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
