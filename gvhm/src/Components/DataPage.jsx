import React from 'react';

const DataPage = (props) => {
    return ( 
        <div className="mainpage">
            <h1>Gun Violence Heat Map</h1>
            <iframe src="https://plot.ly/~krsmith/2.embed"         
                height="600" width="100%"         
                scrolling="no" seamless="seamless"         
                frameBorder="0"> 
            </iframe>
        </div>
     );
}
 
export default DataPage;