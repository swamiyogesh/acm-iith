import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'
import { BrowserView, MobileView } from 'react-device-detect'
import Contact from '../Contact'


function TheoreticalCS()  {
    return (
        <div className="TheoreticalCS">
            <Navbar />
            <div className="container" style={{paddingTop: "25px"}}>
                <BrowserView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Theoretical Computer Science</p>
                </BrowserView>
                <MobileView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Theoretical &nbsp;CS</p>
                </MobileView>
                <br /><br />
                <p className="p18"> The Theoretical Computer Science group is a part of ACM IIT Hyderabad Student Chapter which mainly focuses on research and applications in areas like Algorithms, Data Structures,  Computationl Complexity Theory and Cryptography. The goal of the group is to bring together poeple working in these areas through the organisation of regular reading groups. We also aim to use this platform to cultivate interest for theoretical computer science in the minds of budding engineers. If interested in collaboration, or maybe you just want to discuss an idea, drop us an e-mail.</p>
                <br /><br />
                <a class="p22" style={{color: 'black', textDecoration: 'none', borderLeft:'3px solid #479ff8', top: '50%'}}>&nbsp;Activites</a>
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

export default TheoreticalCS