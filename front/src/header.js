import React, { useState, useEffect }from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './header.css'
//import Profile from "./Profile";
//import Picture from "./Picture";
//import Favorites from "./Favorites";
//import Home from "./home";
//import Logout from "./Logout";
import UploadImageForm from "./uploadImageForm";
import MainPage from "./mainPage"
import axios from "axios";
import LoginRegisterForm from './loginRegisterForm';

export default function Header(AuthToken) {
    const [tagList,SetTagList] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = async e => {
        const data = new FormData();
        data.append("tag",tagList)
        const tmp = axios.post('/api/search_by_tag', data)
        tmp.then( resp =>{
            console.log(resp.data)
        })
    console.log(e.target)
    }


    return (
        <header>
        <nav id = 'menu'>
            <BrowserRouter>
                <li>
                    <div
                        className="title-bar"
                        data-responsive-toggle="example-animated-menu"
                        data-hide-for="medium">
                    </div>
                        <div className="top-bar-left">
                            <ul className="dropdown menu" data-dropdown-menu>
                                <li className="menu-text"></li>
                                <li>
                                    <Link to="/">DeliverHome</Link>
                                </li>
                                <li>
                                    <Link to="/picture">Picture</Link>
                                </li>
                                <li>
                                    <Link to="/favorites">Favorites</Link>
                                </li>
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="top-bar-middle">
                            <ul className="dropdown menu" data-dropdown-menu>
                            <form onSubmit={handleSubmit} >

                                        <input
                                            type="text"
                                            placeholder="Search"
                                            name="tag"
                                        />
                                        <input type="submit" value="search" className="button" />
                                </form>
                               
                            </ul>
                        </div>
                        <div className="top-bar-right"></div>
                        
                           
                        
                        <div className="main-route-place">
                            <Route exact path="/" component={() => <MainPage/>} />
                            <Route exact path="/picture" component={() => <UploadImageForm setEmail={setEmail}/>} />
                            
                        </div>
                </li>
            </BrowserRouter>
        </nav>
    </header>
);
}

//<Route exact path="/logout" component={Logout}/>
//<Route exact path="/profile" component={() => <Profile AuthToken={AuthToken.token} />} />
//<Route exact path="/favorites" component={Favorites} />