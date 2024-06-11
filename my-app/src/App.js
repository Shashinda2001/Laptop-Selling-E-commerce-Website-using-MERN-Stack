 
import './App.css';
 
import LoginForm from './Components/LoginForm';
import HomePage from './Pages/HomePage';
import SignForm from './Components/SignForm';
import About from './Pages/About';
 
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
        <Route path="/About" element={ <About/>}/>

      </Routes>
    
      
    </div>
    


  );
}

export default App;
