import React from 'react'
import {Link} from 'react-router-dom';

const Persons = (props) => {

        const {persons,blue} = props;
        let blueChar = 0;
        if (blue!==undefined)
            blueChar=blue;        

    return (

           <ul className="collection">
               {persons.map(person=>(
                     <li key={person.cell} className="collection-item avatar">
                        <img src={person.picture.thumbnail} alt="" className="circle responsive-img"/>
                        <p className='flow-text left'> <b>{person.name.first} {person.name.last}</b></p><br/>
                        <p className='flow-text left' style={{fontSize:"13px"}}> Numara:<span style={{color:'blue'}}>{person.phone.substr(0,blueChar)}</span>{person.phone.substr(blueChar)}</p><br/>
                        <p className='flow-text left' style={{fontSize:"13px"}}> Email : {person.email} </p><br/>
                        <p className='flow-text left' style={{fontSize:"13px"}}> Yaşı : {person.registered.age}</p><br/>
                        <Link to={`person/${person.phone}`} className="secondary-content"><i className="material-icons">keyboard_arrow_right</i></Link>
                     </li>
               ))}      
      
            </ul>

           )
}

export default Persons;
