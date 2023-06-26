import React from 'react';

import '../styles/Exp.css'

import GenericExp from '../components/GenericExp';


const Exp = () => {
    return <div>
        <h1 class="center">Experiences</h1>
        <ul class="ExpTypes">
            <li >
                <h2>Work</h2>
                <GenericExp name="Firmware Engineering Intern" location="Gaia AI" Semester="June 2023 - Present" pt1="Deploying robotics and Machine Learning software stack on x86 and ARM processors.
                " pt2="Establishing a more reliable method to deploy the stack on the linux machines using Ansible and Docker." pt3="Gaining familiarity in the entire product development pipeline as part of the small start up"></GenericExp>
                <GenericExp name="Design Verification Engineering Intern" location="Starlink SpaceX" Semester="June-August 2022" pt1="Took verification responsibility of silicon chips on various parts of the Starlink cluster in a fast paced environment and large code base of around 500,000+ in C, systemVerilog and others.
                " pt2="Verified memory systems, multiple data loops and also built a Performance Measurement tool in C." pt3="Worked with C, Linux, Git, Makefiles, Waveforms, Parallelism on Bare Metal and Basic Computer Architecture."></GenericExp>
                <GenericExp name="Advanced Undergraduate Research (SuperUROP) + Summer Researcher" location="MIT Energy Efficient Circuits and Systems Lab" Semester="June 2021 - June 2022" pt1="Developed embedded software for a low power electronic Bluetooth Low Energy Communication device, in C and 
                " pt2="Made the communication secure to prevent a third party from listening into the communication." pt3="Created an iOS app to communicate with the BLE embedded system."></GenericExp>
                <GenericExp name="MIT Energy Initiative Research Student" location="PhotoVoltaics Lab, MIT" Semester="June-August 2021" pt1="Building a system to develop and analyse numerous semi conductor compositions to find the ideal solar cell."
                pt2="Developing the hardware for the device in C whilst doing the analysis of the droplet compositions in Python." pt3="Created a project poster to be presented."></GenericExp>
                <GenericExp name="Embedded Systems and Software Engineer" location="Mesh Incubator - Mass General Brigham" Semester="June-August 2021" pt1="Designing a system capable of using sensor readings to facilitate the correct placement of a Nasogastric Tube."
                pt2="The system and its algorithms are in C and Python." pt3="And signal processing is done to interpret the sensor readings"></GenericExp>
                <GenericExp name="Lab Assistant Interconnected Embedded Systems" location="EECS Department MIT" Semester="Feb-May 2021" pt1="Helped students 1 on 1 and in small groups during Lab and Office Hours with their labs."
                pt2="Debugged hardware connections and software in C, Python, SQL, git and HTTP." pt3="Also helped students with their final projects."></GenericExp>
            </li>
            <li>
                <h2>Leadership</h2>
                <GenericExp name="President" location="MIT Muslim Students Association" Semester="January 2022 - February 2023" pt1="Lead 100+ Muslims students." pt2 = "Communicated with University Administration advocating for Muslim needs"
                pt3="Organised a number of large events like dinners for Ramadan and Eid"></GenericExp>
                <GenericExp name="Sports Editor" location="The Tech Campus Newspaper" Semester="Sep 2019 - December 2021" pt1="Covered weekly MIT sports in the newspaper" pt2 = "Managed the department as the editor"
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