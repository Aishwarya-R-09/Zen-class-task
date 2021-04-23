import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        {/* <a class="navbar-brand" href="#">Navbar</a> */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="me-auto ">
                                
                            </div>
                            <div class="mr-3 mb-2 ml-auto" >
                                <button class="btn btn-link" ><b> <Link className="text-white" to="/login">Login</Link> </b></button>
                                <span className="text-white">| </span>
                                < button class="btn btn-link" ><b><Link className="text-white" to="/register">Register</Link></b></button>
                            </div>
                        </div>

                    </div>
            </nav>
            
        )
    }
}