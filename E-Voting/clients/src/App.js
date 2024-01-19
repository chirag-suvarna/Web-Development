import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster position="top-center" toastOptions={{duration:2000}}/>
    <RegistrationForm/>
    </>
  );
}

export default App;
