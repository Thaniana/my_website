import React from 'react'
import '../styles/About.css'
import {FaGithubSquare,FaLinkedin,FaPhoneAlt} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
let github = "https://github.com/Thaniana"
let LinkedIn = "https://www.linkedin.com/in/suleman-thaniana-444a941b5/"
let email = "mailto: msuleman@mit.edu"
let phone = "tel:+16179553175"

const About = () => {
    return <div class='home_page'> 
            <div class='intro'>
                <img src={process.env.PUBLIC_URL+'/images/Me.jpg'} alt= "" class='profilepic'></img>
                {/* <h1> -السلام عليكم میرا نام سلیمان ہے (Hi I am Suleman!)</h1> */}
                <h1 id="name_title">Suleman Thaniana</h1>
            </div>
            <div class="afterintro">
                <div class="aboutme">
                    <h1 id="after_intro_head">About me</h1>
                    <p>I am Suleman, a graduate of MIT with a Bachelors of Science in Electrical Engineering and Computer Science. As an engineer I am 
                    passionate about using technology for the betterment and benefit of society. I am interested in and have experience 
                    in Software, Firmware development and Machine Learning.  Have a look at my Resume and Experiences (Classes, Research and Projects). </p>
                    <p>Outside of College I am really interested in hiking and sports.  When not in class or lab or
                    learning a new software technology at home or hiking I can be found in gym working out or playing basketball.</p>
                </div>
                <div class="skills_area">
                    <h1 id="after_intro_head">Skills</h1>

                    <div class='single_skill'>
                    <div>Python</div>
                    <div class="container">
                    <div class="skills python">advanced</div>
                    </div>
                    </div>

                    <div>C</div>
                    <div class="container">
                    <div class="skills cpp">good</div>
                    </div>

                    <div>SystemVerilog</div>
                    <div class="container">
                    <div class="skills MCU">good</div>
                    </div>

                    <div id='moreskills'>Other Skills/ Technologies</div>
                    <div> pytorch, C++, LaTeX, SQL, Git, shell scripting, RISC-V, ansible, docker, Assembly, CILK</div>
                    


                </div>
            </div>
            <div class="contact">
                <h1 id="after_intro_head">Contact me!</h1>
                <a href={github}><FaGithubSquare size={40}/></a>
                <a href={LinkedIn}><FaLinkedin size={40}/></a>
                <a href={email}><IoMdMail size={40}/></a>
                <a href={phone}><FaPhoneAlt size={40}/></a>
            </div>
        
    </div>
    


}


export default About;