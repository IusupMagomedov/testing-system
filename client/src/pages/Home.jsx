import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
    const [ homePageText, setHomePageText ] = useState(null)

    useEffect(() => {
        const fetchWorkouts =  () => {
            fetch('/api/homepage')
                .then(response => {
                    console.log( "response in homepage useEffect: ", response);
                    return response.json();
                })
                .then(json => {
                    console.log( "JSON in homepage useEffect: ", json);
                    return setHomePageText(json);
                })
        }

        fetchWorkouts();
    }, [])

    return (
        
        
        <Box sx={{ width: '100%' }}>
            
            {homePageText ? 
            <Typography variant="h3" align='center' gutterBottom> {homePageText.title} </Typography>: 
            <Typography variant="h3" align='center' gutterBottom> Loading... </Typography>}
                
        {/* //     
            
        //     <Typography variant="subtitle1" gutterBottom>
        //         {homePageText && .text}
        //     </Typography>
        //     <Typography variant="subtitle2" gutterBottom>
        //         {homePageText.text}
        //     </Typography>
        //     <Typography variant="body1" gutterBottom>
        //         {homePageText.text}
        //     </Typography>
        //     <Typography variant="body2" gutterBottom>
        //         {homePageText.text}
        //     </Typography>
        //     <Typography variant="button" display="block" gutterBottom>
        //         {homePageText.text}
        //     </Typography>
        //     <Typography variant="caption" display="block" gutterBottom>
        //         {homePageText.text}
        //     </Typography>
        //     <Typography variant="overline" display="block" gutterBottom>
        //         {homePageText.text}
        //     </Typography> 
        // </Box>   */}
       
        </Box>
    )
}

export default Home;