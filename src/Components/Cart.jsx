import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
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
        d
        {cartList.map((item) => (
          <div key={item.id}>
            <Card className="flex   ">
              <img src={item.thumbnail} alt="" className="w-25 " />
              <Card.Body>
                <div>
                  <Card.Title> {item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-capitalize ">
                    {item.category}
                  </Card.Subtitle>
                  <Card.Text>${item.price}</Card.Text>
                  <button
                    onClick={() => removeFromCartHandler(item)}
                    className="btn btn-outline-danger  "
                  >
                    Remove from cart
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
