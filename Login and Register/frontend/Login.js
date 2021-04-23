
import React from 'react';
import axios from 'axios';
import "./Common.css";
import Navbar from './Navbar';

export default class Login extends React.Component{
    
    email = React.createRef();
    password = React.createRef();
    alert = React.createRef();
    loading = React.createRef();
    

    login = async ()=>{
        this.loading.current.classList.remove("load");
        this.alert.current.classList.remove("show");
        let data = { email:this.email.current.value, password:this.password.current.value};
        
        let res = await axios.post( "https://logindemo09.herokuapp.com/login",data);
        this.loading.current.classList.add("load");
        this.alert.current.innerHTML = "<b>"+res.data.message+"</b>";
        if(res.data.message !== "Login Successful"){
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
                <div class="container">
                    <div ref={this.loading} class="spinner-border load" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div ref={this.alert} class="alert alert-success alert-dismissible fade" role="alert">
                    </div>
                    <div class="card p-3" style={{width: "25rem", border:"2px solid grey"}}>
                        <div class="card-body">
                            <h5 class="card-title" style={{textAlign : "center",color : "black"}}>Login</h5>
                            <form>
                                
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input ref={this.email} type="text" class="form-control" id="email" />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input ref={this.password} type="password" class="form-control" id="password" />
                                </div>
                                
                                <button type="button" onClick={this.login} class="btn btn-success">Login</button>
                            </form>
                        </div>
                    </div> 
                </div>
                        
            </>
        )
    }
}