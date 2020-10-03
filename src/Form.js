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
		toast.success('Thanks for your response. Our team will get back to you shortly.')
		const doc = new GoogleSpreadsheet('1iRewg0yJTdNm27chtnI_g5r245J11dLdSqT5Qip0yBI');

        await doc.useServiceAccountAuth(require('./peak-radius-289518-892f6a16e540.json'));
		await doc.loadInfo(); // loads document properties and worksheets
		const sheet = doc.sheetsByIndex[0];
		await sheet.addRow(row);
	}
	
    return (
        <div className="Form">
		<BrowserView>	
			<div className="container" style={{height: "700px"}}>
			<ToastContainer />
			
			<br />
			<form style={{paddingLeft: "5%"}} onSubmit={() => appendSpreadsheet(formData)}>
			<div class="form-group">
				<label for="exampleInputEmail1">Name</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={handleChange('name')} placeholder="Add Name"/>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="name" class="form-control" id="exampleInputPassword1" value={email} onChange={handleChange('email')} placeholder="Add Email"/>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Stream</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={stream} onChange={handleChange('stream')} placeholder="Add Name"/>
			</div>
			<div class="form-group">	
				<label for="exampleInputEmail1">Year</label>
				<input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={year} onChange={handleChange('year')} placeholder="Add Name"/>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Interest Group</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={interestGroup} onChange={handleChange('interestGroup')} placeholder="Add Name"/>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">What do you expect from this chapter?</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={expectation} onChange={handleChange('expectation')} placeholder="Add Name"/>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">How will you contribute in taking the computing forward?</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={contribution} onChange={handleChange('contribution')} placeholder="Add Name"/>
			</div>

			<button className="h40 primaryButton" type='submit' style={{marginLeft: "90%", cursor: "pointer", color: "#48a6f9"}}><img src="https://img.icons8.com/color/50/000000/tiktok-verified-account.png"/></button>
			</form>

        </div>
        </BrowserView>
        <MobileView>
			<ToastContainer />
			<br />
			<form class="container" onSubmit={() => appendSpreadsheet(formData)}>
			<div class="form-group">
				<label for="exampleInputEmail1">Name</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={handleChange('name')} placeholder="Add Name"/>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="name" class="form-control" id="exampleInputPassword1" value={email} onChange={handleChange('email')} placeholder="Add Email"/>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Stream</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={stream} onChange={handleChange('stream')} placeholder="Add Name"/>
			</div>
			<div class="form-group">	
				<label for="exampleInputEmail1">Year</label>
				<input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={year} onChange={handleChange('year')} placeholder="Add Name"/>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Interest Group</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={interestGroup} onChange={handleChange('interestGroup')} placeholder="Add Name"/>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">What do you expect from this chapter?</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={expectation} onChange={handleChange('expectation')} placeholder="Add Name"/>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">How will you contribute in taking the computing forward?</label>
				<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={contribution} onChange={handleChange('contribution')} placeholder="Add Name"/>
			</div>

			<button className="h40 primaryButton" type='submit' style={{marginLeft: "85%", cursor: "pointer", color: "#48a6f9"}}><img src="https://img.icons8.com/color/50/000000/tiktok-verified-account.png"/></button>
			</form>
			<br />
        </MobileView>
        </div>
    )
}

export default Form