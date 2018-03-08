import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import ContactIcon from 'material-ui-icons/Contacts';
import IntegrationIcon from 'material-ui-icons/Extension';
import SettingsIcon from 'material-ui-icons/Settings';
import AccountIcon from 'material-ui-icons/Work';
import { Link } from "react-router-dom";

class MainSideMenu extends Component {
    // TODO: add constructor for routing etc
    constructor(props) {
        super(props);
        this.state = {};
        // this.routeToTable = this.routeToTable.bind(this);
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <List component="nav">
                    <Link to="/dashboard">
                        <ListItem button>
                            <ListItemIcon>
                                <ContactIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                    <Link to="/myTeam">
                        <ListItem button>
                            <ListItemIcon>
                                <AccountIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Team" />
                        </ListItem>
                    </Link>
                    <Link to="/players">
                        <ListItem button>
                            <ListItemIcon>
                                <IntegrationIcon />
                            </ListItemIcon>
                            <ListItemText primary="Players" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List component="nav">
                    <Link to="/settings">
                        <ListItem button>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        );
    }
}

export default MainSideMenu;


