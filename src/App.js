import React,{useContext,useEffect} from 'react';
import axios from  "./AxiosInstance";
import './App.css';
import './css/search.css'
import './css/personDetail.css'
import './css/notes.css'
import './css/dialpad.css'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PersonList from './components/PersonList';
import Dialpad from './components/Dialpad';
import SearchPage from './components/SearchPage';
import PersonDetail from './components/PeronDetail';
import AddNote from './components/AddNote';
import {PersonContext} from './contexts/PersonContext';


function App() {
  const {setPerson} = useContext(PersonContext);
  useEffect( ()=>{
      axios.get('/?results=10&nat=tr').then(persons=>setPerson(persons.data.results));
  },[setPerson]);
  return (
    <BrowserRouter> 
      <div className="App">
        <NavBar/>
        <SearchBar />
        <Switch>
          <Route exact path='/' component={PersonList}/>
          <Route exact path='/dialpad' component={Dialpad}/>
          <Route exact path='/searchPage' component={SearchPage}/>
          <Route exact path='/person/:id' component={PersonDetail}/>
          <Route exact path='/noteAdd/:to' component={AddNote}/>
          
        </Switch>
      </div>
    </BrowserRouter> 
  );
}

export default App;
