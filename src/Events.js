import React from 'react'
import './css/style.css';
import './css/common.css';
import './css/timeline.css';
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'

function Events()   {
    return (
        <div className="Events">
            <Navbar />
            {/* <br /><br /><br />
            <div className="container">
            <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Events</p>
            </div> */}
            <div class="main-container">
              <section id="timeline" class="timeline-outer">
                <div class="container" id="content">
                  <div class="row">
                    <div class="col s12 m12 l12">
                      <ul class="timeline">
                        <li class="event" data-date="8th Oct, 2020">
                          <h3>IIT Hyderabad ACM Student Chapter Inaguartion</h3>
                          <p>
                            The student will be introduced to the entire IIT community. It will be streamed live on our YouTube channel live froom 7:30 PM to 8:30 PM.
                          </p>
                        </li>
                        {/* <li class="event" data-date="2015/Present">
                          <h3>Claromentis</h3>
                          <p>
                            Claromentis is an intranet software provider company. I started working at the Brighton office as a Marketing Designer while I was still attending my final year at the University of Sussex. My primary responsibilities included creating corporate identity
                            for the company; I re-designed their website, and have created marketing materials such as brochures.
                          </p>
                          <p>Since graduating from university, I have also undertaken responsibilities for designing a product for the company. The roles I have been given have provided the perfect opportunity to implement the skills I have gained throughout my higher
                            education, as well as experiencing the running of a successful business.</p>
                        </li>
                        <li class="event" data-date="2012/2015">
                          <h3>Games & Multimedia Environments BSc (Hons)</h3>
                          <p>Throughout my degree I have gained expansive knowledge of informatics areas including Human Computer Interaction, Multimedia Design and Development, Program Analysis and Design For my final year project, I created a 2D Puzzler Game for iOS
                            called 'Flat Ball' and received a first. I therefore hope to release this game and further develop it to add new levels and improve the features.
                          </p>
                        </li>
                        <li class="event" data-date="2012/2015">
                          <h3>1108 Studios</h3>
                          <p>This is a small startup that a friend and I created to gain more skills and apply those I had learned while completing my diploma. Since its inception, as a front - end web developer I have advised, designed and built web solutions for numerous
                            clients.</p>
                        </li>
                        <li class="event" data-date="2010/2012">
                          <h3>IT Practitioners BTEC National Diploma</h3>
                          <p>This is where my interest in building things for interactive media began. During my first computing course I studied a range of core topics including multimedia design, database design, computer games development, computer networks and object
                            oriented programming.</p>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <br/>
            </div>

</div>


    )
}

export default Events