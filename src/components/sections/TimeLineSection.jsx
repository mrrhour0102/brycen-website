import Container from "../ui/Container";
import AnimatedSection from "../ui/Animated";

export default function TimelineSection({ items = [] }) {
  return (
    <section className="py-24">
      <Container>
        <div className="relative border-l border-primary/20 pl-8">
          {items.map((item, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="relative mb-16"
            >
              {/* Dot */}
              <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary dark:border-neutral-950" />

              <span className="mb-3 inline-block text-sm font-semibold text-primary">
                {item.year}
              </span>

              <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>

              <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                {item.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
