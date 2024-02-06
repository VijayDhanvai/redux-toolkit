import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Store/cartSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);

  const addToCartHandler = (cart) => {
    dispatch(addToCart(cart));
  };
  const removeFromCartHandler = (cart) => {
    dispatch(removeFromCart(cart));
  };

  function loadProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
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
              <Badge bg="secondary">${product.price}</Badge>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>

            <Card.Footer className="text-center ">
              {!cartList.some((item) => item.id == product.id) ? (
                <Button
                  variant="primary"
                  onClick={() => {
                    addToCartHandler(product);
                  }}
                >
                  Add to Card
                </Button>
              ) : (
                <Button
                  variant="danger"
                  onClick={() => {
                    removeFromCartHandler(product);
                  }}
                >
                  Remove from cart
                </Button>
              )}
            </Card.Footer>
          </Card>
        </div>
      ))}
    </>
  );
}

export default Products;
