/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const CaptainDataContext = createContext();

// eslint-disable-next-line react/prop-types
const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const updateCaptain = (CreateCaptain) => {
        setCaptain(CreateCaptain);
    }

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError
    }

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext
