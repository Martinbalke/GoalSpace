import React from 'react';
import Footer from './Footer';
import AuthWrapper from './AuthWrapper'
import Hero from './Hero';
import Nav from './Nav';
import { Auth0Provider} from "@auth0/auth0-react";



function App() {


  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <div className="App">
        <Hero />
        <Nav />
        <AuthWrapper/>
        <Footer />
      </div>
    </Auth0Provider>
  );
}

export default App;
