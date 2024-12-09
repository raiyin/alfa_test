import styles from './styles.module.css';
import ControlPanel from "../../components/ControlPanel";
import Gallery from "../../components/Gallery";

const Products = () => {
    return (
        <div className={styles.products}>
            <div className={styles.products__controls}>
                <ControlPanel />
            </div>

            <Gallery />
        </div>
    );
};

export default Products;
