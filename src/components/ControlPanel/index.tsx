import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FilterOptions } from '../../types';
import { useProductsStore } from '../../stores/ProductsStore';
import styles from "./styles.module.css";

const ControlPanel = () => {

    const filter = useProductsStore((state) => state.filter);
    const setFilter = useProductsStore((state) => state.setFilter);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter((event.target as HTMLInputElement).value as FilterOptions);
    };

    return (
        <div className={styles.panel}>

            <Button
                component={NavLink}
                to="/create-product"
                variant="contained"
                color="primary"
                size='small'
                sx={{
                    height: "3rem",
                    minWidth: "9rem",
                }}
            >
                Создать карту
            </Button>

            <FormControl>
                <FormLabel
                    id="row-radio-buttons-group-label"
                    sx={{
                        textDecoration: "none",
                        textAlign: "center"
                    }}>
                    Что показывать?
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={filter}
                    onChange={handleChange}
                >
                    <FormControlLabel value="all" control={<Radio />} label="Всё" />
                    <FormControlLabel value="favourites" control={<Radio />} label="Избранное" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default ControlPanel;
