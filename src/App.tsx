import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Strengths } from './components/Strengths';
import { TechStack } from './components/TechStack';
import { ValueProposition } from './components/ValueProposition';

export default function App() {
  return (
    <div className="app-shell">
      <Hero />
      <main>
        <Section id="value" eyebrow="Value proposition" title="Backend systems built for business-critical work">
          <ValueProposition />
        </Section>
        <Section id="projects" eyebrow="Featured projects" title="Public backend projects with clear technical evidence">
          <FeaturedProjects />
        </Section>
        <Section id="strengths" eyebrow="Engineering strengths" title="Practical depth across backend delivery">
          <Strengths />
        </Section>
        <Section id="experience" eyebrow="Professional experience" title="Full-stack roles with backend emphasis">
          <Experience />
        </Section>
        <Section id="stack" eyebrow="Tech stack" title="Tools used to ship reliable APIs and workflows">
          <TechStack />
        </Section>
        <Section id="certifications" eyebrow="Certifications" title="Continuous learning with backend relevance">
          <Certifications />
        </Section>
        <Section id="contact" eyebrow="Contact" title="Available for backend engineering opportunities">
          <Contact />
        </Section>
      </main>
    </div>
  );
}
