import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'
import { BrowserView, MobileView } from 'react-device-detect'
import Contact from '../Contact'

function WomenInCS()  {
    return (
        <div className="WomenInCS">
            <Navbar  />
            <div className="container" style={{paddingTop: "25px"}}>
                <BrowserView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Women in Computer Science</p>
                </BrowserView>
                <MobileView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Women in &nbsp;Computer &nbsp;Science</p>
                </MobileView>
                <br /><br />
                <p className="p18">
                Women in Computer Science group is a part of ACM IIT Hyderabad Student Chapter which works towards promoting and supporting the growing community of women in Computer Science and Technology alongside raising awareness about the issues which women face in the field and helping them by encouraging their educational and professional development. We aim at creating academic, social and professional opportunities for women in  Computer Science by promoting the breadth of the field and its diverse community, thereby striving for a healthy and supportive community atmosphere for all. Making a difference and solving problems serves as our basic motivating purpose.
                </p>     

                <br /><br />
                <a class="p22" style={{color: 'black', textDecoration: 'none', borderLeft:'3px solid #479ff8', top: '50%'}}>&nbsp;Discussions</a>  
                <br /><br />
                <div className="primaryContainer">
                <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Title</th>
                        <th scope="col">Presenter</th>
                        <th scope="col">Resources</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">10th Sep, 2020</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">12th Sep, 2020</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">23rd Sep, 2020</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <br /><br />
            </div>
            <Contact />
        </div>
    )
}

export default WomenInCS