export default function SectionBadge({ title, center = false }) {
  return (
    <div
      className={`mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 ${center ? "justify-center" : ""}`}
    >
      <div className="h-2 w-2 rounded-full bg-primary" />

      <span className="text-sm font-medium text-primary">{title}</span>
    </div>
  );
}
