import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavbarComponent from './Components/NavbarComponent';

 import Weather from './Components/Weather';
 import  {BrowserRouter, Routes ,Route} from 'react-router-dom'
 import NextFive from './Components/NextFive';
 import NotFound from './Components/NotFound';
import Home from './Components/Home';


function App() {
  return (
    <div >
      <BrowserRouter> 
       <NavbarComponent />
     
    
        <Routes>
        <Route element={<Home/>} path="/"/> 
      <Route element={ <Weather />} path="/res"/>
      <Route element={<NextFive/>} path="/details/:city"/>
       <Route element={<NotFound/>} path="*" />
    
     
      </Routes>
    
      
     
      </BrowserRouter>
    </div>
  );
}

export default App;
