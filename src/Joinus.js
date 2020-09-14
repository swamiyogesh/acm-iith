import React, { useState } from 'react'
import './css/style.css';
import './css/common.css';
import './css/join.css';
import { GoogleSpreadsheet } from "google-spreadsheet";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Joinus()  {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		number: ''
	})

	const { name, email, number } = formData

	const handleChange = text => e => {
		setFormData({ ...formData, [text]: e.target.value });
    }
	const appendSpreadsheet = async(row) =>	{
		toast.success('Thanks for your response. Our team will get back to you shortly.')
		const doc = new GoogleSpreadsheet('1iRewg0yJTdNm27chtnI_g5r245J11dLdSqT5Qip0yBI');

		await doc.useServiceAccountAuth(require('./peak-radius-289518-892f6a16e540.json'));
		await doc.loadInfo(); // loads document properties and worksheets
		const sheet = doc.sheetsByIndex[0];
		await sheet.addRow(row);
	}
	
    return (
        <div className="Joinus" style={{backgroundColor: "#F0F8FF", height: "100vh"}}>
			
			<div className="container">
			<ToastContainer />
				<br /><br />
				<div className="container">
				<div className="container">
				<div className="container">
				<div className="primaryContainer">
					<div style={{width: '50%', backgroundColor: '#2B547E', float: 'left'}}>
						<br  />
						<center><p className="h30" style={{color: "#fff"}}>Become a IIT Hyderabad ACM Student Chapter member!</p></center>
						<br />
						<div className="container" style={{color: "#fff", paddingLeft: '10%', paddingRight: '5%'}}>
						<p className="p18">- Chapter members are eligible for an “acm.org” email forwarding address with filtering.</p>
						<p className="p18">- Members get a full-year electronic subscription to XRDS, ACM's Student Magazine</p>
						<p className="p18">- Chapter Members are eligible for a three-month complimentary electronic subscription to ACM’s flagship publication Communications of the ACM.</p>
						<p className="p18">- Members receive ACM's Popular E-Newsletters, TechNews, CareerNews and MemberNet</p>
						<p className="p18">- Members get access to ACM Student Quick Takes (SQT), a quarterly email newsletter with each issue highlighting ACM activities, programs, and offerings of interest.</p>
						<p className="p18">- Members get to participate in logistics of events.</p><br />
						</div>
					</div>
					<div style={{width: "50%", backgroundColor: '#fff', float: "right"}}>
						<br /><br />
						<form className="container" style={{paddingLeft: "5%"}} onSubmit={() => appendSpreadsheet(formData)}>
							<p className="h22">Name</p>
							<input className = "primaryInput" type="text" value={name} onChange={handleChange('name')} placeholder="Add Name " /><br /><br />

							<p className="h22">Email</p>
							<input className = "primaryInput" type="email" value={email} onChange={handleChange('email')} placeholder="Add Email " /><br /><br />

							<p className="h22">Phone Number</p>
							<input className = "primaryInput" type="number" value={number} onChange={handleChange('number')} placeholder="Add Number " /><br /><br />

							<br /><br /><br /><br /><br />
							<center><button type='submit' className="primaryButton">Join us</button></center>
							<br /><br />
						</form>
					</div>


				</div>
				</div>
				</div>
				</div>
			</div>

        </div>
    )
}

export default Joinus