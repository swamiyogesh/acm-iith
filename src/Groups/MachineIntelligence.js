import React from 'react'
import '../css/style.css';
import '../css/common.css';
import Navbar from '../Components/Common/Navbar'

function MachineIntelligence()  {
    return (
        <div className="MachineIntelligence">
            <Navbar />
            <div className="container">
                <br /><br />
                <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Machine Intelligence</p>
                <br /><br />
                <p className="p20">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machine Intelligence Group is a part of ACM IIT Hyderabad Student Chapter, focusing on research and applications in areas like Computer Vision, Natural Language and Data Mining. 
We aim to build a strong machine learning community at IIT Hyderabad, by organising weekely paper discussions, providing a mentoring platform to beginner minds and collaborating on hot research projects with aim to publish them in top conferences/journals.
We actively look forward to interactive and collaborative opportunities, so, please drop us a mail if your interested.</p>
            </div>


        </div>
    )
}

export default MachineIntelligence