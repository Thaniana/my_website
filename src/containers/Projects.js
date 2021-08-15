import React from 'react';

import Genericproject from '../components/Genericproject'

import '../styles/Projects.css'

const Projects = () => {
    return <div class='center'>
        <h1>Projects</h1>
        <div class='AllProjects'>
        <Genericproject name='Create Intervals' link='https://createintervals.herokuapp.com/' photo='intervals.png' describe='This 
        project was created for the web lab class and competition alongside two other students. The goal of the project is 
        to help people create schedules.'></Genericproject>
        <Genericproject name='PSoC Game Console' link='https://www.youtube.com/watch?v=-BzoDejxh7I' photo='PSOCGames.png'></Genericproject>
        <Genericproject name='Fun Simon' link='https://translucent-opaque-twilight.glitch.me/' photo='Simon.png'></Genericproject>
        <Genericproject name='SnESPChat' photo='Snespchat.png'></Genericproject>
        <Genericproject name='Shark Attack' photo='sharkattack.jpg'></Genericproject>
        </div>
    </div>
}


export default Projects;