import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

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
