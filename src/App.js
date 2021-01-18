import React from 'react';

import GoalList from './components/GoalList/GoalList';
import './App.css';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'}
  ];

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  );
  // return <h1 title='This works!'>A React App!</h1>; // => React.createElement(...)
};
// has to return jsx

export default App;
