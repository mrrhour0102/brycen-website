import { CheckCircle } from "lucide-react";

export default function FeatureList({ items = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
        >
          <CheckCircle className="h-5 w-5 text-primary" />

          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
