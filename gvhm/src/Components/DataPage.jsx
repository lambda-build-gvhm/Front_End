import React from 'react';

import NavBar from './NavBar'

const DataPage = (props) => {
    return ( 
        <div className="mainpage">
            <NavBar {...props } />
            <div className="flex-container">
                {/* By state maps */}
                <div className="iframecontainer">
                    <iframe src="https://plot.ly/~krsmith/2.embed" height="600" width='100%' scrolling="no" frameBorder="0" /> 
                </div>
                <div className="iframecontainer">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/20.embed" />
                </div>
                <div className="iframecontainer">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/22.embed" /> 
                </div>
                <div className="iframecontainer">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/24.embed" /> 
                </div>
                <div className="iframecontainer">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/26.embed" />
                </div>
                <div className="iframecontainer">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/28.embed"></iframe>
                </div>

                {/* BY COUNTY MAPs */}

                <div className="iframecontainer">
                    <iframe height="600" width='100%' frameborder="0" scrolling="no" src="//plot.ly/~krsmith/4.embed" />
                </div>
                <div className="iframecontainer">
                    <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/10.embed" />
                </div>
                <div className="iframecontainer">
                    <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/12.embed" />
                </div>
                <div className="iframecontainer">
                    <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/14.embed" />
                </div>
                <div className="iframecontainer">
                    <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/16.embed" />
                </div>
                {/* Additional Graphics */}
                <div className="iframecontainer">
                    <iframe src="//plot.ly/~otillieodd/137.embed" height="600" width='100%' frameborder="0" scrolling="no" />
                </div>
                <div className="iframecontainer">
                    <iframe height="600" width='100%' frameborder="0" scrolling="no" src="//plot.ly/~otillieodd/160.embed" />
                </div>
                <div className="iframecontainer">
                    
                </div>




            </div>
        </div>
     );
}
 
export default DataPage;