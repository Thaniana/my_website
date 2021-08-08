import React from 'react';

import Genericproject from '../components/Genericproject'

import '../styles/Projects.css'

const Projects = () => {
    return <div class='center'>
        <h1>Projects and Experience</h1>
        <div class='AllProjects'>
        <Genericproject name='Create Intervals' link='https://createintervals.herokuapp.com/' photo='bot.jpeg' describe='This 
        project was created for the web lab class and competition alongside two other students. The goal of the project is 
        to help people create schedules.'></Genericproject>
        <Genericproject name='Shark Attack' link='https://www.mit.edu' photo='bot.jpeg'></Genericproject>
        <Genericproject name='SnESPChat' link='https://www.mit.edu' photo='bot.jpeg'></Genericproject>
        <Genericproject name='BLE Development' link='https://www.mit.edu' photo='bot.jpeg'></Genericproject>
        <Genericproject name='PSoC Game Console' link='https://www.mit.edu' photo='bot.jpeg'></Genericproject>
        <Genericproject name='Fun Simon' link='https://www.mit.edu' photo='bot.jpeg'></Genericproject>
        </div>
    </div>
}


export default Projects;