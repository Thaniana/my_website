import React from 'react'
import '../styles/Classes.css'

const Classes = () => {
    return <div class='center'>
        <h1>Hi I am Suleman!</h1>
        <p>I am an avid engineer and software developer!</p>
        <img src={process.env.PUBLIC_URL+'/images/Suleman.jpg'} alt= "" class='profile'></img>
    </div>
}


export default Classes;