import { Product } from "../types";

export const fetchProducts = async (offset: number, limit: number) => {
    const url = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;
    const request = new Request(url,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Options'
            },
            redirect: 'follow',
            cache: 'no-store'
        }
    );

    const response = await fetch(request);

    if (!response.ok) {
        throw new Error('Ошибка загрузки товаров');
    }

    return await response.json() as Product[];
};

export const fetchProduct = async (productId: number) => {
    const url = `https://api.escuelajs.co/api/v1/products/${productId}`;
    const request = new Request(url,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Options'
            },
            redirect: 'follow',
            cache: 'no-store'
        }
    );

    const response = await fetch(request);

    if (!response.ok) {
        throw new Error('Ошибка загрузки товара');
    }

    return await response.json() as Product;
};
