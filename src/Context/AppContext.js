import React, { createContext, useState } from 'react';
import myData from "../Json/Info.json";



export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [Language, ChoiseLanguage] = useState(1);

    return <AppContext.Provider value={{ Language, ChoiseLanguage, myData }}>
        {children}
    </AppContext.Provider>
}