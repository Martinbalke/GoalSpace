import React, { useState, useEffect } from 'react';
import { Goal, About, Modal, GoalForm, EditGoal, SetGoal, Chart, Milestone, ChartContainer } from '../Components';
import { loadGoals } from '../../store/actions';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useAuth0 } from "@auth0/auth0-react";
import { v4 as uuidv4 } from 'uuid';


function GoalContainer({ goals, dispatch }) {
  //State variable to keep track of which goal is currently being edited
  const [editing, setEditing] = useState(-1);

  //AUTHENTICATION
  const { user } = useAuth0();
  const [currentUser] = useState(user?.email || getOrSetLocalUser())

  function getOrSetLocalUser() {
    if (user?.email) return user.email;
    let localUser = localStorage.getItem('goalSpaceUserName');
    if (!localUser) {
      localUser = uuidv4();
      localStorage.setItem('goalSpaceUserName', localUser)
    }
    return localUser;
  }

  useEffect(() => {
    dispatch(loadGoals(currentUser));
  }, [dispatch, user, currentUser])

  //Generate a Goal component for each goal in the global state
  function generateGoalsWithDynamicAnimations() {
    if (!goals) return;

    let heights = [0.4, 0.45, 0.55];
    return goals.map((goal, index) =>
      <Goal index={index} key={index} goal={goal} animationHeight={heights[index]}>
        <Milestone goal={goal} index={index} />
      </Goal>
    )
  }

  return (
    <>
      <AnimatePresence>
        {editing >= 0 && (<Modal className='goalForm__background' close={() => setEditing(-1)}>
          <GoalForm index={editing} user={currentUser} close={() => setEditing(-1)} />
        </Modal>)}
      </AnimatePresence>
      <main className="contentContainer">
        <SetGoal setEditing={setEditing}>
          <EditGoal setEditing={setEditing} />
        </SetGoal>
        <div className="goalContainer" id="Goals">
          <AnimatePresence>
            {generateGoalsWithDynamicAnimations()}
          </AnimatePresence>
        </div>
        <ChartContainer>
          <Chart />
        </ChartContainer>
      </main>
    </>
  );
}

const mapStateToProps = state => ({
  goals: state.goals,
  progressData: state.progress
});

export default connect(mapStateToProps)(GoalContainer);