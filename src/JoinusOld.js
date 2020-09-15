import React, { useState } from 'react'
import './css/style.css';
import './css/common.css';
import './css/join.css';
import { GoogleSpreadsheet } from "google-spreadsheet";


function JoinusOld()  {
	const [formData, setFormData] = useState({
		name: '',
		lastname: '',
		email: '',
		number: ''
	})

	const { name, lastname, email, number } = formData

	const handleChange = text => e => {
		setFormData({ ...formData, [text]: e.target.value });
		console.log(formData)
    };
	
	const appendSpreadsheet = async() =>	{
		const doc = new GoogleSpreadsheet('1iRewg0yJTdNm27chtnI_g5r245J11dLdSqT5Qip0yBI');

		await doc.useServiceAccountAuth(require('./peak-radius-289518-892f6a16e540.json'));
		await doc.loadInfo(); // loads document properties and worksheets
		console.log(doc.title);
		const sheet = doc.sheetsByIndex[0];
		await sheet.addRow({ Name: 'Larry vbydrfPage', Value: 'larry@google.com' });
	}
	var flag = false;

	
    return (
        <div className="Joinus" style={{backgroundColor: "#F0F8FF", height: "100vh"}}>
                
            <button onClick={appendSpreadsheet}>Hello</button>
            <div class="page-content">
		    <div class="form-v1-content">
			<div class="wizard-form">
		        <form class="form-register">
				
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


                                    <p>- Chapter members are eligible for an “acm.org” email forwarding address with filtering.</p>
                                    <p>- Members get a full-year electronic subscription to XRDS, ACM's Student Magazine</p>
                                    <p>- Chapter Members are eligible for a three-month complimentary electronic subscription to ACM’s flagship publication Communications of the ACM.</p>
                                    <p>- Members receive ACM's Popular E-Newsletters, TechNews, CareerNews and MemberNet</p>
								    <p>- Members get access to ACM Student Quick Takes (SQT), a quarterly email newsletter with each issue highlighting ACM activities, programs, and offerings of interest.</p>
                                    <p>- Members get to participate in logistics of events.</p><br />
								</div>
							</div>
			            </section>
                                    
			            <h2>
			            	<p class="step-icon" style={{marginTop: "6%"}}><span>02</span></p>
			            	<span class="step-text">Personal Information</span>
			            </h2>
			            <section>
							{flag = true}
			                <div class="inner">
			                	<div class="wizard-header" style={{padding: "7%"}}>

									<h5>Please enter your infomation and proceed .  </h5>
								</div>
								<div class="form-row">
									<div class="form-holder">
									<p className="h22">Name</p>
									<input className = "primaryInput" type="text" value={name} onChange={handleChange('name')} placeholder="Add Name " /><br /><br />
									</div>
									<div class="form-holder">
										<fieldset>
											<legend>Last Name</legend>
											<input type="text" class="form-control" value={lastname} onChange={handleChange('lastname')}  name="last-name" placeholder="Last Name" required  />
										</fieldset>
									</div>
								</div>
								<div class="form-row">
									<div class="form-holder form-holder-2">
										<fieldset>
											<legend>Your Email</legend>
											<input type="text" name="your_email" value={email} onChange={handleChange('email')} class="form-control" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="example@email.com" required />
										</fieldset>
									</div>
								</div>
								<div class="form-row">
									<div class="form-holder form-holder-2">
										<fieldset>
											<legend>Phone Number</legend>
											<input type="text" class="form-control" value={number} onChange={handleChange('number')} name="phone" placeholder="+91 9xxxxxxxxx" required />
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

export default JoinusOld