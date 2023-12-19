import Box from '@mui/material/Box';
import { useLogout } from '../hooks/useLogout';

import ProfileMenu from './ProfileMenu';

import './navigator.css';
import { Typography } from '@mui/material';




const Navbar = props => {
    const { logout } = useLogout();
    const buttonHandler = event => {
        switch (event.target.innerText) {
            case 'Logout':
                window.location.href = "/";
                logout();
                break;
            case 'Login':
                window.location.href = "/login";
                break;    
            case 'Home':
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
                <Typography variant="h3">Система тестирования знаний</Typography>
                <ProfileMenu 
                    handler={buttonHandler} 
                />
            </Box>
            
        </header>
    )
}

export default Navbar;
