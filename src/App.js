import './App.css';
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Courses from "./components/Courses/Courses";
import Playlist from "./components/Playlist/Playlist";
import Login from "./components/Login/SignIn";
import Join from "./components/Login/SignUp";
import Logout from "./components/Login/Logout";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./contexts/authContext";
import { useLibrary } from "./contexts/libraryContext";
import { useToast } from "./contexts/toastContext";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useBookmark } from './contexts/bookmarkContext';
import { usePlaylist } from './contexts/playlistContext';


function App() {
  const { auth } = useAuth();
  const { setLibrary } = useLibrary();
  const { setBookmark } = useBookmark();
  const { playlist, setPlaylist } = usePlaylist();
  const [ showNavBottom, setShowNavBottom ] = useState(false);
  const { ToastContainer } = useToast();

  useEffect(()=>{
    (async ()=>{
      try{
      const res = await axios.get("http://localhost:3000/courses");
      res.data && setLibrary(res.data);
      console.log("library", res.data)
      }
      catch(err)
      {
        console.log(err);
      }
    })()
  },[])

  useEffect(() => {
    if (auth) {
      try {
        (async function getData() {
          const res = await axios.get(
            "http://localhost:3000/bookmark",
            {
              headers: {
                "auth-token": auth.token,
              },
            }
          );
          console.log("bookmarks", res);
          res.data.bookmark && setBookmark(res.data.bookmark);
        })();
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  
  useEffect(() => {
    if (auth) {
      try {
        (async function postPlaylist() {
          const response = await axios.post(
            "http://localhost:3000/playlist",
            {
              playlist: playlist,
            },
            {
              headers: {
                "auth-token": auth.token,
              },
            }
          );
          console.log("playlist", response.data.playlist);
          response.data.playlist &&
            localStorage.setItem("playlist", JSON.stringify(response.data.playlist));
        })();
      } catch (err) {
        console.log(err);
      }
    }
  }, [playlist]);

  useEffect(() => {
    if (auth) {
      try {
        (async function getData() {
          const res = await axios.get(
            "http://localhost:3000/playlist",
            {
              headers: {
                "auth-token": auth.token,
              },
            }
          );
          console.log(res);
          res.data.playlist && setPlaylist(res.data.playlist);
        })();
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  console.log(auth);
  
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
        <Route path="/course/:id">
          <Home />
        </Route>
        <Route exact path="/playlist">
          {auth ? <Playlist />: <Redirect to="/login"/>}
        </Route>
        <Route exact path="/playlist/:id">
          <Home />
        </Route>
        <Route path="/login">
          {auth? <Redirect to="/" />:<Login />}
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
      </Router>
      <ToastContainer
        style={{ position: "fixed", top: "80vh", right: "1rem" }}
      />
    </div>
  );
}

export default App;
