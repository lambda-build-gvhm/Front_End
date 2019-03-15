
//-- Dependencies --------------------------------
import React from 'react';
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
    return ( 
        <div className="mainpage">
            <NavBar {...props } />
            <div className="flex-container">

                {/*State Tabs Selector*/}
                <h2>A state choropleth map sectioned by year. California, Texas, Florida, Illinois, and Ohio remain consistently some of the most violent states.</h2>
                <Tabs tabs={TABS_BY_STATE} />
                <img className='state-compare' src='https://files.slack.com/files-pri/T4JUEB3ME-FGZAJ11MK/comparison.png' alt='State-comparison-bar-graph' />
                <h2>A county choropleth map sectioned by year. To get more granular detail, click and hold your mouse over an area you wish to zoom in. To zoom out, double click.</h2>
                {/*County Maps Tab selector */}
                <Tabs tabs={TABS_BY_COUNTY} />

                {/* Additional Graphics */}
                {/* Bubble Graphic */}
                <h2> A density map that focuses on singular incidents of shootings. The more large the circle, the greater the amount of killings in the gun violence incident. You can explore the incidents by panning and zooming in on the areas. You can choose to look from a high level or zoom down to the street level.</h2>
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
                    <h2>  Move the left and right slider at the bottom to select the time frame. The chunk of time you select will show the amount of people both killed and injured by gun violence in that time frame. </h2>
                <div className="iframecontainer">
                    <iframe src="//plot.ly/~otillieodd/137.embed" height="600" width='100%' frameborder="0" scrolling="no" />
                </div>
                    <h2> A simple animation to track gun violence's total incident count in the form of linear change from the start to end of the data source. Please press play to see the animation </h2>
                <div className="iframecontainer">
                    <iframe height="600" width='100%' frameborder="0" scrolling="no" src="//plot.ly/~otillieodd/160.embed" />
                </div>

            </div>
        </div>
    );
}
