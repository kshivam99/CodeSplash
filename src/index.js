import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PlaylistProvider } from "./contexts/playlistContext";
import { LibraryProvider } from "./contexts/libraryContext";
import { WatchHistoryProvider } from "./contexts/watchHistoryContext";
import { IconContext } from "react-icons";

ReactDOM.render(
  <React.StrictMode>
    <LibraryProvider>
      <PlaylistProvider>
        <WatchHistoryProvider>
          <IconContext.Provider value={{ color: "#fff" }}>
            <App />
          </IconContext.Provider>
        </WatchHistoryProvider>
      </PlaylistProvider>
    </LibraryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
