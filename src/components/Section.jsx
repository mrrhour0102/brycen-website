export default function Section({
  children,
  className = "",
  variant = "default",
}) {
  // 1. Core styles that EVERY section must share
  const baseStyles = "py-24 transition-colors duration-300";

  // 2. Color variations (Themes)
  const variants = {
    default: "bg-slate-50 text-slate-900 dark:bg-neutral-950 dark:text-white",
    muted: "bg-white text-slate-900 dark:bg-neutral-900 dark:text-neutral-100",
    dark: "bg-slate-900 text-slate-50 dark:bg-black dark:text-white",
  };

  return (
    <section className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </section>
  );
}
