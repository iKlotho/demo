import React,{useContext,useEffect} from 'react'
import {Link} from "react-router-dom"
import {PersonContext} from '../contexts/PersonContext';
import Persons from './Persons';

const PersonList = () => {
    const {persons} = useContext(PersonContext);
    useEffect( ()=>{
        const navbar = document.getElementsByClassName('navbar-fixed');
        navbar[0].style.height = '8vh';
    },[]);
    return (
        <div> 
            <div className='fixed-action-btn'>
                <Link to='/dialpad' className='btn-floating btn-large waves-effect waves-light red dialpad__btn'><i className='material-icons'>dialpad</i></Link>
            </div>

            <Persons persons={persons}/>

        </div>
    )
}

export default PersonList;
