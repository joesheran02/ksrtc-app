import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AddBus from './Components/AddBus';
import SearchBus from './Components/SearchBus';
import ViewBus from './Components/ViewBus';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Login/>} />
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/addbus' element={<AddBus/>}/>
  <Route path='/searchbus' element={<SearchBus/>}/>
  <Route path='/viewbus' element={<ViewBus/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
