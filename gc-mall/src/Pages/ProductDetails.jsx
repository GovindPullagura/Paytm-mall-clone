import {
  Image,
  Heading,
  Spacer,
  Box,
  Text,
  Flex,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Tr,
  Td,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tbody,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getData = (id) => {
  return axios.get(`https://gc-mall.onrender.com/products/${id}`);
};
const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [data, setData] = useState([]);
  const param = useParams();
  // console.log(param);

  useEffect(() => {
    setLoading(true);
    getData(param.product_id)
      .then((res) => {
        console.log(res.data);
        setData([...data, res.data]);
      })
      .catch((err) => setErr(true))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (data) => {
    axios.post(`https://gc-mall.onrender.com/cart`, data);
  };

  return loading ? (
    <Heading mt="50px">Loading...</Heading>
  ) : err ? (
    <Heading mt="50px">Something went wrong...</Heading>
  ) : (
    <div style={{ margin: "auto", width: "95%", marginTop: "60px" }}>
      {data.map((item) => (
        <Flex p="10px" w="75%" bgColor={"white"} key={item.id}>
          <Spacer />
          <Image w="300px" height="400px" src={item.image} alt={item.title} />
          <Spacer />
          <Box mt="0">
            <Text fontSize={"20px"}>{item.brand}</Text>
            <Text fontSize={"18px"}>{item.title}</Text>
            <Text as="b" fontSize={"20px"}>
              Rs. {item.price}
            </Text>
            <Text fontSize={"2xs"} color="gray">
              Inclusive of all taxes
            </Text>
            <Button
              w="100%"
              borderRadius={"10px"}
              mt="40px"
              color={"white"}
              bgColor={"rgb(239,78,40)"}
              _hover={{ bgColor: "rgb(229,68,20)" }}
              onClick={() => handleAdd(item)}
            >
              Add to Cart
            </Button>
          </Box>
          <Spacer />
        </Flex>
      ))}

      {/* Overview section */}
      <Tabs mt="20px" w="75%" bgColor={"white"}>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Manufacturing Info</Tab>
          <Tab>Return Policy</Tab>
        </TabList>

        <TabPanels>
          <TabPanel ml="0">
            <Text fontSize={"xs"}>Sold by:</Text>
            <Text as="b" fontSize={"sm"}>
              Arvind Lifestyle Brands
            </Text>
            <Text>Customer Care: 01204606060</Text>
            <Table>
              <Tbody>
                <Tr>
                  <Td>Occasion</Td>
                  <Td color={"gray"}>Casual</Td>
                </Tr>
                <Tr>
                  <Td>Length</Td>
                  <Td color={"gray"}>Regular</Td>
                </Tr>
                <Tr>
                  <Td>Set Contents</Td>
                  <Td color={"gray"}>Pack of 1</Td>
                </Tr>
                <Tr>
                  <Td>Wash care</Td>
                  <Td color={"gray"}>Hand Wash/Machine Wash</Td>
                </Tr>
                <Tr>
                  <Td>Disclaimer</Td>
                  <Td color={"gray"}>
                    Product color may slightly vary due to photographic lighting
                    sources or your monitor settings.
                  </Td>
                </Tr>
                <Tr>
                  <Td>Style Code</Td>
                  <Td color={"gray"}>EHTS1250</Td>
                </Tr>
                <Tr>
                  <Td>Ean Upc</Td>
                  <Td color={"gray"}>8907797284434</Td>
                </Tr>
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Table>
              <Tbody>
                <Tr>
                  <Td>Country of Origin</Td>
                  <Td color={"gray"}>INDIA</Td>
                </Tr>
              </Tbody>
            </Table>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text>Manufaturer Details</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Table>
                    <Tbody>
                      <Tr>
                        <Td>Manufactured By</Td>
                        <Td color={"gray"}>ARVIND LIFESTYLE BRANDS LIMITED</Td>
                      </Tr>
                      <Tr>
                        <Td>Manufacturer's Address</Td>
                        <Td color={"gray"}>
                          ARVIND LIFESTYLE BRANDS LIMITED, DU PARC TRINITY, 8TH
                          FLOOR, 17, MG ROAD, Bangalore, Karnataka - 560001
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
          <TabPanel>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text>Return Policy</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Table>
                    <Tbody>
                      <Tr>
                        <Td>Return Policy</Td>
                        <Td color={"gray"}>
                          14 Days Free Return - Seller provides free
                          exchange/refund within 14 days of delivery.
                          Cancellation Allowed.
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* "Report this" card */}
      <Text mt="3px" mb="3px" fontSize={"xs"} color={"rgb(241,90,34)"}>
        Report this product
      </Text>
    </div>
  );
};

export default ProductDetails;
