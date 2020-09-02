import React from 'react';
import { Loading} from '../Components'
import { useAuth0 } from '@auth0/auth0-react';


function AuthWrapper({children}) {
  const {  isLoading} = useAuth0();
  return (
    isLoading ? <Loading/> : <div> {children} </div>
  );
}
export default AuthWrapper;