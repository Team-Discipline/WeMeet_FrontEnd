import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Background from '../src/firstPage/atoms/Background';
import InputBox from './firstPage/organisms/InputBox';
import ResultPage from './resultPage/ResultPage';
function App() {
    return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <div>
                  <Background />
                  <InputBox/>
                </div>
              } />
              <Route path="/result" element={<ResultPage />} />
            </Routes>
          </BrowserRouter>

        </div>
    );
}

export default App;
