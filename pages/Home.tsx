import {Divider, HStack, Text, VStack} from "@chakra-ui/react";
import {useRouter} from "next/router";
import SimpleNavBar from "../Component/NavBar";
import MainBody from "./MainBody";
import {trans} from "../trans";
import DividerText from "../Component/DividerText";
import CardCarousel from "../Component/Carousel";
import LargeWithNewsletter from "../Component/Footer";
// @ts-ignore
export default function Home({content}) {
    const {locale} = useRouter();
    const dir = locale === "ar" ? "rtl" : "ltr"
    return (

        <VStack dir={dir}>
          <SimpleNavBar />
           <MainBody />
            <DividerText title={"our_clerks"} />
           <CardCarousel />
         <DividerText title={"search_by_governorates"} />



<LargeWithNewsletter />

        </VStack>
    )
}