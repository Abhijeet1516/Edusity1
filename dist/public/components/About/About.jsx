import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' />
            <img src={play_icon} className='play-icon' onClick={()=>{setPlayState(true)}} />

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leader Today</h2>
            <p> Embark on a transformative educational journey with our universities comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge skills and experience needed to excel in the dynamic field of the education</p>
            <p>With a focus on innovation, hands on learning and personalised mentorship our programs prepare Aspiring educators to make a meaningful impact in a classroom schools and communities</p>
            <p>Whether you Aspire to become a teacher, administrator Councillor or education leader leader our divers range of programs offers the perfect pathway to achieve your goals and unlock your full potential shaping the future of education</p>
            

        </div>
       
      
    </div>
  )
}

export default About
