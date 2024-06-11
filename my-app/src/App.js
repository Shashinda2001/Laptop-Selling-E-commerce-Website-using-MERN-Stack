import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import GamingLap from './Components/GamingLap';
import LoginForm from './Components/LoginForm';
import HomePage from './Pages/HomePage';
import SignForm from './Components/SignForm';
 
import {Routes, Route } from 'react-router-dom';

 
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/LoginForm" element={ <LoginForm/>}/>
        <Route path="/SignForm" element={ <SignForm/>}/>

      </Routes>
    
      
    </div>
    


  );
}

export default App;
