import React from 'react';
import { useState, createContext } from "react";

/**
 * I'm initializing the Context API here.
 * Every component that either sets or gets something from the Context API
 * will need to import this.
 */

export const TranslatorContext = createContext();



export const TranslatorProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");
    const name = 'hi';
    return (
        <TranslatorContext.Provider value={[language, setLanguage, name]}>
            {children}
        </TranslatorContext.Provider>
    );
};







