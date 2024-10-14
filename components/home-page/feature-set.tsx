// Layout
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Coins, ArrowRight, Star, TrendingUp } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  price: string; // New field for price
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Star className="h-6 w-6" />,
    title: "Starter Website Plan",
    price: "$500/month", // Pricing added
    href: "/starter",
    description:
      "A clean, custom-designed website that you fully own. Includes basic SEO and 1-year hosting.",
    cta: "Learn More",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Growth Marketing Plan",
    price: "$1000/month", // Pricing added
    href: "/growth",
    description:
      "Advanced SEO, Google Ads, and social media management to grow your practice.",
    cta: "Learn More",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Elite Automation Plan",
    price: "$1500/month", // Pricing added
    href: "/elite",
    description:
      "All-inclusive AI-driven marketing automation and content creation for maximum results.",
    cta: "Learn More",
  },
];

const FeatureSet = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Affordable, AI-Powered Marketing Plans for Every Practice
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Choose a plan that fits your practice and your goals.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(
              ({ icon, title, price, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-lg font-semibold">{price}</p> {/* Pricing */}
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
          <div>
            {singleFeatureText.map(
              ({ icon, title, price, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border bg-muted/25 p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-lg font-semibold">{price}</p> {/* Pricing */}
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureSet;
