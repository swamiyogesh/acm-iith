import React from 'react'
import './css/style.css';
import './css/common.css';
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'

function News()   {
    return (
        <div className="News">
            <Navbar />
            <div class="main-container">
              <section id="timeline" class="timeline-outer">
                <div class="container" id="content">
                  <div class="row">
                    <div class="col s12 m12 l12">
                      <ul class="timeline">
                        <li class="event" data-date="8th Sep, 2020">
                          <h3>[Paper Title] Accepted at [Conf]</h3>
                          <p>
                            One of our member [name], got their work on [] published on the topic of [] in [] coonference 2020.
                          </p>
                        </li>
                        <li class="event" data-date="31st Aug, 2020">
                          <h3>IITH ACM officially charteted</h3>
                          <p>
                            IIT Hyderabad got officially chartered as a student chapter member of Association of Computing Machinery.
                          </p>
                        </li>
                        {/* <li class="event" data-date="2012/2015">
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

export default News