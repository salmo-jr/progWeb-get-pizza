interface IProduct {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface IProductCardProps {
    data: IProduct;
}

const ProductCard = ({data}: IProductCardProps) => {
    return (
        <div>
            <img alt={data.Title} src={data.Poster} />
            <div>
                <h1>{data.Title}</h1>
                <h2>{data.Year} [{data.imdbID}]</h2>
                <h3>{data.Type}</h3>
            </div>
        </div>
    );
}

export default ProductCard;