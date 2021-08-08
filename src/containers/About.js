import React from 'react'
import '../styles/About.css'
import {FaGithubSquare,FaLinkedin} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'

const About = () => {
    return <div class='home_page'> 
            <div class='intro'>
                <img src={process.env.PUBLIC_URL+'/images/Me.jpg'} alt= "" class='profilepic'></img>
                {/* <h1> -السلام عليكم میرا نام سلیمان ہے (Hi I am Suleman!)</h1> */}
                <h1 id="name_title">Suleman Thanaina</h1>
            </div>
            <div class="afterintro">
                <div class="aboutme">
                    <h1 id="after_intro_head">About me</h1>
                    <p>I am Suleman a junior at MIT majoring in Electrical Engineering and Computer Science. As an engineer I am 
                    passionate about using technology for the betterment and benefit of society. I am interested and have experience 
                    in software and firmware development. Have a look at the various projects and my resume for more. </p>
                    <p>Outside of College I am really interested in hiking and sports. This summer I just began hiking peaks in 
                    the White Mountains in New Hampshire and aim to hike the NH48 (48 peaks above 4000ft). Remember to take a peek 
                    (pun intended!) at the beautiful views from the peaks. When not in class, lab, 
                    doing homework in the library, learning a new software technology at home or hiking I can be found in gym working out or playing basketball.</p>
                </div>
                <div class="skills_area">
                    <h1 id="after_intro_head">Skills</h1>

                    <div class='single_skill'>
                    <div>Python</div>
                    <div class="container">
                    <div class="skills python"> 80%</div>
                    </div>
                    </div>

                    <div>C, C++</div>
                    <div class="container">
                    <div class="skills cpp">60%</div>
                    </div>

                    <div>Assembly</div>
                    <div class="container">
                    <div class="skills asm">70%</div>
                    </div>

                    <div>Web Development with React (HTMl, CSS, Javascript)</div>
                    <div class="container">
                    <div class="skills react">40%</div>
                    </div>

                    <div>iOS App Development with Swift</div>
                    <div class="container">
                    <div class="skills iOS">30%</div>
                    </div>

                    <div>Microcontrollers: ESP32, Cypress PSoC, Nordic nRF, Intel 8051</div>
                    <div class="container">
                    <div class="skills MCU">70%</div>
                    </div>

                    <div id='moreskills'>Other Skills/ Technologies</div>
                    <div> MATLAB, LaTeX, SQL, Git, bash, RISC-V</div>
                    


                </div>
            </div>
            <div class="contact">
                <h1 id="after_intro_head">Contact me!</h1>
                <FaGithubSquare size={40}/>
                <FaLinkedin size={40}/>
                <IoMdMail size={40}/>
            </div>
        
    </div>
    


}


export default About;