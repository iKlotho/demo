import React,{useContext,useState,useEffect} from 'react'
import {PersonContext} from '../contexts/PersonContext';
import Persons from './Persons';



const Dialpad = (props) => {
    const {persons} = useContext(PersonContext)
    const [inputs,setInput] = useState([]);
    const [dialpadOpen,setDialpad] = useState(true);

    const handleInput = (e)=>{
        console.log("wqeqw")
        setInput([...inputs,e.target.value])
    }
    const handleDelete = ()=>{
        setInput(inputs.filter((input,index)=>index!==inputs.length-1))
    }

    useEffect(()=>{
        const navbar = document.getElementsByClassName('navbar-fixed');
        navbar[0].style.height = '0';
    },[]);
 
    const list = inputs.length===0 ? [] :persons.filter(person=>{
        let phone = person.phone.split('').filter(char=>!isNaN(char));
        console.log("phone", phone)
        return inputs.filter((input,index)=>input === phone[index]).length===inputs.length;
    }); 

    const handleDialpad = (value)=>{
        
        if(!value&& list.length===0)
            props.history.push('/');

        setDialpad(value);
        
    }

    let blueChar = 0;
    if(inputs.length<=3&&inputs.length!==0)
        blueChar = inputs.length+1;
    else if(inputs.length<=6)
        blueChar = inputs.length+3;
    else 
        blueChar = inputs.length+4; 

     
    return (
        <div className='dialpad'>
            <div className='fixed-action-btn'>
                <a href='/#' onClick={handleDialpad.bind(this,true)} style={dialpadOpen?{display:'none'}:{display:'flex'}} className='btn-floating btn-large waves-effect waves-light red dialpad__btn'>
                    <i className='material-icons'>dialpad</i>
                </a>
            </div>
            <div className='dialpad__list' onScroll={handleDialpad.bind(this,false)} style={dialpadOpen?{height:'30vh'}:{height:'78vh'}}>
              
                <Persons persons={list} blue={blueChar}/>
               
            </div>
            <div className='dialpad__output' style={dialpadOpen?{height:'10vh'}:{height:'0'}} >
                <div className='row' >
                    <div className='col s6 offset-s3'>
                        <h5 className='center-align'>
                            {inputs.map((char,index)=>(
                                index === 3 ||index === 6 || index === 8 ?  (' '+char) : char
                            ))}
                        </h5>
                    </div>
                    <div className='col s2 offset-s1'>
                        <i onClick={handleDelete} className='material-icons' style={{fontSize:'36px'}}>backspace</i>
                    </div>
                </div>

            </div>
            <div className='dialpad__input' style={dialpadOpen?{height:'50vh'}:{height:'0'}}>
                <div className='row'>
                    <div className='col s8 offset-s2 input__line' >
                        <div className='col s4'><button onClick={handleInput} value='1' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>1</button></div>
                        <div className='col s4'><button onClick={handleInput} value='2' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>2</button></div>
                        <div className='col s4'><button onClick={handleInput} value='3' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>3</button></div>
                    </div>
                    <div className='col s8 offset-s2 input__line' >
                        <div className='col s4'><button onClick={handleInput} value='4' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>4</button></div>
                        <div className='col s4'><button onClick={handleInput} value='5' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>5</button></div>
                        <div className='col s4'><button onClick={handleInput} value='6' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>6</button></div>
                    </div>
                    <div className='col s8 offset-s2 input__line' >
                        <div className='col s4'><button onClick={handleInput} value='7' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>7</button></div>
                        <div className='col s4'><button onClick={handleInput} value='8' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>8</button></div>
                        <div className='col s4'><button onClick={handleInput} value='9' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>9</button></div>
                    </div>
                    <div className='col s8 offset-s2 input__line' >
                        <div className='col s4'><button onClick={handleInput} value='*' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>*</button></div>
                        <div className='col s4'><button onClick={handleInput} value='0' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>0</button></div>
                        <div className='col s4'><button onClick={handleInput} value='#' className='btn-floating  waves-effect waves-light transparent flow-text z-depth-3 black-text'>#</button></div>
                    </div>
                    <div className='col s8 offset-s2 input__line' >
                        <div className='col s4 offset-s4'>
                            <button   className='btn-floating  waves-effect waves-light  flow-text green z-depth-3 '>
                                  <i className='material-icons'>call</i>
                            </button>
                        </div>
                        <div className='col s4'>
                            <button onClick={handleDialpad.bind(this,false)}  className='btn-floating  waves-effect waves-light  flow-text grey z-depth-3 '>
                                  <i className='material-icons'>keyboard_arrow_down</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialpad;
