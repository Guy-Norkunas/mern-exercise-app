import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import exerciseList from './components/exercises-list.component';
import editExercise from './components/edit-exercises.component';
import createExercise from './components/create-exercise.component';
import createUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={exerciseList} />
      <Route path="/edit/:id" exact component={editExercise} />
      <Route path="/create" exact component={createExercise} />
      <Route path="/user" exact component={createUser} />
    </Router>
  );
}

export default App;
