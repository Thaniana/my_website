import React from 'react'

import '../styles/Aboutitems.css'


const Aboutitems = ({name,photo}) => {

    return <div class = 'generic'>
        <div>{name}</div>
        <img class = 'aboutimage' alt="nope" src={process.env.PUBLIC_URL+`/images/${photo}`}></img>
    </div>
}

export default Aboutitems;