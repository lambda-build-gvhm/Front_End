import React from 'react';

import NavBar from './NavBar'

const DataPage = (props) => {
    return ( 
        <div className="mainpage">
            <NavBar {...props }/>
            <div className="flex-container">
            <iframe 
                src="https://plot.ly/~krsmith/2.embed"         
                height="600" width="112.999%"         
                scrolling="no" seamless="seamless"         
                frameBorder="0"> 
            </iframe>
            <iframe
                className="lastgraph" 
                width="900" 
                height="800" 
                frameborder="0" 
                scrolling="no" 
                src="//plot.ly/~krsmith/4.embed">
            </iframe>
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
        </div>
     );
}
 
export default DataPage;