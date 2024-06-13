import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Addbus from './components/Addbus';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/addbus' element={<Addbus/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
