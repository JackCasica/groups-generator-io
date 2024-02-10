import { Button } from "@shadcn/button";
import React from "react";
import { SignInAndSignUpButtons } from "@components/SignInAndSignUpButtons";
import Link from "next/link";
type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <header className="flex justify-between p-2 items-center">
            <Link href="/">
                <h1 className="font-black">GroupsGenerator.io</h1>
            </Link>
            <div className="flex items-center gap-4">
                <ul className="flex items-center gap-4 font-semibold">
                    <li>
                        <Link href="/classes">Classes</Link>
                    </li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <Button
                    variant="default"
                    className=" text-white bg-background-secondary p-2 h-fit flex gap-2"
                >
                    My Classes
                    <SignInAndSignUpButtons />
                </Button>
            </div>
        </header>
    );
};
