/* eslint-disable no-unused-vars */

import React, { createContext, useState } from 'react';

// Create a UserDataContext
export const UserDataContext = createContext();

const UserProvider = ({ children }) => {
    // Define user state
    const {user, setUser} = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserProvider;
