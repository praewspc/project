import React from 'react';
import BlockContain from './BlockContain';
import { SidebarData } from './SidebarData';

function Sidebar(){
    return (
        <div className="Sidebarmenu">
            <div className="Projectname1"> ADMINISTRATIVE </div>
            <div className="Projectname2"> SPECIAL PROJECT </div>

            <ul className="SidebarList">
                {SidebarData.map((val,key) => {
                    return (
                        <li 
                            key={key} 
                            className ="row"
                            id = {window.location.pathname == val.link ? "active" : ""}
                            onClick = { () => {
                                window.location.pathname = val.link ;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>

        </div>

        
    )
}

export default Sidebar;