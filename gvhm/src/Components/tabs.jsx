

/*== Tabbed Content Component ==================================================

    Provides the component "Tabs", which displays several iFrames within a
    container with a bar of tabs at the top. Clicking on a tab displays the
    corresponding iFrame. The tabs component must be provided the following
    props:

        tabsData(array): an array of objects in this format:
            title(string): A unique string
            description(string): The text to show in the clickable tab
            url(string): The URL of a web page to be shown in the iFrame

*/

//-- Dependencies --------------------------------
import React, {useState} from 'react';

//-- Main Component (tab container) --------------
export default function(props) {
    // Get data from props
    const tabsData = props.tabs;
    if(!tabsData.length) {
        return '';
    }
    // State Management (hooks)
    const firstTab = tabsData[0];
    const [focusTitle, setFocusedTab] = useState(firstTab.title);
    function onClick(eventClick) {
        setFocusedTab(eventClick.currentTarget.dataset.title);
    }
    // Get the focused tab (only one)
    let focusedTab = tabsData.filter(tab => tab.title === focusTitle);
    focusedTab = focusedTab[0];
    // Render all tabs, and then render focused tab content (iframe)
    return (
        <div className="tab-comp-container">
            {/* Tab Titles Bar */}
            <div className="tabs">
                {tabsData.map(tab => {
                    // Check if current tab is focused / active
                    let active = false;
                    if(tab.title == focusTitle) {
                        active = true;
                    }
                    // Render each tab
                    return (
                        <TabTitle
                            title={tab.title}
                            description={tab.description}
                            active={active}
                            onClick={onClick}
                        />
                    );
                })}
            </div>
            {/* Focused Tab Content */}
            <div className="">
                <iframe
                    title={focusedTab.title}
                    src={focusedTab.url}
                    width='100%'
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                />
            </div>
        </div>
    );
}

//-- Sub Component (tab title) -------------------
function TabTitle(props) {
    // Get data from props
    const tabTitle = props.title;
    const active = props.active;
    const tabDescription = props.description;
    const onClick = props.onClick;
    // Determine class name (active or not)
    let classFull = 'tab'
    if(active) {
        classFull += ' active-tab'
    }
    // Render clickable tab title
    return (
        <div
            key={tabTitle}
            className={classFull}
            data-title={tabTitle}
            onClick={onClick}
            children={
                <p>{tabDescription}</p>
            }
        />
    );
}
