import { CacheProvider } from "@emotion/react";
import createCache, { Options } from "@emotion/cache";
import React from "react";
import { useRouter } from "next/router";
import stylisPluginRtl from "stylis-plugin-rtl";

export type LangDirection = "rtl" | "ltr";

type CreateCacheOptions = {
    [K in LangDirection]: Options;
}

const options: CreateCacheOptions = {
    rtl: { key: "ar", stylisPlugins: [stylisPluginRtl as any] },
    ltr: { key: "en" },
};


type RtlProviderProps = {
    children: React.ReactNode;
};

export function RtlProvider(props: RtlProviderProps) {
    const { locale } = useRouter();

    const { children } = props;
    const direction = locale == "ar" ? "rtl" : "ltr";

    return (
        <CacheProvider value={createCache(options[direction])}>
            {children}
        </CacheProvider>
    );
}