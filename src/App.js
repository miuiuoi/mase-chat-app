import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ChatRoom from './components/ChatRoom';
import AuthProvider from './components/Provider/AuthProvider';
import AppProvider from './components/Provider/AppProvider';
import AddRoom from './components/Modals/AddRoom';
import InviteMember from './components/Modals/InviteMember';

function App() {
  return (
    <Router>
        <AuthProvider>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<ChatRoom />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <AddRoom/>  
                <InviteMember/>
             </AppProvider>
        </AuthProvider> 
    </Router>
);
}

export default App;
