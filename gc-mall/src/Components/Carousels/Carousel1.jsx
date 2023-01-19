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

export default function Carousel1() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://assetscdn1.paytm.com/images/catalog/view_item/710342/1620736738312.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498074/1613028372599.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498091/1620736830834.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994845/1643780245028.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498086/1610536486321.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498239/1620736478260.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498254/1610536539307.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498081/1583915454539.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994846/1643780303875.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498075/1593586492547.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994132/1643692700179.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994133/1643692702063.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994135/1643692758763.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994137/1643692795789.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994138/1643692870440.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994847/1643780584196.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994140/1643692915157.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994848/1643780625232.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994852/1643780584093.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994849/1643780709215.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994153/1643696199128.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994154/1643696257591.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994155/1643696297881.jpg?imwidth=140&impolicy=hq",
  ];

  return (
    <Box
      position={"relative"}
      height={"100px"}
      //   width={"full"}
      overflow={"hidden"}
      w="95%"
      m="auto"
      mt="100px"
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
