import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css';

const NotFound = () => {
    return (
        <div className={styles['not-found']}>
            <div>NotFound</div>
            <Button
                component={NavLink}
                to="/products"
                variant="contained"
                color="primary"
            >
                К товарам
            </Button>
        </div>
    );
};

export default NotFound;
