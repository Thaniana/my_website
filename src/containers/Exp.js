import React from 'react';

import '../styles/Exp.css'

import GenericExp from '../components/GenericExp';


const Exp = () => {
    return <div>
        <h1 class="center">Experiences</h1>
        <ul class="ExpTypes">
            <li >
                <h2>Work</h2>
                <GenericExp name="Summer Reseach Assistant" location="MIT Energy Efficient Circuits and Systems Lab" Semester="June-August 2021" pt1="Developed and analysed power consumption of a Bluetooth Low Energy(BLE) embedded system.
                " pt2="Programmed the Processor OS and BLE protocol in C." pt3="Created an iOS app to communicate with the BLE embedded system."></GenericExp>
                <GenericExp name="MIT Energy Initiative Research Student" location="PhotoVoltaics Lab, MIT" Semester="June-August 2021" pt1="Building a system to develop and analyse numerous semi conductor compositions to find the ideal solar cell."
                pt2="Developing the hardware for the device in C whilst doing the analysis of the droplet compositions in Python." pt3="Created a project poster to be presented."></GenericExp>
                <GenericExp name="Embedded Systems and Software Engineer" location="Mesh Incubator - Mass General Brighm" Semester="June-August 2021" pt1="Designing a system capable of using sensor readings to facilitate the correct placement of a Nasogastric Tube."
                pt2="The system and its algorithms are in C and Python." pt3="And signal processing is done to interpret the sensor readings"></GenericExp>
                <GenericExp name="Lab Assistant Interconnected Embedded Systems" location="EECS Department MIT" Semester="Feb-May 2021" pt1="Helped students 1 on 1 and in small groups during Lab and Office Hours with their labs."
                pt2="Debugged hardware connections and software in C, Python, SQL, git and HTTP." pt3="Also helped students with their final projects."></GenericExp>
            </li>
            <li>
                <h2>Leadership</h2>
                <GenericExp name="Sports Editor" location="The Tech Campus Newspaper" Semester="Sep 2019 - Present" pt1="Cover weekly MIT sports in the newspaper" pt2 = "Manage the department as the editor"
                pt3="Lead recruitment efforts for the team and the newspaper as a whole"></GenericExp>
            </li>
            <li>
                <h2>Fun and Educational</h2>
                <ul>
                    <li>International Chemistry Olympiad - Bronze Medal in 2019</li>
                    <li>MIT Cricket Team</li>
                    <li>GM Blacktop Build</li>
                    <li>Pokerbots</li>
                </ul>
            </li>
        </ul>
    </div>
}


export default Exp;