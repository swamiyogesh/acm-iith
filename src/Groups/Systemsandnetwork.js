import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'
import { BrowserView, MobileView } from 'react-device-detect'
import Contact from '../Contact'

function Systemsandnetwork()  {
    return (
        <div className="Systemsandnetwork">
            <Navbar />
            <div className="container" style={{paddingTop: "25px"}}>
                <BrowserView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Systems and Networks</p>
                </BrowserView>
                <MobileView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Systems and &nbsp;Networks</p>
                </MobileView>
                <br /><br />
                <p className="p18"> The Systems and Networks group is a part of ACM IIT Hyderabad Student Chapter which focuses on the research and applications in areas like Operating Systems, Database Systems and Computer Networks. The aim of this group is to build a strong systems and networks community, by organising regular paper discussions while providing a mentoring platform to the newcomers at the same time. We also aim to publish various papers at top conferences through collaboration. If you have an idea that you want to discuss with people of similar interest, drop us an e-mail.</p>
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

export default Systemsandnetwork