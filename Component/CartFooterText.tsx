import {Flex, Text} from "@chakra-ui/react";
import React from "react";

// @ts-ignore
export default function CartFooterText({amount,unit}) {

    return (

        <Flex>
            <Text pl={'1'} pr={'1'} fontSize={{base:'l',md:'xl'}} fontWeight={'bold'}
                  textColor={'brand.black'}>{amount}</Text>
            <Text pt={{base:'5',md:'3'}} color="brand.button_gray" fontSize={{base:'sm',md:'sm'}}>
                {unit}
            </Text>
        </Flex>
    )}