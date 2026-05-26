export default function SectionTitle({ title, description, center = false }) {
  return (
    <div className={`mb-6 ${center ? "text-center" : ""}`}>
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
          {description}
        </p>
      )}
    </div>
  );
}
