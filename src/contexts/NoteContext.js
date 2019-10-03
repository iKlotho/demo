import React, { useState ,createContext } from 'react'

export const NoteContext = createContext();


const  NoteContextProvider = (props) => {

    const [notes,setNotes] = useState([]);

    return (
       <NoteContext.Provider value={{notes,setNotes}}>
          {props.children}
       </NoteContext.Provider>
    )
}

export default NoteContextProvider; 