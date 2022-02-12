import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { AppContext } from '../../context'
import Spinner from "../../components/spinner";
import Slider from "../../components/slider";
import ProductCard from "../../components/product-card";

const HomePage = () => {

  const {store, actions} = useContext(AppContext);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {response} = store;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/get_all_products`);
        if (res.status !== 200) throw new Error(res);
        actions.fetchProducts(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log({ error });
        setError(error);
      }
    };
    fetchData();
  }, [actions]);

  const result = (
    <div className='App'>
      <div className='product-list'>
        {response.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );

  if (error) return <div className='fetched'>An error occured while fetching products: {error.message}</div>;

  return (
    <>
      <Slider response={response} />;
      {isLoading ? <Spinner /> : result};
    </>
  );
};
export default HomePage;
