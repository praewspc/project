import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddBoxIcon from '@material-ui/icons/AddBox';
import WorkIcon from '@material-ui/icons/Work';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CommentIcon from '@material-ui/icons/Comment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { SidebarData } from '../home/SidebarData';
import OutlinedCard from './OutlinedCard';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            SPECIAL PROJECT
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            
              <ListItem button >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>

              <ListItem button >
                <ListItemIcon>
                    <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Create group" />
              </ListItem>

              <ListItem button >
                <ListItemIcon>
                    <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Project" />
              </ListItem>

              <ListItem button >
                <ListItemIcon>
                    <FormatListBulletedIcon />
                </ListItemIcon>
                <ListItemText primary="My Task" />
              </ListItem>

              <ListItem button >
                <ListItemIcon>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItem>

              <ListItem button >
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Setting" />
              </ListItem>
            
          </List>

          <Divider />

          <List>
            
            <ListItem button >
                <ListItemIcon>
                    <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Message" />
            </ListItem>

            <ListItem button >
                <ListItemIcon>
                    <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary="Notifaication" />
            </ListItem>

            <ListItem button >
                <ListItemIcon>
                    <CommentIcon />
                </ListItemIcon>
                <ListItemText primary="Comment" />
            </ListItem>

            <Divider />

            <ListItem button >
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
            </ListItem>

            

          </List>

        </div>
        </Drawer>
        <main className={classes.content}>
        <Toolbar />
        
        <OutlinedCard/>

        

      </main>
    </div>
  );
}
