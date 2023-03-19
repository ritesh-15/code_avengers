import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    {/* <div className="App">
      <Home/>
    </div> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
