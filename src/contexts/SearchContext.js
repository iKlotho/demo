import React,{useState,createContext} from 'react';

export const SearchContex = createContext();

const SearchContextProvider = (props) => {
    
    const [searchInput,setSearch] = useState('');

    return (
        <SearchContex.Provider value={{searchInput,setSearch}}>
            {props.children}
        </SearchContex.Provider>
            
        
    )
}

export default SearchContextProvider;
