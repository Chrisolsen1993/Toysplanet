import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2 className="orderTitle">
              Order History
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="totalOrderDiv">
                <div>
                <h3 className="orderTitle">
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                </div>
                <div>
                <div className="orderProducts">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="orderCard">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
