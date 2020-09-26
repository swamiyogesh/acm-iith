import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'
import { BrowserView, MobileView } from 'react-device-detect'

function WomenInCS()  {
    return (
        <div className="WomenInCS">
            <Navbar  />
            <div className="container">
                <br /><br /><br />
                <BrowserView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Women in Computer Science</p>
                </BrowserView>
                <MobileView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Women in &nbsp;Computer &nbsp;Science</p>
                </MobileView>
                <br /><br />
                <p className="p20">
                Women in Computer Science group is a part of ACM IIT Hyderabad Student Chapter which works towards promoting and supporting the growing community of women in Computer Science and Technology alongside raising awareness about the issues which women face in the field and helping them by encouraging their educational and professional development. We aim at creating academic, social and professional opportunities for women in  Computer Science by promoting the breadth of the field and its diverse community, thereby striving for a healthy and supportive community atmosphere for all. Making a difference and solving problems serves as our basic motivating purpose.
                </p>       
            </div>
        </div>
    )
}

export default WomenInCS