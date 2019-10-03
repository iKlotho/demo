import React, { useState ,createContext } from 'react'

export const PersonContext = createContext();


const  PersonContextProvider = (props) => {

    const [persons,setPerson] = useState([]);

    return (
       <PersonContext.Provider value={{persons,setPerson}}>
          {props.children}
       </PersonContext.Provider>
    )
}

export default PersonContextProvider; 
