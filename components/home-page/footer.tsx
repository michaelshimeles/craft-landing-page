// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "../craft";

// Asset imports
import Logo from "@/public/next.svg"; // Replace with ByteDental logo when available
import { Calendar } from 'lucide-react'; // Add calendar icon

export default function Footer() {
  return (
    <footer className="bg-gray-50/50">
      <Section>
        <Container className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="grid gap-6">
            <Link href="/" className="font-bold text-2xl">ByteDental</Link>
            <p className="text-base text-gray-600">
              <Balancer>
                Transform your dental practice with AI-powered marketing. 
                Own your website, control your growth.
              </Balancer>
            </p>
            <Link 
              href="https://cal.com/kabir-khan/30min" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Discovery Call →
            </Link>
          </div>

          {/* Main Links */}
          <div className="flex flex-col gap-4">
            <h5 className="font-semibold text-lg">Solutions</h5>
            <Link href="/services" className="text-gray-600 hover:text-primary">Custom Websites</Link>
            <Link href="/services#marketing" className="text-gray-600 hover:text-primary">AI Marketing</Link>
            <Link href="/services#automation" className="text-gray-600 hover:text-primary">Practice Growth</Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-primary">Success Stories</Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h5 className="font-semibold text-lg">Company</h5>
            <Link href="/about" className="text-gray-600 hover:text-primary">About Us</Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link>
            <div className="mt-auto pt-6">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} ByteDental
              </p>
              <div className="flex gap-4 mt-2 text-sm text-gray-500">
                <Link href="/privacy" className="hover:text-primary">Privacy</Link>
                <Link href="/terms" className="hover:text-primary">Terms</Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
