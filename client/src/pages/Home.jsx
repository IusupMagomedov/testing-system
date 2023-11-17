import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
    const [ homePageText, setHomePageText ] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/homepage');
            const json = await response.json();
            console.log( "JSON in homepage useEffect: ", json)
            console.log( "response in homepage useEffect: ", response)
            
            if(response.ok) {
                 setHomePageText(json);
            }
        }

        fetchWorkouts();
    }, [])

    return (
        { homePageText } ? <Box sx={{ width: '100%', maxWidth: 500 }}>
            
            <Typography variant="h3" gutterBottom>
                {homePageText.title}
            </Typography>
            {/*
            <Typography variant="subtitle1" gutterBottom>
                {homePageText.text}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                {homePageText.text}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {homePageText.text}
            </Typography>
            <Typography variant="body2" gutterBottom>
                {homePageText.text}
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
                {homePageText.text}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {homePageText.text}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                {homePageText.text}
            </Typography> */}
        </Box> : 
        <Box>
            <Typography variant="subtitle1" gutterBottom>
                Loading...
            </Typography>
        </Box>
    )
}

export default Home;