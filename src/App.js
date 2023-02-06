import './App.css';
import Home from './Pages/Home';
import {Route,Routes,useLocation} from 'react-router'
import Service from './Pages/Service';
import Navbar from './components/Navbar/Navbar'
import Contact from './Pages/Contact';
import PrivateRoute from './privateRouting/PrivateRoute'
import AdminDashboard from './Pages/AdminDashboard'
import AdminLogin from './Pages/AdminLogin';
import {AdminContext} from './context/AdminContext'
import { useState } from 'react';
import Footer from './components/Footer/Footer';
function App() {
  const location = useLocation();
  const [login,setLogin] = useState(false);
  const updateLogin = (val)=>{
    setLogin(val);
  }

  return (
    <div className="App">
        <Navbar/>
        <AdminContext.Provider value={{login,updateLogin}}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin-dashboard' element={<PrivateRoute children={<AdminDashboard/>}/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        </Routes>
      </AdminContext.Provider>
      {location.pathname==='/admin-dashboard'?"":<Footer/>}
    </div>
  );
}

export default App;
