import React, { useEffect, useState } from "react";
import axios from "axios";

const getData = () => {
  return axios.get(`http://localhost:3000/men`);
};
const Products = () => {
  // const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => console.log(res.data));
  }, []);

  return <div>Products</div>;
};

export default Products;
