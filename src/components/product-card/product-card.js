import { Link } from 'react-router-dom';

import "./product-card.css";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <article className='product-card'>
      <Link to={`products/${product.id}`} className='product-title'>{product.name}</Link>
      <Link to={`products/${product.id}`}>
        <img
          className='product-img'
          src={`${process.env.REACT_APP_API_URL}/static/img/${product.image.slice(7)}`}
          alt={product.name}
        />
      </Link>
      <div>{product.price}$</div>
      <div>Qty: {product.num_in_stock}</div>
    </article>
  );
};

export default ProductCard;
