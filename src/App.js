import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ChatRoom from './components/ChatRoom';
import AuthProvider from './components/Provider/AuthProvider';

function App() {
  return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<ChatRoom />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </AuthProvider> 
    </Router>
);
}

export default App;
