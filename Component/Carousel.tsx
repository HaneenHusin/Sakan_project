import React from 'react';
import {Box, IconButton, Text, useBreakpointValue,} from '@chakra-ui/react';
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';
import Slider from 'react-slick';
import {Clerks} from "./Constant/data";
import {useRouter} from "next/router";
import GovernoratesCart from "./governoratesCart";
import RealtyCart from './RealtyCart';
import ClerksCart from "./ClerksCart";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 5000,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow:1,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
    ]
};

export  function RealtyCarousel() {

    const [slider, setSlider] = React.useState<Slider | null>(null);

    const top = useBreakpointValue({base: '50%', md: '50%'});
    const side = useBreakpointValue({base: '1%', md: '20px'});
    const {locale} = useRouter();

    // @ts-ignore
    // @ts-ignore
    return (
        <Box
            position={'relative'}
            height={{base:'calc(80vh)',md:'calc(100vh)'}}
            width={'full'}
            maxW={ 'full'}
            overflow={'hidden'}
            p={'20'}

        >

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

                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {Clerks.map(clerk => (
                    <RealtyCart Clerks={clerk}></RealtyCart>
                ))}
            </Slider>
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
                borderWidth={{base:'1px',md:'3px'}}
                _hover={{bg:'brand.white',color:'brand.blue', transform: 'translateY(-2px)'}}
                onClick={() => slider?.slickPrev()}>
                {locale === "ar" ?    <BiRightArrowAlt   size='30px' /> : <BiLeftArrowAlt size='30px'/>}
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
                borderColor={'brand.blue'}
                borderWidth={{base:'1px',md:'3px'}}
                _hover={{bg:'brand.white',color:'brand.blue', transform: 'translateY(-2px)'}}
                onClick={() => slider?.slickNext()}>
                {locale == "ar" ?  <BiLeftArrowAlt size='30px'/>:   <BiRightArrowAlt   size='30px' />}
            </IconButton>

        </Box>
    );
}
export  function GovernoratesCarousel() {

    const [slider, setSlider] = React.useState<Slider | null>(null);

    const top = useBreakpointValue({base: '50%', md: '50%'});
    const side = useBreakpointValue({base: '1%', md: '20px'});
    const {locale} = useRouter();

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <Box
            position={'relative'}
            height={{base:'calc(80vh)',md:'calc(100vh)'}}
            width={'full'}
            maxW={ 'full'}
            overflow={'hidden'}
            p={'20'}

        >

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

            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {Clerks.map(clerk => (
                    <GovernoratesCart Clerks={clerk}></GovernoratesCart>
                ))}
            </Slider>
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
                borderWidth={{base:'1px',md:'3px'}}
                _hover={{bg:'brand.white',color:'brand.blue', transform: 'translateY(-2px)'}}
                onClick={() => slider?.slickPrev()}>
                {locale === "ar" ?    <BiRightArrowAlt   size='30px' /> : <BiLeftArrowAlt size='30px'/>}
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
                borderColor={'brand.blue'}
                borderWidth={{base:'1px',md:'3px'}}
                _hover={{bg:'brand.white',color:'brand.blue', transform: 'translateY(-2px)'}}
                onClick={() => slider?.slickNext()}>
                {locale == "ar" ?  <BiLeftArrowAlt size='30px'/>:   <BiRightArrowAlt   size='30px' />}
            </IconButton>

        </Box>
    );
}
export  function ClerksCarousel() {

    const [slider, setSlider] = React.useState<Slider | null>(null);

    const top = useBreakpointValue({base: '50%', md: '50%'});
    const side = useBreakpointValue({base: '1%', md: '20px'});
    const {locale} = useRouter();

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <Box
            position={'relative'}
            height={{base:'calc(80vh)',md:'calc(100vh)'}}
            width={'full'}
            maxW={ 'full'}
            overflow={'hidden'}
            p={'20'}

        >

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

            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {Clerks.map(clerk => (
                    <ClerksCart Clerks={clerk}></ClerksCart>
                ))}
            </Slider>
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
                borderWidth={{base:'1px',md:'3px'}}
                _hover={{bg:'brand.white',color:'brand.blue', transform: 'translateY(-2px)'}}
                onClick={() => slider?.slickPrev()}>
                {locale === "ar" ?    <BiRightArrowAlt   size='30px' /> : <BiLeftArrowAlt size='30px'/>}
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
                borderColor={'brand.blue'}
                borderWidth={{base:'1px',md:'3px'}}
                _hover={{bg:'brand.white',color:'brand.blue', transform: 'translateY(-2px)'}}
                onClick={() => slider?.slickNext()}>
                {locale == "ar" ?  <BiLeftArrowAlt size='30px'/>:   <BiRightArrowAlt   size='30px' />}
            </IconButton>

        </Box>
    );
}