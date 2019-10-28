import React, { useState } from 'react'

import { connect } from 'react-redux';

import { addSmurf } from '../actions/smurfActions';

function SmurfForm(props) {

    const [addNewSmurf, setAddNewSmurf] = useState({
        // name: '',
        // age: '',
        // height: ''
    })

    // const testSmurf = {
    //     name: 'Test Name',
    //     age: '43',
    //     height: '5ft',
    // } 

    const handleSubmit = (e) => {
        console.log('addNewSmurf', addNewSmurf)
        e.preventDefault();
        props.addSmurf(addNewSmurf)
        // setAddNewSmurf({
        //     name: '',
        //     age: '',
        //     height: '',
        // })  
    }

    const handleChange = (e) => {
        setAddNewSmurf({
            ...addNewSmurf,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={addNewSmurf.name} onChange={handleChange} placeholder="Name" />
            <br />
            <input type="text" name="age" value={addNewSmurf.age} onChange={handleChange} placeholder="Age" />
            <br />
            <input type="text" name="height" value={addNewSmurf.height} onChange={handleChange} placeholder="Height" />
            <br />
            {/* <input type="text" value={addNewSmurf.id} onChange={handleChange} placeholder="id" /> */}
            <br />
            <button type="submit">Add New Smurf</button>
        </form>
    )
}

// const mapDispatchToProps = {
//     addSmurf
//   }
  
  function mapStateToProps(state) {
    return {
      smurf: state.smurf,
      isLoading: state.isLoading, 
      error: state.error
    }
  }

export default connect(mapStateToProps, {addSmurf})(SmurfForm)