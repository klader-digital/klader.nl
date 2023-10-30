import {GeistSans} from 'geist/font'
import {Syne} from 'next/font/google'
import './globals.css'
import Header from "@/app/header";
import Footer from "@/app/footer";
import SmoothScroller from "@/app/lenis";
import { Analytics } from '@vercel/analytics/react';


const syne = Syne({
    weights: [400, 600, 700],
    styles: ['normal'],
    subsets: ['latin'],
    variable: '--font-syne',
});

export const metadata = {
    title: 'Homepage • klader.nl',
    description: 'Digital immersive experiences to inspire audience.',
}

export default function RootLayout({children}) {
    return (
        <>
            <SmoothScroller/>
            <html lang="en" className={`${syne.variable} ${GeistSans.className}`}>
                <body className={`bg-dark font-sans`}>
                    <Header/>
                    {children}
                    <Footer/>
                    <Analytics />
                </body>
            </html>
        </>
    )
}
