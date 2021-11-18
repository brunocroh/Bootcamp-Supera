import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Matriculas from './Pages/Matriculas';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/matriculas" element={<Matriculas />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
