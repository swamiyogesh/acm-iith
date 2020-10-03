import React, { useState } from 'react'
import './css/style.css';
import './css/common.css';
import { GoogleSpreadsheet } from "google-spreadsheet";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserView, MobileView } from 'react-device-detect'

function Form()  {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		stream: '',
		year: '',
		interestGroup: '',
		expectation: '',
		contribution: ''
	})

	const { name, email, stream, year, interestGroup, expectation, contribution } = formData

	const handleChange = text => e => {
		setFormData({ ...formData, [text]: e.target.value });
		console.log(formData)
    }
	const appendSpreadsheet = async(row) =>	{
		toast.warning("Sending Response")
		const doc = new GoogleSpreadsheet('1iRewg0yJTdNm27chtnI_g5r245J11dLdSqT5Qip0yBI');

        await doc.useServiceAccountAuth(require('./peak-radius-289518-892f6a16e540.json'));
		await doc.loadInfo(); // loads document properties and worksheets
		const sheet = doc.sheetsByIndex[0];
		await sheet.addRow(row);
		done()
	}

	const done = () =>	{
		setFormData({
			...formData,
			name: '',
			email: '',
			stream: '',
			year: '',
			interestGroup: '',
			expectation: '',
			contribution: ''
		})
		toast.success("Thank you for your response! Our Team will get back to you shortly.")
	}
	
    return (
        <div className="Form">
		<BrowserView>	
			<div className="container" style={{height: "700px"}}>
			<ToastContainer />
			
			<br />
			<form style={{paddingLeft: "5%"}} onSubmit={() => appendSpreadsheet(formData)}>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Name</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={handleChange('name')} placeholder="Add Name"/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input type="email" className="form-control" id="exampleInputPassword1" value={email} onChange={handleChange('email')} placeholder="Add Email"/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Stream</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={stream} onChange={handleChange('stream')} placeholder="Add Your Stream"/>
			</div>
			<div className="form-group">	
				<label htmlFor="exampleInputEmail1">Year</label>
				<input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={year} onChange={handleChange('year')} placeholder="Add You Current Year(1/2/3/4)"/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Interest Group</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={interestGroup} onChange={handleChange('interestGroup')} placeholder="Add Interest Group"/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">What do you expect from this chapter?</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={expectation} onChange={handleChange('expectation')} placeholder=""/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">How will you contribute in taking the computing forward?</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={contribution} onChange={handleChange('contribution')} placeholder=""/>
			</div>

			<button className="h40 primaryButton" type='submit' style={{marginLeft: "90%", cursor: "pointer", color: "#48a6f9"}}><img src="https://img.icons8.com/color/50/000000/tiktok-verified-account.png"/></button>
			</form>

        </div>
        </BrowserView>
        <MobileView>
			<ToastContainer />
			<br />
			<form className="container" onSubmit={() => appendSpreadsheet(formData)}>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Name</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={handleChange('name')} placeholder="Add Name"/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input type="email" className="form-control" id="exampleInputPassword1" value={email} onChange={handleChange('email')} placeholder="Add Email"/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Stream</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={stream} onChange={handleChange('stream')} placeholder="Add Your Stream"/>
			</div>
			<div className="form-group">	
				<label htmlFor="exampleInputEmail1">Year</label>
				<input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={year} onChange={handleChange('year')} placeholder="Add You Current Year(1/2/3/4)"/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Interest Group</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={interestGroup} onChange={handleChange('interestGroup')} placeholder="Add Interest Group"/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">What do you expect from this chapter?</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={expectation} onChange={handleChange('expectation')} placeholder=""/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">How will you contribute in taking the computing forward?</label>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={contribution} onChange={handleChange('contribution')} placeholder=""/>
			</div>
			<button className="h40 primaryButton" type='submit' style={{marginLeft: "85%", cursor: "pointer", color: "#48a6f9"}}><img src="https://img.icons8.com/color/50/000000/tiktok-verified-account.png"/></button>
			</form>
			<br />
        </MobileView>
        </div>
    )
}

export default Form