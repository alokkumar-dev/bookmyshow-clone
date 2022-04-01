import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { MovieDetails } from './Components/MovieDetails';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
