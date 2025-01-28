// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Section, Container } from "@/components/craft";
import { Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <Section className="px-4">
      <Container className="flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0">Ready to Transform Your Dental Practice?</h2>
        <h3 className="!mb-0 text-muted-foreground">
          <Balancer>
            Book a free discovery call to learn how our AI-powered marketing can help grow your practice. 
            No commitments, just a conversation about your goals.
          </Balancer>
        </h3>
        <div className="not-prose mx-auto flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="https://cal.com/kabir-khan/30min" className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Book Your Free Discovery Call
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;

