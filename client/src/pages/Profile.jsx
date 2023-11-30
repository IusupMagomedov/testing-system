import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useAuthContext } from '../hooks/useAuthContext';


const Profile = () => {
    const { user } = useAuthContext();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    {user && user.username}
                </Grid>
                <Grid item xs={4}>
                    xs=4
                </Grid>
                <Grid item xs={4}>
                    xs=4
                </Grid>
                <Grid item xs={8}>
                    xs=8
                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile;