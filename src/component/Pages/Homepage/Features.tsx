// src/components/home/Features.tsx
import Section from "../Layout/Section";
import Container from "../Layout/Container";


export default function Features() {
  return (
    <Section>
      <Container>


 
        <div id = "services" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border p-6"
            >
              <h3 className="text-lg font-semibold">Feature {i + 1}</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Clear benefit-driven explanation of the feature.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
