import './App.css';
import Intro from './components/Intro';
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import SingleSeries from './components/SingleSeries';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro message="Here you can find tv series list"/>}></Route>
        <Route path="/series/:id" element={<SingleSeries/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
