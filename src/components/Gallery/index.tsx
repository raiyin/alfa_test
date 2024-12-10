import { useProductsStore } from '../../stores/ProductsStore';
import ProductCard from '../ProductCard';
import styles from './styles.module.css';

const Gallery = () => {
    const products = useProductsStore((state) => state.products);
    const filter = useProductsStore((state) => state.filter);
    const searchPattern = useProductsStore((state) => state.searchPattern);

    return (
        <div className={styles.gallery}>
            {
                products
                    .filter(p => filter === 'all' ? true : p.isFav)
                    .filter(p => searchPattern === "" ? p : p.title.includes(searchPattern))
                    .map(product => <ProductCard {...product} key={product.id} />)
            }
        </div>
    );
};

export default Gallery;
