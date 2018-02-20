import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class WeekSelectMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Change Week
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>16</MenuItem>
          <MenuItem onClick={this.handleClose}>15</MenuItem>
          <MenuItem onClick={this.handleClose}>14</MenuItem>
          <MenuItem onClick={this.handleClose}>13</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default WeekSelectMenu;