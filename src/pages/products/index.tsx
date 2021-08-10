import { useEffect, useState } from 'react';
import api from '../../services/api';
import ProductCard from '../../components/productCard';
import SimplePageTemplate from "../../components/simplePageTemplate";

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
        <SimplePageTemplate>
            <h1>Produtos</h1>
            <ul>
                {products.map(p => {
                    return(
                        <li><ProductCard data={p} /></li>
                    );
                })}
            </ul>
        </SimplePageTemplate>
    );
}

export default Products;