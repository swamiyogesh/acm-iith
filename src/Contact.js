import React from 'react'
import './css/style.css';
import './css/common.css';
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Contact()   {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
      
    return (
        <div className="Contact">
            <Navbar />
            <div className="container">
                <br />
                <div className="primaryContainer" style={{borderRadius: '15px', textAlign: 'center'}}>
                    <p class="h35" style={{color: "black"}}>Shoot us an email at the address below to get in touch!</p>
                    <br />
                    <a class="p30" href="mailto: acm.iit@gmail.com" style={{color: '#f05a22', fontSize: '20px'}}>acm.iit@gmail.com</a>
                </div>
                <br />
                <div className="primaryContainer" style={{ height: '100vh', width: '100%', borderRadius: '15px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAJGTQzEKDlEXN7aYOVUZtTo8MijtkvNsc' }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        >
                        <AnyReactComponent
                            lat={17.5947078}
                            lng={78.1208514}
                            text="IITH"
                        />
                    </GoogleMapReact>
                </div>
                <br />
            </div>
               
            <div style={{position: 'relative', width: '100%', bottom: 0}}>
                <Footer />
            </div>
        </div>
    )
}

export default Contact
