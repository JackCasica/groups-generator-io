import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConvexClientProvider from "./ConvexClientProvider";
import { DndContextProvider } from "@components/DndContextProvider";
import Fontname from "next/font/local";
import { Header } from "@/components/Header";
import { DevToggle } from "@/components/DevToggle";

const gilroy = Fontname({
    src: [
        {
            path: "../assets/fonts/Gilroy-UltraLight.ttf",
            weight: "100",
            style: "ultralight",
        },
        {
            path: "../assets/fonts/Gilroy-Light.ttf",
            weight: "200",
            style: "light",
        },
        {
            path: "../assets/fonts/Gilroy-Thin.ttf",
            weight: "300",
            style: "thin",
        },

        {
            path: "../assets/fonts/Gilroy-Regular.ttf",
            weight: "400",
            style: "regular",
        },
        {
            path: "../assets/fonts/Gilroy-Medium.ttf",
            weight: "500",
            style: "medium",
        },
        {
            path: "../assets/fonts/Gilroy-SemiBold.ttf",
            weight: "600",
            style: "semibold",
        },
        {
            path: "../assets/fonts/Gilroy-Bold.ttf",
            weight: "700",
            style: "bold",
        },
        {
            path: "../assets/fonts/Gilroy-ExtraBold.ttf",
            weight: "800",
            style: "extrabold",
        },

        {
            path: "../assets/fonts/Gilroy-Heavy.ttf",
            weight: "900",
            style: "heavy",
        },
        {
            path: "../assets/fonts/Gilroy-Black.ttf",
            weight: "950",
            style: "black",
        },
    ],
    variable: "--font-gilroy",
});

export const metadata: Metadata = {
    title: "My App Title",
    description: "My app description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${gilroy.variable} h-screen flex flex-col`}>
                <DndContextProvider>
                    <ConvexClientProvider>
                        <Header />
                        {children}
                        <DevToggle />
                    </ConvexClientProvider>
                </DndContextProvider>
            </body>
        </html>
    );
}
