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

export default function Carousel2() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://assetscdn1.paytm.com/images/catalog/view_item/498530/1610537092744.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498114/1610537113386.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498115/1610537339349.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498256/1620736733672.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498129/1613028463583.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498127/1610537689405.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/710419/1610542731323.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/710420/1610543135214.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498111/1610543084890.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/710421/1610543158966.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498105/1610535869042.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994263/1643711210390.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994264/1643711069857.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994265/1643711263391.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994266/1643711205459.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/498118/1610535851387.png?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994267/1643711489659.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994278/1643712435320.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994279/1643712364578.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994288/1643713188868.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994298/1643713113821.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994348/1643715968772.jpg?imwidth=140&impolicy=hq",
    "https://assetscdn1.paytm.com/images/catalog/view_item/994350/1643716033149.jpg?imwidth=140&impolicy=hq",
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
