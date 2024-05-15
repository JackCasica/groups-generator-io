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
import {
	Bird,
	Book,
	Bot,
	Code2,
	CornerDownLeft,
	LifeBuoy,
	Mic,
	Paperclip,
	Rabbit,
	Settings,
	Settings2,
	Share,
	SquareTerminal,
	SquareUser,
	Triangle,
	Turtle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

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
		<html lang="en">
			<body
				className={`${gilroy.variable} h-screen flex  font-gilroy relative`}
			>
				<DndContextProvider>
					<ConvexClientProvider>
						<TooltipProvider>
							<div className="grid h-screen w-full pl-[56px]">
								<aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
									<div className="border-b p-2">
										<Button variant="outline" size="icon" aria-label="Home">
											<Triangle className="size-5 fill-foreground" />
										</Button>
									</div>
									<nav className="grid gap-1 p-2">
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													className="rounded-lg bg-muted"
													aria-label="Playground"
												>
													<SquareTerminal className="size-5" />
												</Button>
											</TooltipTrigger>
											<TooltipContent side="right" sideOffset={5}>
												Playground
											</TooltipContent>
										</Tooltip>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													className="rounded-lg"
													aria-label="Models"
												>
													<Bot className="size-5" />
												</Button>
											</TooltipTrigger>
											<TooltipContent side="right" sideOffset={5}>
												Models
											</TooltipContent>
										</Tooltip>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													className="rounded-lg"
													aria-label="API"
												>
													<Code2 className="size-5" />
												</Button>
											</TooltipTrigger>
											<TooltipContent side="right" sideOffset={5}>
												API
											</TooltipContent>
										</Tooltip>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													className="rounded-lg"
													aria-label="Documentation"
												>
													<Book className="size-5" />
												</Button>
											</TooltipTrigger>
											<TooltipContent side="right" sideOffset={5}>
												Documentation
											</TooltipContent>
										</Tooltip>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													className="rounded-lg"
													aria-label="Settings"
												>
													<Settings2 className="size-5" />
												</Button>
											</TooltipTrigger>
											<TooltipContent side="right" sideOffset={5}>
												Settings
											</TooltipContent>
										</Tooltip>
									</nav>
									<nav className="mt-auto grid gap-1 p-2">
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													className="mt-auto rounded-lg"
													aria-label="Help"
												>
													<LifeBuoy className="size-5" />
												</Button>
											</TooltipTrigger>
											<TooltipContent side="right" sideOffset={5}>
												Help
											</TooltipContent>
										</Tooltip>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													className="mt-auto rounded-lg"
													aria-label="Account"
												>
													<SquareUser className="size-5" />
												</Button>
											</TooltipTrigger>
											<TooltipContent side="right" sideOffset={5}>
												Account
											</TooltipContent>
										</Tooltip>
									</nav>
								</aside>
								<div className="flex flex-col">
									<header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
										<h1 className="text-xl font-semibold">Playground</h1>
										<Drawer>
											<DrawerTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													className="md:hidden"
												>
													<Settings className="size-4" />
													<span className="sr-only">Settings</span>
												</Button>
											</DrawerTrigger>
											<DrawerContent className="max-h-[80vh]">
												<DrawerHeader>
													<DrawerTitle>Configuration</DrawerTitle>
													<DrawerDescription>
														Configure the settings for the model and messages.
													</DrawerDescription>
												</DrawerHeader>
												<form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
													<fieldset className="grid gap-6 rounded-lg border p-4">
														<legend className="-ml-1 px-1 text-sm font-medium">
															Settings
														</legend>
														<div className="grid gap-3">
															<Label htmlFor="model">Model</Label>
															<Select>
																<SelectTrigger
																	id="model"
																	className="items-start [&_[data-description]]:hidden"
																>
																	<SelectValue placeholder="Select a model" />
																</SelectTrigger>
																<SelectContent>
																	<SelectItem value="genesis">
																		<div className="flex items-start gap-3 text-muted-foreground">
																			<Rabbit className="size-5" />
																			<div className="grid gap-0.5">
																				<p>
																					Neural{" "}
																					<span className="font-medium text-foreground">
																						Genesis
																					</span>
																				</p>
																				<p className="text-xs" data-description>
																					Our fastest model for general use
																					cases.
																				</p>
																			</div>
																		</div>
																	</SelectItem>
																	<SelectItem value="explorer">
																		<div className="flex items-start gap-3 text-muted-foreground">
																			<Bird className="size-5" />
																			<div className="grid gap-0.5">
																				<p>
																					Neural{" "}
																					<span className="font-medium text-foreground">
																						Explorer
																					</span>
																				</p>
																				<p className="text-xs" data-description>
																					Performance and speed for efficiency.
																				</p>
																			</div>
																		</div>
																	</SelectItem>
																	<SelectItem value="quantum">
																		<div className="flex items-start gap-3 text-muted-foreground">
																			<Turtle className="size-5" />
																			<div className="grid gap-0.5">
																				<p>
																					Neural{" "}
																					<span className="font-medium text-foreground">
																						Quantum
																					</span>
																				</p>
																				<p className="text-xs" data-description>
																					The most powerful model for complex
																					computations.
																				</p>
																			</div>
																		</div>
																	</SelectItem>
																</SelectContent>
															</Select>
														</div>
														<div className="grid gap-3">
															<Label htmlFor="temperature">Temperature</Label>
															<Input
																id="temperature"
																type="number"
																placeholder="0.4"
															/>
														</div>
														<div className="grid gap-3">
															<Label htmlFor="top-p">Top P</Label>
															<Input
																id="top-p"
																type="number"
																placeholder="0.7"
															/>
														</div>
														<div className="grid gap-3">
															<Label htmlFor="top-k">Top K</Label>
															<Input
																id="top-k"
																type="number"
																placeholder="0.0"
															/>
														</div>
													</fieldset>
													<fieldset className="grid gap-6 rounded-lg border p-4">
														<legend className="-ml-1 px-1 text-sm font-medium">
															Messages
														</legend>
														<div className="grid gap-3">
															<Label htmlFor="role">Role</Label>
															<Select defaultValue="system">
																<SelectTrigger>
																	<SelectValue placeholder="Select a role" />
																</SelectTrigger>
																<SelectContent>
																	<SelectItem value="system">System</SelectItem>
																	<SelectItem value="user">User</SelectItem>
																	<SelectItem value="assistant">
																		Assistant
																	</SelectItem>
																</SelectContent>
															</Select>
														</div>
														<div className="grid gap-3">
															<Label htmlFor="content">Content</Label>
															<Textarea
																id="content"
																placeholder="You are a..."
															/>
														</div>
													</fieldset>
												</form>
											</DrawerContent>
										</Drawer>
										<Button
											variant="outline"
											size="sm"
											className="ml-auto gap-1.5 text-sm"
										>
											<Share className="size-3.5" />
											Share
										</Button>
									</header>
									<main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
										<div className="relative hidden flex-col items-start gap-8 md:flex">
											<form className="grid w-full items-start gap-6">
												<fieldset className="grid gap-6 rounded-lg border p-4">
													<legend className="-ml-1 px-1 text-sm font-medium">
														Settings
													</legend>
													<div className="grid gap-3">
														<Label htmlFor="model">Model</Label>
														<Select>
															<SelectTrigger
																id="model"
																className="items-start [&_[data-description]]:hidden"
															>
																<SelectValue placeholder="Select a model" />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value="genesis">
																	<div className="flex items-start gap-3 text-muted-foreground">
																		<Rabbit className="size-5" />
																		<div className="grid gap-0.5">
																			<p>
																				Neural{" "}
																				<span className="font-medium text-foreground">
																					Genesis
																				</span>
																			</p>
																			<p className="text-xs" data-description>
																				Our fastest model for general use cases.
																			</p>
																		</div>
																	</div>
																</SelectItem>
																<SelectItem value="explorer">
																	<div className="flex items-start gap-3 text-muted-foreground">
																		<Bird className="size-5" />
																		<div className="grid gap-0.5">
																			<p>
																				Neural{" "}
																				<span className="font-medium text-foreground">
																					Explorer
																				</span>
																			</p>
																			<p className="text-xs" data-description>
																				Performance and speed for efficiency.
																			</p>
																		</div>
																	</div>
																</SelectItem>
																<SelectItem value="quantum">
																	<div className="flex items-start gap-3 text-muted-foreground">
																		<Turtle className="size-5" />
																		<div className="grid gap-0.5">
																			<p>
																				Neural{" "}
																				<span className="font-medium text-foreground">
																					Quantum
																				</span>
																			</p>
																			<p className="text-xs" data-description>
																				The most powerful model for complex
																				computations.
																			</p>
																		</div>
																	</div>
																</SelectItem>
															</SelectContent>
														</Select>
													</div>
													<div className="grid gap-3">
														<Label htmlFor="temperature">Temperature</Label>
														<Input
															id="temperature"
															type="number"
															placeholder="0.4"
														/>
													</div>
													<div className="grid grid-cols-2 gap-4">
														<div className="grid gap-3">
															<Label htmlFor="top-p">Top P</Label>
															<Input
																id="top-p"
																type="number"
																placeholder="0.7"
															/>
														</div>
														<div className="grid gap-3">
															<Label htmlFor="top-k">Top K</Label>
															<Input
																id="top-k"
																type="number"
																placeholder="0.0"
															/>
														</div>
													</div>
												</fieldset>
												<fieldset className="grid gap-6 rounded-lg border p-4">
													<legend className="-ml-1 px-1 text-sm font-medium">
														Messages
													</legend>
													<div className="grid gap-3">
														<Label htmlFor="role">Role</Label>
														<Select defaultValue="system">
															<SelectTrigger>
																<SelectValue placeholder="Select a role" />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value="system">System</SelectItem>
																<SelectItem value="user">User</SelectItem>
																<SelectItem value="assistant">
																	Assistant
																</SelectItem>
															</SelectContent>
														</Select>
													</div>
													<div className="grid gap-3">
														<Label htmlFor="content">Content</Label>
														<Textarea
															id="content"
															placeholder="You are a..."
															className="min-h-[9.5rem]"
														/>
													</div>
												</fieldset>
											</form>
										</div>
										<div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
											{children}
										</div>
									</main>
								</div>
							</div>
							<Toaster />
						</TooltipProvider>
					</ConvexClientProvider>
				</DndContextProvider>
			</body>
		</html>
	);
}
