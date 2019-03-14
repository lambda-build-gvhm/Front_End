import React, {useState} from 'react';

import NavBar from './NavBar'

const DataPage = (props) => {
    const [selectedStateTabTitle, setSelectedStateTab] = useState('state-5-year')
    const [selectedCountyTabTitle, setSelectedCountyTab] = useState('county-5-year')
    
    const setActiveCounty = e =>{
        setSelectedCountyTab(e.currentTarget.dataset.title)
    }
    
    // Tab Title Selection
    function handleClick(clickEvent) {
        setSelectedStateTab(clickEvent.currentTarget.dataset.title)
    }
    function generateTabJsx(tabData, focusTitle) {
        // This could be a sub component
        const tabTitle = tabData[0];
        const tabDescription = tabData[1];
        let classFull = 'tab'
        if(focusTitle === tabTitle) {
            classFull += ' active-tab'
        }
        return (
            <div
                key={tabTitle}
                className={classFull}
                data-title={tabTitle}
                onClick={handleClick}
            >
                <p>{tabDescription}</p>
            </div>
        );
    }

    return ( 
        <div className="mainpage">
            <NavBar {...props } />
            <div className="flex-container">

                {/*State Tabs Selector*/}
                <div className="tab-comp-container">
                    <div className="tabs">
                    {
                        [
                            ['state-5-year', 'Last 5 Years'],
                            ['state-2014', '2014'],
                            ['state-2015', '2015'],
                            ['state-2016', '2016'],
                            ['state-2017', '2017'],
                            ['state-2018', '2018'],
                        ].map(tab => generateTabJsx(tab, selectedStateTabTitle))
                    }
                    </div>
                    <div className="">
                        { 
                        [   <iframe title='state-5-year' src="https://plot.ly/~krsmith/2.embed" height="600" width='100%' scrolling="no" frameBorder="0" />, 
                            <iframe title='state-2014' width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/20.embed" />,
                            <iframe title='state-2015' width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/22.embed" />, 
                            <iframe title='state-2016' width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/24.embed" />,
                            <iframe title='state-2017' width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/26.embed" />,
                            <iframe title='state-2018' width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/28.embed" />]
                                .filter(graphic => graphic.props.title == selectedStateTabTitle)[0]
                        }
                    </div>
                </div>

                {/*County Maps Tab selector */}
                <div className="tab-comp-container">
                    <div className="tabs">
                        <div className="tab active-tab" data-title='county-5-year' onClick={(e) => setActiveCounty(e)}>
                            <p>Last 5 years</p>
                        </div>
                        <div className="tab" data-title='county-2014' onClick={(e) => setActiveCounty(e)}>
                            <p>2014</p>
                        </div>
                        <div className="tab" data-title='county-2015' onClick={(e) => setActiveCounty(e)}>
                            <p>2015</p>
                        </div>
                        <div className="tab" data-title='county-2016' onClick={(e) => setActiveCounty(e)}>
                            <p>2016</p>
                        </div>
                        <div className="tab" data-title='county-2017' onClick={(e) => setActiveCounty(e)}>
                            <p>2017</p>
                        </div>
                        <div className="tab" data-title='county-2018' onClick={(e) => setActiveCounty(e)}>
                            <p>2018</p>
                        </div>
                    </div>
                    <div className="">
                        {
                        [<iframe title='county-5-year' height="600" width='100%' frameborder="0" scrolling="no" src="//plot.ly/~krsmith/4.embed" />,
                            <iframe title='county-2014' width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/10.embed" />,
                            <iframe title='county-2015' width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/12.embed" />,
                            <iframe title='county-2016' width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/14.embed" />,
                            <iframe title='county-2017' width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/16.embed" />,
                            <iframe title='county-2018' width="100%" height="600" frameborder="0" scrolling="no" src="//plot.ly/~krsmith/18.embed" />,]
                                .filter(graphic =>  graphic.props.title == selectedCountyTabTitle)[0]
                        }
                    </div>
                </div>
                {/* Additional Graphics */}
                <div className="iframecontainer">
                    <iframe
                        src="https://gvheatmap.herokuapp.com/html/incident_severity_map.html"
                        height="600"
                        width="100%"
                        scrolling="no"
                        seamless="seamless"
                        frameBorder="0"
                    />
                </div>
                <div className="iframecontainer">
                    <iframe src="//plot.ly/~otillieodd/137.embed" height="600" width='100%' frameborder="0" scrolling="no" />
                </div>
                <div className="iframecontainer">
                    <iframe height="600" width='100%' frameborder="0" scrolling="no" src="//plot.ly/~otillieodd/160.embed" />
                </div>

            </div>
        </div>
     );
}
 
export default DataPage;