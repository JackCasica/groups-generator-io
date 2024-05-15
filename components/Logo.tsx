"use client";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { tw } from "@/lib/extendTailwindMerge";
import { motion } from "framer-motion";
import Link from "next/link";

export const logoVariants = cva("", {
	variants: {
		variant: {
			desktop: "",
			tablet: "",
			phone: "",
		},
	},
});
interface LogoProps extends VariantProps<typeof logoVariants> {}

export const Logo: React.FC<LogoProps> = ({ variant }) => {
	return (
		<Link className={tw(logoVariants({ variant }))}>
			<motion.h1 className="text-white text-2xl font-bold">
				GroupsGenerator.io
			</motion.h1>
		</Link>
	);
};

/* <Link href="/">
	<h1 className="text-white text-2xl font-bold">GroupsGenerator.io</h1>
</Link>; */
