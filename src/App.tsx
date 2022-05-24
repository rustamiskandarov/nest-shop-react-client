import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/navigation/Navbar';
import { Sidebar } from './component/navigation/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Register from './pages/Register';
import { Wrapper } from './component/Wrapper';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
		  <Routes>
			  <Route path='/' element={<Dashboard />}></Route>
			  <Route path='/users' element={<Users />}></Route>
			  <Route path='/register' element={<Register />}></Route>
			  <Route path='/login' element={<Login />}></Route>
		  </Routes>
    </div>
  );
}

export default App;
