import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import AnimatedSection from "../ui/Animated";

export default function CTASection({
  title,
  description,
  buttonText = "Contact Us",
}) {
  return (
    <section className="pb-28">
      <Container>
        <AnimatedSection>
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
              {description}
            </p>

            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90">
              {buttonText}

              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
