import React, { useState, useEffect } from 'react';
import Goal from './Goal';
import Modal from './Modal'
import GoalForm from './GoalForm';
import EditGoal from './EditGoals';
import SetGoal from './SetGoals';
import Chart from './Chart';
import Milestone from './Milestone';
import ChartContainer from './ChartsContainer'
import { connect } from 'react-redux';
import { loadGoals } from '../store/goalReducer';
import { AnimatePresence } from 'framer-motion';
import { useAuth0 } from "@auth0/auth0-react";


function GoalContainer({ goals, dispatch }) {
  //State variable to keep track of which goal is currently being edited
  const [editing, setEditing] = useState(-1);

  //AUTHENTICATION
  const { user, isAuthenticated } = useAuth0();
  const [currentUser, setCurrentUser] = useState(isAuthenticated && user ? user.email : 'mrtnbalke@gmail.com')


  useEffect(() => {
    if(isAuthenticated)setCurrentUser(user.email);
    dispatch(loadGoals(currentUser));
  }, [dispatch, currentUser, isAuthenticated, user])

  //Generate a Goal component for each goal in the global state
  function generateGoalsWithDynamicAnimations() {
    if (!goals) return;

    let heights = [800, 1100, 1400];
    return goals.map((goal, index) =>
      <Goal index={index} key={index} goal={goal} animationHeight={heights[index]}>
        <Milestone goal={goal} index={index} />
      </Goal>
    )
  }

  return (
    <main className="contentContainer">
      <SetGoal setEditing={setEditing}>
        <EditGoal setEditing={setEditing} />
      </SetGoal>
      <AnimatePresence>
        {editing >= 0 && (<Modal className='goalForm__background' close={() => setEditing(-1)}>
          <GoalForm index={editing} user={currentUser} close={() => setEditing(-1)} />
        </Modal>)}
      </AnimatePresence>
      <div className="goalContainer">
        <AnimatePresence>
          {generateGoalsWithDynamicAnimations()}
        </AnimatePresence>
      </div>
      <ChartContainer>
        <Chart />
      </ChartContainer>
    </main>
  );
}

const mapStateToProps = state => ({
  goals: state.goals,
  progressData: state.progress
});

export default connect(mapStateToProps)(GoalContainer);