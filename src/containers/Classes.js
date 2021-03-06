import React from 'react'
import '../styles/Classes.css'

import GenericClass from '../components/GenericClass'

const Classes = () => {
    return <div class="allclasses">
    <div class="center">
        <h1>Education</h1>
    </div>
    <div class="Uni">
        <div class= "Uni1">
            <div class="Uniname">Massachusetts Institute of Technology</div>
            <div class="date">May 2023</div>
        </div>
        <div class="Uni2">
            <div class="course">Bachelor of Science in Electrical Engineering and Computer Science</div>
            <div class="GPA">GPA:5.0</div>
        </div>
    </div>
    <h2>Relevant Coursework</h2>
    <GenericClass name="6.111 - Digital System Laborotary" Semester="Fall 2021"/>
    <GenericClass name="6.036 - Machine Learning" Semester="Fall 2021"/>
    <GenericClass name="6.115 - Microcomputer Project Lab" Semester="Spring 2021"/>
    {/* // pt1= "Class focused on the basics of microcontrollers" pt2="There were 5
    // labs focused on building systems like a calculator, self driving car and then finally there was a final project" pt3="Technologies used and taught were
    // the C language, assembly, inner runnings of Microprocessors and "/> */}
    <GenericClass name="6.003 - Signal Processing" Semester="Spring 2021" />
    <GenericClass name="6.046 - Design and Analysis of Algorithms" Semester="Spring 2021"/>
    <GenericClass name="6.002 - Circuits and Electronics" Semester="Fall 2020"/>
    <GenericClass name="6.004 - Computation Structures" Semester="Fall 2020"/>
    <GenericClass name="6.006 - Introduction to Algorithms" Semester="Fall 2020"/>
    <GenericClass name="6.009 - Fundamentals of Programming" Semester="Fall 2020"/>
    <GenericClass name="6.08 - Intro to EECS via Interconnected Embedded Systems" Semester="Spring 2020" />
    <GenericClass name="2.00B - Toy Product Design" Semester="Spring 2020"/>
    <GenericClass name="6.0001 - Intro to CS Prog in Python" Semester="Fall 2019"/>
    <GenericClass name="6.0002 - Intro: Comp Thinking & Data Science" Semester="Fall 2019"/>
    <GenericClass name="6.148 - Web Lab: Prog and Competition" Semester="IAP 2021"/>
    <GenericClass name="6.176 - Pokerbots Competition" Semester="IAP 2021"/>
    <GenericClass name="16.632 - Intro to Autonomous Machines " Semester="Fall 2020"/>


    <h2>Other Coursework</h2>
    <ul>
        <li>8.01 - Physics 1</li>
        <li>8.02 - Physics 2</li>
        <li>18.01 - Calculus 1</li>
        <li>18.02 - Calculus 2</li>
        <li>7.012 - Biology</li>
        <li>5.111 - Chemistry</li>
        <li>5.12 - Organic Chemistry 1</li>
        <li>10.10 - Introduction to CHemical Engineering</li>
        <li>14.01 - Microeconomics</li>
        <li>14.02 - Macroeconomics</li>
        <li>17.41 - International Relations</li>
        <li>Elementary Arabic (taken at Harvard Divinity Schhool)</li>
    </ul>
    </div>
}


export default Classes;