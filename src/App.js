import './App.css';
import Home from './Pages/Home';
import {Route,Routes} from 'react-router'
import Service from './Pages/Service';
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </div>
  );
}

export default App;
