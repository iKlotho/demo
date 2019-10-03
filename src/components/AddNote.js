import React,{useState,useEffect,useContext} from 'react';
import {PersonContext} from '../contexts/PersonContext';
import { NoteContext } from '../contexts/NoteContext';
import M from "materialize-css";


const AddNote = props => {
    const [date] = useState(new Date(Date.now()));
    const [forms,setForms] = useState({title:'',textarea:''});
    const [person,setPerson] = useState(null);
    const {persons} = useContext(PersonContext);
    const {notes,setNotes} = useContext(NoteContext);
    useEffect(()=>{
        const {to} = props.match.params;
        const selectedPerson = persons.filter(person=>person.phone===to);
        if(selectedPerson.length>0)
            setPerson(...selectedPerson);
        M.updateTextFields();
    },[persons,props.match.params]);
    const handleChange = (e)=>{
        setForms({...forms,[e.target.id]:e.target.value});
    };
    const handleSubmit = ()=>{
        const newNote = {title:forms.title,coment:forms.textarea,id:person.phone,date};
        setNotes([...notes,newNote]);
        props.history.push(`/person/${person.phone}`)
    }
    const noteDate = date.getDate()+" / "+(date.getMonth()+1)+" / "+date.getFullYear();
    if(person)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col s12'>
                    <p><b>Kime : </b> {person.name.first} {person.name.last}</p>
                </div>
                <div className='col s12'>
                    <p><b>Not Tarihi : </b> {noteDate} </p>
                </div>
                <form className="white col s12 ">
                    <div className="input-field col s12 ">
                        <label htmlFor="text"><b>Konu : </b> </label>
                        <input type="text" id="title" className="validate" onChange={handleChange}/>
                    </div>
                    <div className="input-field col s12 note__area ">
                        <textarea id="textarea" className="materialize-textarea " onChange={handleChange}></textarea>
                        <label htmlFor="textarea">Not Girin : </label>                   
                    </div>
                </form>
                <div className='col s12'>
                    <button className='btn yellow center-align note__add' 
                    onClick={handleSubmit}
                    >NOT EKLE</button>
                </div>
            </div>
            
        </div>
        
    )
    else return null
}

export default AddNote;
