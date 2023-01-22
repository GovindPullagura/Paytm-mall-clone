import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";

const Admin = () => {
  const [data, setData] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [err, setErr] = useState(false);

  const handleAdd = () => {
    // setLoading(true);
    axios
      .post(`http://localhost:3000/products`, data)
      .catch((err) => console.log("ERROR"))
      .finally(() => {
        // setLoading(false);
        alert("Product Added Successfully.");
      });
  };

  return (
    <div style={{ marginTop: "50px", marginBottom: "30px" }}>
      <Box padding="10px" bgColor={"white"}>
        <Heading>Add Products</Heading>
        <FormControl
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          w="30%"
          m="auto"
          p="15px"
          borderRadius={"10px"}
        >
          <FormLabel>Product Brand:</FormLabel>
          <Input
            type="text"
            onChange={(e) => setData({ ...data, brand: e.target.value })}
          />
          <FormLabel>Product Name:</FormLabel>
          <Input
            type="text"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <FormLabel>Product Image:</FormLabel>
          <Input
            type="url"
            onChange={(e) => setData({ ...data, image: e.target.value })}
          />
          <FormLabel>Product Price:</FormLabel>
          <Input
            type="number"
            onChange={(e) => setData({ ...data, price: +e.target.value })}
          />
          <Button
            bgColor="rgb(241,90,34)"
            _hover={{ bgColor: "rgb(221,70,14)" }}
            mt="20px"
            onClick={handleAdd}
            color="white"
          >
            Add Product
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default Admin;
