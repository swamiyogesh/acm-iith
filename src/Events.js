import React from 'react'
import './css/style.css';
import './css/common.css';
import './css/timeline.css';
import Navbar from './Components/Common/Navbar'
import Contact from './Contact';

function Events()   {
    return (
        <div className="Events">
            <Navbar />
            {/* <br /><br /><br />
            <div className="container">
            <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Events</p>
            </div> */}
            <div class="main-container" style={{height: '77vh'}}>
              <section id="timeline" class="timeline-outer">
                <div class="container" id="content">
                  <div class="row">
                    <div class="col s12 m12 l12">
                      <ul class="timeline">
                        <li class="event" data-date="5th Nov, 2020">
                          <h3>CS1O1 Podcast EP3: Thinking Beyond the Code <a href='/acm-iith/#/events/CS1O1EP3/' target="_blank"><i class="fas fa-external-link-alt fa-sm"></i></a></h3>
                          <p>
                            Ayush Pateria (IITH CS Grad of 2020) shared his journey from an Ex Silicon Valley Engineer to launching a HealthTech Startup Snazzy of his own!
                          </p>
                        </li>
                        <li class="event" data-date="1st Nov, 2020">
                          <h3>Launched #ResearchConnect Initiative <a href='/acm-iith/#/events/ResearchConnect/1/' target="_blank"><i class="fas fa-external-link-alt fa-sm"></i></a></h3>
                          <p>
                            Evgenia Rusak & Steffen Schneider (Current PhDs at International Max Plank Research School for Intelligent Systems) presented their work on improving and evaluating the robustness of computer vision models.
                          </p>
                        </li>
                        <li class="event" data-date="25th Oct, 2020">
                          <h3>Theoretical Computer Science Reading Group First Discussion <a href='/acm-iith/#/events/Reading_Group/Theoretical_CS/1/' target="_blank"><i class="fas fa-external-link-alt fa-sm"></i></a></h3>
                          <p>
                            Bhyaravarapu Sairam (CS PhD), discussed recent work on 'Conflict-free coloring'.
                          </p>
                        </li>
                        <li class="event" data-date="18th Oct, 2020">
                          <h3>Women in Computer Science Introductory Session <a href='/acm-iith/#/events/Reading_Group/Women_in_CS/0/' target="_blank"><i class="fas fa-external-link-alt fa-sm"></i></a></h3>
                          <p>
                          Women members of IITH ACM Student Chapter came togethor to discuss various plans for promoting equal research & computing oppurtunities for everyone.
                          </p>
                        </li>
                        <li class="event" data-date="17th Oct, 2020">
                          <h3>Reading Groups Commencement <a href='/acm-iith/#/events/Reading_Group/0/' target="_blank"><i class="fas fa-external-link-alt fa-sm"></i></a></h3>
                          <p>
                            Kaushal Kumar Maurya (CS PhD), presented his CIKM2020 work 'Learning To Distract'.
                          </p>
                        </li>
                        <li class="event" data-date="9th Oct, 2020">
                          <h3>CS1O1 Podcast EP2: Competetive Programming <a href='/acm-iith/#/events/CS1O1EP2/' target="_blank"><i class="fas fa-external-link-alt fa-sm"></i></a></h3>
                          <p>
                            Two times ICPC Regionalist team Hakuna Matata shared their strategies, journey and some insightful tips.
                          </p>
                        </li>
                        <li class="event" data-date="8th Oct, 2020">
                          <h3>IIT Hyderabad ACM Student Chapter Inaguartion <a href='/acm-iith/#/events/Inauguration/' target="_blank"><i class="fas fa-external-link-alt fa-sm"></i></a></h3>
                          <p>
                            The student will be introduced to the entire IIT community. It will be streamed live on our YouTube channel live froom 7:30 PM to 8:30 PM.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <br/>
            </div>
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
          <Contact />
</div>


    )
}

export default Events