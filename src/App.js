import './App.css';
import Books from "./components/books"
import Mybooks from './components/mybooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>}></Route>
          <Route path='/mybooks' element={<Mybooks/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
