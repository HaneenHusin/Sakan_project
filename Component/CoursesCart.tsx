import {
    Box,
    Button,
    Divider,
    Flex, Heading,
    HStack,
    Icon,
    Image, Spacer,
    Text,
    useBreakpointValue,
    useColorModeValue, VStack
} from "@chakra-ui/react";
import React from "react";
import {BsClock} from "react-icons/bs";
import {trans} from "../trans";
import {useRouter} from "next/router";
import CartFooterText from "./CartFooterText";

// @ts-ignore
export default function CoursesCart({Clerks}) {
    const {locale} = useRouter();
    const dir = locale === "ar" ? "rtl" : "ltr"
    return (

            <Box
                dir={dir}
                bg={useColorModeValue('white', 'gray.800')}
                w={useBreakpointValue( {base: '400px', sm: '500px', md: '400px' })}
                borderWidth="1px"
                rounded="lg"
                h={{base: '50px', sm: '400px', md: '500px' }}
                borderColor={'brand.footer_gray'}
                boxShadow={'sm'}
                position="relative">

                <Image
                    src={Clerks.image}
                    w={'full'}
                    filter ={ "blur(1px)" }
                />
                <VStack pt={'12px'} p={'5'} alignItems={'start'} >
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
                {/*<Box p="6">*/}
                    {/*<Flex mt="1" justifyContent="space-between" alignContent="center">*/}
                    {/*    <Box*/}
                    {/*        fontSize="2xl"*/}
                    {/*        fontWeight="bold"*/}
                    {/*        lineHeight="tight"*/}
                    {/*    >*/}
                    {/*        {Clerks.title}*/}
                    {/*    </Box>*/}
                    {/*</Flex>*/}


                    {/*<Divider pt={'2'} w={'full'} orientation='horizontal'/>*/}

                    {/*<HStack pt={'2'} spacing={'4'}>*/}
                    {/*    <Flex> <Icon boxSize={4} color={'brand.textGray'} as={BsClock}/>*/}
                    {/*        <Text pl={'1'} pr={'1'} fontSize={'xs'} fontWeight={'bold'}*/}
                    {/*              textColor={'brand.textGray'}>{Clerks.duration}</Text>*/}
                    {/*        <Text pt={'1'} color="brand.dark" fontSize="2xs">*/}
                    {/*            Hours*/}
                    {/*        </Text></Flex>*/}

                    {/*    <Flex> <Icon boxSize={4} color={'brand.textGray'} as={BsClock}/>*/}
                    {/*        <Text pl={'1'} pr={'1'} fontSize={'xs'} fontWeight={'bold'}*/}
                    {/*              textColor={'brand.textGray'}>{Clerks.count}</Text>*/}
                    {/*        <Text pt={'1'} color="brand.dark" fontSize="2xs">*/}
                    {/*            Lessons*/}
                    {/*        </Text>*/}
                    {/*    </Flex>*/}
                    {/*    <Flex> <Icon boxSize={4} color={'brand.textGray'} as={BsClock}/>*/}
                    {/*        <Text pl={'1'} pr={'1'} fontSize={'xs'} fontWeight={'bold'}*/}
                    {/*              textColor={'brand.textGray'}>{Clerks.type}</Text>*/}
                    {/*    </Flex>*/}
                    {/*    <Flex> <Icon boxSize={4} color={'brand.textGray'} as={BsClock}/>*/}
                    {/*        <Text pl={'1'} pr={'1'} fontSize={'xs'} fontWeight={'bold'}*/}
                    {/*              textColor={'brand.textGray'}>{Clerks.Gender}</Text>*/}
                    {/*    </Flex>*/}
                    {/*</HStack>*/}

                    {/*<HStack pt={'2'} spacing={'30%'}>*/}
                    {/*    <Box>*/}
                    {/*        <Button*/}
                    {/*            textColor={'brand.textGray'}*/}
                    {/*            width={'120px'}*/}
                    {/*            bg={"brand.gray"}*/}
                    {/*            rounded={'md'}>Reservation</Button>*/}
                    {/*    </Box>*/}
                    {/*    <HStack>*/}
                    {/*        <Text fontSize={'l'} fontWeight={'extrabold'}*/}
                    {/*              textColor={'brand.textGray'}>{Clerks.price}</Text>*/}
                    {/*        <Text pt={'1'} color="brand.textGray" fontSize="sm">*/}
                    {/*            SAR*/}
                    {/*        </Text>*/}
                    {/*    </HStack>*/}
                    {/*</HStack>*/}
                {/*</Box>*/}
            </Box>
      )
}