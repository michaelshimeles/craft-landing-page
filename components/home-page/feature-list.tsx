// React and Next.js
import React from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { Coins, Brain, Rocket, BarChart } from "lucide-react"; // New icons for the steps

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Personalized Consultation",
    description:
      "We start by understanding your practice’s goals to create a custom solution tailored to your needs.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "AI-Powered Strategy",
    description:
      "Our AI analyzes your data to build a marketing strategy that targets the right patients.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Automated Campaigns",
    description:
      "AI automates your ads, social media, and emails, running campaigns 24/7 with no manual effort.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Continuous Optimization",
    description:
      "We monitor and adjust campaigns in real-time to maximize your marketing results.",
  },
];

const Feature = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              How ByteDental Works
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Simple, effective marketing with AI at the core.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
