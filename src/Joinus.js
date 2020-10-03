import React, { useState } from 'react'
import './css/style.css';
import './css/common.css';
import Form from './Form'
import { BrowserView, MobileView } from 'react-device-detect'

function Joinus()  {
    const [flag, setFlag] = useState(false)
    const toggleTrue = ()  =>   {setFlag(true)}
    const toggleFalse = () =>   {setFlag(false)}

    return (
        <div className="Joinus" style={{backgroundColor: "#F0F8FF", height:"100vh"}}>
		    <BrowserView>	
			<div className="container-sm">
				<br />
				<div className="container-sm">
				<div className="container-sm">
				<div className="container-sm">
				<div className="primaryContainer">
					<div style={{width: '30%', backgroundColor: '#2b547e', float: 'left', borderRadius: "15px 0px 0px 15px"}}>
                        <br />
						<a className="p16" onClick={toggleFalse} style={{color: "#fff", padding: "10%", cursor: "pointer"}}>{flag ? <img src="https://img.icons8.com/color/48/000000/1-circle--v1.png"/> : <img src="https://img.icons8.com/color/48/000000/1-circle-c--v1.png"/>}&nbsp;&nbsp;Member Benefits</a>
                        <hr style={{backgroundColor: "#CCC"}} />
						<a className="p16" onClick={toggleTrue} style={{color: "#fff", paddingLeft: "10%", paddingTop: "6%", paddingBottom: "5%", cursor: "pointer"}}>{!flag ? <img src="https://img.icons8.com/color/48/000000/2-circle--v1.png"/> : <img src="https://img.icons8.com/color/48/000000/2-circle-c--v1.png"/>}&nbsp;&nbsp;Register</a>
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					</div>
					<div style={{width: "70%", backgroundColor: '#fff', float: "right", borderRadius: "0px 15px 15px 0px"}}>
                        {flag ?
                            <Form />
                            :
                            <div className="container" style={{color: "#fff", paddingRight: '5%', paddingTop: "1.5%"}}>
                                <br />
                                <p className="h30" style={{color: "#48a6f9", paddingLeft: "10%"}}>Become a Member!</p><br />
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Chapter members are eligible for an “acm.org” email forwarding address with filtering.</p>
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Members get a full-year electronic subscription to XRDS, ACM's Student Magazine</p>
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Chapter Members are eligible for a three-month complimentary electronic subscription to ACM’s flagship publication Communications of the ACM.</p>
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Members receive ACM's Popular E-Newsletters, TechNews, CareerNews and MemberNet</p>
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Members get access to ACM Student Quick Takes (SQT), a quarterly email newsletter with each issue highlighting ACM activities, programs, and offerings of interest.</p>
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Members get to participate in logistics of events.</p><br />
                                <a className="h40" style={{marginLeft: "90%", cursor: "pointer", color: "#48a6f9"}} onClick={toggleTrue}><img src="https://img.icons8.com/flat_round/50/000000/arrow-right.png"/></a>
                                <br /><br /><br />
                            </div>
                        
                        }
					</div>


				</div>
				</div>
				</div>
				</div>
			</div>
            </BrowserView>


            <MobileView>
       
			<div className="container-sm">
				<br />
				<div className="container-sm">
				<div className="container-sm">
				<div className="container-sm">
                     <div className="primaryContainer">
        {/*            <div style={{height: '30vh', backgroundColor: '#2b547e', borderRadius: "15px 0px 0px 15px"}}>
                        <br />
                        <a className="p16" onClick={toggleFalse} style={{color: "#fff", padding: "10%", cursor: "pointer"}}>{flag ? <img src="https://img.icons8.com/color/48/000000/1-circle--v1.png"/> : <img src="https://img.icons8.com/color/48/000000/1-circle-c--v1.png"/>}&nbsp;&nbsp;Member Benefits</a>
                        <hr style={{backgroundColor: "#CCC"}} />
                        <a className="p16" onClick={toggleTrue} style={{color: "#fff", paddingLeft: "10%", paddingTop: "6%", paddingBottom: "5%", cursor: "pointer"}}>{!flag ? <img src="https://img.icons8.com/color/48/000000/2-circle--v1.png"/> : <img src="https://img.icons8.com/color/48/000000/2-circle-c--v1.png"/>}&nbsp;&nbsp;Register</a>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>*/}
					<div style={{backgroundColor: '#fff', float: "right", borderRadius: "15px 15px 15px 15px"}}>
                        {flag ?
                            <Form />
                            :
                            <div className="container" style={{color: "#fff", paddingRight: '5%', paddingTop: "1.5%"}}>
                                <br />
                                <p className="h30" style={{color: "#48a6f9", paddingLeft: "10%"}}>Become a Member!</p><br />
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Chapter members are eligible for an “acm.org” email forwarding address with filtering.</p>
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Members get a full-year electronic subscription to XRDS, ACM's Student Magazine</p>
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Chapter Members are eligible for a three-month complimentary electronic subscription to ACM’s flagship publication Communications of the ACM.</p>
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Members receive ACM's Popular E-Newsletters, TechNews, CareerNews and MemberNet</p>
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Members get access to ACM Student Quick Takes (SQT), a quarterly email newsletter with each issue highlighting ACM activities, programs, and offerings of interest.</p>
                                <p className="p15" style={{color: "#080e2c", paddingLeft: '10%'}}>- Members get to participate in logistics of events.</p><br />
                                <center><a className="h40" style={{cursor: "pointer", color: "#48a6f9"}} onClick={toggleTrue}><img src="https://img.icons8.com/flat_round/50/000000/arrow-right.png"/></a></center>
                                <br /><br /><br />
                            </div>
                        
                        }
					</div>


				</div>
				</div>
				</div>
				</div>
			</div>
            </MobileView> 
        </div>
    )
}

export default Joinus
