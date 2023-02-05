import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import AdminLogin from '../Pages/AdminLogin'
const PrivateRoute = ({children}) => {
  const {login} = useContext(AdminContext);
  return login?children:<AdminLogin/>
}

export default PrivateRoute