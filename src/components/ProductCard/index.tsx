import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '../../types';
import { NavLink } from 'react-router-dom';
import { useProductsStore } from '../../stores/ProductsStore';
import { useState } from 'react';


const ProductCard = (props: Product) => {
    const { setFav, unsetFav, deleteFromProducts } = useProductsStore();
    const [isFav, setIsFav] = useState(props.isFav);

    const onFavIconClicked = (event: React.MouseEvent<HTMLElement>) => {
        if (isFav) { unsetFav(props.id); }
        else
            setFav(props.id);

        setIsFav(prev => !prev);
        event.stopPropagation();
        event.preventDefault();
    };

    const onDeleteIconClicked = (event: React.MouseEvent<HTMLElement>) => {
        deleteFromProducts(props.id);
        event.stopPropagation();
        event.preventDefault();
    };

    return (
        <Card sx={{
            textDecoration: 'none',
            width: '100%',
            minWidth: "300px",
        }}
            component={NavLink}
            to={`/products/${props.id}`} >

            <CardMedia
                component="img"
                height="194"
                image={props.images[0]}
                alt={props.title}
            />

            <CardContent>
                <Typography variant="h6"
                    sx={{
                        color: 'text.primary',
                        fontWeight: 'bold',
                        textWrap: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                    {props.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        height: '6rem'
                    }}>
                    {props.description}
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton aria-label="add to favorites" onClick={onFavIconClicked}>
                    <FavoriteIcon style={isFav ? { color: "red" } : { color: "grey" }} />
                </IconButton>
                <IconButton aria-label="delete" onClick={onDeleteIconClicked}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>

        </Card >
    );
};

export default ProductCard;
