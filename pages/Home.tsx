import {Button, VStack} from "@chakra-ui/react";
import {trans} from "../trans";
import {router} from "next/client";
import {useRouter} from "next/router";
// @ts-ignore
export default function Home({ content}){
    const { locale } = useRouter();
    return(

        <VStack>
            <Button >
                {trans('item_title')}
            </Button>
            <Button
                bg={"tomato"}
                display={{ base: "none", md: "flex" }}
                onClick={async () => {
                    await router.push("/", "/", {
                        locale: locale === "en" ? "ar" : "en",
                    });
                    router.reload();
                }}
            >
                {trans("change_app_language")}
            </Button>
        </VStack>
    )}