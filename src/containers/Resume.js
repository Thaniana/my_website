import React from 'react'
import pdf from './myresume.pdf'

import '../styles/Resume.css'

const Resume = () => {
    // let link = 'https://drive.google.com/file/d/1nLn1hXLDi32gE6sg0w0Zcrq7RNQE1LSp/view?usp=sharing' 
    let id = '1nLn1hXLDi32gE6sg0w0Zcrq7RNQE1LSp'
    let src = `https://drive.google.com/file/d/${id}/preview`

    return <div class='center'>
        <h1>Resume</h1>
        <a href={pdf} download> <button class='button'>Download</button></a>
        <iframe title='resume' class='pdf' src={src} />
    </div>
}


export default Resume;