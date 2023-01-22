import {
  Box,
  Heading,
  Image,
  Flex,
  Text,
  Spacer,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const totalCost = () => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].price;
    }
    return total;
  };

  const fetchData = () => {
    setLoading(true);
    return axios
      .get(`http://localhost:3000/cart`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => setErr(true))
      .finally(() => setLoading(false));
  };
  const handlePayment = () => {
    return axios.delete(`http://localhost:3000/cart/${data.id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Heading mt="50px">Loading...</Heading>
  ) : err ? (
    <Heading mt="50px">Something went wrong</Heading>
  ) : data.length === 0 ? (
    <Heading mt="50px">Cart is Empty...</Heading>
  ) : (
    <div style={{ marginTop: "50px" }}>
      <Flex w="95%" m="auto" bgColor="white">
        <Grid templateColumns="1" gap={6} w="50%" m="auto" mt="20px">
          {data.map((item) => (
            <GridItem
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              key={item.id}
              p="10px"
            >
              <Flex>
                <Image ml="30px" h="150px" src={item.image} />
                <Spacer />
                <Box>
                  <Text as="b">{item.brand}</Text>
                  <Text fontSize={"lg"}>{item.title}</Text>
                  <Text marginTop={"50px"} as="b">
                    Rs.{item.price}
                  </Text>
                  {/* <Button onClick={() => handleDelete(item.id)}>Delete</Button> */}
                </Box>
                <Spacer />
              </Flex>
            </GridItem>
          ))}
        </Grid>
        <Spacer />
        <Box
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          mt="30px"
          h="200px"
          p="10px"
          w="200px"
        >
          <Text as="b">Cart Total: Rs. {+totalCost()}</Text>
          <br />
          <Button mt="50px" onClick={() => handlePayment(data)}>
            Make Payment
          </Button>
        </Box>
        <Spacer />
      </Flex>
    </div>
  );
};

export default Cart;
