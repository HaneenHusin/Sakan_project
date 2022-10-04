import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    IconButton,
    Image,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import React from "react";
import Slider from 'react-slick';
import {trans} from "../trans";
import {useRouter} from "next/router";
import CartFooterText from "./CartFooterText";
import {Governorates} from "./Constant/data";
import {BiAlignJustify, BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {IoHeartOutline} from "react-icons/io5";
// @ts-ignore
export default function RealtyCart({Clerks}) {
    const {locale} = useRouter();
    const dir = locale === "ar" ? "rtl" : "ltr"
    const [slider, setSlider] = React.useState<Slider | null>(null);
    const top = useBreakpointValue({base: '35%', md: '35%'});
    const side = useBreakpointValue({base: '1%', md: '20px'});
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    let onFavoritePressed = (e) => {

    }
    // @ts-ignore
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box
                dir={dir}
                bg={useColorModeValue('white', 'gray.800')}
                w={useBreakpointValue({sm: '400px', md: '400px'})}
                borderWidth="1px"
                rounded="lg"
                h={'400px'}
                borderColor={'brand.footer_gray'}
                boxShadow={'sm'}
                position="relative"

            >
                <Stack>
                    <Slider {...settings} ref={(slider) => setSlider(slider)}>
                        {Governorates.map(clerk => (
                            <Image
                                src={clerk.image}
                                w={'full'}
                                // filter ={ "blur(1px)" }
                                roundedTop="lg"
                                opacity={"0.75"}

                            />
                        ))}
                    </Slider>

                    <Button position="absolute" top={2} right={2} variant={'baseStyle'}>{trans("add_realty")}</Button>
                    <HStack pr={'10px'} pl={'10px'} spacing={6} position="absolute" top={52}>

                        <IconButton
                            aria-label="left-arrow"
                            bg={"brand.black"}
                            _hover={{bg: 'brand.black', color: 'brand.white', transform: 'translateY(-2px)'}}
                            opacity={"0.50"}>
                            <BiAlignJustify size='25px'/>
                        </IconButton>
                        <IconButton
                            aria-label="left-arrow"
                            bg={"brand.black"}
                            color={'brand.white'}
                            _hover={{bg: 'brand.black', color: 'brand.white', transform: 'translateY(-2px)'}}
                            onClick={onFavoritePressed}
                            opacity={"0.50"}>
                            <IoHeartOutline size='25px'/>
                            {/*icon={Clerks.Favorite === true ? <FcLike/> : <IoHeartOutline/>}*/}
                        </IconButton>
                        <Text color="brand.white" fontSize={{base: 'l', md: 'xl'}}>
                            {'55.000.000'}
                        </Text>

                    </HStack>
                </Stack>
                <IconButton
                    aria-label="left-arrow"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    border={'solid'}
                    rounded={'full'}
                    bg={"brand.blue"}
                    color={'brand.white'}
                    borderColor={'brand.blue'}
                    opacity={"0.75"}
                    borderWidth={{base: '1px', md: '3px'}}
                    _hover={{bg: 'brand.white', color: 'brand.blue', transform: 'translateY(-2px)'}}
                    onClick={() => slider?.slickPrev()}>
                    {locale === "ar" ? <BiRightArrowAlt size='30px'/> : <BiLeftArrowAlt size='30px'/>}
                </IconButton>
                <IconButton
                    aria-label="right-arrow"
                    variant="ghost"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    border={'solid'}
                    rounded={'full'}
                    bg={"brand.blue"}
                    color={'brand.white'}
                    opacity={"0.75"}
                    borderColor={'brand.blue'}
                    borderWidth={{base: '1px', md: '3px'}}
                    _hover={{bg: 'brand.white', color: 'brand.blue', transform: 'translateY(-2px)'}}
                    onClick={() => slider?.slickNext()}>
                    {locale == "ar" ? <BiLeftArrowAlt size='30px'/> : <BiRightArrowAlt size='30px'/>}
                </IconButton>
                <VStack pt={'12px'} p={'5'} alignItems={'start'}>
                    <Heading fontSize={'xl'} textColor={'brand.blue'}>
                        {trans("شقة سكنية في منطقة المزة")}
                    </Heading>
                    <Text>
                        {trans("address")}
                    </Text>
                    <HStack>
                        <CartFooterText amount={Clerks.count} unit={'m^2'}></CartFooterText>
                        <Spacer w={'10px'}></Spacer>
                        <CartFooterText amount={Clerks.count} unit={'الحمامات'}></CartFooterText>
                        <Spacer w={'10px'}></Spacer>
                        <CartFooterText amount={Clerks.count} unit={'الغرف'}></CartFooterText>

                    </HStack>
                </VStack>

            </Box>
        </Flex>
    )
}