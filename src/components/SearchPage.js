import React,{useContext} from 'react';
import { SearchContex} from '../contexts/SearchContext';
import {PersonContext} from '../contexts/PersonContext';
import Persons from './Persons';

const SearchPage = () => {
    const {searchInput} = useContext(SearchContex);
    const {persons} = useContext(PersonContext);

    const inputs = searchInput.split(' ');
    const list = inputs.length===0 ? [] :persons.filter(person=>{
       
        let first= inputs.filter(char=>char!==''?person.name.first.toLowerCase().search(char.toLowerCase())>-1:false);
        let last= inputs.filter(char=>char!==''?person.name.last.toLowerCase().search(char.toLowerCase())>-1:false);
        return first.length>0||last.length>0;
    }); 
    return (
        <Persons persons={list}/>
    )
}

export default SearchPage;
