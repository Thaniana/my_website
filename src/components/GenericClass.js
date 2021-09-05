import React from 'react'

import '../styles/GenericClass.css'

const GenericClass = ({name,Semester}) => {

    return <div class="GenericClass">
        <div class="name_semester">
        <div class="className">{name}</div>
        <div class="semester">{Semester}</div>
        </div>
    </div>
}

export default GenericClass;