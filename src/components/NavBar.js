import React from 'react'
import '../styles/NavBar.css'


import {NavLink} from 'react-router-dom'

class NavigationBar extends React.Component {
    render(){

        return (
            <div>
               <ul>
                   <li id='home'><NavLink to="/About">Suleman Thaniana</NavLink></li>
                   <li><NavLink to="/resume">Resume</NavLink></li>
                   <li><NavLink to="/projects">Projects</NavLink></li>
                   <li><NavLink to="/Hiking">Hiking</NavLink></li>
               </ul>
            </div>
        )
    }
}



export default NavigationBar;