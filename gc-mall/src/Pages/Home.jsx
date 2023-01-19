import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import Carousel1 from "../Components/Carousels/Carousel1";
import Carousel2 from "../Components/Carousels/Carousel2";
import Carousel3 from "../Components/Carousels/Carousel3";

const Home = () => {
  return (
    <Box mb="20px" backgroundColor="white" padding="20px">
      {/* Carousels Section */}
      <Carousel1 />
      <Carousel2 />
      <Carousel3 />

      {/* Grocery and Home furnishing section */}
      <Box width="97%" margin="auto" mb="20px" mt="30px">
        <Heading mb="10px">Grocery & Home Furnishing</Heading>
        <Flex>
          <Box>
            <Image
              height="400px"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/498484/1610566898069.jpg?imwidth=414&impolicy=hq"
              alt="MORE"
            />
            <Heading mt="20px" size="md">
              More
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Image
              height="400px"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/498480/1620737097910.jpg?imwidth=414&impolicy=hq"
              alt="@home"
            />
            <Heading mt="20px" size="md">
              @home
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Image
              height="400px"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/498485/1620737113562.png?imwidth=414&impolicy=hq"
              alt="HomeCentre"
            />
            <Heading mt="20px" size="md">
              HomeCentre
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Image
              height="400px"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/498490/1610567023040.png?imwidth=414&impolicy=hq"
              alt="Prestige"
            />
            <Heading mt="20px" size="md">
              Prestige
            </Heading>
          </Box>
        </Flex>
      </Box>

      {/* Divider */}
      <Box
        w="10%"
        borderRadius="10px"
        m="auto"
        h="5px"
        mb="20px"
        backgroundColor="rgb(239,78,40)"
      ></Box>

      {/* Jewellery Section */}
      <Box width="97%" margin="auto" mb="20px">
        <Heading mb="20px">Jewellery Brands</Heading>
        <Flex>
          <Box>
            <Image
              animation="reverse"
              height="400px"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/711188/1613028659969.png?imwidth=414&impolicy=hq"
              alt="Kalyan"
            />
            <Heading mt="20px" size="md">
              Kalyan
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Image
              height="400px"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/711199/1613028660058.jpg?imwidth=414&impolicy=hq"
              alt="Tanishq"
            />
            <Heading mt="20px" size="md">
              Tanishq
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Image
              height="400px"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/711200/1620745456365.jpg?imwidth=414&impolicy=hq"
              alt="Jos-Alukkas"
            />
            <Heading mt="20px" size="md">
              Jos-Alukkas
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Image
              height="400px"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/711194/1620745874093.jpg?imwidth=414&impolicy=hq"
              alt="Jewelfina"
            />
            <Heading mt="20px" size="md">
              Jewelfina
            </Heading>
          </Box>
          <Spacer />
        </Flex>
      </Box>

      {/* Divider */}
      <Box
        w="10%"
        borderRadius="10px"
        m="auto"
        h="5px"
        backgroundColor="rgb(239,78,40)"
      ></Box>

      {/* FAQs box */}
      <Box mt="20px" align="left">
        <Text as="b" fontSize="15px">
          Paytm Mall - India’s Leading Online Shopping Experience, Brought to
          You by Paytm
        </Text>
        <br />
        <br />
        <Text fontSize="12px">
          Online shopping with Paytm Mall is quick, convenient and trouble-free.
          You can shop for the desired product right from the comfort of your
          home and get them delivered straight to your doorstep. <br />
          <br />
          Browse Paytm Mall and get access to over 65 million products ranging
          from smartphones, tablets to laptops, sarees, kurtas & kurtis to
          t-shirts, sneakers, sport shoes to sandals, earrings, watches to
          fitness bands, chimneys, cookware to gas stoves, dairy products, baby
          products to makeup kits and many more.
        </Text>
        <br />

        <Text as="b" fontSize="15px">
          What are we offering on Paytmmall.com?
        </Text>
        <br />
        <Text fontSize="12px">
          Paytm Mall strives hard to make your online shopping a more pleasant
          and cost-effective experience by providing the top quality products at
          the best price rates in India. Our collection of products consist of
          electronic appliances, clothes, grocery, home and kitchen products,
          backpacks, automobiles, books and stationery, to name a few. <br />
          <br />
          The super value bazaar offers an extensive range of grocery products
          like daily food staples, ready to cook food, high on nutrition food,
          beauty, make-up, personal care, health, baby care products and many
          more. Also take a look at the latest Automobile section that consists
          of cars, bikes, scooters, sports bikes, accessories, riding gear and
          automotive care. <br />
          <br />
          Shop by categories, check out all the available deals, limited period
          offers, cashback offers, seasonal sales, and there is so much more to
          make your online shopping experience enjoyable & gratifying!
        </Text>

        <Text as="b" fontSize="15px">
          Benefits of shopping on Paytmmall.com
        </Text>
        <br />
        <Text fontSize="12px">
          User-Friendly: Leading online shopping experience in India which is
          simple and faster to load. Shop on the go and get the products
          delivered in just a few easy clicks. <br />
          <br />
          Safe & Secure Shopping: You need not worry about your account
          credentials or personal details. <br /> Each and every transaction at
          Paytm Mall is securely processed and you can be rest assured that your
          money is in safe hands.
          <br />
          <br />
          Check Out Closely: View products of your choice in detail with clear
          images and thorough descriptions before buying.
          <br />
          <br />
          Multiple Payment Options: Choose a payment option of your choice i.e.
          Credit/Debit Cards, Netbanking and UPI. <br /> Use Paytm Wallet for
          quick checkouts & hassle-free payments.
          <br />
          <br />
          Paytm Postpaid Services: Now, you can buy today and pay next month
          with Paytm-ICICI Bank Postpaid.
          <br />
          <br />
          Order History: All your orders show up at one place, you can track
          them or repeat them with ease. <br /> Trouble-free returns, track
          request & replacement of your orders
          <br />
          <br />
          24x7 Customer Care: For all your queries and concerns regarding your
          shopping orders, head over to paytmmall.com/care or call us at
          01204606060 anytime
          <br />
          <br />
          The products paired with amazing deals are a topping on the cake that
          no one would want to miss. Paytm Mall World Store offers access to
          imported products ranging from beauty and personal care, watches,
          jewellery and so much more that too at exclusive price rates.
          <br />
          <br />
          Paytm Mall presents benefits like faster delivery with easy returns
          and payment options. Moreover, you can also take delight in online
          shopping with cash on delivery (COD) option as & when needed.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
