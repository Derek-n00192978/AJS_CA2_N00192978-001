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
import CarsEdit from './pages/cars/Edit'



import Auto_partsIndex from './pages/auto_parts/Index' 
import Auto_partsShow from './pages/auto_parts/Show'
import Auto_partsCreate from './pages/auto_parts/Create'
import Auto_partsEdit from './pages/auto_parts/Edit'

//Page Not Found
import PageNotFound from './pages/PageNotFound';

//import components
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect(() => {
        if (localStorage.getItem('token')){
            setAuthenticated(true);
        }
    }, []);
    let protectedRoutes; 

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
        <Route path='/cars/:id/edit' element={<CarsEdit/>}/>
             
        <Route path='/auto_parts/:id' element={<Auto_partsShow/>} />
        <Route path='/auto_parts/create' element={<Auto_partsCreate/>} />
        <Route path='/auto_parts/:id/edit' element={<Auto_partsEdit/>}/>
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
                <Route path="/cars" element={<CarsIndex authenticated={authenticated} />} />
                
                
                <Route path="/auto_parts" element={<Auto_partsIndex authenticated={authenticated} />} />
                <Route path='/login' element={<Login onAuthenticated={onAuthenticated} authenticated={authenticated}/>} />
                <Route path='/register' element={<Register onAuthenticated={onAuthenticated} authenticated={authenticated}/>} />                             
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
