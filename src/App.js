import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './component/authPages/SignUpPage';
import LoginPage from './component/authPages/LoginPage';
import MainPage from './component/hero/MainPage';
import RedirectPage from './component/RedirectPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/main' element={<MainPage/>} />
        <Route path='/' element={<RedirectPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
