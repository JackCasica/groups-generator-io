"use client";

// import { Authenticated, Unauthenticated } from 'convex/react';

// import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
// import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
// import { Hero } from '@/components/Hero';
import { Hero } from "@/components/DefaultHero";
import { FooterSection } from "@/components/Footer";
import { FeaturesSection } from "@/components/FeaturesSection";
import SignUpFormWithCTAHero from "@/components/sections/signup-cta";
export default function Home() {
	return (
		<main className=' w-full flex-1 '>
			{/* <SignUpFormWithCTAHero /> */}
			<Hero />
			<FeaturesSection />
			<FooterSection />
		</main>
	);
}
