import React,{useEffect,useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import {PersonContext} from '../contexts/PersonContext';
import { NoteContext } from '../contexts/NoteContext';
import Notes from './Notes';

const PeronDetail = (props) => {
    const [person,setPerson] = useState(null);
    const [not,setNot] = useState([]);
    const {persons} = useContext(PersonContext)
    const {notes} = useContext(NoteContext);
    useEffect(()=>{
        const {id} = props.match.params;
        const selectedPerson = persons.filter(person=>person.phone===id);
        if(selectedPerson.length>0)
            setPerson(...selectedPerson);
        
        const navbar = document.getElementsByClassName('navbar-fixed');
        navbar[0].style.height = '0';
        const personNote = notes.filter(note=>note.id === selectedPerson[0].phone) ;
        setNot(personNote);
        },[notes,persons,props.match.params]);
    if(person !== null)
    return (
        <div className='personDetail'>
            <div className='person'>
                <i className='material-icons back__list'>keyboard_arrow_left</i>
                <img className='person__picture' alt='' src={person.picture.large}/>
                <p className='person__name'>{person.name.first} {person.name.last}</p>
            </div>
            <div className='row menu'>
                <div className='col s4'>
                    <div className='col s12 '><Link to={`/noteAdd/${person.phone}`} className='black-text'><p>Not Ekle</p></Link> </div>
                </div>
                <div className='col s4'>
                    <div className='col s12 '><p>Arama Geçmişi</p> </div>
                </div>
                <div className='col s4'>
                    <div className='col s12 '><p>Favorilerime Ekle</p> </div>
                </div>
            </div>
            <div className='info'>
                <Notes notes={not} />
            </div>
        </div>
    )
    else
    return(null)
}

export default PeronDetail;
