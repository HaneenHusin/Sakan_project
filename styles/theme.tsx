import {extendTheme} from '@chakra-ui/react';


const theme = extendTheme({

    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Raleway', sans-serif`,

    },
    colors: {
        brand: {
            red: "#f15c62",
            blue: "#01a1c0",
            hover_blue: "#026a9a",
            footer_gray: "#f0f0f0f0",
            bg_gray: "#f8f8f8f8",
            button_gray: "#a5a9ac",
            black: "#000000",
            white: "#ffffff"


        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
                textColor: 'brand.white',
                bg: 'brand.blue',
                rounded: 'md',
                _hover: {bg: 'brand.hover_blue', color: 'brand.white', transform: 'translateY(-2px)'},
            },
            variants: {
                outline: {
                    fontWeight: 'bold',
                    color: 'brand.white',
                    bg: 'brand.button_gray',
                    rounded: 'md',
                    borderColor:'brand.button_gray',
                    _hover: {bg: 'brand.bg_gray', color: 'brand.black', transform: 'translateY(-2px)'},


                }
            }

        },


    },


});


export default theme;