import React from 'react';


    const user_context = React.createContext();

    const UserProvider = user_context.Provider;
    const UserConsumer = user_context.Consumer;


export {UserProvider,UserConsumer};

