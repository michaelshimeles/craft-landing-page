/* eslint-disable react/no-unescaped-entities */
// Layout
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Coins, ArrowRight, Star, TrendingUp } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  price: string; // Pricing
  description: string;
  href?: string;
  cta?: string;
};

// Base Website Package (One-Time Payment)
const baseWebsite: FeatureText[] = [
  {
    icon: <Star className="h-6 w-6" />,
    title: "Custom Website Package",
    price: "$2000 (One-Time Payment)", // One-time payment for website build
    href: "/custom-website",
    description:
      "A clean, custom-designed website that you fully own. Includes basic SEO, 1-year hosting, and full control over your domain.",
    cta: "Get Started",
  },
];

// Add-On Marketing Plans (Monthly)
const featureText: FeatureText[] = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Basic Marketing Plan",
    price: "$500/month", // Monthly for marketing add-on
    href: "/basic-marketing",
    description:
      "SEO optimization, Google Ads setup, and social media scheduling. Perfect for building visibility with low effort.",
    cta: "Learn More",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Growth Marketing Plan",
    price: "$1000/month", // Monthly pricing
    href: "/growth-marketing",
    description:
      "Advanced SEO, dynamic Google Ads management, and full social media strategy to grow your patient base.",
    cta: "Learn More",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Elite Automation Plan",
    price: "$1500/month", // Monthly pricing
    href: "/elite-automation",
    description:
      "All-inclusive AI-driven marketing automation and content creation. Run ads, emails, and social media automatically—24/7.",
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
              Start with a Custom Website, Scale with Marketing Add-Ons
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
            All-inclusive AI-driven marketing automation and content creation. Run ads, emails, and social media automatically&mdash;24/7.
            </Balancer>
          </h4>

          {/* Base Website Package */}
          <div className="mt-6 grid gap-6">
            {baseWebsite.map(
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
              )
            )}
          </div>

          {/* Add-On Marketing Plans */}
          <h3 className="text-3xl mt-12">Add-On Marketing Plans</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
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
              )
            )}
          </div>

          {/* Elite Automation Plan */}
          <div className="mt-6">
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
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureSet;
