import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddBoxIcon from '@material-ui/icons/AddBox';
import WorkIcon from '@material-ui/icons/Work';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CommentIcon from '@material-ui/icons/Comment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const SidebarData = [
    {
        title : "Dashboard" ,
        icon : <DashboardIcon /> ,
        link : "/home"
    },
    {
        title : "Create Group" ,
        icon : <AddBoxIcon /> ,
        link : "/create"
    },
    {
        title : "Project" ,
        icon : <WorkIcon /> ,
        link : "/project"
    },
    {
        title : "My Task" ,
        icon : <PlaylistAddCheckIcon /> ,
        link : "/task"
    },
    {
        title : "Calendar" ,
        icon : <EventIcon /> ,
        link : "/calendar"
    },
    {
        title : "Setting" ,
        icon : <SettingsIcon /> ,
        link : "/setting"
    },
    {
        title : "Message" ,
        icon : <EmailIcon /> ,
        link : "/message"
    },
    {
        title : "Notification" ,
        icon : <NotificationsIcon /> ,
        link : "/notification"
    },
    {
        title : "Comment" ,
        icon : <CommentIcon /> ,
        link : "/comment"
    },
    {
        title : "Log out" ,
        icon : <ExitToAppIcon /> ,
        link : "/"
    },
];
