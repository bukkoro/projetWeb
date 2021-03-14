import React, {  useState } from "react";
import axios from "axios";
import './loginRegisterForm.css'

async function LoginUser(userInfo) {
    return await axios.post("http://localhost:8080/back/login", userInfo).then((res) => {
        return res.data.state;
    });
}

async function registerUser(userInfo) {
    return await axios.post("http://localhost:8080/back/addUser", userInfo).then((res) => {
        return res.data.state;
    });
} 

export default function LoginRegisterForm({setIsregistered}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState("");
    const [family_name, setFamilyname] = useState("");
    

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        let result;
        result = registerUser({email,password,name,family_name})
        result.then((response)=>{
            if(response === true){
                setIsregistered(true);
            }
            else{
                console.log('ntm')
            }
        })
        
    };
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        let result;
        result = LoginUser({email,password})
        result.then((response)=>{
            if(response === true){
                setIsregistered(true);
            }
            else{
                alert("Identifiants incorrects")
            }
        })
        
        
            
    };


    return (
        <section className="forms-section">
            <div className="login-wrap">
                <div className="login-html">
                    <h1 className="section-title">DeliverHome</h1>
                    <input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>  
                <div className="login-form" >
                    <form className="sign-in-htm" onSubmit={handleLoginSubmit}>
                        <div className="group">
                            <label htmlFor="user" className="label">E-mail</label>
                            <input id="login_email" type="email" className="input"  onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input id="login-password" type="password" className="input" data-type="password" onChange={(e) => setPassword(e.target.value) } required />
                        </div>
                        <br></br>
                        <div className="group">
                            <button type="submit" className="button" value="btn-login">Login</button>
                        </div>
                        
                        
                    </form>
                    <form className="sign-up-htm"  onSubmit={handleRegisterSubmit}>
                        <div className="group">
                            <label htmlFor="user" className="label">Firstname</label>
                            <input id="user" type="text" className="input" onChange={(e) => setName(e.target.value)} required/>
                        </div>
                        <div className="group">
                            <label htmlFor="user" className="label">Surname</label>
                        <input id="user" type="text" className="input"  onChange={(e) => setFamilyname(e.target.value)}  required />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password" onChange={(e) =>setPassword(e.target.value)} required />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Email Address</label>
                            <input id="pass" type="text" className="input" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <br></br>
                        <div className="group">
                            <button type="submit" className="button" value="btn-signup"> Register </button>
                        </div>
                        
                    </form>
                </div>
            </div>
            </div>   
        </section>     
    );    
}
