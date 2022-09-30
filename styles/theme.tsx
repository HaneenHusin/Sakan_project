import {extendTheme} from '@chakra-ui/react';


const theme = extendTheme({

    fonts: {
        body: 'Droid Arabic Kufi, sans-serif',
        heading: 'Georgia, serif',
        monospace: 'Menlo, monospace'

    },
    colors: {
        brand: {
            primary: "#ffcdd2",
            gray: "#E1E2E1",
            hoverPrimary: "#cb9ca1",
            hoverGray: "#262626",
            lightgray: "#b3b3b3",
            darkgray: "#262626",
            textGray: "#848984",
            light: "#eeeeee",
            Lightgreen:'green.50',
            Darkgreen:'green.900',
        },
    },
    components: {
        Button: {

        },

    },


});


export default theme;