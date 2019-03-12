import React from 'react';

const DataPage = (props) => {
    return ( 
        <div className="mainpage">
            <h1>Gun Violence Heat Map</h1>
            {/* <iframe 
                src="https://plot.ly/~krsmith/2.embed"         
                height="600" width="100%"         
                scrolling="no" seamless="seamless"         
                frameBorder="0"> 
            </iframe> */}
            <div className="flex-container">
                <iframe 
                    width="900" 
                    height="800" 
                    frameborder="0" 
                    scrolling="no" 
                    src="//plot.ly/~otillieodd/137.embed">
                </iframe>
                <iframe 
                    width="900" 
                    height="800" 
                    frameborder="0" 
                    scrolling="no" 
                    src="//plot.ly/~otillieodd/160.embed">
                </iframe>
            </div>
            {/* <iframe
                className="lastgraph" 
                width="900" 
                height="800" 
                frameborder="0" 
                scrolling="no" 
                src="//plot.ly/~krsmith/4.embed">
            </iframe> */}
        </div>
     );
}
 
export default DataPage;