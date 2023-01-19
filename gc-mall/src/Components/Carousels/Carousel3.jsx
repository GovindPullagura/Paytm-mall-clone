import React from "react";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  //   dots: true,
  arrows: false,
  //   fade: true,
  //   infinite: true,
  //   autoplay: true,
  speed: 500,
  //   autoplaySpeed: 5000,
  slidesToShow: 9,
  marginRight: "10px",
  slidesToScroll: 9,
};

export default function Carousel3() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://assetscdn1.paytm.com/images/catalog/view_item/995524/1643867277967.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/995525/1643867496758.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/995526/1643867362885.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/995527/1643867532232.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/995528/1643867625370.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/710655/1643866806024.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/995529/1643867506442.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/995530/1643867664954.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/710654/1643866837835.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/710657/1613028563419.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/995531/1643867698366.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/995533/1643867991105.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/995534/1643868084258.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/995532/1643867743019.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/710661/1613028718597.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/710662/1613028739303.jpg?imwidth=140&impolicy=hq",
  ];

  return (
    <Box
      position={"relative"}
      height={"100px"}
      //   width={"full"}
      overflow={"hidden"}
      w="95%"
      m="auto"
      mt="30px"
      pl="10px"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            // height={"100px"}
            // w="100px"
            // borderRadius={"100%"}
            // border="1px solid gray"
            // position="relative"
            // backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            // backgroundImage={`url(${url})`}
            // mr="20"
          >
            <Image
              src={url}
              borderRadius="100%"
              mr="40px"
              h="100px"
              w="100px"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
