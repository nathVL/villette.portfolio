export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:bg-card-hover ${className}`}>
            {children}
        </div>
    );
}
