import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';

export default class Register extends React.Component{
    name = React.createRef();
    email = React.createRef();
    password = React.createRef();
    confirm_pass = React.createRef();
    alert = React.createRef();
    loading = React.createRef();

    
    register = async ()=>{
        this.loading.current.classList.remove("load");
        this.alert.current.classList.remove("show");
        let data= { name: this.name.current.value , email : this.email.current.value, password: this.password.current.value };
        let res = await axios.post( "https://logindemo09.herokuapp.com/register" , data );
        this.loading.current.classList.add("load");
        this.alert.current.innerHTML = "<b>"+res.data.message+"</b>";
        if(res.data.message !== "User registered"){
            this.alert.current.classList.add("alert-danger");
        }
        else{
            this.alert.current.classList.remove("alert-danger");
        }
        this.alert.current.classList.add("show");

    }

    render(){
        return(
            <>
            <Navbar/>
            <div className="container">
                <div ref={this.loading} class="spinner-border load" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                <div ref={this.alert} class="alert alert-success alert-dismissible fade " role="alert">
                    
                </div>
                <div class="card p-3" style={{width: "25rem", border:"2px solid grey"}}>
                    <div class="card-body">
                        <h5 class="card-title" style={{textAlign : "center",color : "black"}}>Register</h5>
                        <form>
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Full Name</label>
                                <input ref={this.name} type="text" class="form-control" id="fullname" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input ref={this.email} type="text" class="form-control" id="email"/>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input ref={this.password} type="password" class="form-control" id="password"/>
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input ref={this.confirm_pass} type="password" class="form-control" id="confirmPassword" />
                            </div>
                            <button type="button" class="btn btn-success" onClick={this.register}>Register</button>
                        </form>
                    </div>
                </div> 
                
            </div>
            </>

        )
    }
}