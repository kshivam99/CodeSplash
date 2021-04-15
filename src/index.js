import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PlaylistProvider } from "./contexts/playlistContext";
import { LibraryProvider } from "./contexts/libraryContext";
import { BookmarkProvider } from "./contexts/bookmarkContext";
import { IconContext } from "react-icons";

ReactDOM.render(
  <React.StrictMode>
    <LibraryProvider>
      <PlaylistProvider>
        <BookmarkProvider>
          <IconContext.Provider value={{ color: "#fff" }}>
            <App />
          </IconContext.Provider>
        </BookmarkProvider>
      </PlaylistProvider>
    </LibraryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
