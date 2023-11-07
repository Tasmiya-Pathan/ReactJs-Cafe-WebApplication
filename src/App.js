import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import ContactComponent from './components/ContactComponent';
import AboutusComponent from './components/AboutusComponent';
import Cookies from 'js-cookie';
import MenuComponent from './components/MenuComponent';
import BackgroundComponent from './components/BackgroundComponent';

function App() {

  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    const cookieUsername = Cookies.get('username');
    const cookiePhoneNumber = Cookies.get('phoneNumber');
    
    if (cookieUsername) {
      setCurrentAccount(cookieUsername);
    }
  }, []);

  return (
    <div className="App" style={styles.backgroundImage} >
     <Router>
     
     <NavbarComponent setCurrentAccount={setCurrentAccount} currentAccount={currentAccount}></NavbarComponent>
     <div>
            
         
              <Routes> 

                <Route exact path='/' element={<BackgroundComponent></BackgroundComponent>}></Route>
               
                <Route exact path='/contactus' element={ <ContactComponent></ContactComponent>}></Route>
              
                <Route exact path='/aboutus' element={ <AboutusComponent></AboutusComponent>}></Route>

                <Route exact path='/menu' element={ <MenuComponent></MenuComponent>}></Route>

               
            
              </Routes>

        
      
              
           
          
              </div>
            <FooterComponent></FooterComponent>
            
          </Router>
    
    
   
      
    </div>
  );
}

const styles = {
  backgroundImage: {
    background: 'url("bg2.jpg") center/cover no-repeat',

  },
};

export default App;
