import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Login/>} />
  <Route path='/signup' element={<SignUp/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
