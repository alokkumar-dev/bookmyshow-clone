import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import {Router} from  './Routes/Router'

function App() {
  return (
    <div className="App">
     <Navbar/> 
<Router/>
    </div>
  );
}

export default App;
