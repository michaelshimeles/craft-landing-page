import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { Star, TrendingUp, Coins } from "lucide-react"; // Using your current icon set

const plans = [
  {
    icon: <Star className="h-6 w-6 text-primary" />,
    title: "Custom Website Package",
    price: "$2000",
    duration: "One-Time Payment",
    features: [
      "Custom Website Design",
      "Basic SEO Setup",
      "1-Year Hosting",
      "Full Website Ownership"
    ],
    href: "/custom-website",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "Growth Marketing Plan",
    price: "$1000",
    duration: "per month",
    features: [
      "Advanced SEO",
      "Google Ads Setup",
      "Social Media Strategy",
      "Ongoing Local Targeting"
    ],
    href: "/growth-marketing",
  },
  {
    icon: <Coins className="h-6 w-6 text-primary" />,
    title: "Elite Automation Plan",
    price: "$1500",
    duration: "per month",
    features: [
      "Full AI-Driven Automation",
      "Dynamic Google Ads",
      "24/7 Marketing Automation",
      "Social Media & Content Creation"
    ],
    href: "/elite-automation",
  },
];

const PricingPlans = () => {
  return (
    <Section>
      <Container className="text-center">
        <h2 className="text-4xl font-bold mb-6">Choose the Right Plan for Your Practice</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold">
                {plan.price} <span className="text-lg font-medium">{plan.duration}</span>
              </p>
              <ul className="my-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} className="block mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Select Plan
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PricingPlans;
