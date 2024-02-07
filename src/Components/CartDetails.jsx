import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function CartDetail({ cartList }) {
  let total = 0;
  const cartTotal = () => {
    cartList.forEach((element) => {
      total = total + element.price;
    });
    return total;
  };

  return (
    <>
      {cartList.length > 0 && (
        <>
          <h4 className=" mb-2">Products added </h4>
          <ListGroup as="ol" numbered className="shadow-lg ">
            {cartList.map((item) => (
              <ListGroup.Item
                as="li"
                key={item.id}
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
                  <div className="text-capitalize "> {item.category}</div>
                </div>
                <Badge bg="primary" className="align-self-center   ">
                  ${item.price}
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
      {cartList.length > 0 && (
        <ListGroup className="  mt-4">
          <ListGroup.Item
            variant="warning"
            className="d-flex shadow-md  justify-content-between align"
          >
            <strong>Total</strong>
            <strong>${cartTotal()}</strong>
          </ListGroup.Item>
        </ListGroup>
      )}
    </>
  );
}

export default CartDetail;
