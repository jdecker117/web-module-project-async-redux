import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { getZip } from './actions/actions'
import './App.css';

function App(props) {
const { zipCode, error } = props;
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
      <div className='App-header'>
        <h1>Zip Code Identifier</h1>
        <h3>Enter a Valid Zip Code:</h3>
        <form onSubmit={handleSubmit}>
        <input placeholder='32708' onChange={handleChange}></input>
        <button>Submit</button>
        </form>
        <div id='zip-container'>
        {error? <p>Invalid Zip Code</p> : <p>{zipCode['place name']}, {zipCode.state}</p>}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    zipCode: state.zipCode,
    error: state.error
  }
}

export default connect(mapStateToProps, { getZip } )(App);