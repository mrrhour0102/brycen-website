import { Newspaper, CalendarDays } from "lucide-react";
import { newsList } from "../assets/data/data";

/* Reusable Components */
import Container from "../components/ui/Container";
import AnimatedSection from "../components/ui/Animated";
import SectionBadge from "../components/sections/SectionBadge";
import SectionTitle from "../components/sections/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import CTASection from "../components/sections/CTASection";
import ImageCard from "../components/sections/ImageCard";
import Section from "../components/sections/Section";

export default function NewsTopicsPage() {
  return (
    <Section>
      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop"
            alt="City"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        {/* Blur Effects */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <Container className="relative text-center">
          <AnimatedSection>
            <SectionBadge icon={Newspaper} title="NEWS & TOPICS" center dark />

            <SectionTitle
              center
              dark
              maxWidth="max-w-3xl"
              title={
                <>
                  Latest News
                  <br />
                  <span className="text-primary">& Updates</span>
                </>
              }
              description="Stay updated with the latest company announcements, office expansion, team growth, and company milestones from BRYCEN CAMBODIA."
            />
          </AnimatedSection>
        </Container>
      </section>

      {/* INTRO */}
      <section className="py-28">
        <Container className="max-w-5xl">
          <AnimatedSection className="mb-20">
            <GlassCard className="p-10">
              <SectionBadge icon={CalendarDays} title="COMPANY NEWS" />

              <SectionTitle
                title={
                  <>
                    Stay Connected With
                    <span className="text-primary"> BRYCEN CAMBODIA</span>
                  </>
                }
                description="We continuously grow through innovation, teamwork, and regional collaboration. Here are some important updates and milestones from our company journey."
              />
            </GlassCard>
          </AnimatedSection>

          {/* NEWS LIST */}
          <div className="space-y-8">
            {newsList.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <GlassCard className="group p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    {/* LEFT */}
                    <div className="flex gap-5">
                      {/* Icon */}
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>

                      {/* Content */}
                      <div>
                        <p className="mb-2 text-sm font-medium text-primary">
                          {item.date}
                        </p>

                        <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                          {item.title}
                        </h3>

                        <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          {/* FEATURE IMAGE */}
          <AnimatedSection className="mt-24">
            <ImageCard
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
              alt="Company News"
              imageClassName="h-[420px] w-full object-cover"
            />
          </AnimatedSection>

          {/* CTA */}
          <div className="mt-24">
            <CTASection
              title="Follow Our Journey"
              description="Stay connected with BRYCEN CAMBODIA for future updates, technology news, company activities, and business growth stories."
              buttonText="Contact Us"
            />
          </div>
        </Container>
      </section>
    </Section>
  );
}
