import React from 'react';
import {Link} from 'react-router-dom';

const Notes = (props) => {
    const {notes} = props;
    return (
        <div className='notes__list'>
            <ul className="collection">
               {notes.map(note=>(
                     <li key={note.id+note.date} className="collection-item avatar">
                        <p className='flow-text left'> <b>Başlık : {note.title }</b></p><br/>
                        <p className='flow-text left truncate'> {note.coment} </p><br/>
                        <Link to={`/noteDetail/${note.id}`} className="secondary-content"><i className="material-icons">keyboard_arrow_right</i></Link>
                     </li>
                 ))}      
            </ul>
        </div>    
    )
}

export default Notes;
