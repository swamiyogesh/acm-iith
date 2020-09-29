import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'
import { BrowserView, MobileView } from 'react-device-detect'

function MachineIntelligence()  {
    return (
        <div className="MachineIntelligence">
            <Navbar />
            <div className="container">
                <br /><br /><br />
                <BrowserView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Machine Intelligence</p>
                </BrowserView>
                <MobileView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Machine &nbsp;Intelligence</p>
                </MobileView>
                <br /><br />
                <p className="p18">Machine Intelligence Group is a component of ACM IIT Hyderabad Student Chapter, focusing on research and applications in areas like Computer Vision, Natural Language and Data Mining. We aim to build a vigorous machine learning community at IIT Hyderabad, by organizing weekly paper discussions, providing a mentoring platform to tyro minds and collaborating on sultry research projects with aim to publish them in top conferences and journals. Drop us a mail for collaboration, we are active for collaborative opportunities.</p>
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


        </div>
    )
}

export default MachineIntelligence