import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { getZip } from './actions/actions'

import './App.css';

function App(props) {
const { zipCode } = props;
const [zip, setZip ] = useState();

const handleChange = (evt) => {
  setZip(evt.target.value)
}

const handleSubmit = (evt) => {
  evt.preventDefault();
  props.getZip(zip)
  console.log(props.zipCode)
}

useEffect(() => {
  axios.get(`https://api.zippopotam.us/us/32712`)
  .then(res => {
    console.log(res.data)
  })
}, [])

  return (
    <div className="App">
      <h1>Zip Code Identifier</h1>
      <h3>Enter a Valid Zip Code:</h3>
      <form onSubmit={handleSubmit}>
      <input placeholder='32708' onChange={handleChange}></input>
      <button>Submit</button>
      </form>
      <div id='zip-container'>
        {<h4>{zipCode['place name']}, {zipCode.state}</h4>}
      </div>
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    zipCode: state.zipCode
  }
}

export default connect(mapStateToProps, { getZip } )(App);