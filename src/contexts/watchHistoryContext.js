import { useContext, createContext, useState } from "react";


const WatchHistoryContext = createContext();

export function WatchHistoryProvider({children}) {
    const [watchHistory, setWatchHistory] = useState([]);

    return(
        <WatchHistoryContext.Provider value={{watchHistory, setWatchHistory}}>
            {children}
        </WatchHistoryContext.Provider>
    )
}

export function useWatchHistory(){
    return useContext(WatchHistoryContext);
}