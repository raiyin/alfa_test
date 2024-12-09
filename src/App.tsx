import AppRouter from './routes';
import './App.css';
import { useEffect } from 'react';
import { useProductsStore } from './stores/ProductsStore';

function App() {

    const fetchProducts = useProductsStore((state) => state.fetchProducts);
    useEffect(() => {
        const fetchData = async () => {
            await fetchProducts();
        };
        fetchData();
    }, []);

    return (
        <AppRouter />
    );
}

export default App;
