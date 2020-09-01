import React from 'react';
import {GoalContainer, Loading} from '../Components'
import { useAuth0 } from '@auth0/auth0-react';


function AuthWrapper() {
  const {  isLoading} = useAuth0();
  return isLoading ? <Loading/> : <GoalContainer/>;
}
export default AuthWrapper;