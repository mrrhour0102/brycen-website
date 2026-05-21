import About from "../components/About";
import { Contact } from "../components/Contact";
import { Group } from "../components/Group";
import { Projects } from "../components/Project";
import { Services } from "../components/Service";
import Story from "../components/Story";
import { WhyChooseUs } from "../components/WhyChooseUs";

export default function Index() {
  return (
    <>
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Group />
      <Contact />
      <Story />
    </>
  );
}
