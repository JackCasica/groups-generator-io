import { DevToggle } from "@/components/DevToggle";
import { Header } from "@/components/Header";
import { DndContextProvider } from "@components/DndContextProvider";

import "../globals.css";

import type { Metadata } from "next";
import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Fontname from "next/font/local";
import type { ReactNode } from "react";
import ConvexClientProvider from "../ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import Topbar from "@/components/Topbar";
import { SideNav } from "@/components/SideNav";
import { ClassDropdown } from "@/components/ClassDropdown";
import { StudentBadges } from "@/components/StudentBadges";
import { TooltipProvider } from "@/components/ui/tooltip";

const gilroy = Fontname({
	src: [
		{
			path: "../../assets/fonts/Gilroy-UltraLight.ttf",
			weight: "100",
			style: "ultralight",
		},
		{
			path: "../../assets/fonts/Gilroy-Light.ttf",
			weight: "200",
			style: "light",
		},
		{
			path: "../../assets/fonts/Gilroy-Thin.ttf",
			weight: "300",
			style: "thin",
		},

		{
			path: "../../assets/fonts/Gilroy-Regular.ttf",
			weight: "400",
			style: "regular",
		},
		{
			path: "../../assets/fonts/Gilroy-Medium.ttf",
			weight: "500",
			style: "medium",
		},
		{
			path: "../../assets/fonts/Gilroy-SemiBold.ttf",
			weight: "600",
			style: "semibold",
		},
		{
			path: "../../assets/fonts/Gilroy-Bold.ttf",
			weight: "700",
			style: "bold",
		},
		{
			path: "../../assets/fonts/Gilroy-ExtraBold.ttf",
			weight: "800",
			style: "extrabold",
		},

		{
			path: "../../assets/fonts/Gilroy-Heavy.ttf",
			weight: "900",
			style: "heavy",
		},
		{
			path: "../../assets/fonts/Gilroy-Black.ttf",
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

export type LayoutProps = { children: ReactNode; params?: Params };

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang='en'>
			<body className={`${gilroy.variable} h-screen flex  font-gilroy bg-gray-800 relative`}>
				<DndContextProvider>
					<ConvexClientProvider>
						<TooltipProvider>
							{/* <div className="w-1/4 h-32 bg-pink-500 absolute -left-10 -top-20 -rotate-12 -z-10" /> */}
							{/* <Header /> */}
							{/* <Topbar /> */}

							{/* {Object.keys(params).length === 0 && (
                            <div className="bg-background-secondary w-[130%] rounded-full h-full absolute -bottom-1/2 -rotate-12 -left-1/4"></div>
                        )} */}
							<div className='w-64 p-4 bg-gray-800'>
								<h1 className='text-white text-2xl font-bold'>GroupsGenerator.io</h1>
								<ClassDropdown />
								<StudentBadges classId='jh746bceesxrt1gp5v4mjtxh856k75rg' />
							</div>
							{children}
							{/* <DevToggle /> */}
							<Toaster />
						</TooltipProvider>
					</ConvexClientProvider>
				</DndContextProvider>
			</body>
		</html>
	);
}
