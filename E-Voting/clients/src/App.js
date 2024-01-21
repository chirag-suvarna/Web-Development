import React from "react";
import "./App.css";
// import Main from "./pages/Main";
import NavBar from "./components/NavBar";
import VotingEvents from "./components/VotingEvents";
// import RegistrationForm from './components/RegistrationForm';
// import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      {/* <Toaster position="top-center" toastOptions={{duration:2000}}/> */}
      {/* <RegistrationForm/> */}
      {/* <Main /> */}
      <NavBar />
      <VotingEvents />
    </>
  );
}

export default App;
