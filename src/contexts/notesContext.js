import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();

export function NoteProvider({children}) {
    const [ notes, setNotes ] = useState( JSON.parse(localStorage.getItem("note")) || []);

    return(
        <NoteContext.Provider value={{ notes, setNotes }}>
            {children}
        </NoteContext.Provider>
    );
}

export function useNote() {
    return useContext(NoteContext);
  }
  