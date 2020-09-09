import React from 'react'
import '../../css/style.css';
import '../../css/common.css';


function ImageContainer()   {
    return (
        <div className = "ImageCotnainer">
            {/* <svg width="232em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', bottom: '425px', color: '#f05a22'}}>
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>

            <svg width="7em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', bottom: '425px', color: '#f05a22'}}>
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg> */}
            <div className="container">
                <center>
                 <div className="primaryContainer" style={{borderRadius: '15px'}}>
                     <img src = {require('../../assets/images/header_image_2.jpg')} style={{height: "100%", width:"100%"}}  alt=" " />
                 </div>
                </center>
             </div>
        </div>
    )
}

export default ImageContainer