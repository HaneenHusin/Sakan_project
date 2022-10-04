import {
    Box, Button,
    Flex,
    HStack,
    Icon,
    IconButton,
    Image,
    Spacer,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon, Search2Icon} from '@chakra-ui/icons';
import {Links} from "./Constant/data";
import NavLink from "./NavigatorLink";
import {trans} from "../trans";
import { BsPersonCircle } from "react-icons/bs";
import {router} from "next/client";
import {useRouter} from "next/router";

export default function SimpleNavBar() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const { locale } = useRouter();
let  changeLanguage  = async () => {
    await router.push("/", "/", {

        locale: locale === "en" ? "ar" : "en",
    });
    router.reload();
}
    return (
        <>
            <Box w={'full'} >
                <Flex w={'full'}  alignItems={{base:'center',md:'start'}} justifyContent={{base:'center',md:'start'}} h={20}  boxShadow={'md'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        color={'brand.blue'}
                        _hover={{ color: "brand.blue" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={{base :3,md:8}} >

                        <HStack
                            spacing={{md:2}}
                            fontSize={'21'}
                            display={{base: 'none', md: 'flex'}}>
                            {Links.map((link) => (
                                <NavLink key={link}> {trans(link)}</NavLink>
                            ))}
                        </HStack>
                        <Spacer w={{base:'none',md:'calc(5vh)'}}/>
                        <Button variant={'baseStyle'} width={['100px','150px','250px']}>{trans("add_realty")}</Button>
                        <Button
                            variant={'baseStyle'}
                            onClick={changeLanguage}
                        >
                            {trans("change_app_language")}
                        </Button>
                        <IconButton
                            icon={ <BsPersonCircle/>}
                            color={'brand.blue'}
                            aria-label={'Profile'}
                            colorScheme='brand.blue'
                            fontSize='5xl'
                            _hover={{ color: "brand.blue" }}
                        />

                        <Image src={'/Image/logo.png'} w={'120px'} h={'80px'}/>


                    </HStack>
                    <Flex >
                        <Spacer w='calc(10vh)'/>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}> {trans(link)}</NavLink>
                            ))}
                        </Stack>

                    </Box>

                ) : null}

            </Box>

              </>
    );
}