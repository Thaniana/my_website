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
            <div class="GPA">GPA:4.7</div>
        </div>
    </div>
    <h2>Relevant Coursework</h2>
    <GenericClass name="Advances in Computer Vision" Semester="Spring 2023"/>
    <GenericClass name="Hardware for Deep Learning" Semester="Spring 2023"/>
    <GenericClass name="Constructive Computer Architecture" Semester="Spring 2023"/>
    <GenericClass name="Software Performance Engineering" Semester="Fall 2022"/>
    <GenericClass name="Probability & Random Variables" Semester="Spring 2022"/>
    <GenericClass name="Matix Methods" Semester="Spring 2022"/>
    <GenericClass name="Seminar in Undergrad Research" Semester="Spring 2022"/>
    <GenericClass name="Computer Systems Engineering" Semester="Spring 2022"/>
    <GenericClass name="Digital System Laborotary" Semester="Fall 2021"/>
    <GenericClass name="Machine Learning" Semester="Fall 2021"/>
    <GenericClass name="Seminar in Undergrad Research" Semester="Fall 2021"/>
    <GenericClass name="Microcomputer Project Lab" Semester="Spring 2021"/>
    {/* // pt1= "Class focused on the basics of microcontrollers" pt2="There were 5
    // labs focused on building systems like a calculator, self driving car and then finally there was a final project" pt3="Technologies used and taught were
    // the C language, assembly, inner runnings of Microprocessors and "/> */}
    <GenericClass name="Signal Processing" Semester="Spring 2021" />
    <GenericClass name="Design and Analysis of Algorithms" Semester="Spring 2021"/>
    <GenericClass name="Circuits and Electronics" Semester="Fall 2020"/>
    <GenericClass name="Computation Structures" Semester="Fall 2020"/>
    <GenericClass name="Introduction to Algorithms" Semester="Fall 2020"/>
    <GenericClass name="Fundamentals of Programming" Semester="Fall 2020"/>
    <GenericClass name="Intro to EECS via Interconnected Embedded Systems" Semester="Spring 2020" />
    <GenericClass name="Toy Product Design" Semester="Spring 2020"/>
    <GenericClass name="Intro to CS Prog in Python" Semester="Fall 2019"/>
    <GenericClass name="Intro: Comp Thinking & Data Science" Semester="Fall 2019"/>
    <GenericClass name="Web Lab: Prog and Competition" Semester="IAP 2021"/>
    <GenericClass name="Pokerbots Competition" Semester="IAP 2021"/>
    <GenericClass name="Intro to Autonomous Machines " Semester="Fall 2020"/>


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
        <li>Arabic (taken at Harvard Divinity Schhool)</li>
        <li>Philosophy of Religon</li>
        <li>Tranlsations</li>
    </ul>
    </div>
}


export default Classes;