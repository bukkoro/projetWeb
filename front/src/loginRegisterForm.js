import React, { useEffect, useState } from "react";
import axios from "axios";

async function LoginUser(userInfo) {
    return await axios.post("/api/login", userInfo).then((res) => {
        return res.data.accessToken;
    });
}

async function registerUser(userInfo) {
    return await axios.post("http://localhost:8080/back/add/user", userInfo).then((res) => {
        return res.data.accessToken;
    });
} 

export default function LoginRegisterForm({ setToken, setIsregister }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [name, setName] = useState("");
    const [family_name, setFamilyname] = useState("");
    

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        registerUser({email,password,name,family_name})
    };
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        registerUser({email,password})
    };
    

    return (
        <section className="forms-section">
            <h1 className="section-title">InstISEN</h1>
            <div className="forms">
                <div className="form-wrapper is-active">
                    <button type="button" className="switcher switcher-login">
                        Login
                        <span className="underline"></span>
                    </button>
                    <form className="form form-login" onSubmit={handleLoginSubmit}>
                        <fieldset>
                            <legend>
                                Please, enter your email and password for login.
                            </legend>
                            <div className="input-block">
                                <label htmlFor="login-email">E-mail</label>
                                <input
                                    id="login-email"
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-block">
                                <label htmlFor="login-password">Password</label>
                                <input
                                    id="login-password"
                                    type="password"
                                    name="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </fieldset>
                        <button type="submit" className="btn-login">
                            Login
                        </button>
                    </form>
                </div>
                <div className="form-wrapper">
                    <button type="button" className="switcher switcher-signup">
                        Sign Up
                        <span className="underline"></span>
                    </button>
                    <form className="form form-signup" onSubmit={handleRegisterSubmit}>
                        <fieldset>
                            <legend>
                                Please, enter your email, password and password
                                confirmation for sign up.
                            </legend>
                            <div className="input-block">
                                <label htmlFor="signup-name">firstname</label>
                                <input
                                    id="signup-password-confirmation"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                 <label htmlFor="signup-name">surname</label>
                                <input
                                    id="signup-password-confirmation"
                                    type="text"
                                    onChange={(e) => setFamilyname(e.target.value)}
                                    required
                                />
                                <label htmlFor="signup-email">E-mail</label>
                                <input
                                    id="signup-email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-block">
                                <label htmlFor="signup-password">
                                    Password
                                </label>
                                <input
                                    id="signup-password"
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                                
                            </div>
                        </fieldset>
                        <button type="submit" className="btn-signup">
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}