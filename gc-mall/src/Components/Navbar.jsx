import React, { useContext } from "react";
import {
  Image,
  Flex,
  Text,
  HStack,
  Spacer,
  Input,
  Button,
} from "@chakra-ui/react";
import { GiShoppingBag } from "react-icons/gi";
import { SearchIcon } from "@chakra-ui/icons";
import { BiCool } from "react-icons/bi";
import { TfiNotepad } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);

  return (
    <Flex
      w="100%"
      bgColor="white"
      alignItems="center"
      mb="100px"
      position="fixed"
      overflow="hidden"
      top="0"
      zIndex={"999"}
    >
      <Spacer />
      <NavLink to="/">
        <Image
          height="50px"
          src="data:image/jpeg;base64,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"
          alt="gc mall"
        />
      </NavLink>
      <Spacer />
      <Input w="700px" placeholder="Search for the products" />

      <Button color="white" backgroundColor="rgb(241,90,34)">
        <SearchIcon />
      </Button>
      <Spacer />
      <NavLink to="/products">Products</NavLink>
      <Spacer />
      <HStack color="rgb(241,90,34)">
        <TfiNotepad />
        <Text color="black">My Orders</Text>
      </HStack>
      <Spacer />
      <NavLink to="/cart">
        <HStack color="rgb(241,90,34)">
          <GiShoppingBag />
          <Text color="black">Cart</Text>
        </HStack>
      </NavLink>
      <Spacer />
      {isAuth ? (
        <Button
          bgColor={"rgb(241,90,34)"}
          color="white"
          _hover={{ bgColor: "rgb(221,70,14)" }}
          onClick={() => logout()}
        >
          Logout
        </Button>
      ) : (
        <NavLink to="/login">
          <HStack color="rgb(241,90,34)">
            <BiCool />
            <Text color="black">Login</Text>
          </HStack>
        </NavLink>
      )}
      <Spacer />
      <NavLink to="/admin">Admin</NavLink>
      <Spacer />
    </Flex>
  );
};

export default Navbar;
