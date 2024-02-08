import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../Store/cartSlice";
import CartDetail from "./CartDetails";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Cart() {
  const cartList = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  const container = useRef();

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
  };

  useGSAP(
    () => {
      // Animate card on mount
      gsap.from(".card", { opacity: 0, y: -20, stagger: 0.1, duration: 0.5 });
    },
    { scope: container }
  );

  return (
    <>
      <div className="col-sm-8" ref={container}>
        <h3 className=" text-primary  mb-2  ">Cart Detail</h3>

        {cartList.length == 0 ? (
          <h4 className="mt-3 text-seconday ">
            Cart is empty, Please add products from{" "}
            <Link className="btn btn-outline-primary " to="/products">
              Products{" "}
            </Link>
          </h4>
        ) : (
          cartList.map((item) => (
            <Card
              className="d-flex card  flex-row shadow-sm  align-items-center justify-content-between   mb-4"
              key={item.id}
            >
              <img src={item.thumbnail} alt="" className="w-25  " />
              <div className="me-auto ">
                <Card.Body>
                  <div>
                    <Card.Title> {item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-capitalize ">
                      {item.category}
                    </Card.Subtitle>
                    <Card.Text>${item.price}</Card.Text>
                  </div>
                </Card.Body>
              </div>
              <button
                onClick={() => removeFromCartHandler(item)}
                className="btn btn-outline-danger m-3   "
              >
                Remove from cart
              </button>
            </Card>
          ))
        )}
      </div>
      <div className="col-sm-4 ">
        <CartDetail cartList={cartList} />
      </div>
    </>
  );
}

export default Cart;
