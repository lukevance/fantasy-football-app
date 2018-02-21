import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import ContactIcon from 'material-ui-icons/Contacts';
import IntegrationIcon from 'material-ui-icons/Extension';
import SettingsIcon from 'material-ui-icons/Settings';
import AccountIcon from 'material-ui-icons/Work';

class MainSideMenu extends Component {
    // TODO: add constructor for routing etc
    constructor(props) {
        super(props);
        this.state = {};
        // this.routeToTable = this.routeToTable.bind(this);
    }

    render(){
        const {classes, tableChanger} = this.props;
        return(
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button onClick={() => tableChanger("dashboard")}>
                        <ListItemIcon>
                            <ContactIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={() => tableChanger("myTeam")}>
                        <ListItemIcon>
                            <AccountIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Team" />
                    </ListItem>
                    <ListItem button onClick={() => tableChanger("players")}>
                        <ListItemIcon>
                            <IntegrationIcon />
                        </ListItemIcon>
                        <ListItemText primary="Players" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav">
                    <ListItem button onClick={() => tableChanger("settings")}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default MainSideMenu;


