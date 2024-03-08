'use client'

import { NextUIProvider } from "@nextui-org/react"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import Store from "@/app/redux/store"

export default function NextUIProviderWrapper ({children}: {children: ReactNode}) {

    return (
        <NextUIProvider>
            <Provider store={Store}>
                {children}
            </Provider>
        </NextUIProvider>
    )
}