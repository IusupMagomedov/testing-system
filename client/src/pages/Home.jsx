import { useHomePage } from '../hooks/useHomePage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const Home = () => {
    
    
    const { isLoading, error, homePageText} = useHomePage();


    if(isLoading) {
        return <Typography variant="h3" align='center' gutterBottom> Loading... </Typography>
    }
    

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h5" align='center' gutterBottom> {homePageText && homePageText.title} </Typography>
            <Typography variant="subtitle1" align='center'  gutterBottom> {homePageText && homePageText.text} </Typography>

            {error && <Alert severity="error">{error}</Alert>}
        </Box>
    )
}

export default Home;