import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PlaylistProvider } from "./contexts/playlistContext";
import { LibraryProvider } from "./contexts/libraryContext";
import { BookmarkProvider } from "./contexts/bookmarkContext";
import { AuthProvider } from "./contexts/authContext";
import { ToastProvider } from "./contexts/toastContext";
import { IconContext } from "react-icons";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastProvider>
        <LibraryProvider>
          <PlaylistProvider>
            <BookmarkProvider>
              <IconContext.Provider value={{ color: "#fff" }}>
                <App />
              </IconContext.Provider>
            </BookmarkProvider>
          </PlaylistProvider>
        </LibraryProvider>
      </ToastProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
