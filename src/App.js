
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './Component/layout';
import Blog from './pages/blog';
import Login from './pages/login';


function App() {

  return (
  <BrowserRouter>
  <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/blog' element={<Blog/>} />
      <Route  path='/login' element={<Login/>} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
