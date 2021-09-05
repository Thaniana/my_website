import React from 'react'

import '../styles/GenericExp.css'


const GenericExp = ({name,location,Semester,pt1,pt2,pt3}) => {

    return <div class="GenericExp">
        <div class="name_semester">
        <div class="className">{name}</div>
        <div class="semester">{Semester}</div>
        </div>
        <div class="location">{location}</div>
        <ul>
            <li>{pt1}</li>
            <li>{pt2}</li>
            <li>{pt3}</li>
        </ul>
    </div>
}

export default GenericExp;