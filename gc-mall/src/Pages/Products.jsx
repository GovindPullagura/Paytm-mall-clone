import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const getData = () => {
  return axios.get(`https://gc-mall.onrender.com/products`);
};
const Products = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getData()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => setErr(true))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);

  return loading ? (
    <Heading mt="100px">Loading...</Heading>
  ) : err ? (
    <Heading mt="100px">Something went wrong</Heading>
  ) : (
    <Grid
      w="95%"
      m="auto"
      mt="60px"
      bgColor="white"
      templateColumns="repeat(5, 1fr)"
      gap={6}
      p="10px"
    >
      {data.map((item) => (
        <GridItem
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          key={item.id}
          gap={10}
          p="10px"
          borderRadius="10px"
        >
          <Image m="auto" h="150px" src={item.image} alt={item.title} />
          <Heading size="sm">{item.brand}</Heading>
          <Heading size="xs">{item.title}</Heading>
          <Text>Price: Rs.{item.price}</Text>
          <NavLink to={`/products/${item.id}`}>
            <Text color="rgb(241,90,34)">More Info</Text>
          </NavLink>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Products;
