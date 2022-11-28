import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import './assets/css/app.css'

/* importing from the pages folder */
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

import CarsIndex from './pages/cars/Index' 
import CarsShow from './pages/cars/Show'
import CarsCreate from './pages/cars/Create'


import AutosIndex from './pages/autos/Index' 
import AutosShow from './pages/autos/Show'
import AutosCreate from './pages/autos/Create'

//Page Not Found
import PageNotFound from './pages/PageNotFound';

//import components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
    //Setup Protected Routes
    let protectedRoutes;
  useEffect(() => {
      if (localStorage.getItem('token')){
          setAuthenticated(true);
      }
  }, []);
 

  const onAuthenticated = (auth, token) => {
      setAuthenticated(auth);
      if (auth){
          localStorage.setItem('token', token);
      }
      else{
          localStorage.removeItem('token');
      }
  };
  if(authenticated){
    //Protected Route
    protectedRoutes = (
      <>
        <Route path='/cars/:id' element={<CarsShow/>} /> 
        <Route path='/cars/create' element={<CarsCreate/>} />
        <Route path='/autos/:id' element={<AutosShow/>} />
        <Route path='/autos/create' element={<AutosCreate/>} />
      </>
    )
  }
  return (
    <Router>
      <Container maxWidth="md">
            <NavBar onAuthenticated={onAuthenticated} authenticated={authenticated}/>
            <Routes>
                <Route path="/" element={<Home onAuthenticated={onAuthenticated} authenticated={authenticated} />} /> 
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/cars" element={<CarsIndex />} />
                <Route path="/auto_parts" element={<AutosIndex />} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />                             
                {protectedRoutes}
                {/*Different route */}
                <Route path='*' element={<PageNotFound/>} />
            </Routes>
            <Footer />
          </Container>  
        </Router> 
  )
}
/* exporting the App */
export default App;
