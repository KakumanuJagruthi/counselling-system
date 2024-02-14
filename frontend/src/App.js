import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counsellor from './components/Counsellor';
import Header from './components/Header';
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import Visitor from './components/Visitor';
import Appointment from './components/Appointment';
import { Home } from './components/Home';
import ContactUs from './components/ContactUs';

function App() {
  return (
    
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/signup' element={<Signup />} exact />
            <Route path='/signin' element={<SignIn />} exact />
            <Route path='/counsellor' element={<Counsellor />} exact />
            <Route path='/visitor' element={<Visitor />} exact />
            <Route path='/appointment' element={<Appointment />} exact />
            <Route path='/contactus' element={<ContactUs />} exact />
          </Routes>
        </main>
      </React.Fragment>
    
  );
}

export default App;
