import React, { useEffect } from "react";
import "./App.css";

// Redux
import { connect } from 'react-redux';

// Actions
import { fetchSmurf, addSmurf } from '../actions/smurfActions';

import SmurfForm from '../components/SmurfForm';


function App (props) {
console.log('app props', props)
  useEffect(() => {
    props.fetchSmurf()
  }, [])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <SmurfForm />

        { props.isSmurfLoading ? ( <div className="spinner" /> ) : (
          <div  >{props.smurf.smurf.map(item => {
            return <div className="border" key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.age}</p>
              <p>{item.height}</p>
            </div>  
          })}</div>
        ) }
        
      </div>
    );
  }

const mapDispatchToProps = {
  fetchSmurf,
  addSmurf
}

function mapStateToProps(state) {
  return {
    smurf: state.smurf,
    isLoading: state.isLoading, 
    error: state.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
