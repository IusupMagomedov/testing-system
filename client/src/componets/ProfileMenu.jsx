import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

export default function ProfileMenu(props) {
  const { user } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const linkStyles = { textDecoration: 'none', color: 'inherit' };


  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        {user ? user.username : 'Login'}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={props.handler}>
          <Link to='/' style={linkStyles}>
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={props.handler}>
          <Link to='/profile' style={linkStyles}>
            Profile
          </Link>
        </MenuItem>
        { user && <MenuItem onClick={props.handler}>
          Logout
        </MenuItem> }
        
        
        { !user && <MenuItem onClick={props.handler}>
          <Link to='/login' style={linkStyles}>
            Login
          </Link>
        </MenuItem> }
      </Menu>
    </div>
  );
}