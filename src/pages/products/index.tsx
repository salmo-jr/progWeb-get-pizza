import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import api from '../../services/api';
import './styles.css';

interface IProduct {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const loadingProducts = async () => {
        const results = await api.get(`/?apikey=925eba28&s=batman`);
        setProducts(results.data.Search);
    };

    useEffect(() => {
        loadingProducts();
    }, []);

    return(
        <>
            <h1>Produtos</h1>
            <ul>
                {products.map(p => {
                    return(
                        <li>
                            <ProductCard
                                Title={p.Title}
                                Year={p.Year}
                                imdbID={p.imdbID}
                                Type={p.Type}
                                Poster={p.Poster}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Products;