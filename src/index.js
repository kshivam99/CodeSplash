import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PlaylistProvider } from "./contexts/playlistContext";
import { LibraryProvider } from "./contexts/libraryContext";

ReactDOM.render(
  <React.StrictMode>
    <LibraryProvider>
      <PlaylistProvider>
        <App />
      </PlaylistProvider>
    </LibraryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
