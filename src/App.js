
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page from './pages/Page';
import Browse from './components/Browse';

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Page/>}/>
    <Route path='/browse' element={<Browse/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
