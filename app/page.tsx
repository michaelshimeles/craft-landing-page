import { Container, Main, Section } from "@/components/craft";
import CTA from "@/components/home-page/cta";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";
import FeatureSet from "@/components/home-page/feature-set";
import Footer from "@/components/home-page/footer";
import Hero from "@/components/home-page/hero";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
         <Hero />
         <FeatureLeft />
         <FeatureRight />
         <FeatureSet />
         <CTA />
         <Footer />
        </Container>
      </Section>
    </Main>
  );
}
