import React from 'react';
import Footer from './Footer';
import GoalContainer from './GoalContainer';
import Hero from './Hero';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Nav/>
      <GoalContainer/>
      <Footer/>
    </div>
  );
}

export default App;
