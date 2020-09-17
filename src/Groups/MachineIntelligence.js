import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'
import { BrowserView, MobileView } from 'react-device-detect'

function MachineIntelligence()  {
    return (
        <div className="MachineIntelligence">
            <Navbar props="MI" />
            <div className="container">
                <br /><br /><br />
                <BrowserView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Machine Intelligence</p>
                </BrowserView>
                <MobileView>
                    <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Machine &nbsp;Intelligence</p>
                </MobileView>
                <br /><br />
                <p className="p20">Machine Intelligence Group is a component of ACM IIT Hyderabad Student Chapter, fixating on research and applications in areas like Computer Vision, Natural Language and Data Mining. We aim to build a vigorous machine learning community at IIT Hyderabad, by organizing weekly paper discussions, providing a mentoring platform to tyro minds and collaborating on sultry research projects with aim to publish them in top conferences/journals. We actively look forward to interactive and collaborative opportunities, so, please drop us a mail if your fascinated.</p>
            </div>


        </div>
    )
}

export default MachineIntelligence