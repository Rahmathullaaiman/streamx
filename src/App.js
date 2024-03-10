
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/Home/LandingPage';
import Auth from './components/Authentication/Auth';
import Browsepage from './pages/Browse/Browsepage';
import Browsegamepage from './pages/Browse/Browsegamepage';
import BrowseIRLpage from './pages/Browse/BrowseIRLpage';
import BrowseMusicpage from './pages/Browse/BrowseMusicpage';
import BrowseCreativepage from './pages/Browse/BrowseCreativepage';
import BrowseEsportspage from './pages/Browse/BrowseEsportspage';
import Dashboard from './pages/User/Dashboard';
import Userlive from './pages/Stream/Userlive';
import Admin from './pages/Admin/Admin';
import Payment from './components/payment/Payment';
import Profile from './pages/User/Profile';
import UserProfile from './components/User/UserProfile';
import ChatBar from './pages/User/ChatBar';

function App() {
  return (
    <div className='app'>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/authentication" element={<Auth/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/browse" element={<Browsepage/>}/>
    <Route path="/game" element={<Browsegamepage/>}/>
    <Route path="/creative" element={<BrowseCreativepage/>}/>
    <Route path="/esports" element={<BrowseEsportspage/>}/>
    <Route path="/music" element={<BrowseMusicpage/>}/>
    <Route path="/irl" element={<BrowseIRLpage/>}/>
    <Route path="/userlive" element={<Userlive/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/payment/:showuserid" element={<Payment/>}/>
    <Route path="/profileupdate" element={<Profile/>}/>
    <Route path="/userprofile/:showuserid" element={<UserProfile/>}/>
    <Route path="/livechat" element={<ChatBar/>}/>
    
    </Routes>
     
    </div>
  );
}

export default App;
