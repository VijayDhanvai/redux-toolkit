import React, { useEffect, useState, useRef } from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Store/cartSlice";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Products() {
  const container = useRef();
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

  useGSAP(
    () => {
      // Animate prod on mount
      gsap.fromTo(
        ".prod",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
      );
    }

    // { scope: container }
  );

  return (
    <>
      {products.map((product) => (
        <div className="col-md-6 col-lg-3 mb-4  prod   " key={product.id}>
          <Card className="shadow-sm ">
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
