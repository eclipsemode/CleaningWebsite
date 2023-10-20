import './globals.css'
import Header from "@app/common/Header";
import Providers from "@root/providers";
import Footer from "@app/common/Footer";
import ToTopArrow from "@components/ToTopArrow";
import TopInfo from "@components/TopInfo";
import React from "react";
import BottomButton from "@components/BottomButton";

export const metadata = {
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
    title: 'Химчистка мебели в Армавире',
    description: 'Химчистка мебели в Армавире, аренда оборудования для уборки, химчистка салона авто',
    openGraph: {
        type: 'website',
        siteName: 'Crystal',
        title: 'Химчистка мебели в Армавире',
        description: 'Химчистка мебели в Армавире, аренда оборудования для уборки, химчистка салона авто',
        locale: 'ru_RU',
        url: 'https://crystal-divan.ru/',
        images: [
            {
                url: 'https://crystal-divan.ru/images/logo.png',
                width: '600',
                height: '600'
            }
        ]
    },
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
        yandex: 'yandex',
        yahoo: 'yahoo',
        other: {
            me: ['my-email', 'my-link'],
        },
    },
    robots: 'index, follow',
}

function RootLayout({
                        children,
                    }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body>
        <Providers>
            <TopInfo/>
            <Header/>
            {children}
            <Footer/>
            <BottomButton />
            <ToTopArrow/>
        </Providers>
        </body>
        </html>
    )
}

export default RootLayout;
