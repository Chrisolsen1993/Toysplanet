import React, { useEffect } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CURRENT_USER } from "../utils/actions";
const Home = () => {
  const { data } = useQuery(QUERY_USER);
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_CURRENT_USER,
        currentUser: data,
      });
    }
  }, [data, dispatch]);
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
