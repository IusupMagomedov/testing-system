import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import ProfileMenu from './ProfileMenu';

import './navigator.css';



const Navbar = () => {
 
    return (
        <header>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                }}
            >
                <Button variant="contained">Start</Button>
                <Button variant="contained">Settings</Button>
                <ProfileMenu 
                    // username={username}
                />
            </Box>
            
        </header>
    )
}

export default Navbar;
