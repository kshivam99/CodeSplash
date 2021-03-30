import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Playlist from "./components/Playlist/Playlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IconContext } from "react-icons";



function App() {
  return (
    <IconContext.Provider value={{ color: "#2563EB" }}>
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/:type/home">
          <Home />
        </Route>
        <Route exact path="/playlist">
          <Playlist />
        </Route>
        <Route exact path="/:type/:id/playlist">
          <Home />
        </Route>
      </Switch>
      </Router>
    </div>
    </IconContext.Provider>
  );
}

export default App;
