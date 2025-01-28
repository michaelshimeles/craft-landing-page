import * as React from "react";
import Image from "next/image";

import { Section, Container } from "@/components/craft";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const photos = [
  {
    src: "/images/dentistoperating.jpg",
  },
  {
    src:  "/images/Dentures.jpg",
  },
  // {
  //   src:  "/images/teethxray.jpg",
  // },
  {
    src: "/images/doctorputtingupxrays.jpg",
  },
  {
    src: "/images/denistoperating2.jpg",
  },
  {
    src: "/images/blackwhiteteethmold.jpg",
  },

  {
    src: "/images/dentalutensils.jpg",
  },

];

const FeatureNine = () => {
  return (
    <Section>
      <Container>
        <Carousel className="mt-6 w-full">
          <CarouselContent className="-ml-1">
            {photos.map((photo, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <CardContent className="not-prose flex aspect-square items-center justify-center">
                      <Image
                        src={photo.src}
                        alt="Presets.com Example Image"
                        width={720}
                        height={480}
                        className="absolute inset-0 h-full w-full object-cover"
                      ></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  );
};

export default FeatureNine;
