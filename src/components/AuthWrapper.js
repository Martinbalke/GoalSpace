import React from 'react';
import Loading from './Loading'
import GoalContainer from './GoalContainer';
import { useAuth0 } from '@auth0/auth0-react';
function AuthWrapper() {
  const {
    isLoading,
    error,
  } = useAuth0();
  if (isLoading) {
    return <Loading/>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return <GoalContainer/>;
}
export default AuthWrapper;