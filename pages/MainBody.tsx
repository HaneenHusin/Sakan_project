import {Box, Button, Container, HStack, Input, Menu, MenuButton, MenuItem, MenuList, Stack} from "@chakra-ui/react";
import {trans} from "../trans";
export default function MainBody() {

    return (
        <Box
            rounded={'xl'}
            height={'6xl'}
            w={'full'}
            h={['50px', '300px', '400', '1000px']}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            justifyContent={'start'}
            backgroundImage={`url('/Image/home.jpg')`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" position="relative">
                <Stack
                    spacing={6}
                    // w={['50px','300px','1200px','1500px']}
                    w={{ base: '100%', sm: '50%', md: '50%' }}
                    maxW={'lg'}
                    right={{ base: '50%', sm: '50%', md: '80%' }}
                    position="absolute"
                    top={['50px','200px','300px','900px']}
                    transform="translate(0, -50%)">
                    <HStack spacing={6}>
                        <Button variant={'outline'} width={['50px', '100px', '550px']}>{trans("for_sale")}</Button>
                        <Button variant={'baseStyle'} width={['50px', '100px', '550px']}>{trans("for_rent")}</Button>

                    </HStack>
                    <Box w={['580px', '600px','1000px']} p={5} shadow='md' borderWidth='1px' bg={'brand.white'}>
                        <HStack>
                            <Input focusBorderColor='brand.blue'w={{base:'220px', md: '550px'}} placeholder={trans("add_search_word")}/>
                            <Menu>
                                <MenuButton border={'solid'} borderWidth='1px' borderColor={'brand.button_gray'} rounded={'md'} h={'40px'} w={{base:'60',md:'350px'}} >
                                    {trans("add_governorates")}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem>Create a Copy</MenuItem>
                                    <MenuItem>Mark as Draft</MenuItem>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Attend a Workshop</MenuItem>
                                </MenuList>
                                <MenuButton border={'solid'} borderWidth='1px' borderColor={'brand.button_gray'} rounded={'md'} h={'40px'} w={{base:'60',md:'350px'}} >
                                    {trans("add_region")}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem>Create a Copy</MenuItem>
                                    <MenuItem>Mark as Draft</MenuItem>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Attend a Workshop</MenuItem>
                                </MenuList>
                                <MenuButton border={'solid'} borderWidth='1px' borderColor={'brand.button_gray'} rounded={'md'}h={'40px'} w={{base:'60',md:'350px'}} >
                                    {trans("type_realty")}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem>Create a Copy</MenuItem>
                                    <MenuItem>Mark as Draft</MenuItem>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Attend a Workshop</MenuItem>
                                </MenuList>
                            </Menu>
                              <Button variant={'baseStyle'} width={['50px', '100px', '250px']}>{trans("search")}</Button>

                        </HStack>

                    </Box>



                </Stack>
            </Container>
        </Box>
    )
}