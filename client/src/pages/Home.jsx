import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAuthContext } from '../hooks/useAuthContext';
import Alert from '@mui/material/Alert';

const Home = () => {
    
    const { user } = useAuthContext();
    const [ loaded, setLoaded ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ homePageText, setHomePageText ] = useState(null)

    const fetchGreetings = async () => {
        const response = await fetch('/api/homepage/greetings', {
            method:'GET'
        })
        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            
            setHomePageText(json);
            setLoaded(true);
        }
    };
    
    const fetchInitials = async () => {
        const response = await fetch('/api/homepage/initials', {
            method:'POST', 
            headers: {
                'authorization': `Barier ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username':user.username})
        })

        
        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setHomePageText(json);
            setLoaded(true);
        }
    };
    

    useEffect(() => {
        user ? fetchInitials() : fetchGreetings();
    }, [user])

    return (
        <Box sx={{ width: '100%' }}>
            {loaded 
            ? 
            <>
                <Typography variant="h3" align='center' gutterBottom> {homePageText.title} </Typography>
                <Typography variant="subtitle1" align='center'  gutterBottom> {homePageText.text} </Typography>
            </>
            : 
            <Typography variant="h3" align='center' gutterBottom> Loading... </Typography>}
            {error && <Alert severity="error">{error}</Alert>}
        </Box>
    )
}

export default Home;