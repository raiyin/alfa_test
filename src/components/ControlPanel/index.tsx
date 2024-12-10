import { Button, FormControl, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FilterOptions } from '../../types';
import { useProductsStore } from '../../stores/ProductsStore';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./styles.module.css";
import { debounce } from "lodash";

const ControlPanel = () => {

    const filter = useProductsStore((state) => state.filter);
    const setFilter = useProductsStore((state) => state.setFilter);
    const setSearchPattern = useProductsStore((state) => state.setSearchPattern);

    const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter((event.target as HTMLInputElement).value as FilterOptions);
    };

    const handleChangeSearchQuery = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSearchPattern(event.target.value);
    },
        1000,
        { leading: false, maxWait: 1500, trailing: true });

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
                    onChange={handleChangeFilter}
                >
                    <FormControlLabel value="all" control={<Radio />} label="Всё" />
                    <FormControlLabel value="favourites" control={<Radio />} label="Избранное" />
                </RadioGroup>
            </FormControl>

            <TextField
                onChange={handleChangeSearchQuery}
                id="input-with-icon-textfield"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    },
                }}
                variant="outlined"
            />
        </div>
    );
};

export default ControlPanel;
