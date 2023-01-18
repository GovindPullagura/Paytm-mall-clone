import {
  VStack,
  HStack,
  Box,
  Text,
  Center,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { GiAlliedStar } from "react-icons/gi";
import { BsBagCheck } from "react-icons/bs";
import React from "react";

const Footer = () => {
  return (
    <VStack>
      <Box color="gray" backgroundColor="white" p="10px">
        <HStack>
          <Box>
            <Center>
              <AiOutlineHeart />
            </Center>
            <br />
            <Text as="b">24x7 Help</Text>
            <br />
            <Text fontSize="sm">
              Need Help? Click Here. You can also talk to us on 0120 4606060 to
              resolve your query.
            </Text>
          </Box>
          <Box>
            <Center>
              <BsShieldCheck />
            </Center>
            <br />
            <Text as="b">GC mall Trust</Text>
            <br />
            <Text fontSize="sm">
              Your money is yours! All refunds come with no question asked
              guarantee.
            </Text>
          </Box>
          <Box>
            <Center>
              <GiAlliedStar />
            </Center>
            <br />
            <Text as="b">100% Assurance</Text>
            <br />
            <Text fontSize="sm">
              At GC mall, we provide 100% assurance. If you have any issue, your
              money is immediately refunded. Sit back and enjoy your shopping.
            </Text>
          </Box>
          <Box>
            <Center>
              <BsBagCheck />
            </Center>
            <br />
            <Text as="b">Paytm Mall Promise </Text>
            <br />
            <Text fontSize="sm">
              Products with this tag are quality checked, and shipped the same
              day from certified warehouses. So you get the right product,
              faster.
            </Text>
          </Box>
        </HStack>
      </Box>

      {/* Single line card */}
      <Box w="100%" backgroundColor="white" color="gray">
        <Text fontSize="xs">
          Cashback would be added as Paytm Cash, which is One97 Communications
          Ltd loyalty program. It can be used to pay for goods & services sold
          by merchants that accept ‘Pay with Paytm’
        </Text>
      </Box>

      {/* About Us card */}
      <Box mt="10px" w="100%" padding="10px" backgroundColor="rgb(245,245,245)">
        <Center>
          <HStack gap="10px" color="rgb(241,90,34)">
            <Text as="b" fontSize="xs">
              About US
            </Text>
            <Text as="b" fontSize="xs">
              Partner with us
            </Text>
            <Text as="b" fontSize="xs">
              Terms & Conditions
            </Text>
            <Text as="b" fontSize="xs">
              Blog
            </Text>
            <Text as="b" fontSize="xs">
              Media
            </Text>
            <Text as="b" fontSize="xs">
              24x7 Help
            </Text>
            <Text as="b" fontSize="xs">
              Grievance policy
            </Text>
            <Text as="b" fontSize="xs">
              Bug bounty
            </Text>
            <Text as="b" fontSize="xs">
              Return/Cancellation policy
            </Text>
          </HStack>
        </Center>
      </Box>

      {/* Payments Card */}
      <Box mt="20px" p="10px" w="100%" backgroundColor="white">
        <HStack gap="10px" alignItems="center" justifyContent="center">
          <Image
            h="30px"
            src="https://secure.axisbank.com/ACSWeb/images/vbv_small_logo.gif"
            alt="Verified by VISA"
          />
          <Image
            h="30px"
            src="https://secure.axisbank.com/ACSWeb/images/securecode_small_logo.gif"
            alt="MasterCard"
          />
          <Image
            h="30px"
            src="https://secure.axisbank.com/ACSWeb/images/rupay_logo.jpg"
            alt="RuPay"
          />
          <Image
            h="30px"
            src="https://www.dinersclub.com/content/experience-fragments/diners-club/home-header-xf/master/_jcr_content/root/header/image.coreimg.svg/1627886360030/dci-logo-default.svg"
            alt="DinersClub International"
          />
          <Image
            h="30px"
            src="https://gnw-prototype.imgix.net/amex-logo.png"
            alt="American Express SafeKey"
          />
        </HStack>
      </Box>

      {/* Categories Card */}
      <Box textAlign="left" p="20px" w="100%" backgroundColor="white">
        <Text as="b">
          From Electronics, Fashion to Cars: Buy Everything Online from the
          Convenience of Your Home from Paytm Mall
        </Text>
        <Flex mt="20px">
          <VStack align="flex-start">
            <Text>Electronics</Text>
            <Text>Mens's Fashion</Text>
            <Text>Stationery</Text>
          </VStack>
          <Spacer />
          <VStack align="flex-start">
            <Text>Mobiles</Text>
            <Text>Home and Kotchen</Text>
            <Text>Travel Cards</Text>
          </VStack>
          <Spacer />
          <VStack align="flex-start">
            <Text>Car & Bike</Text>
            <Text>Baby, Kids & Toys</Text>
          </VStack>
          <Spacer />
          <VStack align="flex-start">
            <Text>Super Market</Text>
            <Text>Car & Bike Accessiories</Text>
          </VStack>
          <Spacer />
          <VStack align="flex-start">
            <Text>Women's Fashion</Text>
            <Text>Sports & Fitness</Text>
          </VStack>
          <Spacer />
        </Flex>
      </Box>
    </VStack>
  );
};

export default Footer;
