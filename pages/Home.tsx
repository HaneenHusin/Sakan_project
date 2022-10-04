import {Divider, HStack, Spacer, Text, VStack} from "@chakra-ui/react";
import {useRouter} from "next/router";
import SimpleNavBar from "../Component/NavBar";
import MainBody from "./MainBody";
import DividerText from "../Component/DividerText";
import LargeWithNewsletter from "../Component/Footer";
import {ClerksCarousel, GovernoratesCarousel, RealtyCarousel} from "../Component/Carousel";

// @ts-ignore
export default function Home({content}) {
    const {locale} = useRouter();
    const dir = locale === "ar" ? "rtl" : "ltr"
    return (

        <VStack dir={dir}>
          <SimpleNavBar />
           <MainBody />
            <Spacer  />
            <DividerText title={"search_by_governorates"} />
           <RealtyCarousel />
            <DividerText title={"search_by_governorates"} />
            <GovernoratesCarousel />
            <DividerText title={"our_clerks"} />
            <ClerksCarousel />




<LargeWithNewsletter />

        </VStack>
    )
}