import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@app/common/Header";
import Providers from "@root/providers";
import Footer from "@app/common/Footer";
import ToTopArrow from "@components/ToTopArrow";
import TopInfo from "@components/TopInfo";
import React from "react";

const inter = Inter({subsets: ['cyrillic']})

export const metadata = {
    title: 'Химчистка мебели в Армавире',
    description: 'Химчистка мебели в Армавире, аренда оборудования для уборки, химчистка салона авто',
    referrer: 'origin-when-cross-origin',
    colorScheme: 'light',
    keywords: ['химчистка мебели', 'Армавир', 'уборка', 'химчистка авто', 'чистка ковров'],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
    verification: {
        google: 'google',
        yandex: 'yandex'
    },
}

function RootLayout({
                        children,
                    }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <TopInfo/>
            <Header />
            {children}
            <Footer />
            <ToTopArrow />
        </Providers>
        </body>
        </html>
    )
}

export default RootLayout;
