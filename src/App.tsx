import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <ToastContainer/>
    </>
  );
}

export default App;