import React from 'react';

//////CHART////
import ChartClass from './ChartComponents/ChartClass';

////////////GOALS///////
import EditGoal from './GoalComponents/EditGoals';
import Goal from './GoalComponents/Goal';
import GoalContainer from './GoalComponents/GoalContainer';
import Milestone from './GoalComponents/Milestone';
import SetGoal from './GoalComponents/SetGoals';

////////LAYOUT//////

import Footer from './Layout/Footer';
import Hero from './Layout/Hero';
import Nav from './Layout/Nav';

///////UTILITIES//////
import AuthWrapper from './Utilities/AuthWrapper';
import ConfettiScoreButton from './Utilities/ConfettiScoreButton';
import Input from './Utilities/Input';
import Loading from './Utilities/Loading';
import Modal from './Utilities/Modal';

//////LAZY LOADING//////
const About = React.lazy(() => import('./Layout/About'));
const GoalForm = React.lazy(() => import('./GoalComponents/GoalForm'));

/////////////CHARTS///////////
const Chart = React.lazy(() => import('./ChartComponents/Chart'));
const ChartContainer = React.lazy(() => import('./ChartComponents/ChartsContainer'));

export {
	Chart,
	ChartClass,
	ChartContainer,
	Goal,
	GoalContainer,
	GoalForm,
	EditGoal,
	Milestone,
	SetGoal,
	About,
	Footer,
	Hero,
	Nav,
	AuthWrapper,
	ConfettiScoreButton,
	Input,
	Loading,
	Modal,
};
