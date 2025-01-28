"use client";

import { Container, Main, Section } from "@/components/craft";
import FeatureServices from "@/components/services-page/feature-set";
import PricingPlans from "@/components/services-page/pricing-plans";
import PricingComparsion from "@/components/services-page/comparsion-table";
// import { VideoGrid } from "@/components/video/VideoGrid";
// import SocialMediaFeed from "@/components/video/SocialMediaFeed";
import { useState, useEffect } from "react";

const videos = [
  ,
  {
    type: 'instagram' as const,
    url: "https://www.instagram.com/reel/C4hvHoBuIT_/",
    title: "Featured Service Demo 1"
  },
  {
    type: 'instagram' as const,
    url: "https://www.instagram.com/reel/C4hvHoBuIT_/",
    title: "Featured Service Demo 2"
  },
  {
    type: 'instagram' as const,
    url: "https://www.instagram.com/reel/C4hvHoBuIT_/",
    title: "Featured Service Demo 3"
  }
];

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Main>
      <Section>
        <Container>
          <FeatureServices />
          
          {/* <div className="py-16">
            <h2 className="text-4xl font-bold text-center mb-8">
              See Our Services in Action
            </h2>
            <div className="relative">
              {isLoading ? (
                <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                  {[1, 2, 3].map((_, index) => (
                    <div 
                      key={index}
                      className={`
                        h-[600px] bg-gray-200 rounded-lg animate-pulse
                        ${index % 2 === 1 ? 'mt-16' : ''}
                      `}
                    />
                  ))}
                </div>
              ) : (
                <VideoGrid videos={videos} />
              )}
            </div>
          </div> */}

          {/* <PricingPlans /> */}
          {/* <PricingComparsion /> */}
        </Container>
      </Section>
    </Main>
  );
}


// "use client";

// import { Container, Main, Section } from "@/components/craft";
// import SocialMediaFeed from "@/components/video/SocialMediaFeed";


// export default function ServicesPage() {
//   return (
//     <Main>
//       <Section>
//         <Container>
//           <SocialMediaFeed />
//         </Container>
//       </Section>
//     </Main>
//   );
// }