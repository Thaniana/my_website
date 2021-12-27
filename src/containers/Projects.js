import React from 'react';

import Genericproject from '../components/Genericproject'

import '../styles/Projects.css'

const Projects = () => {
    return <div class='center'>
        <h1>Projects</h1>
        <div class='AllProjects'>
        <Genericproject name='Create Intervals' link='https://createintervals.herokuapp.com/' photo='intervals.png' describe='This 
        project was created for the web lab class and competition alongside two other students. The goal of the project is 
        to help people create schedules. The website is programmed using React. '></Genericproject>
        <Genericproject name='PSoC Game Console (6.115)' link='https://www.youtube.com/watch?v=-BzoDejxh7I' photo='PSOCGames.png' describe="A game console 
        programmed on the PSoC5 microprocessor in C, alongside preparing the internal and external circuitry for the system. The games that can currently be played are 
        Tic Tac Toe, Simon and an MP4 player."></Genericproject>
        <Genericproject name='Fun Simon' link='https://translucent-opaque-twilight.glitch.me/' photo='Simon.png' describe="Built the Simon game with a small change. Rather 
        than colors I added animals and their sounds. The website is made using Javascript, HTML and CSS."></Genericproject>
        <Genericproject name='SnESPChat (6.08)' photo='Snespchat.png' describe="Made as part of the final project of the class 6.08. The deivce is a phone like device which 
        uses an ESP32 to communicate with the sensors on board like the camera and also communicate with an online server via wifi and HTTP methods."></Genericproject>
        <Genericproject name='Shark Attack' photo='sharkattack.jpg' describe="A fun game made for children. The goal of the game is to get the board across
        a rotating board with sharks on it. The project was made as part of the class 2.00b which was held remotely. "></Genericproject>
        <Genericproject name='FPGA Neural Network (6.111)' photo='FPGA.jpeg' describe="Computer vision system that can perform object classification on handwritten numbers.
        We decided to do this project because Neural Networks on can run much faster and conusme much lower power on an FPGA."></Genericproject>
        </div>
    </div>
}


export default Projects;