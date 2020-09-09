import React from 'react'
import '../../css/style.css';
import '../../css/common.css';
// import axios from 'axios'

function Mainpart() {

    // var [children, setChildren] = useState([])
    // useEffect(() => {
    //     axios
    //         .post(`${process.env.REACT_APP_API_URL}/upcoming/event`, {})
    //         .then(res =>    {
    //             console.log('events', res.data.events)
    //             setChildren(res.data.events)
    //         })
    // }, [])

    return (
        <div className="Mainpart">
            <br /><br />
            <div className="container">
            <p className="h60" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;IIT Hyderabad ACM Student &nbsp;Chapter</p>
            <br />
            <div className="row">
                    <div class="col-md-2">
                        <img src = {require('../../assets/images/logo.jpg')} style={{height: "90%", width:"110%"}}  alt=" " />
                    </div>
                    
                    <div class="col-md">
                        <br />
                        <p id="aboutus" className="p20" style={{color: 'black', padding: '5px'}}>The IIT Hyderabad ACM student chapter is an official
                            non profit student chapter of the Association of Computing 
                            Machinery(ACM). It aims at uniting students with an 
                            interest in Computer Science. 
                            It allows students from graduate and undergraduate
                            backgrounds to interact, network and learn both technical
                            and research aligned skills.
                            <a href="/acm-iith/#/about">&nbsp;Know more.</a>
                        </p>
                    </div>
                    
                </div>      



                    {/* <div class="col-md-5" style={{width: "30%"}}> */}
                        {/* <br /><br />
                        <p class="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;News</p>
                        <div class="secondaryContainer" style={{overflowY: 'scroll', height: '320px', width: '100%', display:'block'}}> */}
                            {/* {  children.map((child, i) =>    {
                                return <p class="p20" key = {i} style={{color: 'black'}}>{child.title}</p>
                            }) } */}
                            {/* <ul>
                            <li className="p20" style={{color: 'black'}}>IIT Hyderabad ACM Student Chapter officialy chartered on 31st August, 2020.</li>
                            </ul>
                        </div> */}
                        
                        <br /><br />
                {/* </div>                    
                </div> */}

                <hr style={{backgroundColor: "black"}} />
                <br />





            <div class="row" style={{ borderRadius: '5px'}}>
            <div className="container">
                <div className="row">
            <div class="col-md">
                <br />
                <a class="p30" style={{color: 'black', textDecoration: 'none', borderBottom:'3px solid #3074b7', top: '50%'}}>News</a>
                <br /><br />
                <p><i class="fa fa-bullhorn"></i><b> Chapter Started!</b></p>
                <p>IIT Hyderabad ACM Student Chapter officially chartered on 31-08-2020</p>
                <p><i class="fa fa-bullhorn"></i><b> Honoiurable mention to team</b></p>
                <p>Lorem Epsum Event is gonna be awesome.</p>
                <p><i class="fa fa-bullhorn"></i><b> Inauguration</b></p>
                <p>Lorem Epsum Event is gonna be awesome.</p>
                <p><i class="fa fa-bullhorn"></i><b> Honoiurable mention to team</b></p>
                <p>Lorem Epsum Event is gonna be awesome.</p>
                <br />
            </div>
            <div class="col-md">
                <br />
                <a class="p30" style={{color: 'black', textDecoration: 'none', borderBottom:'3px solid #3074b7', top: '50%'}}>Upcoming Events</a>
                <br /><br />
                <p><i class="fa fa-edit"></i><b> We are now live!</b></p>
                <p>Check us out at acm.iith.ac.in soon!</p>
                <p><i class="fa fa-edit"></i><b> Paper1!</b></p>
                <p>Check us out at acm.iith.ac.in soon!</p>
                <p><i class="fa fa-edit"></i><b> Paper2!</b></p>
                <p>Check us out at acm.iith.ac.in soon! Lorem Epsum Lorem Epsum Lorem Epsum Lorem EpsumLorem Epsum</p>
                <p><i class="fa fa-edit"></i><b> xyz!</b></p>
                <p>Check us out at acm.iith.ac.in soon! Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum</p>
                <br />
            </div>
            </div>
            </div>
            </div>

            <br /><br />
            <hr style={{backgroundColor: "black"}} />
            <br /><br />
            <p className="h35" id="contactus" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Contact Us</p>
            <br  />
            <div className="primaryContainer" style={{borderRadius: '15px', textAlign: 'center'}}>
                    <p class="h35" style={{color: "black"}}>Shoot us an email at the address below to get in touch!</p>
                    <br />
                    <a class="p30" href="mailto: acm.iit@gmail.com" style={{color: '#3074b7', fontSize: '20px'}}>acm.iit@gmail.com</a>
            </div>


        </div>
       <br /><br /><br /><br />
        </div>
    )
}

export default Mainpart