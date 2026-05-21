import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "./ui/Container";
import Animated from "./ui/Animated";
import SplitSection from "./sections/SpliteSection";
import SectionBadge from "./sections/SectionBadge";

export default function Service() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  return (
    <section className="bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <Container>
        <div ref={ref}>
          <SplitSection
            left={
              <Animated>
                <SectionBadge title="Our Expertise" />
              </Animated>
            }
          />
        </div>
      </Container>
    </section>
  );
}
