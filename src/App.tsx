import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Background from '../src/firstPage/atoms/Background';
import InputBox from './firstPage/organisms/InputBox';
import ResultPage from './resultPage/ResultPage';
import Navbar from "./loginPage/Organisms/Navbar";
import Login from "./loginPage/SignIn";
import SignIn from "./loginPage/SignIn";
import SignUp from "./loginPage/SignUp";
function App() {
    return (
        <div className="App">
          <BrowserRouter >
            <Navbar />
            <Routes>
              <Route path="/" element={
                <div>
                  <Background />
                  <InputBox/>
                </div>
              } />
              <Route path="/result" element={
                  <ResultPage />
              } />
              <Route path="/signin" element={
                  <SignIn />
              } />
              <Route path="/signup" element={
                <SignUp />
              } />
            </Routes>
          </BrowserRouter>

        </div>
    );
}

export default App;
