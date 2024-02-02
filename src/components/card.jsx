import { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscount] = useState(0);
  const [rating, setRating]= useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setId(res.data.products[0].id);
    setTitle(res.data.products[0].title);
    setDescription(res.data.products[0].description);
    setPrice(res.data.products[0].price);
    setDiscount(res.data.products[0].discountPercentage);
    setRating(res.data.products[0].rating);
    setStock(res.data.products[0].stock);
    setCategory(res.data.products[0].category);
    setThumbnail(res.data.products[0].thumbnail);
    setImages(res.data.products[0].images)  
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="d-flex justify-content-center justify-items-center">
      <div className="card col-6 ">
        <div className="card-body">
          <div className="row mb-3">
            <img src={thumbnail} alt="thumbnail.." />
          </div>
          <div className="container">
            <div className="row mb-1">
              Id Product  : {id}
            </div>
            <div className="row mb-1">
              Title Product : {title}
            </div>
            <div className="row mb-1">
              Description  : {description}
            </div>
            <div className="row mb-1">
              Price  : $ {price}
            </div>
            <div className="row mb-1">
              Discount Percentage  : {discountPercentage}
            </div>
            <div className="row mb-1">
              Rating  : {rating}
            </div>
            <div className="row mb-1">
              Stock  : {stock}
            </div>
            <div className="row mb-1">
              Category : {category}
            </div>`
          </div> 
          <div className="d-flex">
            {images.map((image) => (
              <div class="row">
                <img
                  className="w-100"
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
