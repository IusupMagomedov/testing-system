import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';


const Navbar = () => {
 
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <Typography variant="h5" gutterBottom>
                        h5. Heading
                    </Typography>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;
