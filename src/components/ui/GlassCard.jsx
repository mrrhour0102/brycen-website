export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
