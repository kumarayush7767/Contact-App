import React from 'react'
import { Link } from 'react-router-dom'

const AddContact = () => {
    return (
        <div className="container">
            <h1 className="display-3 my-5 text-center">Add Student</h1>
           <div className="row">
                
              <div className="col-md-6 shadow mx-auto pd-5">
                  <form>
                      <div className="form-group">
                        <input type="text" placeholder="Name" className="form-control"/>
                      </div>
                      <div className="form-group">
                        <input type="email" placeholder="Email" className="form-control"/>
                      </div>
                      <div className="form-group">
                        <input type="number" placeholder="Phone number" className="form-control"/>
                      </div>
                      <div className="form-group">
                        <input type="submit" value="Add Student" className="btn btn-block btn-dark" />
                      </div>
                  </form>
             </div>
           </div> 
        </div>
    )
}

export default AddContact
