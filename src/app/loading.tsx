export default function Loading() {
    return (
        <div className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-white/10 border-t-primary rounded-full animate-spin mb-4" />
            <div className="text-primary font-bold animate-pulse uppercase tracking-widest text-sm">Loading TitanX...</div>
        </div>
    );
}
