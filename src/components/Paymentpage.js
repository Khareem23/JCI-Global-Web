import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Iframe from 'react-iframe'


const Paymentpage = (props) => {
    const location = useLocation();
    let uurl = null;
    if(document.getElementById('myId')) {
        uurl = document.getElementById('myId')
    }
    
    useEffect(() => {
        // alert(document.getElementById('iframeId').src);
        //if(uurl?.src) {
            // console.log(window.location.href)
        //}
        
    }, [uurl]);

    const ojina = () => {
    }
    
    return (
        
        // <div style={{position: 'relative', width: '100%', height: 0, paddingBottom: '66.25%'}}>
        // <iframe style={{position: 'relative', left: 0, top: 0, width: '100%', height: '100%'}} src={location.state.url}>
        // </iframe>
        // </div>

        // <div className="iframe-container">
        //     <iframe id="iframeId" src={location.state.url} allowFullScreen />
        // </div>

        <Iframe url={location.state.url}
        width="100%"
        height="900px"
        id="myId"
        className="myClassname"
        display="initial"
        onLoad={ojina()}
        position="relative"/>

    )

    


     //return <div dangerouslySetInnerHTML={{ __html: "<iframe id='iframeId' src="+ location.state.url +" frameborder='0' style='overflow:hidden;height:100%;width:100%' height='100%' width='100%' allowfullscreen />"}} />;
}

export default Paymentpage
