import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../Store/cartSlice";

function Cart() {
  const cartList = useSelector((state) => state.cartList);
  const dispatch = useDispatch();

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
  };
  console.log(cartList);
  return (
    <>
      <h3 className=" text-primary  mb-3  ">Cart Detail</h3>

      <div className="col-sm-8">
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
              className="d-flex flex-row  align-items-center justify-content-between   mb-3"
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
    </>
  );
}

export default Cart;
