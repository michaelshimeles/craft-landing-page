"use client"; // Ensure this is a client-side component

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";
import Placeholder from "@/public/placeholder.webp";

const Hero = () => {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move it 50px down
          animate={{ opacity: 1, y: 0 }} // Fade to opacity 1 and move to original position
          transition={{ duration: 0.3, ease: "easeOut" }} // Customize the duration and easing
          className="flex flex-col items-center justify-center text-center min-h-screen"
        >
            <h1 className="text-4xl font-bold">
            <Balancer>
            ByteDental
            </Balancer>
          </h1>
          <h2 className="text-4xl  text-muted-foreground">
            <Balancer>
            Optimized, automated marketing solutions for dental practices.
            </Balancer>
          </h2>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://9d8.dev">
              Discover Our Services <ArrowRight className="w-4" />
            </Link>
          </Button>
          {/* <h3 className="text-muted-foreground text-lg max-w-lg mt-4">
            <Balancer>
              Helping dentists grow with modern, results-driven marketing. From web design to patient engagement, we build strategies that work.
            </Balancer>
          </h3> */}
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src="/images/teethxray.jpg"
              width={1920}
              height={1080}
              alt="hero image"
              // placeholder="blur"
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
