import {Box, Text, Flex, Image, Stack, useBreakpointValue, useColorModeValue, Heading, Center} from "@chakra-ui/react";
import {trans} from "../trans";
import React from "react";

// @ts-ignore
export default function GovernoratesCart({Clerks}) {
    return (

        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box
                w={useBreakpointValue({sm: '400px', md: '400px'})}
                h={'400px'}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                rounded={'xl'}
                justifyContent={'start'}
                backgroundImage={`url('/Image/home.jpg')`}

            >
                <Center >
                    <Heading textColor={'brand.white'} >{trans("add_realty")}</Heading>
                </Center>

            </Box>
        </Flex>
    )
}