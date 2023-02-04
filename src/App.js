import './App.css';
import Home from './Pages/Home';
import {Route,Routes} from 'react-router'
import Service from './Pages/Service';
import Navbar from './components/Navbar/Navbar'
import Contact from './Pages/Contact';
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
