'use client';

import React, { useRef } from 'react';
import { motion, useSpring, useAnimationFrame } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const ReviewCarousel = () => {
  const reviews = [
    {
      id: 1,
      author: "Alex Smith",
      role: "Dental Practice Owner",
      rating: 5,
      image: "/images/dentist10.png",
      content: "ByteDental transformed our online presence. The AI-driven marketing has brought in a steady stream of new patients!"
    },
    {
      id: 2,
      author: "Sarah Johnson",
      role: "Orthodontist",
      rating: 5,
      image: "/images/dentist5.png",
      content: "The automated marketing tools save us hours each week. Our social media presence has never been stronger."
    },
    {
      id: 3,
      author: "Mike Brown",
      role: "Dental Surgeon",
      rating: 5,
      image: "/images/dentist3.png",
      content: "Exceptional service! The website design and marketing automation have helped us grow our practice significantly."
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews];
  
  const containerRef = useRef(null);
  const xPos = useRef(0);
  
  const springConfig = { damping: 25, stiffness: 35 };
  const x = useSpring(0, springConfig);

  useAnimationFrame(() => {
    const SCROLL_SPEED = 0.3;
    xPos.current -= SCROLL_SPEED;
    
    const containerWidth = containerRef.current?.offsetWidth || 0;
    if (-xPos.current >= containerWidth / 5) {
      xPos.current = 0;
    }
    
    x.set(xPos.current);
  });

  return (
    <div className="w-screen overflow-hidden py-16 -mx-[calc((100vw-100%)/2)]">
      <div className="relative" ref={containerRef}>
        <motion.div
          className="flex gap-10 py-8 px-10"
          style={{ x }}
        >
          {duplicatedReviews.map((review, index) => (
            <motion.div
              key={`${review.id}-${index}`}
              className="min-w-[500px] max-w-[500px] flex-shrink-0"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-[250px] flex flex-col shadow-sm hover:shadow-md transition-all border-opacity-40">
                <CardHeader className="p-6 pb-3 flex-none">
                  <div className="flex items-center gap-5">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-50 border-[3px] border-primary/10 flex items-center justify-center">
                      <Image
                        src={review.image}
                        alt={review.author}
                        width={120}
                        height={120}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg font-medium mb-1">
                            {review.author}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground/80">{review.role}</p>
                        </div>
                        <motion.div 
                          className="flex items-center gap-0.5"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-base">★</span>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-2 flex-1">
                  <p className="text-muted-foreground/90 text-base leading-relaxed line-clamp-5 max-h-[144px]">
                    "{review.content}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewCarousel;