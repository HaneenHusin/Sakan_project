import {Divider, Heading, HStack, Text} from "@chakra-ui/react";
import {trans} from "../trans";

// @ts-ignore
export default function DividerText({title}) {

    return (
        <HStack>
            <Divider borderColor={'brand.blue'} borderWidth={'3xl'}/>
            <Heading textAlign={'center'} w={'800px'} fontSize={'xl'}>{trans(title)}</Heading>
            <Divider borderColor={'brand.blue'} borderWidth={'3xl'}/></HStack>


    )
}