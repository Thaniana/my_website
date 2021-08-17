import React from 'react'

import '../styles/GenericClass.css'

const GenericClass = ({name,Semester,pt1,pt2,pt3}) => {

    return <div class="GenericClass">
        <div class="name_semester">
        <div class="className">{name}</div>
        <div class="semester">{Semester}</div>
        </div>
        <ul>
            <li>{pt1}</li>
            <li>{pt2}</li>
            <li>{pt3}</li>
        </ul>
    </div>
}

export default GenericClass;