import React from 'react'
import './css/style.css';
import './css/common.css';
import './css/join.css';

function Joinus()  {
    // backgroundImage: "-moz-linear-gradient( 136deg, #479ff8, #fff)"
    return (
        <div className="Joinus" style={{backgroundColor:  "#F0F8FF", height: "100vh"}}>
                
            
            <div class="page-content">
		    <div class="form-v1-content">
			<div class="wizard-form">
		        <form class="form-register" action="#" method="post">
		        	<div id="form-total">
		        		
			            <h2>
			            	<p class="step-icon" style={{marginTop: "6%"}}><span>01</span></p>
			            	<span class="step-text">Value proposition</span>
			            </h2>
			            <section>
			                <div class="inner">
                                            <div class="wizard-header" style={{padding: "7%"}}>
                                            <h5>Become a IIT Hyderabad ACM Student Chapter member!</h5></div>
			                	<div class="form-holder">


									<p>-One stop shop for laundry </p>
                                                                        <p>-Allow Laundromats to stand out</p>
                                                                        <p>-Bridging the gaps between customer and laundry shops</p>
                                                                        <p>-Provide rating and review to evaluate laundry shops</p>
                                                                        <p>-Online ordering and laundry service</p>
								         <p>-Provide search service</p>
                                                                         <p>-Managing logistics to processorders</p><br /><br />
								</div>
							</div>
			            </section>
                                    
			            <h2>
			            	<p class="step-icon" style={{marginTop: "6%"}}><span>02</span></p>
			            	<span class="step-text">Personal Information</span>
			            </h2>
			            <section>
			                <div class="inner">
			                	<div class="wizard-header" style={{padding: "7%"}}>

									<h5>Please enter your infomation and proceed .  </h5>
								</div>
								<div class="form-row">
									<div class="form-holder">
										<fieldset>
											<legend>First Name</legend>
											<input type="text" class="form-control" id="first-name" name="first-name" placeholder="First Name" required  />
										</fieldset>
									</div>
									<div class="form-holder">
										<fieldset>
											<legend>Last Name</legend>
											<input type="text" class="form-control" id="last-name" name="last-name" placeholder="Last Name" required  />
										</fieldset>
									</div>
								</div>
								<div class="form-row">
									<div class="form-holder form-holder-2">
										<fieldset>
											<legend>Your Email</legend>
											<input type="text" name="your_email" id="your_email" class="form-control" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="example@email.com" required />
										</fieldset>
									</div>
								</div>
								<div class="form-row">
									<div class="form-holder form-holder-2">
										<fieldset>
											<legend>Phone Number</legend>
											<input type="text" class="form-control" id="phone" name="phone" placeholder="+91 9xxxxxxxxx" required />
										</fieldset>
									</div>
								</div>
								<div class="form-row form-row-date">
									<div class="form-holder form-holder-2">
										<legend>Shop / Company / Individual name:<br></br></legend>
                                                                      <fieldset>
                                                                     <input type="text" class="form-control" id="details" name="details" placeholder="Write your option here" required />
									</fieldset>

									</div>
								</div>
                                <br />
							</div>
			            </section>

		        	</div>
		        </form>
			</div>
        </div>
	</div>


        </div>
    )
}

export default Joinus