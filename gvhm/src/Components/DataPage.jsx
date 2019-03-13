import React from 'react';

import NavBar from './NavBar'

const DataPage = (props) => {
    return ( 
        <div className="mainpage">
            <NavBar {...props } />
            <div className="flex-container">
            <div className="iframecontainer">
                <iframe 
                    src="https://plot.ly/~krsmith/2.embed"         
                    height="600" width='100%'         
                    scrolling="no" seamless="seamless"         
                    frameBorder="0"> 
                </iframe>
            </div>
            <div className="iframecontainer">
                <iframe
                    className="lastgraph" 
                    height="600" width='100%'  
                    frameborder="0" 
                    scrolling="no" 
                    src="//plot.ly/~krsmith/4.embed">
                </iframe>
            </div>
            <div className="iframecontainer">
                <iframe 
                    height="600" width='100%'  
                    frameborder="0" 
                    scrolling="no" 
                    src="//plot.ly/~otillieodd/137.embed">
                </iframe>
            </div>
            <div className="iframecontainer">
            <iframe 
                height="600" width='100%'  
                frameborder="0" 
                scrolling="no" 
                src="//plot.ly/~otillieodd/160.embed">
            </iframe>
            </div>
            </div>
        </div>
     );
}
 
export default DataPage;