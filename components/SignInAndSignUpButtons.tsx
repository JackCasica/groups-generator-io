'use client';
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { Authenticated, Unauthenticated } from 'convex/react';

export const SignInAndSignUpButtons = () => {
	return (
		<div className="flex gap-4">
			<Authenticated>
				<UserButton afterSignOutUrl="#" />
			</Authenticated>
			<Unauthenticated>
				<SignInButton mode="modal">
					<Button variant="ghost">Sign in</Button>
				</SignInButton>
				<SignUpButton mode="modal">
					<Button>Sign up</Button>
				</SignUpButton>
			</Unauthenticated>
		</div>
	);
};
