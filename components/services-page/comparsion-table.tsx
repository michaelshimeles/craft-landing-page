import { Section, Container } from "@/components/craft";
import Link from "next/link";

const PricingComparison = () => {
  return (
    <Section>
      <Container>
        <h2 className="text-center text-4xl font-bold mb-6">Compare Our Plans</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4"></th> {/* Empty cell for features */}
                <th className="p-4 text-center">Custom Website Package</th>
                <th className="p-4 text-center">Growth Marketing Plan</th>
                <th className="p-4 text-center">Elite Automation Plan</th>
              </tr>
            </thead>
            <tbody>
              {/* Plan Prices */}
              <tr>
                <td className="p-4"></td>
                <td className="p-4 text-center">$2000 (One-Time Payment)</td>
                <td className="p-4 text-center">$1000/month</td>
                <td className="p-4 text-center">$1500/month</td>
              </tr>
              
              {/* Features */}
              <tr className="border-t">
                <td className="p-4 font-semibold">Storage & Hosting</td>
                <td className="p-4 text-center">1 Year Hosting</td>
                <td className="p-4 text-center">1 Year Hosting</td>
                <td className="p-4 text-center">1 Year Hosting</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Custom Domain & Ownership</td>
                <td className="p-4 text-center">✔️</td>
                <td className="p-4 text-center">✔️</td>
                <td className="p-4 text-center">✔️</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Basic SEO</td>
                <td className="p-4 text-center">✔️</td>
                <td className="p-4 text-center">✔️</td>
                <td className="p-4 text-center">✔️</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Advanced SEO</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">✔️</td>
                <td className="p-4 text-center">✔️</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Google Ads Setup</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">✔️</td>
                <td className="p-4 text-center">✔️</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">AI Marketing Automation</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">✔️</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Content Creation</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">✔️</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">24/7 Marketing Automation</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">❌</td>
                <td className="p-4 text-center">✔️</td>
              </tr>

              {/* CTA for each plan */}
              <tr className="border-t">
                <td className="p-4"></td>
                <td className="p-4 text-center">
                  <Link href="/custom-website" className="bg-blue-600 text-white py-2 px-4 rounded-lg">Get Started</Link>
                </td>
                <td className="p-4 text-center">
                  <Link href="/growth-marketing" className="bg-blue-600 text-white py-2 px-4 rounded-lg">Select Plan</Link>
                </td>
                <td className="p-4 text-center">
                  <Link href="/elite-automation" className="bg-blue-600 text-white py-2 px-4 rounded-lg">Select Plan</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
};

export default PricingComparison;
