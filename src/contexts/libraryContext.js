import { useContext, createContext, useState } from "react";
import { data } from "../data/videoLibrary";


const LibraryContext = createContext();

export function LibraryProvider({children}) {
    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem("library")) || data);

    return(
        <LibraryContext.Provider value={{library, setLibrary}}>
            {children}
        </LibraryContext.Provider>
    )
}

export function useLibrary(){
    return useContext(LibraryContext);
}