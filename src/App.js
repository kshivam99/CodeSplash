import './App.css';
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Courses from "./components/Courses/Courses";
import Playlist from "./components/Playlist/Playlist";
import Login from "./components/Login/SignIn";
import Join from "./components/Login/SignUp";
import { useAuth } from "./contexts/authContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  const { auth } = useAuth();
  const [ showNavBottom, setShowNavBottom ] = useState(false);
  return (
    <div className="App">
      <Router>
      <Navbar showNavBottom={showNavBottom} />
      <Switch>
        <Route exact path="/">
          <Main setShowNavBottom={setShowNavBottom} />
        </Route>
        <Route path="/courses">
          <Courses setShowNavBottom={setShowNavBottom}/>
        </Route>
        <Route path="/:type/home">
          <Home />
        </Route>
        <Route exact path="/playlist">
          <Playlist />
        </Route>
        <Route exact path="/:type/:id">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
