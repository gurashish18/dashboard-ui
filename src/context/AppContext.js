import React, { createContext, useReducer } from "react";
import { appReducer } from "./reducer";
import { initialAppState } from "./appState";

export const AppContext = createContext({
    appState: initialAppState,
    appDispatch: () => null,
});

export const AppContextProvider = ({ children }) => {
    const [appState, appDispatch] = useReducer(appReducer, initialAppState);

    return (
        <AppContext.Provider value={{ appState, appDispatch }}>
            {children}
        </AppContext.Provider>
    );
};
