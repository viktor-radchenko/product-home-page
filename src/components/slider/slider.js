import { default as SliderLibrary } from "react-slick";

const Slider = ({ response }) => {
  const sliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderLibrary {...sliderSettings}>
      {response.map((product) => (
        <div className='slider-data' key={product.name}>
          <img
            className='product-img'
            src={`${process.env.REACT_APP_API_URL}/static/img/${product.image.slice(7)}`}
            alt={product.name}
            style={{
              maxHeight: "350px",
              objectFit: "contain",
              backgroundColor: "lightgrey",
            }}
          />
        </div>
      ))}
    </SliderLibrary>
  );
};
export default Slider;
