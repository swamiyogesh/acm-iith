import React from 'react';
import './css/style.css';
import './css/common.css';
import './css/join.css'
import Navbar from './Components/Common/Navbar'
// import Footer from './Components/Common/Footer'
import ImageContainer from './Components/Home/ImageContainer'
import Mainpart from './Components/Home/Mainpart'

function App() {
  return (
    <div className="App">
      <Navbar props="Home" />
      {/* <ImageContainer /> */}
      <br /><br />
      <Mainpart />
      <br /><br />
      {/* <div style={{position: 'relative', width: '100%', bottom: 0}}>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
