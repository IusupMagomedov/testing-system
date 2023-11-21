import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import ProfileMenu from './ProfileMenu';

import './navigator.css';




const Navbar = props => {

    const buttonHandler = event => {
        switch (event.target.innerText) {
            case 'START':
                props.setMode('testing');
                break;
            case 'SETTINGS':
                props.setMode('general_settings');
                break;
            case 'Profile':
                props.setMode('profile_settings');
                break;    
            case 'Logout':
                props.setLoggedIn(false);
                break;
            case 'Login':
                props.setLoggedIn(true);
                break;    
            case 'Home':
                props.setMode('home');
                break;
            default:
                break;
        }
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
                <Button variant="contained" href='/questions' onClick={buttonHandler}>Start</Button>
                <Button variant="contained" onClick={buttonHandler}>Settings</Button>
                <ProfileMenu 
                    handler={buttonHandler}
                    loggedIn={props.loggedIn}
                    // username={username}
                />
            </Box>
            
        </header>
    )
}

export default Navbar;
