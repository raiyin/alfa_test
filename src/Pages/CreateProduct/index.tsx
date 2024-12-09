import { Box, Button, IconButton, Snackbar, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from './styles.module.css';
import { Product } from "../../types";
import { useProductsStore } from "../../stores/ProductsStore";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { NumericFormat, NumericFormatProps } from 'react-number-format';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string; }; }) => void;
    name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
    function NumericFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                valueIsNumericString
                prefix="$"
            />
        );
    },
);

export const CreateProduct = () => {
    const navigate = useNavigate();

    const { addOneToProducts } = useProductsStore();
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState<string | boolean>("");
    const [price, setPrice] = useState({ priceValue: '0', });
    const [priceError, setPriceError] = useState<string | boolean>("");
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState<string | boolean>("");
    const [image, setImage] = useState("");
    const [imageError, setImageError] = useState<string | boolean>("");


    const [openErrorMessage, setOpenErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
        if (event.target.value.length < 3) {
            setTitleError("Название должно содержать не менее 3 букв");
        } else {
            setTitleError(false);
        }
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(+event.target.value)) {
            setPriceError("Некорректное значение цены");
        } else {
            setPriceError(false);
            setPrice({
                'priceValue': event.target.value
            });
        }
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
        if (event.target.value.length < 10) {
            setDescriptionError("Описание должно содержать не менее 10 символов");
        } else {
            setDescriptionError(false);
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
        if (!/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})\/\w+\.(jpg|jpeg|webp|png)/gi.test(event.target.value)) {
            setImageError("Необходимо ввести ссылку на изображение, принимаются расширения *.jpg, *.jpeg, *.png, *.webp");
        } else {
            setImageError(false);
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.target.reportValidity();
        if (!event.target.checkValidity()) {
            setErrorMessage('Некоторые поля формы не заполнены или заполнены некорректно');
            setOpenErrorMessage(true);
            return;
        }
        const newProduct: Product = {
            // Make pseudonumber from 1000 to 10000
            id: 1000 + Math.floor(Math.random() * 10000),
            title: title,
            price: +price.priceValue,
            images: [image],
            description: description,
            isFav: false
        };
        addOneToProducts(newProduct);
        navigate('/products');
    };

    const handleReset = () => {
        navigate('/products');
    };

    const handleErrorClose = () => {
        setOpenErrorMessage(false);
    };

    const errorAction = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleErrorClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    return (
        <div className={styles.creation}>

            <Box
                component="form"
                onSubmit={handleSubmit}
                onReset={handleReset}
                noValidate

                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    width: '30vw',
                    minWidth: '320px',
                    borderRadius: '1rem',
                    boxShadow: 3,
                    padding: '1rem'
                }}
            >
                <TextField
                    label="Название"
                    required
                    value={title}
                    onChange={handleTitleChange}
                    error={!!titleError}
                    helperText={titleError}
                    onInvalid={e => console.log("Название " + e)}
                />

                <TextField
                    label="Цена"
                    name="priceValue"
                    required
                    onInvalid={e => console.log("Цена " + e)}
                    value={price.priceValue}
                    onChange={handlePriceChange}
                    error={priceError === "" || priceError === true}
                    helperText={priceError}
                    id="formatted-numberformat-input"
                    slotProps={{
                        input: {
                            inputComponent: NumericFormatCustom as any,
                        },
                    }}
                    variant="standard"
                />

                <TextField
                    label="Описание"
                    required
                    value={description}
                    onChange={handleDescriptionChange}
                    error={!!descriptionError}
                    helperText={descriptionError}
                    onInvalid={e => console.log("Описание " + e)}
                />

                <TextField
                    label="Избражение"
                    required
                    value={image}
                    onChange={handleImageChange}
                    error={!!imageError}
                    helperText={imageError}
                    onInvalid={e => console.log("Избражение " + e)}
                />

                <div className={styles.creation__buttons}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Создать
                    </Button>
                    <Button
                        component={NavLink}
                        to="/products"
                        variant="contained"
                        color="primary"
                        type="reset"
                    >
                        Отменить
                    </Button>
                </div>

            </Box>

            <Snackbar
                open={openErrorMessage}
                autoHideDuration={6000}
                onClose={handleErrorClose}
                message={errorMessage}
                action={errorAction}
            />
        </div>
    );
};



export default CreateProduct;
