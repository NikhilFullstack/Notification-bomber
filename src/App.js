import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './component/authPages/SignUpPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUpPage/>} />

      </Routes>
    </div>
  );
}

export default App;
