import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Button
                component={NavLink}
                to="/products"
                variant="contained"
                color="primary"
            >
                К товарам
            </Button>
        </>
    );
};

export default Home;
