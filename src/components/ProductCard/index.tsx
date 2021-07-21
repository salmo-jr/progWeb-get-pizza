import './styles.css';

interface IProduct {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

const ProductCard = ({
    Title,
    Poster,
    Year,
    Type,
    imdbID
}: IProduct) => {
    return (
        <div className="product-card">
            <img src={Poster} alt={Title} />
            <div>
                <h1>{Title}</h1>
                <h2>{Year} [{imdbID}]</h2>
                <h3>{Type}</h3>
            </div>
        </div>
    );
}

export default ProductCard;