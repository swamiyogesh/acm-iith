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
                <p className="p20">                
                IIT Hyderabad ACM student chapter was officially chartered on 31st August, 2020 under the shelter of Computer Science and Engineering department at IIT Hyderabad. This student driven chapter is divided into four Interest groups namely, <a href="/acm-iith/#/info/machine-intelligence">Machine Intelligence</a>, <a href="">Systems and Networks</a>, <a href="">Theoretical Computer Science</a> and <a href="/acm-iith/#/info/women-in-cs">Women in Computer Science</a>. The chapter organizes events which include talks by renowned speakers, organize reading groups and foster research collaborations among the undergraduate and graduate students working in sundry disciplines of Computer Science. The primary goal of this chapter is to help students gain exposure to cutting edge research in diverse disciplines of Computer Science and help them take part in research activities that fixate on advancing their academic and research  vocations. If you’re working on exhilarating research projects and would relish to present your research, feel in liberty to drop us a mail at <a href="mailto: acm.chapter@iith.ac.in">acm.chapter@iith.ac.in.</a> 
                </p>
                <p className="p20">
                The chapter aims at assembling computer fraternity and cultivate the research and development oriented skills among students. It endeavors to engender opportunities for networking, mentoring and bonding with peers and experts across the computing spectrum.
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