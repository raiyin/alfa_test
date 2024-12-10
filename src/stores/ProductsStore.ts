import { create } from 'zustand';
import { FilterOptions, Product } from '../types';
import { devtools } from "zustand/middleware";
import { fetchProducts } from '../api/products';

export interface ProductsState {
    products: Array<Product>;
    filter: FilterOptions;
    searchPattern: string;
    offset: number;
    limit: number;
}

export interface ProductsAction {
    fetchProducts: () => Promise<void>;
    getProduct: (productId: number) => Product;
    setFilter: (flag: FilterOptions) => Promise<void>;
    setSearchPattern: (pattern: string) => void;
    addOneToProducts: (product: Product) => void;
    addManyToProducts: (products: Product[]) => void;
    deleteFromProducts: (productId: number) => void;
    setFav: (productId: number) => void;
    unsetFav: (productId: number) => void;
}

export const useProductsStore = create<ProductsState & ProductsAction>()(
    devtools(
        (set, get) => ({

            products: [],
            filter: 'all',
            searchPattern: '',
            offset: 0,
            limit: 20,

            fetchProducts: async () => {
                const data = await fetchProducts(get().offset, get().limit);
                set({ products: data });
            },

            getProduct: (productId: number) => {
                return get().products.filter(p => p.id === productId)[0];
            },


            setFilter: (flag: FilterOptions) => {
                set((state) => ({
                    ...state,
                    filter: flag,
                }));
            },

            setSearchPattern: (pattern: string) => {
                set((state) => ({
                    ...state,
                    searchPattern: pattern,
                }));
            },

            addOneToProducts: (product: Product) => {
                if (get().products.filter(p => p.id === product.id).length > 0) {
                    return;
                }

                set((state) => ({
                    ...state,
                    products: [{ ...product, isFav: false }, ...state.products]
                }));
            },


            addManyToProducts: (products: Product[]) => {
                products.forEach((product) => {
                    get().addOneToProducts(product);
                });
            },

            deleteFromProducts: (productId: number) => {
                if (get().products.filter(p => p.id === productId).length === 0) {
                    return;
                }

                set((state) => ({
                    ...state,
                    products: [...(state.products.filter(p => p.id !== productId))]
                }));
            },

            setFav: (productId: number) => {
                set((state) => ({
                    ...state,
                    products: [...state.products.map(p => p.id == productId ? { ...p, isFav: true } : p)]
                }));
            },

            unsetFav: (productId: number) => {
                set((state) => ({
                    ...state,
                    products: [...state.products.map(p => p.id == productId ? { ...p, isFav: false } : p)]
                }));
            }
        }
        )
    )
);
