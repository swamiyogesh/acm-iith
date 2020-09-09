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
            <div className="row">
                    <div className="container">
                    {/* <div class="col-md" style={{left: "250px"}}> */}
                        <p className="h50" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #f05a22', top: '50%'}}>&nbsp;ACM Student Chapter</p>
                        <p className="p20" style={{color: 'black', padding: '5px'}}>The IIT Hyderabad ACM student chapter is an official 
                            unlucrative student chapter of the Association of Computing 
                            Machinery(ACM). It aims at uniting students with an 
                            interest in Computer Science. 
                            It allows students from graduate and undergraduate
                            backgrounds to interact, network and learn both technical
                            and research aligned skills.
                        </p>
                        <br />
                    {/* </div> */}
                    </div>






                    {/* upcoming events are gonna be added later */}
                    {/* <div class="col-md" style={{left: "100px"}}>
                        <p class="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #f05a22', top: '50%'}}>&nbsp;Upcoming events</p>
                        
                        <div class="primaryContainer" style={{height: '300px', overflowY: 'scroll', height: '480px', width: '600px', display:'block'}}>
                            {  children.map((child, i) =>    {
                                return <p class="p20" key = {i} style={{color: 'black'}}>{child.title}</p>
                            }) }
                            
                        </div>
                        <br />
                    </div> */}
                </div>
        </div>
    )
}

export default Mainpart