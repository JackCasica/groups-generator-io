export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="classes-layout h-full flex-1 bg-background-secondary">{children}</div>;
}
