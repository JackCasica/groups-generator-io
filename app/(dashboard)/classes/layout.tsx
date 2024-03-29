export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="classes-layout h-full flex-1 overflow-hidden">
			{children}
		</div>
	);
}
