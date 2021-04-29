import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Courses from "./components/Courses/Courses";
import Playlist from "./components/Playlist/Playlist";
import Login from "./components/Login/SignIn";
import Join from "./components/Login/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/courses">
          <Courses />
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
