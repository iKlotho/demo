import React,{useContext,useEffect,useState} from 'react';
import {withRouter} from 'react-router-dom';
import {SearchContex} from '../contexts/SearchContext';

const SearchBar = (props) => {
    const {searchInput,setSearch} = useContext(SearchContex);
    const [focus, setFocus] = useState(false)
    const handleSearch = (e)=>{
        setSearch(e.target.value);
        
    }
    const handleFocus = (e)=>{
        setFocus(true);
        props.history.push('/searchPage');
        
    }
    const turnList = ()=>{
        setFocus(false);
        props.history.push('/');
    }
    useEffect(()=>{
        if(searchInput==='')
        props.history.push('/');
    },[props.history,searchInput]);

    const style={fontSize:'36px'};
    return (
        <div className='search search--bg'>
            {
                !focus? <i style={style} className='material-icons search__icon'>search</i>
                   :    <i style={style} onClick={turnList} className='material-icons search__icon '>keyboard_arrow_left</i>}
           
            
            <form className='search__form'>
                <input type='text' value={searchInput}onFocus={handleFocus} onChange={handleSearch} placeholder='Search' className='search__input search--bg'></input>
            </form>
        </div>
    )
}

export default withRouter(SearchBar);
