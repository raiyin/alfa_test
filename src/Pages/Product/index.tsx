import { NavLink, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Product } from '../../types';
import { Button } from '@mui/material';
import { useProductsStore } from '../../stores/ProductsStore';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<Product>();

    const getProduct = useProductsStore((state) => state.getProduct);

    useEffect(() => {
        if (productId != undefined) {
            const storeProduct = getProduct(+productId);
            if (storeProduct != undefined) {
                setProduct(storeProduct);
            }
        }
    }, []);

    return (
        <div className={styles.container}>

            {
                product == undefined
                    ?
                    ""
                    :
                    <div className={styles.product}>

                        <div className={styles.product__header}>
                            <div className={styles.product__image}>
                                <img src={product?.images[0]} alt={product?.title} />
                            </div>
                            <div className={styles.product__info}>
                                <h1 className={styles.product__title}>
                                    {product?.title}
                                </h1>
                                <div className={styles.product__price}>
                                    Цена: {product?.price}$
                                </div>
                            </div>
                        </div>

                        <div className={styles.product__description}>
                            {product?.description}
                        </div>
                    </div>
            }


            <div className={styles['home-button']}>
                <Button
                    component={NavLink}
                    to="/products"
                    variant="contained"
                    color="primary"
                >
                    К товарам
                </Button>
            </div>
        </div>
    );
};

export default ProductPage;
