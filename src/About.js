import React from 'react'
import './css/style.css';
import './css/common.css';
import Navbar from './Components/Common/Navbar'
import Team from './Team'
// import Footer from './Components/Common/Footer'

function About()   {
    return (
        <div className="About">
            <Navbar />
            <div className="container">
                <br /><br /><br />
                <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;About Us</p>
                <br />
                <p className="p18">                
                IIT Hyderabad ACM student chapter is a group of enthusiastic students with the aim of uniting the computing fraternity of IIT Hyderabad under one platform to share ideas and cultivate the research and development interests among students. 
                <br />
                The chapter is divided into four Interest groups namely 
                <ul style={{listStyleType: 'none'}}>
                <li><a href="/acm-iith/#/info/machine-intelligence">Machine Intelligence</a></li>
                <li><a href="/acm-iith/#/info/systems-and-network">Systems and Networks</a></li>
                <li><a href="/acm-iith/#/info/theoretical-cs">Theoretical Computer Science</a></li> 
                <li><a href="/acm-iith/#/info/women-in-cs">Women in Computer Science</a></li>
                We organize a plethora of events which include talks by renowned speakers, organize reading group sessions and foster research collaborations among the undergraduate and graduate students working across various disciplines of Computer Science. 
                </ul>
                </p>
                
                {/* The primary goal of the chapter is to help students gain exposure to worldwide cutting edge research in diverse disciplines of Computer Science and help them take part in research activities that fixate on advancing their academic and research vocations.  */}
                <p className="p18">
                If you’re working on exhilarating research projects and would like to present your research, feel in liberty to drop us a mail at <a href="mailto:acm.chapter@iith.ac.in">acm.chapter@iith.ac.in</a>.
                </p>
                
                <a href="/acm-iith/#/joinus" target="_blank" style={{fontSize: '24px', color: "#080e2c"}}><b>Computing enthusiast enough? Become a member!</b></a>
                
                <br /><br /><br /><br /><br /><br />

                <Team />

            </div>
            {/* <div style={{position: 'absolute', width: '100%', bottom: 0}}>
                <Footer />
            </div> */}
        </div>
    )
}

export default About