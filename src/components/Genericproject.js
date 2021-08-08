import React from 'react'

import '../styles/Genericproject.css'

const Genericproject = ({name,link,photo,describe}) => {

    return <div class = 'generic'>
        <a href={link}><div class='projectlink '>{name}</div></a>
        <img class = 'projectimage' alt="nope" src={process.env.PUBLIC_URL+`/images/${photo}`}></img>
        <div>{describe}</div>
    </div>
}

export default Genericproject;