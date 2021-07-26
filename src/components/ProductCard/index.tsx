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
        <div className="card" style={{width: 300}}>
            <img className="card-img-top" src={Poster} alt={Title} />
            <div className="card-body">
                <h1 className="card-title">{Title}</h1>
                <h2 className="card-text">{Year} [{imdbID}]</h2>
                <h3 className="card-text">{Type}</h3>
            </div>
        </div>
    );
}

export default ProductCard;