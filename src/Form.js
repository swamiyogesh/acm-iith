import React, { useState } from 'react'
import './css/style.css';
import './css/common.css';
import { GoogleSpreadsheet } from "google-spreadsheet";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form()  {
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
		const doc = new GoogleSpreadsheet('YOUR API KEYS HERE');

        // await doc.useServiceAccountAuth(require('SHEET CONFIG FILE HERE'));
		await doc.loadInfo(); // loads document properties and worksheets
		const sheet = doc.sheetsByIndex[0];
		await sheet.addRow(row);
	}
	
    return (
        <div className="Form">
			
			<div className="container">
			<ToastContainer />
						<br /><br />
						<form className="container" style={{paddingLeft: "10%"}} onSubmit={() => appendSpreadsheet(formData)}>
							<p className="h22">Name</p>
							<input className = "primaryInput" type="text" value={name} onChange={handleChange('name')} placeholder="Add Name " /><br /><br />

							<p className="h22">Email</p>
							<input className = "primaryInput" type="email" value={email} onChange={handleChange('email')} placeholder="Add Email " /><br /><br />

							<p className="h22">Phone Number</p>
							<input className = "primaryInput" type="number" value={number} onChange={handleChange('number')} placeholder="Add Number " /><br /><br />

							<br /><br /><br /><br />
							<button className="h40 primaryButton" type='submit' style={{marginLeft: "90%", cursor: "pointer", color: "#48a6f9"}}><img src="https://img.icons8.com/color/50/000000/tiktok-verified-account.png"/></button>
							<br /><br />
						</form>
				
        </div>
        </div>
    )
}

export default Form
