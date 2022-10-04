import {
    Box, Button,
    Center,
    Divider,
    Flex,
    Heading, HStack, IconButton,
    Image, Spacer,
    Stack, Text,
    useBreakpointValue,
    useColorModeValue, VStack
} from "@chakra-ui/react";
import {trans} from "../trans";
import React from "react";
import {Governorates} from "./Constant/data";
import {BiAlignJustify, BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {IoHeartOutline} from "react-icons/io5";
import CartFooterText from "./CartFooterText";

export default function ClerksCart({Clerks}) {
    return(
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box
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
                            <Image
                                src={Clerks.image}
                                w={'full'}
                                roundedTop="lg"
                            />

                </Stack>
                <Center pt={'30px'}><Heading>{trans("add_realty")}</Heading></Center>
            </Box>
        </Flex>
)}