import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
           <div className="row d-flex flex-column">
                <Link to="/add" className="btn btn-outline-dark my-5 ml-auto">Add Contact</Link>
              <div className="col-md-6 mx-auto">
                <h1>Welcome to React Redux Contact App</h1>
              </div>
           </div> 
        </div>
    )
}

export default Home
