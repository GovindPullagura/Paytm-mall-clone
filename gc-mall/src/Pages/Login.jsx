import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
  const { isAuth, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    let loginDetails = { email, password };
    if (email === "" || password === "") {
      alert("Fill all the details");
    } else {
      return axios
        .post(`https://gc-mall.onrender.com/users`, loginDetails)
        .then((res) => {
          console.log(res);
          login();
        });
    }
  };

  if (isAuth) {
    return <Navigate to="/cart" />;
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.150"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          {/* <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text> */}
        </Stack>
        <Box rounded={"lg"} bg="white" boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"rgb(241,90,34)"}
                color={"white"}
                _hover={{
                  bg: "rgb(221,70,14)",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
              <NavLink to="/register">
                <Text
                  color={"rgb(241,90,34)"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Create a new account?
                </Text>
              </NavLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
