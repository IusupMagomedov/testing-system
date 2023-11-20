import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import ProfileMenu from './ProfileMenu';

import './navigator.css';




const Navbar = () => {
    const buttonHandler = event => {
        console.log(event.target.innerText);
    }
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
                <Button variant="contained" onClick={buttonHandler}>Start</Button>
                <Button variant="contained" onClick={buttonHandler}>Settings</Button>
                <ProfileMenu 
                    handler={buttonHandler}
                    // username={username}
                />
            </Box>
            
        </header>
    )
}

export default Navbar;
