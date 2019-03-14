
//-- Dependencies --------------------------------
import React, {useState} from 'react';
import NavBar from './NavBar'
import Tabs from './tabs';

//-- Constant Data -------------------------------
function tabData(title, description, url) {
    return {
        title: title,
        description: description,
        url: url,
    };
} 
const TABS_BY_STATE = [
    tabData('state-5-year', 'Last 5 Years', 'https://plot.ly/~krsmith/2.embed'),
    tabData('state-2014', '2014', '//plot.ly/~krsmith/20.embed'),
    tabData('state-2015', '2015', '//plot.ly/~krsmith/22.embed'),
    tabData('state-2016', '2016', '//plot.ly/~krsmith/24.embed'),
    tabData('state-2017', '2017', '//plot.ly/~krsmith/26.embed'),
    tabData('state-2018', '2018', '//plot.ly/~krsmith/28.embed'),
];
const TABS_BY_COUNTY = [
    tabData('county-5-year', 'Last 5 Years', '//plot.ly/~krsmith/4.embed'),
    tabData('county-2014', '2014', '//plot.ly/~krsmith/10.embed'),
    tabData('county-2015', '2015', '//plot.ly/~krsmith/12.embed'),
    tabData('county-2016', '2016', '//plot.ly/~krsmith/14.embed'),
    tabData('county-2017', '2017', '//plot.ly/~krsmith/16.embed'),
    tabData('county-2018', '2018', '//plot.ly/~krsmith/18.embed'),
];

//-- Render --------------------------------------
export default (props) => {
    // Hooks
    const [selectedStateTabTitle, setSelectedStateTab] = useState('state-5-year')
    const [selectedCountyTabTitle, setSelectedCountyTab] = useState('county-5-year')
    function setActiveCounty(eventClick) {
        setSelectedCountyTab(eventClick.currentTarget.dataset.title);
    }
    function setActiveState(eventClick) {
        setSelectedStateTab(eventClick.currentTarget.dataset.title);
    }
    // JSX Structure
    return ( 
        <div className="mainpage">
            <NavBar {...props } />
            <div className="flex-container">

                {/*State Tabs Selector*/}
                <Tabs
                    tabs={TABS_BY_STATE}
                    focusTitle={selectedStateTabTitle}
                    onClick={setActiveState}
                />

                {/*County Maps Tab selector */}
                <Tabs
                    tabs={TABS_BY_COUNTY}
                    focusTitle={selectedCountyTabTitle}
                    onClick={setActiveCounty}
                />

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
