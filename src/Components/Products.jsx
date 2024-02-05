import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const addToCartHandler = (cart) => {
    dispatch(addToCart(cart));
  };

  function loadProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
    console.log(products);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div className="col-sm-3 mb-4  " key={product.id}>
          <Card>
            <Card.Img
              variant="top"
              src={product.thumbnail}
              className="w-100 object-fit-cover "
              style={{ height: "210px" }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>

            <Card.Footer className="text-center ">
              <Button
                variant="primary"
                onClick={() => {
                  addToCartHandler(product);
                }}
              >
                Add to Card
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </>
  );
}

export default Products;
