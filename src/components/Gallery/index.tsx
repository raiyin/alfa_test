import { useProductsStore } from '../../stores/ProductsStore';
import ProductCard from '../ProductCard';
import styles from './styles.module.css';

const Gallery = () => {
    const products = useProductsStore((state) => state.products);
    const filter = useProductsStore((state) => state.filter);

    return (
        <div className={styles.gallery}>
            {
                products
                    .filter(p => filter === 'all' ? true : p.isFav)
                    .map(product => <ProductCard {...product} key={product.id} />)
            }
        </div>
    );
};

export default Gallery;
