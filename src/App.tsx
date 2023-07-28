import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Background from './firstPage/Background';
import InputBox from './firstPage/InputBox';
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
