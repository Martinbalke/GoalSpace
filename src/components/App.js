import React, { Suspense } from 'react';
import { Nav, Hero, About, AuthWrapper, GoalContainer, Footer, Loading } from './Components';
import { Auth0Provider } from "@auth0/auth0-react";
import {AnimatePresence} from 'framer-motion'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';



function App() {

  return (
		<Auth0Provider
			domain={process.env.REACT_APP_DOMAIN}
			clientId={process.env.REACT_APP_CLIENT_ID}
			redirectUri={window.location.origin}
		>
			<Router>
				<div className='App'>
					<Switch>
						<Route path='/about'>
              <Suspense fallback={<Loading/>} >
								<AnimatePresence>
									<About />
								</AnimatePresence>
							</Suspense>
						</Route>
						<Route path='/'>
							<Hero />
							<Nav />
							<AuthWrapper>
								<GoalContainer />
								<Footer />
							</AuthWrapper>
						</Route>
					</Switch>
				</div>
			</Router>
		</Auth0Provider>
	);
}

export default App;
