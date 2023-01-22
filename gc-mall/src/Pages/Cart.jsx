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
  HStack,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const otp = 9654;
  const [status, setStatus] = useState(false);

  const [enteredOtp, setEnteredOtp] = useState(null);
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
      .get(`https://gc-mall.onrender.com/cart`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => setErr(true))
      .finally(() => setLoading(false));
  };

  const handleOTP = () => {
    if (otp === enteredOtp) {
      alert("Payment Successful. Order Placed Successfully");
      setStatus(false);
      setData([]);
      return <Navigate to="/products" />;
    } else {
      alert("Enterd Incorrect OTP. Please try again.");
    }
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
      <Flex w="95%" m="auto" mb="30px" bgColor="white">
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
          <Button
            mt="50px"
            mb="30px"
            onClick={() => {
              setStatus(true);
              alert(otp + " is the OTP for your transaction.");
            }}
          >
            Make Payment
          </Button>
          <br />
          {status ? (
            <HStack>
              <Input
                type={"number"}
                onChange={(e) => setEnteredOtp(+e.target.value)}
              />
              <br />
              <Button onClick={handleOTP}>Submit</Button>
            </HStack>
          ) : null}
        </Box>

        <Spacer />
      </Flex>
    </div>
  );
};

export default Cart;
