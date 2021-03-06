// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Vedios from './components/Vedios'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Login />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
         <Route path ="/vedios" element={<Vedios />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
