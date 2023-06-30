import React from 'react';
import ResumeTemp from '../../assets/images/grinning_wolf.jpg';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
        <h2>Skills</h2>
        <ul className='skills'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Express</li>
            <li>NodeJS</li>
            <li>RESTful APIs</li>
            <li>Mongoose</li>
            <li>ReactJS</li>
        </ul>
      <p>
        I am currently finishing up the Part-time Full-Stack Coding Bootcamp with Columbia University. If you are interested, please feel free to download
        my resume below!
      </p>
      <div className='resume'>
        <a href={ResumeTemp} download>
            Download Here </a> 
      </div>
    </div>
  );
}